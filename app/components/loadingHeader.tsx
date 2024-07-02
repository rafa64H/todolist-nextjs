import Footer from "./footer";
import Logo from "./smaller/Logo";

export default async function LoadingHeader() {
  return (
    <header className="bg-thirdColorGreen px-2 py-4">
      <div className="flex justify-between items-center">
        <Logo></Logo>
      </div>
    </header>
  );
}
