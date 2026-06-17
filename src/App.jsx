import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import MarqueeSkills from "./components/MarqueeSkills";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";
import EducationTimeline from "./components/EducationTimeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

import IntroReveal from "./components/IntroReveal";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <IntroReveal />;
  }

  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />

        <About />

        <Stats />

        <MarqueeSkills />

        <Projects />

        <Skills />

        <Publications />

        <Certifications />

        <EducationTimeline />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;