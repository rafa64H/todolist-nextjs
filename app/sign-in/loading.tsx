import Footer from "../components/footer";
import Header from "../components/header";
import LoadingHeader from "../components/loadingHeader";
import SpaceForFooter from "../components/smaller/spaceForFooter";
import TitlePage from "../components/smaller/titlePage";

export default async function LoadingPage() {
  return (
    <>
      <LoadingHeader></LoadingHeader>
      <TitlePage>Loading... Sign in</TitlePage>
      <SpaceForFooter></SpaceForFooter>
      <Footer></Footer>
    </>
  );
}
