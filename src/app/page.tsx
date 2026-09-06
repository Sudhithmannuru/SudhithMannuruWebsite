import { About } from "@/components/sections/About";
import { AcademicSnapshot } from "@/components/sections/AcademicSnapshot";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { Coursework } from "@/components/sections/Coursework";
import { Experience } from "@/components/sections/Experience";
import { Inspiration } from "@/components/sections/Inspiration";
import { Leadership } from "@/components/sections/Leadership";
import { Projects } from "@/components/sections/Projects";
import { Travel } from "@/components/sections/Travel";
import { Hero } from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <AcademicSnapshot />
      <About />
      <Projects />
      <Experience />
      <Leadership />
      <Coursework />
      <Awards />
      <Travel />
      <Inspiration />
      <Contact />
    </main>
  );
}
