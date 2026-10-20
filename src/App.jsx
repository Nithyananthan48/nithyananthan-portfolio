import React from "react";
import CreativeNav from "./components/CreativeNav";
import CreativeHero from "./sections/CreativeHero";
import Ticker from "./components/Ticker";
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
        {/* Page 1: Hero with Introduction, CTAs & Profile Picture */}
        <CreativeHero />

        {/* High-Impact Infinite Marquee Ticker */}
        <Ticker />

        {/* Page 2: Technical Skills Matrix & Categorized Competencies */}
        <CreativeSkills />

        {/* Page 3: Verified Projects Section */}
        <CreativeProjects />

        {/* Page 4: Verified Resume, Education, Internship & 9 Industry Certifications */}
        <CreativeResume />

        {/* Page 5: Direct Contact Channels & Verification */}
        <CreativeContact />
      </main>

      {/* Colophon & Return to Top */}
      <CreativeFooter />
    </div>
  );
}
