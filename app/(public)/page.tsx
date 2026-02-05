import About from "@/components/public/about";
import Contact from "@/components/public/contact";
import Education from "@/components/public/education";
import Experience from "@/components/public/experience";
import Hero from "@/components/public/hero";
import Navbar from "@/components/public/navbar";
import Projects from "@/components/public/projects";
import Services from "@/components/public/services";
import Skills from "@/components/public/skills";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
