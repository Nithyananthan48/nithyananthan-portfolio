import React, { useEffect, useRef } from "react";

export default function ParticleBackground({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Warm organic ambient nodes
    const nodeCount = Math.min(Math.floor((width * height) / 38000), 28);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle editorial warmth gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.35,
        height * 0.2,
        40,
        width * 0.5,
        height * 0.5,
        width * 0.85
      );

      if (isDark) {
        bgGrad.addColorStop(0, "rgba(56, 189, 248, 0.04)");
        bgGrad.addColorStop(0.4, "rgba(99, 102, 241, 0.03)");
        bgGrad.addColorStop(1, "transparent");
      } else {
        bgGrad.addColorStop(0, "rgba(254, 89, 34, 0.035)");
        bgGrad.addColorStop(0.35, "rgba(2, 132, 199, 0.025)");
        bgGrad.addColorStop(1, "transparent");
      }

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Delicate architectural dot grid
      const dotSpacing = 52;
      const dotColor = isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(19, 19, 18, 0.022)";
      ctx.fillStyle = dotColor;
      for (let x = 0; x < width; x += dotSpacing) {
        for (let y = 0; y < height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Smooth floating nodes
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse gentle proximity interaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let currentRadius = p.radius;
        let currentAlpha = p.alpha;

        if (dist < 140) {
          const factor = (1 - dist / 140);
          currentRadius = p.radius + factor * 2;
          currentAlpha = Math.min(1, p.alpha + factor * 0.5);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(56, 189, 248, ${currentAlpha * 0.6})`
          : `rgba(254, 89, 34, ${currentAlpha * 0.4})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
