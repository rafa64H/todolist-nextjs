"use client";
import React, { useContext } from "react";
import { Todo } from "@prisma/client";
import ButtonYellow from "./smaller/buttonYellow";
import TodoItem from "./smaller/todoItem";
import FilterTodosButtons from "./filterTodosButtons";
import { FilterTodoContext } from "../contexts/filterTodosContext";
import { User } from "next-auth";

type Props = {
  user: User;
  todos: Todo[];
  checkedTodos: Todo[];
  unCheckedTodos: Todo[];
};
export default function TodoList({
  user,
  todos,
  checkedTodos,
  unCheckedTodos,
}: Props) {
  const { filterTodo, setFilterTodo } = useContext(FilterTodoContext)!;

  return (
    <>
      <ul className="p-2 bg-slate-700 border-b-2 border-solid border-slate-500">
        {todos.length > 0 ? (
          filterTodo === "all" ? (
            todos.map((todoItem) => {
              return (
                <TodoItem
                  key={todoItem.id}
                  todoId={todoItem.id}
                  todoChecked={todoItem.checked}
                  todoText={todoItem.text}
                ></TodoItem>
              );
            })
          ) : filterTodo === "checked" ? (
            checkedTodos.length > 0 ? (
              checkedTodos.map((todoItem) => {
                return (
                  <TodoItem
                    key={todoItem.id}
                    todoId={todoItem.id}
                    todoChecked={todoItem.checked}
                    todoText={todoItem.text}
                  ></TodoItem>
                );
              })
            ) : (
              <h2 className="text-white font-medium text-center my-8">
                There are no todos
              </h2>
            )
          ) : unCheckedTodos.length > 0 ? (
            unCheckedTodos.map((todoItem) => {
              return (
                <TodoItem
                  key={todoItem.id}
                  todoId={todoItem.id}
                  todoChecked={todoItem.checked}
                  todoText={todoItem.text}
                ></TodoItem>
              );
            })
          ) : (
            <h2 className="text-white font-medium text-center my-8">
              There are no todos
            </h2>
          )
        ) : (
          <h2 className="text-white font-medium text-center my-8">
            There are no todos
          </h2>
        )}

        <FilterTodosButtons user={user}></FilterTodosButtons>
      </ul>
    </>
  );
}
