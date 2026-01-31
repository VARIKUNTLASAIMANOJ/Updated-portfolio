import Chatbot from "@/components/Chatbot";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { UIProvider } from "@/context/UIContext";

export default function Home() {
  return (
    <UIProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Chatbot />
    </UIProvider>
  );
}
