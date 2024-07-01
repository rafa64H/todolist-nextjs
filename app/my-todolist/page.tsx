import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/header";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import Footer from "../components/footer";
import ButtonYellow from "../components/smaller/buttonYellow";
import FormInputText from "../components/smaller/formInputText";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";
import TodoItem from "../components/smaller/todoItem";
import FilterTodoProvider from "../contexts/filterTodosContext";
import TodoList from "../components/todoList";

export default async function SignInPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  const todos = await prisma.todo.findMany({
    where: {
      user: {
        id: session.user.id,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const checkedTodos = await todos.filter((todo) => todo.checked === true);
  const unCheckedTodos = await todos.filter((todo) => todo.checked === false);

  return (
    <>
      <Header></Header>

      <section className="p-2">
        <form
          action={async (FormData) => {
            "use server";

            const todoText = FormData.get("todo-text") as string;

            await prisma.todo.create({
              data: {
                checked: false,
                text: todoText,
                user: {
                  connect: {
                    id: session.user.id,
                  },
                },
              },
            });
            revalidatePath("/my-todolist");
          }}
          className="flex flex-col items-center gap-4"
        >
          <input
            className="inline-block p-1 min-w-[55%] max-w-[40rem] text-2xl font-semibold"
            type="text"
            name="todo-text"
            id="todo-text"
            placeholder="Write your todo"
          />

          <ButtonYellow buttonType="submit" text="Create Todo"></ButtonYellow>
        </form>

        <FilterTodoProvider>
          <TodoList
            todos={todos}
            checkedTodos={checkedTodos}
            unCheckedTodos={unCheckedTodos}
          ></TodoList>
        </FilterTodoProvider>
      </section>

      <Footer></Footer>
    </>
  );
}
