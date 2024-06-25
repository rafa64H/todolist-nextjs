import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/header";
import ButtonYellow from "../components/smaller/buttonYellow";
import FormInputEmail from "../components/smaller/formInputEmail";
import FormInputPassword from "../components/smaller/formInputPassword";
import { auth, signIn } from "../auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <>
      <Header></Header>

      <form
        action={async (FormData) => {
          "use server";
          await signIn("resend", FormData);
        }}
        className="my-4 text-white"
      >
        <h1 className="text-4xl text-center font-semibold">Sign In</h1>
        <FormInputEmail
          idAttribute="email"
          labelText="Email"
          placeholderText="Enter your email"
          name={"email"}
        ></FormInputEmail>

        <ButtonYellow buttonType="submit" text="Send email"></ButtonYellow>
      </form>

      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
        className="my-4"
      >
        <ButtonYellow
          buttonType="submit"
          text="Sign in with Github"
        ></ButtonYellow>
      </form>
    </>
  );
}
