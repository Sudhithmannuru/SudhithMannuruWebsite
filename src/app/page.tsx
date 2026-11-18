import { AboutBand } from "@/components/world/AboutBand";
import { Atlas } from "@/components/world/Atlas";
import { Experience } from "@/components/world/Experience";
import { Exploring } from "@/components/world/Exploring";
import { Featured } from "@/components/world/Featured";
import { Hero } from "@/components/world/Hero";
import { NextStop } from "@/components/world/NextStop";
import { Places } from "@/components/world/Places";
import { Trail } from "@/components/world/Trail";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Featured />
      <Atlas />
      <Exploring />
      <AboutBand />
      <Places />
      <Experience />
      <Trail />
      <NextStop />
    </main>
  );
}
