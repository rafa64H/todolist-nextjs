import { auth } from "../auth";
import NavComponent from "./navComponent";
import Logo from "./smaller/Logo";

export default async function Header() {
  const session = await auth();
  setTimeout(() => {
    console.log(session);
  }, 3000);

  return (
    <header className="bg-thirdColorGreen px-2 py-4">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <NavComponent session={session}></NavComponent>
      </div>
    </header>
  );
}
