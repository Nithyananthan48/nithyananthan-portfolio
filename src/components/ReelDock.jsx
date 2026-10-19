import React from "react";
import { ArrowUpRight, Infinity, Disc } from "lucide-react";

export default function ReelDock({
  scenes = [],
  activeSceneIndex = 0,
  currentScene,
  isLooping = false,
  onToggleLoop,
  onSelectScene,
}) {
  return (
    <aside
      className="reel-dock"
      aria-label="Portfolio Scene Navigation and Infinite Reel Controls"
    >
      {/* 1. Scene Navigation Numbers */}
      <nav className="flex items-center gap-1.5" aria-label="Scenes">
        {scenes.map((scene, idx) => {
          const isActive = idx === activeSceneIndex;
          return (
            <button
              key={scene.id}
              type="button"
              onClick={() => onSelectScene(scene.id)}
              className="scene-nav-link"
              aria-current={isActive ? "location" : undefined}
              aria-label={`Jump to ${scene.label}`}
              title={scene.label}
            >
              <span>{scene.number}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2222] shadow-[0_0_8px_#ff2222]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* 2. Central Reel Status & Loop Mode Switch */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Active Scene Title */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono tracking-wider text-white">
          <Disc className="w-3.5 h-3.5 text-[#ff2222] animate-spin" style={{ animationDuration: "6s" }} />
          <span className="text-[#a1a1aa]">SCENE:</span>
          <span className="font-bold text-white uppercase">{currentScene?.label || "01 SPLIT HERO"}</span>
        </div>

        {/* Visible Loop Toggle Button (Reference 2 style) */}
        <button
          type="button"
          onClick={onToggleLoop}
          className="loop-toggle-btn"
          aria-pressed={isLooping}
          title={isLooping ? "Infinite loop enabled: scrolling seamlessly resets" : "Enable continuous infinite loop"}
        >
          <Infinity className={`w-4 h-4 infinity-icon ${isLooping ? "text-[#ff2222]" : "text-[#71717a]"}`} />
          <span className="font-mono">
            {isLooping ? "Loop ON" : "Loop OFF"}
          </span>
        </button>
      </div>

      {/* 3. Right CTA: Get In Touch */}
      <div className="flex items-center gap-3">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onSelectScene("contact");
          }}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-mono font-bold hover:bg-[#ff2222] hover:text-white transition-all shadow-md group"
        >
          <span>TRANSMIT // CONTACT</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </aside>
  );
}
