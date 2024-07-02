import Footer from "../components/footer";
import Header from "../components/header";
import LoadingHeader from "../components/loadingHeader";
import TitlePage from "../components/smaller/titlePage";

export default async function LoadingPage() {
  return (
    <>
      <LoadingHeader></LoadingHeader>
      <TitlePage>Loading... Todo list</TitlePage>
      <Footer></Footer>
    </>
  );
}
