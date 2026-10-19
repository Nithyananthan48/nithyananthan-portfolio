import React, { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  glare = true,
  onClick,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.22,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`relative will-change-transform ${className}`}
      {...props}
    >
      {/* Card Content */}
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>

      {/* Dynamic 3D Glare Sheen Reflection */}
      {glare && !shouldReduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300 -z-0"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 300px at ${glarePos.x}% ${glarePos.y}%, rgba(254, 89, 34, 0.25), transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
}
