"use client";

import React, { createContext, useState } from "react";

type FilterTodoContext = {
  filterTodo: string;
  setFilterTodo: React.Dispatch<React.SetStateAction<string>>;
};

export const FilterTodoContext = createContext<FilterTodoContext | null>(null);

type Props = {
  children: React.ReactNode;
};
export default function FilterTodoProvider({ children }: Props) {
  const [filterTodo, setFilterTodo] = useState("all");

  return (
    <FilterTodoContext.Provider value={{ filterTodo, setFilterTodo }}>
      {children}
    </FilterTodoContext.Provider>
  );
}
