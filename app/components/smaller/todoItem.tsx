"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonYellow from "./buttonYellow";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import prisma from "@/app/lib/prisma";
import { useRouter } from "next/navigation";
import ButtonCheck from "./buttonCheck";

type Props = {
  todoId: String;
  todoChecked: boolean;
  todoText: String;
};

export default function TodoItem({ todoId, todoChecked, todoText }: Props) {
  const router = useRouter();

  return (
    <li className="flex items-center gap-4 px-2">
      <form
        action={async () => {
          const id = todoId;
          const checked = !todoChecked;

          await fetch("/api/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: id,
              checked: checked,
              typeRemoval: "unique",
            }),
          });

          router.refresh();
        }}
      >
        <ButtonCheck conditionChecked={todoChecked}></ButtonCheck>
      </form>

      <p className="text-white max-w-[65%] mr-auto text-xl">{todoText}</p>

      <form
        action={async () => {
          const id = todoId;

          await fetch("/api/todo", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id, typeRemoval: "unique" }),
          });

          router.refresh();
        }}
      >
        <ButtonYellow
          buttonType="submit"
          possibleIcon={<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>}
        ></ButtonYellow>
      </form>
    </li>
  );
}
