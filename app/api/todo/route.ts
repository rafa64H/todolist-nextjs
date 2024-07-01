import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { id, checked } = await req.json();

    try {
      const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { checked },
      });

      return Response.json({ message: "OK", updatedTodo });
    } catch (err) {
      return NextResponse.json({
        message: "Error",
        err,
      });
    }
  } else {
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    const deletedTodo = await prisma.todo.delete({
      where: { id },
    });

    return Response.json({ message: "OK", deletedTodo });
  } catch (err) {
    return NextResponse.json({
      message: "Error",
      err,
    });
  }
}
