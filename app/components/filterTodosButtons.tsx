"use client";
import React, { useContext } from "react";
import ButtonYellow from "./smaller/buttonYellow";
import { FilterTodoContext } from "../contexts/filterTodosContext";
import { User } from "next-auth";

type Props = {
  user: User;
};
export default function FilterTodosButtons({ user }: Props) {
  const { filterTodo, setFilterTodo } = useContext(FilterTodoContext)!;

  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap gap-2 justify-center">
          <ButtonYellow
            buttonType="button"
            text="All todos"
            onClickFunction={() => {
              setFilterTodo("all");
            }}
          ></ButtonYellow>
          <ButtonYellow
            buttonType="button"
            text="Completed"
            onClickFunction={() => {
              setFilterTodo("checked");
            }}
          ></ButtonYellow>
          <ButtonYellow
            buttonType="button"
            text="Uncompleted"
            onClickFunction={() => {
              setFilterTodo("unchecked");
            }}
          ></ButtonYellow>
        </div>
        <ButtonYellow
          buttonType="button"
          text="Clear completed"
          onClickFunction={async () => {
            const userId = user.id;
            await fetch("/api/todo", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: userId,
                typeRemoval: "completedTodos",
              }),
            });
          }}
        ></ButtonYellow>
      </div>
    </section>
  );
}
