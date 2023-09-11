import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
  const { userId, content, title } = await req.json();
  const post = await prisma.post.create({
    data: {
      userId,
      content,
      title,
    },
  });

  return new Response(JSON.stringify(post));
};
