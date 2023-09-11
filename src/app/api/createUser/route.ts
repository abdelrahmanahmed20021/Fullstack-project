import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
  const { email, password } = await req.json();

  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  return new Response(JSON.stringify(user));
};
