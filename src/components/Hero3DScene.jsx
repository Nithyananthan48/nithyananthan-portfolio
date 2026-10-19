import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DScene({ className = "" }) {
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
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 3. Lighting Setup (Red + Black + White)
    const ambientLight = new THREE.AmbientLight(0x20080a, 2.0);
    scene.add(ambientLight);

    // Key Light 1: Vivid Red Point Light
    const light1 = new THREE.PointLight(0xff2222, 4.5, 25);
    light1.position.set(4, 3, 4);
    scene.add(light1);

    // Key Light 2: Crisp White Specular Rim Light
    const light2 = new THREE.PointLight(0xffffff, 2.8, 25);
    light2.position.set(-4, -3, 3);
    scene.add(light2);

    // Directional Top Light
    const dirLight = new THREE.DirectionalLight(0xff4444, 1.5);
    dirLight.position.set(0, 6, 4);
    scene.add(dirLight);

    // 4. Central 3D Geometry: Obsidian Carbon Torus Knot with Red Metallic Sheen
    const knotGeometry = new THREE.TorusKnotGeometry(1.4, 0.38, 140, 32, 2, 3);
    const knotMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0c0c12,
      emissive: 0x220406,
      emissiveIntensity: 0.3,
      roughness: 0.15,
      metalness: 0.92,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    scene.add(knotMesh);

    // 5. Inner Glowing Gem / Core in Vivid Red Wireframe
    const coreGeometry = new THREE.IcosahedronGeometry(0.78, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xff2222,
      emissive: 0xff0000,
      emissiveIntensity: 1.2,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // 6. Orbital Rings (Gyroscope effect)
    const ring1Geometry = new THREE.TorusGeometry(2.35, 0.022, 16, 120);
    const ringMaterial1 = new THREE.MeshStandardMaterial({
      color: 0xff2222,
      emissive: 0xff1111,
      emissiveIntensity: 0.6,
      metalness: 0.95,
      roughness: 0.15,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ringMaterial1);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ring2Geometry = new THREE.TorusGeometry(2.7, 0.018, 16, 120);
    const ringMaterial2 = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x888888,
      emissiveIntensity: 0.4,
      metalness: 0.95,
      roughness: 0.15,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ringMaterial2);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // 7. Surrounding Interactive Floating Tech Particles (Red & White)
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff2222,
      size: 0.07,
      transparent: true,
      opacity: 0.8,
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
    const clock = new THREE.Clock();

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
      const coreScale = 0.78 + Math.sin(elapsedTime * 3) * 0.06;
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

      // Orbiting Red Lights
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
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] cursor-grab active:cursor-grabbing select-none ${className}`}
      title="Interactive 3D WebGL Scene — Move mouse to orbit"
    />
  );
}
