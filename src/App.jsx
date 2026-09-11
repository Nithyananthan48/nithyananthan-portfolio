import React, { useState, useEffect } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Capabilities from "./sections/Capabilities";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("nithya_portfolio_theme");
    if (saved) return saved === "dark";
    return false; // Default Light Theme as requested
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("nithya_portfolio_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("nithya_portfolio_theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      isDark ? "bg-[#090d16] text-slate-100" : "bg-[#f8fafc] text-slate-900"
    }`}>
      {/* Background Interactive Particle Grid */}
      <ParticleBackground isDark={isDark} />

      {/* Sticky Blurred Navbar */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Capabilities />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

