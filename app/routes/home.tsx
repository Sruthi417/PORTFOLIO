import Navbar from "~/Components/Nav/Navbar";
import type { Route } from "./+types/home";
import About from "~/Components/about/About";
import Project from "~/Components/projects/Project"
import Experience from "~/Components/experience/Experience";
import Contact from "~/Components/contacts/Contact";





export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sruthi | Portfolio" },
    { name: "description", content: "A personal portfolio showcasing web development projects and skills." },
  ];
}

export default function Home() {
  return (
    <main >
      <section >
        <Navbar/>
      </section >
      <section id="abouts" >
        <About/>
      </section>
      <section id="projects">
        <Project/>
      </section>
      <section id="experiences">
        <Experience/>
      </section>
      <section id="contacts">
        <Contact/>
      </section>
      

    </main>
  )
}
