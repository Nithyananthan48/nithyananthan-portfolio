import React from "react";
import CreativeNav from "./components/CreativeNav";
import CreativeHero from "./sections/CreativeHero";
import Ticker from "./components/Ticker";
import CreativeAbout from "./sections/CreativeAbout";
import CreativeSkills from "./sections/CreativeSkills";
import CreativeProjects from "./sections/CreativeProjects";
import CreativeResume from "./sections/CreativeResume";
import CreativeContact from "./sections/CreativeContact";
import CreativeFooter from "./components/CreativeFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080a] text-[#fefefe] selection:bg-[#ff2222] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Creative Developer Top Navigation with Live Clock */}
      <CreativeNav />

      {/* Main Content Reel */}
      <main className="relative z-10">
        {/* Page 1: Hero with Pointer Crosshair & Kinetic Typography */}
        <CreativeHero />

        {/* High-Impact Infinite Marquee Ticker */}
        <Ticker />

        {/* Page 2: About the Developer, Education & Workflow */}
        <CreativeAbout />

        {/* Page 3: Technical Matrix & Core Competencies */}
        <CreativeSkills />

        {/* Page 4: Projects with Signature Expanding Brackets [ ... ] */}
        <CreativeProjects />

        {/* Page 5: Verified Resume & 9 Industry Certifications */}
        <CreativeResume />

        {/* Page 6: 3-Column Contact Grid & Transmission Terminal */}
        <CreativeContact />
      </main>

      {/* Colophon & Return to Top */}
      <CreativeFooter />
    </div>
  );
}
