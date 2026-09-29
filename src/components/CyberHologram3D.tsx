import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, Zap, Eye, Box, Compass } from 'lucide-react';
import { playClick } from '../utils/sound';

type ModelPreset = 'quantum' | 'torus' | 'matrix' | 'diamond';

interface CyberHologram3DProps {
  theme?: 'dark' | 'light';
  size?: number;
}

export const CyberHologram3D: React.FC<CyberHologram3DProps> = ({ size = 340 }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activePreset, setActivePreset] = useState<ModelPreset>('quantum');
  const [isInteracting, setIsInteracting] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  // References to communicate state into the Three.js animation loop without recreating the scene
  const presetRef = useRef<ModelPreset>(activePreset);
  const speedRef = useRef(speedMultiplier);

  useEffect(() => {
    presetRef.current = activePreset;
  }, [activePreset]);

  useEffect(() => {
    speedRef.current = speedMultiplier;
  }, [speedMultiplier]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00d4ff, 3.5, 50);
    cyanLight.position.set(4, 3, 4);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x6c63ff, 4.0, 50);
    violetLight.position.set(-4, -3, 3);
    scene.add(violetLight);

    const pinkLight = new THREE.PointLight(0xff6b9d, 2.5, 40);
    pinkLight.position.set(0, 4, -3);
    scene.add(pinkLight);

    // 3. Central Pivot Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Group for interchangeable primary meshes
    const meshGroup = new THREE.Group();
    rootGroup.add(meshGroup);

    // Meshes cache
    const materials = {
      wireCyan: new THREE.MeshStandardMaterial({
        color: 0x00d4ff,
        wireframe: true,
        emissive: 0x00d4ff,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.9
      }),
      solidViolet: new THREE.MeshPhysicalMaterial({
        color: 0x6c63ff,
        roughness: 0.15,
        metalness: 0.85,
        transmission: 0.6,
        thickness: 1.2,
        transparent: true,
        opacity: 0.88,
        emissive: 0x3d2ec9,
        emissiveIntensity: 0.3
      }),
      wirePink: new THREE.MeshStandardMaterial({
        color: 0xff6b9d,
        wireframe: true,
        emissive: 0xff6b9d,
        emissiveIntensity: 0.7
      }),
      glowPoints: new THREE.PointsMaterial({
        color: 0x00ffb3,
        size: 0.045,
        transparent: true,
        opacity: 0.85
      })
    };

    // Build presets
    const buildPresetGeometry = (type: ModelPreset) => {
      // Clear previous children
      while (meshGroup.children.length > 0) {
        const obj = meshGroup.children[0];
        meshGroup.remove(obj);
        if ((obj as any).geometry) (obj as any).geometry.dispose();
      }

      if (type === 'quantum') {
        // Double Icosahedron Core
        const outerGeo = new THREE.IcosahedronGeometry(1.4, 1);
        const outerMesh = new THREE.Mesh(outerGeo, materials.wireCyan);

        const innerGeo = new THREE.IcosahedronGeometry(0.85, 0);
        const innerMesh = new THREE.Mesh(innerGeo, materials.solidViolet);

        const points = new THREE.Points(outerGeo, materials.glowPoints);

        meshGroup.add(outerMesh);
        meshGroup.add(innerMesh);
        meshGroup.add(points);
      } else if (type === 'torus') {
        // Intertwined Hyper Torus Knot
        const knotGeo = new THREE.TorusKnotGeometry(0.9, 0.28, 128, 16, 2, 3);
        const knotMesh = new THREE.Mesh(knotGeo, materials.solidViolet);

        const knotWireGeo = new THREE.TorusKnotGeometry(0.92, 0.29, 64, 8, 2, 3);
        const knotWire = new THREE.Mesh(knotWireGeo, materials.wireCyan);

        meshGroup.add(knotMesh);
        meshGroup.add(knotWire);
      } else if (type === 'matrix') {
        // Dodecahedron Matrix Grid
        const dodGeo = new THREE.DodecahedronGeometry(1.35, 1);
        const dodMesh = new THREE.Mesh(dodGeo, materials.wirePink);

        const coreGeo = new THREE.SphereGeometry(0.75, 24, 24);
        const coreMesh = new THREE.Mesh(coreGeo, materials.solidViolet);

        const points = new THREE.Points(dodGeo, materials.glowPoints);

        meshGroup.add(dodMesh);
        meshGroup.add(coreMesh);
        meshGroup.add(points);
      } else if (type === 'diamond') {
        // Octahedron Diamond Crystal
        const octGeo = new THREE.OctahedronGeometry(1.5, 0);
        const octMesh = new THREE.Mesh(octGeo, materials.wireCyan);

        const innerOctGeo = new THREE.OctahedronGeometry(0.95, 0);
        const innerOctMesh = new THREE.Mesh(innerOctGeo, materials.solidViolet);

        meshGroup.add(octMesh);
        meshGroup.add(innerOctMesh);
      }
    };

    buildPresetGeometry(presetRef.current);

    // 4. Gyroscopic Orbital Gimbal Rings
    const ringGroup = new THREE.Group();
    rootGroup.add(ringGroup);

    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.45 });
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x6c63ff, wireframe: true, transparent: true, opacity: 0.35 });

    const ringGeo1 = new THREE.TorusGeometry(1.85, 0.015, 16, 80);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.05, 0.015, 16, 80);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ringGroup.add(ring2);

    // 5. Starfield / Floating Particle Cloud
    const particleCount = 650;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00d4ff);
    const color2 = new THREE.Color(0x6c63ff);
    const color3 = new THREE.Color(0x00ffb3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.2 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? color1 : (Math.random() > 0.5 ? color2 : color3);
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // 6. Interactive Drag & Mouse Parallax Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      setIsInteracting(true);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseRelX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseRelY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotationY += deltaX * 0.015;
        targetRotationX += deltaY * 0.015;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      } else {
        // Subtle mouse hovering parallax tilt
        targetRotationY += (mouseRelX * 0.4 - targetRotationY) * 0.04;
        targetRotationX += (-mouseRelY * 0.4 - targetRotationX) * 0.04;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Click Shockwave Pulse Animation
    let shockwaveScale = 1;
    let isShockwaving = false;
    const onClick = () => {
      isShockwaving = true;
      shockwaveScale = 1.25;
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    container.addEventListener('click', onClick);

    // 7. Render Animation Loop
    let currentPreset = presetRef.current;
    let animFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();
      const speed = speedRef.current;

      // Check if preset changed dynamically
      if (presetRef.current !== currentPreset) {
        currentPreset = presetRef.current;
        buildPresetGeometry(currentPreset);
      }

      // Smooth rotation with inertia
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.08;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.08;

      // Continuous autonomous spin
      meshGroup.rotation.y += 0.009 * speed;
      meshGroup.rotation.x += 0.005 * speed;

      ring1.rotation.z += 0.012 * speed;
      ring2.rotation.z -= 0.015 * speed;
      particles.rotation.y -= 0.002 * speed;

      // Breathing / Pulse animation
      const breath = Math.sin(elapsedTime * 2.2) * 0.04;
      if (isShockwaving) {
        shockwaveScale += (1.0 - shockwaveScale) * 0.1;
        if (Math.abs(shockwaveScale - 1.0) < 0.01) {
          shockwaveScale = 1;
          isShockwaving = false;
        }
      }
      meshGroup.scale.set(
        (1 + breath) * shockwaveScale,
        (1 + breath) * shockwaveScale,
        (1 + breath) * shockwaveScale
      );

      // Light orbit
      cyanLight.position.x = Math.sin(elapsedTime * 1.5) * 4;
      cyanLight.position.z = Math.cos(elapsedTime * 1.5) * 4;
      violetLight.position.x = -Math.sin(elapsedTime * 1.2) * 4;
      violetLight.position.z = -Math.cos(elapsedTime * 1.2) * 4;

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 8. Cleanup on unmount
    return () => {
      cancelAnimationFrame(animFrameId);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('click', onClick);

      // Dispose Three.js objects to prevent GPU memory leaks
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      Object.values(materials).forEach((m) => m.dispose());

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  return (
    <div
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size + 50}px`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none'
      }}
    >
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          cursor: isInteracting ? 'grabbing' : 'grab',
          touchAction: 'none'
        }}
        title="Click & Drag to rotate 3D Cyber Core. Click for shockwave!"
      />

      {/* Floating 3D HUD Controller Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          borderRadius: '9999px',
          background: 'var(--card)',
          border: '1px solid var(--border)',
          boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(12px)',
          marginTop: '-10px',
          zIndex: 10
        }}
      >
        {[
          { id: 'quantum', label: 'Core', icon: <Sparkles size={12} /> },
          { id: 'torus', label: 'Torus', icon: <RotateCw size={12} /> },
          { id: 'matrix', label: 'Matrix', icon: <Box size={12} /> },
          { id: 'diamond', label: 'Prism', icon: <Compass size={12} /> }
        ].map((item) => {
          const isActive = activePreset === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                playClick();
                setActivePreset(item.id as ModelPreset);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 10px',
                borderRadius: '9999px',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                cursor: 'pointer',
                border: isActive ? '1px solid var(--cyan)' : '1px solid transparent',
                background: isActive ? 'rgba(0, 212, 255, 0.16)' : 'transparent',
                color: isActive ? 'var(--cyan)' : 'var(--muted)',
                transition: 'all 0.2s ease'
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}

        <button
          onClick={() => {
            playClick();
            setSpeedMultiplier((prev) => (prev >= 2 ? 0.5 : prev + 0.5));
          }}
          title="Adjust rotation velocity"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: speedMultiplier > 1 ? 'rgba(108, 99, 255, 0.2)' : 'transparent',
            border: '1px solid var(--border)',
            color: speedMultiplier > 1 ? 'var(--violet)' : 'var(--muted)',
            cursor: 'pointer',
            fontSize: '0.68rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800
          }}
        >
          {speedMultiplier}x
        </button>
      </div>

      {/* Micro-hint */}
      <span
        style={{
          fontSize: '0.68rem',
          color: 'var(--muted)',
          fontFamily: 'var(--font-mono)',
          marginTop: '6px',
          opacity: 0.8
        }}
      >
        ✦ Drag 360° • Click for shockwave
      </span>
    </div>
  );
};
