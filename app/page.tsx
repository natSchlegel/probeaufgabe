import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";
import { prisma } from '@/lib/prisma';

// Home page component
export default async function Home() {
  // Track the visitor
  await prisma.visitor.create({});

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
