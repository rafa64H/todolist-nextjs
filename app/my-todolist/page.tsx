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
          className="flex flex-col items-center gap-4 items-center"
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

        <ul className="p-2 bg-slate-700 border-b-2 border-solid border-slate-500">
          {todos.length > 0 ? (
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
          ) : (
            <h2 className="text-white font-medium text-center my-8">
              There are no todos
            </h2>
          )}
        </ul>

        <section>
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-2 justify-center">
              <ButtonYellow buttonType="button" text="All todos"></ButtonYellow>
              <ButtonYellow buttonType="button" text="Completed"></ButtonYellow>
              <ButtonYellow
                buttonType="button"
                text="Uncompleted"
              ></ButtonYellow>
            </div>
            <ButtonYellow
              buttonType="button"
              text="Clear completed"
            ></ButtonYellow>
          </div>
        </section>
      </section>

      <Footer></Footer>
    </>
  );
}
