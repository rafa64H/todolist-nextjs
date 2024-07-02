import Link from "next/link";
import Logo from "./smaller/Logo";

export default function Footer() {
  return (
    <>
      <footer className="flex items-center justify-between w-full bg-thirdColorGreen p-2 mt-4 text-lg text-white font-medium">
        <p>
          Todo list app made with nextjs by{" "}
          <Link className="hover:underline" href="https://github.com/rafa64H">
            Rafael Pacheco (rafa64H)
          </Link>
        </p>

        <Logo></Logo>
      </footer>
    </>
  );
}
