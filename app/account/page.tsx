import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/header";
import ButtonYellow from "../components/smaller/buttonYellow";
import FormInputEmail from "../components/smaller/formInputEmail";
import FormInputPassword from "../components/smaller/formInputPassword";
import { auth, signIn, signOut } from "../auth";
import { redirect } from "next/navigation";
import Footer from "../components/footer";
import Image from "next/image";
import TitlePage from "../components/smaller/titlePage";
import prisma from "../lib/prisma";
import DeleteAccountComponent from "../components/deleteAccountComponent";

export default async function AccountPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in");
  }

  const todos = await prisma.todo.findMany({
    where: {
      userId: session.user.id as string,
    },
  });

  return (
    <>
      <Header></Header>

      <TitlePage>Account data</TitlePage>

      <section className="my-4">
        <div className="flex flex-col items-center w-[70%] max-w-[40rem] mx-auto bg-green-950 p-2">
          <Image
            className="rounded-full"
            src={`${session.user.image}`}
            alt={`${session.user.name} profile picture`}
            width={100}
            height={100}
          ></Image>

          <div className="m-4 text-xl text-white text-center font-medium">
            <p>Name: {session.user.name}</p>
            <p>Amount of todos: {todos.length}</p>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center gap-4 w-full mt-4">
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <ButtonYellow buttonType="submit" text="Sign out"></ButtonYellow>
        </form>

        <DeleteAccountComponent user={session.user}></DeleteAccountComponent>
      </section>

      <Footer></Footer>
    </>
  );
}
