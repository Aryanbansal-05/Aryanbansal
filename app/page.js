import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
