import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { ProfessionalSnapshot } from "@/components/sections/professional-snapshot";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { WhyHireMe } from "@/components/sections/why-hire-me";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProfessionalSnapshot />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <WhyHireMe />
      <Contact />
    </>
  );
}
