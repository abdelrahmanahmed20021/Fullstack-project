import { NextRequest } from "next/server";

import prisma from "@/lib/prisma";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const id: string | null = url.searchParams.get("id");

  if (id) {
    const user = await prisma.user.findMany({ where: { id: { equals: id } } });
    return new Response(JSON.stringify(user));
  }
};
