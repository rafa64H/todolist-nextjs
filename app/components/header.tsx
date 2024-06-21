import NavComponent from "./navComponent";
import Logo from "./smaller/Logo";

export default function Header() {
  return (
    <header className="bg-thirdColorGreen px-2 py-4">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <NavComponent></NavComponent>
      </div>
    </header>
  );
}
