import prisma from "@/lib/prisma";

export const GET = async () => {
  const posts = await prisma.post.findMany({});

  return new Response(JSON.stringify(posts));
};
