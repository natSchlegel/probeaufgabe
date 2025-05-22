import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";
import { TrackVisitor } from "../components/TrackVisitor";

// Home page component
export default async function Home() {
  // Track the visitor
  await TrackVisitor();
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
