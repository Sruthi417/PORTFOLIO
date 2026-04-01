import Navbar from "~/Components/Navbar";
import type { Route } from "./+types/home";




export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sruthi | Portfolio" },
    { name: "description", content: "A personal portfolio showcasing web development projects and skills." },
  ];
}

export default function Home() {
  return (
    <main >
      <section>
        <Navbar/>
      </section>

    </main>
  )
}
