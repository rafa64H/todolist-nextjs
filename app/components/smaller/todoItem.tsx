"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonYellow from "./buttonYellow";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import prisma from "@/app/lib/prisma";
import { useRouter } from "next/navigation";

type Props = {
  todoId: String;
  todoChecked: boolean;
  todoText: String;
};

export default function TodoItem({ todoId, todoChecked, todoText }: Props) {
  const router = useRouter();

  return (
    <li className="flex items-center gap-4 px-2">
      <button
        className={`border-gray-300 border-solid border-2 py-[0.1em] px-[0.25em] transition-all duration-100 hover:border-[#a19108] ${
          todoChecked ? "bg-blue-500" : "bg-white"
        }`}
        type="submit"
        onClick={async () => {
          const id = todoId;
          const checked = !todoChecked;

          await fetch("/api/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id, checked: checked }),
          });

          router.refresh();
        }}
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

      <p className="text-white max-w-[65%] mr-auto text-xl">{todoText}</p>

      <input type="hidden" name="delete" value={"id"} />
      <ButtonYellow
        buttonType="submit"
        possibleIcon={<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>}
        onClickFunction={async () => {
          const id = todoId;

          await fetch("/api/todo", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id }),
          });

          router.refresh();
        }}
      ></ButtonYellow>
    </li>
  );
}
