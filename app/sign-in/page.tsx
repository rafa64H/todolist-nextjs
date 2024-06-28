import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/header";
import ButtonYellow from "../components/smaller/buttonYellow";
import FormInputEmail from "../components/smaller/formInputEmail";
import FormInputPassword from "../components/smaller/formInputPassword";
import { auth, signIn } from "../auth";
import { redirect } from "next/navigation";
import Footer from "../components/footer";

export default async function SignInPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <>
      <Header></Header>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
        className="my-4 flex justify-center items-center"
      >
        <ButtonYellow
          buttonType="submit"
          text="Sign in with Github"
        ></ButtonYellow>
      </form>

      <Footer></Footer>
    </>
  );
}
