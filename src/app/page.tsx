import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Coursework } from "@/components/sections/Coursework";
import { Experience } from "@/components/sections/Experience";
import { Leadership } from "@/components/sections/Leadership";
import { Projects } from "@/components/sections/Projects";
import { Travel } from "@/components/sections/Travel";
import { Hero } from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Leadership />
      <Coursework />
      <Travel />
      <Contact />
    </main>
  );
}
