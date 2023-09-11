import { NextRequest } from 'next/server';

import prisma from '@/lib/prisma';

export const GET = async (req: NextRequest) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  return new Response(JSON.stringify(users));
};
