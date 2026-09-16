import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Fixtures } from "@/components/Fixtures";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Squad } from "@/components/Squad";

export default function Home() {
  return (
    <>
      <Intro />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <Squad />
        <Fixtures />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
