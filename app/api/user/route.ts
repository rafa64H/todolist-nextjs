import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return Response.json({ message: "OK", deletedUser });
  } catch (err) {
    return NextResponse.json({
      message: "Error",
      err,
    });
  }
}
