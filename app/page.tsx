import Image from "next/image";
import { auth, signIn, signOut } from "./auth";
import prisma from "./lib/prisma";
import Header from "./components/header";

export default async function Home() {
  return (
    <>
      <Header></Header>
    </>
  );
}
