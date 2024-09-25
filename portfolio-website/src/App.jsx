import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import FuturesPlan from "./Components/FuturesPlan";
import Hero from "./Components/Hero";
import Header from "./Components/Navbar";
import ProjectsSection from "./Components/ProjectsSection";
import TechStacks from "./Components/TechStacks";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Education />
      <TechStacks />
      <ProjectsSection />
      <FuturesPlan />
      <Contact />
    </>
  );
}
