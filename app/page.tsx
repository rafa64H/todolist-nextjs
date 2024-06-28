import Image from "next/image";
import { auth, signIn, signOut } from "./auth";
import prisma from "./lib/prisma";
import Header from "./components/header";
import Footer from "./components/footer";
import TitlePage from "./components/smaller/titlePage";

export default async function Home() {
  return (
    <>
      <Header></Header>

      <TitlePage>Home</TitlePage>

      <Footer></Footer>
    </>
  );
}
