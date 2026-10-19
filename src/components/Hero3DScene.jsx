import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DScene({ isDark = false, className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let width = container.clientWidth || 480;
    let height = container.clientHeight || 460;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // 2. WebGL Renderer with Alpha & Antialiasing
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Lighting Setup
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0x1e293b : 0xf8fafc,
      isDark ? 1.4 : 1.8
    );
    scene.add(ambientLight);

    // Key Light 1: Terracotta / Orange Accent
    const light1 = new THREE.PointLight(0xfe5922, 2.8, 20);
    light1.position.set(4, 3, 4);
    scene.add(light1);

    // Key Light 2: Cyan / Blue Rim Light
    const light2 = new THREE.PointLight(0x0284c7, 2.5, 20);
    light2.position.set(-4, -3, 3);
    scene.add(light2);

    // Directional Top Light for Specular Sheen
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(0, 6, 4);
    scene.add(dirLight);

    // 4. Central 3D Geometry: Intricate High-Tech Torus Knot
    const knotGeometry = new THREE.TorusKnotGeometry(1.4, 0.38, 140, 32, 2, 3);
    const knotMaterial = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x182234 : 0xf5f3ed,
      emissive: isDark ? 0x0f172a : 0x1c1917,
      emissiveIntensity: 0.15,
      roughness: 0.18,
      metalness: 0.88,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    scene.add(knotMesh);

    // 5. Inner Glowing Gem / Core
    const coreGeometry = new THREE.IcosahedronGeometry(0.75, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: isDark ? 0x38bdf8 : 0xfe5922,
      emissive: isDark ? 0x0284c7 : 0xa64025,
      emissiveIntensity: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // 6. Orbital Rings (Gyroscope effect)
    const ring1Geometry = new THREE.TorusGeometry(2.35, 0.02, 16, 120);
    const ringMaterial1 = new THREE.MeshStandardMaterial({
      color: isDark ? 0x38bdf8 : 0xfe5922,
      emissive: isDark ? 0x0284c7 : 0xfe5922,
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ringMaterial1);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ring2Geometry = new THREE.TorusGeometry(2.7, 0.018, 16, 120);
    const ringMaterial2 = new THREE.MeshStandardMaterial({
      color: isDark ? 0x818cf8 : 0x0284c7,
      emissive: isDark ? 0x4f46e5 : 0x0369a1,
      emissiveIntensity: 0.35,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ringMaterial2);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // 7. Surrounding Interactive Floating Tech Particles
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
      particleScales[i] = Math.random() * 0.05 + 0.02;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: isDark ? 0x38bdf8 : 0xfe5922,
      size: 0.065,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 8. Mouse / Pointer Tracking with Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 2.2;
      targetY = y * 2.2;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 9. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Central Torus Knot Rotation & Float
      knotMesh.rotation.x = elapsedTime * 0.35 + mouseY * 0.8;
      knotMesh.rotation.y = elapsedTime * 0.45 + mouseX * 0.8;
      knotMesh.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      // Inner Core Pulse & Counter-Rotation
      coreMesh.rotation.x = -elapsedTime * 0.6;
      coreMesh.rotation.y = -elapsedTime * 0.8;
      const coreScale = 0.75 + Math.sin(elapsedTime * 3) * 0.05;
      coreMesh.scale.set(coreScale, coreScale, coreScale);

      // Orbital Rings Rotation
      ring1.rotation.z = elapsedTime * 0.5;
      ring1.rotation.x = Math.PI / 3 + mouseY * 0.4;
      ring2.rotation.z = -elapsedTime * 0.4;
      ring2.rotation.y = Math.PI / 4 + mouseX * 0.4;

      // Particles gentle drift
      particleSystem.rotation.y = elapsedTime * 0.08;
      particleSystem.rotation.x = elapsedTime * 0.04;

      // Parallax Camera Shift
      camera.position.x = mouseX * 0.8;
      camera.position.y = -mouseY * 0.8;
      camera.lookAt(0, 0, 0);

      // Light orbit
      light1.position.x = Math.sin(elapsedTime * 0.8) * 4;
      light1.position.z = Math.cos(elapsedTime * 0.8) * 4;
      light2.position.x = -Math.sin(elapsedTime * 0.8) * 4;
      light2.position.z = -Math.cos(elapsedTime * 0.8) * 4;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      knotGeometry.dispose();
      knotMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ring1Geometry.dispose();
      ringMaterial1.dispose();
      ring2Geometry.dispose();
      ringMaterial2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [isDark]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] cursor-grab active:cursor-grabbing select-none ${className}`}
      title="Interactive 3D WebGL Scene — Move mouse to orbit"
    />
  );
}
