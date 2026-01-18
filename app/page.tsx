import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { Explorations } from "@/components/Explorations";
import { Photography } from "@/components/Photography";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Portfolio />
      <Explorations />
      <Photography />
      <Skills />
      <Contact />
    </main>
  );
}
