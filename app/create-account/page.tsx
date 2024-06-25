import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/header";
import ButtonYellow from "../components/smaller/buttonYellow";
import FormInputEmail from "../components/smaller/formInputEmail";
import FormInputPassword from "../components/smaller/formInputPassword";
import { auth, signIn } from "../auth";
import { redirect } from "next/navigation";
import FormInputText from "../components/smaller/formInputText";

export default async function SignUpPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <>
      <Header></Header>

      <form className="my-4 text-white">
        <h1 className="text-4xl text-center font-semibold">Sign In</h1>
        <FormInputText
          idAttribute="firstName"
          labelText="First name"
          placeholderText="Enter your first name"
          name={"firstName"}
        ></FormInputText>
        <FormInputText
          idAttribute="lastName"
          labelText="Last name"
          placeholderText="Enter your last name"
          name={"lastName"}
        ></FormInputText>
        <FormInputText
          idAttribute="username"
          labelText="Username"
          placeholderText="Enter your username"
          name={"username"}
        ></FormInputText>

        <FormInputEmail
          idAttribute="email"
          labelText="Email"
          placeholderText="Enter your email"
          name={"email"}
        ></FormInputEmail>

        <FormInputPassword
          idAttribute="password"
          labelText="Password"
          placeholderText="Enter your password"
          name={"password"}
        ></FormInputPassword>

        <ButtonYellow buttonType="submit" text="Sign in"></ButtonYellow>
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
