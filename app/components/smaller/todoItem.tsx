import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonYellow from "./buttonYellow";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

type Props = {
  todoId: String;
  todoChecked: boolean;
  todoText: String;
};

export default async function TodoItem({
  todoId,
  todoChecked,
  todoText,
}: Props) {
  return (
    <li className="flex items-center gap-4 px-2">
      <form
        className="relative"
        action={async (FormData) => {
          "use server";

          const idTodo = todoId as string;
          const newCheckedTodoValue = !todoChecked;

          await prisma.todo.update({
            where: {
              id: idTodo,
            },
            data: {
              checked: newCheckedTodoValue,
            },
          });

          revalidatePath("/my-todolist");
        }}
      >
        <button
          className={`border-gray-300 border-solid border-2 py-[0.1em] px-[0.25em] transition-all duration-100 hover:border-[#a19108] ${
            todoChecked ? "bg-blue-500" : "bg-white"
          }`}
          type="submit"
          aria-checked={todoChecked}
        >
          {todoChecked ? (
            <FontAwesomeIcon
              className="text-white text-xl"
              icon={faCheck}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              className="text-white opacity-0 text-xl"
              icon={faCheck}
            ></FontAwesomeIcon>
          )}
        </button>
      </form>

      <p className="text-white max-w-[65%] mr-auto text-xl">{todoText}</p>

      <form
        action={async () => {
          "use server";

          const idTodo = todoId as string;

          await prisma.todo.delete({
            where: {
              id: idTodo,
            },
          });
          revalidatePath("/my-todolist");
        }}
      >
        <input type="hidden" name="delete" value={"id"} />
        <ButtonYellow
          buttonType="submit"
          possibleIcon={<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>}
        ></ButtonYellow>
      </form>
    </li>
  );
}
