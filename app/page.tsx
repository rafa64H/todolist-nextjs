import Image from "next/image";
import { auth, signIn, signOut } from "./auth";
import prisma from "./lib/prisma";
import Header from "./components/header";
import Footer from "./components/footer";
import TitlePage from "./components/smaller/titlePage";
import SpaceForFooter from "./components/smaller/spaceForFooter";

export default async function Home() {
  return (
    <>
      <Header></Header>

      <TitlePage>Welcome to Todo list app!</TitlePage>

      <Image
        className="mx-auto my-4"
        src="/home-gif.gif"
        alt="Logo"
        width={700}
        height={200}
      ></Image>

      <SpaceForFooter></SpaceForFooter>
      <Footer></Footer>
    </>
  );
}
