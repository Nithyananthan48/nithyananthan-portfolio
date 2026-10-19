import { useState, useEffect, useCallback, useRef } from "react";

export function useInfiniteReel(sceneSelectors = []) {
  const [isLooping, setIsLooping] = useState(false);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const isTransitioningRef = useRef(false);

  // Scene definitions
  const scenes = [
    { id: "home", number: "01", label: "01 SPLIT HERO" },
    { id: "about", number: "02", label: "02 ABOUT DEVELOPER" },
    { id: "skills", number: "03", label: "03 TECH MATRIX" },
    { id: "projects", number: "04", label: "04 FEATURED CODE" },
    { id: "experience", number: "05", label: "05 CAREER & CERTS" },
    { id: "contact", number: "06", label: "06 TRANSMISSION" },
  ];

  // Active scene observer via scroll position
  const updateActiveScene = useCallback(() => {
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    const sceneElements = scenes.map((s) => document.getElementById(s.id)).filter(Boolean);

    let currentIdx = 0;
    for (let i = 0; i < sceneElements.length; i++) {
      if (sceneElements[i].offsetTop <= scrollPos) {
        currentIdx = i;
      }
    }
    setActiveSceneIndex(currentIdx);

    // Infinite loop wrap-around logic
    if (isLooping && !isTransitioningRef.current) {
      const scrollHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;

      // When reaching within 20px of bottom, loop back to top seamlessly
      if (currentScroll >= scrollHeight - 20) {
        isTransitioningRef.current = true;
        window.scrollTo({ top: 2, behavior: "instant" });
        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 150);
      }
      // When scrolling up past top in loop mode
      else if (window.scrollY <= 0 && isTransitioningRef.current) {
        isTransitioningRef.current = false;
      }
    }
  }, [isLooping, scenes]);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveScene, { passive: true });
    window.addEventListener("resize", updateActiveScene, { passive: true });
    updateActiveScene();

    return () => {
      window.removeEventListener("scroll", updateActiveScene);
      window.removeEventListener("resize", updateActiveScene);
    };
  }, [updateActiveScene]);

  // Toggle infinite loop mode
  const toggleLoop = useCallback(() => {
    setIsLooping((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("is-looping");
      } else {
        document.documentElement.classList.remove("is-looping");
      }
      return next;
    });
  }, []);

  // Smooth scroll to scene
  const scrollToScene = useCallback((sceneId) => {
    const el = document.getElementById(sceneId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return {
    scenes,
    activeSceneIndex,
    currentScene: scenes[activeSceneIndex] || scenes[0],
    isLooping,
    toggleLoop,
    scrollToScene,
  };
}
