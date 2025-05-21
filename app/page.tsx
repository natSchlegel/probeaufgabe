import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";
import { TrackVisitor } from "../components/TrackVisitor";

export default async function Home() {
  await TrackVisitor();
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
