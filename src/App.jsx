import React from "react";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import SplitHero from "./sections/SplitHero";
import Ticker from "./components/Ticker";
import About from "./sections/About";
import Capabilities from "./sections/Capabilities";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ReelDock from "./components/ReelDock";
import { useInfiniteReel } from "./hooks/useInfiniteReel";

export default function App() {
  const {
    scenes,
    activeSceneIndex,
    currentScene,
    isLooping,
    toggleLoop,
    scrollToScene,
  } = useInfiniteReel();

  return (
    <div className="min-h-screen relative bg-[#070709] text-[#f5f5f7] selection:bg-[#ff2222] selection:text-white">
      {/* Background Interactive Ambient Matrix */}
      <ParticleBackground />

      {/* Fixed Sticky Header Navbar */}
      <Navbar />

      {/* Main Continuous Reel Container (Inspired by Reference 2 #reel) */}
      <main id="reel" className="relative z-10 pb-16">
        {/* Scene 01: Split Screen Hero (Inspired by Reference 1 Split Screen) */}
        <SplitHero />

        {/* High-Tech Infinite Marquee Ticker */}
        <Ticker />

        {/* Scene 02: About the Developer */}
        <About />

        {/* Engineering Lifecycle Pipeline */}
        <Capabilities />

        {/* Scene 03: Technical Skill Matrix */}
        <Skills />

        {/* Scene 04: Featured Projects & Code Showcase */}
        <Projects />

        {/* Scene 05: Professional Experience */}
        <Experience />

        {/* Academic Degrees & Milestone Credentials */}
        <Education />
        <Certifications />

        {/* Common Queries / FAQ */}
        <FAQ />

        {/* Scene 06: Transmission Channel / Contact */}
        <Contact />

        {/* Colophon & Footer */}
        <Footer />
      </main>

      {/* Persistent Bottom Reel Dock (Inspired by Reference 2) */}
      <ReelDock
        scenes={scenes}
        activeSceneIndex={activeSceneIndex}
        currentScene={currentScene}
        isLooping={isLooping}
        onToggleLoop={toggleLoop}
        onSelectScene={scrollToScene}
      />
    </div>
  );
}
