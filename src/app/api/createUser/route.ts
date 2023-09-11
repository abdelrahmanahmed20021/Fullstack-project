import prisma from '@/lib/prisma';

export const POST = async (req: Request) => {
  const { email, password, name } = await req.json();

  const user = await prisma.user.create({
    data: {
      email,
      password,
      name,
    },
  });

  return new Response(JSON.stringify(user));
};
