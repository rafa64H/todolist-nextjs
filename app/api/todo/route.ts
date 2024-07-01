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
  const { id, userId, typeRemoval } = await req.json();

  try {
    if (typeRemoval === "unique") {
      const deletedTodo = await prisma.todo.delete({
        where: { id },
      });
      return Response.json({ message: "OK", deletedTodo });
    }

    if (typeRemoval === "completedTodos") {
      const deletedTodos = await prisma.todo.deleteMany({
        where: {
          userId: userId,
          checked: true,
        },
      });

      return Response.json({ message: "OK", deletedTodos });
    }
  } catch (err) {
    return NextResponse.json({
      message: "Error",
      err,
    });
  }
}
