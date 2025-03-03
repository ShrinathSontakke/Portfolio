import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color={theme === 'dark' ? '#818cf8' : '#4f46e5'}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0}
        metalness={1}
        opacity={0.8}
        transparent
        depthWrite={true}
      />
    </Sphere>
  );
}

function FloatingSpheres() {
  const group = useRef<THREE.Group>(null);
  const { theme } = useTheme();

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.1;
      group.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {[...Array(30)].map((_, i) => (
        <Sphere
          key={i}
          position={[
            Math.sin(i) * 4,
            Math.cos(i) * 4,
            Math.sin(i * 2) * 4,
          ]}
          scale={0.15}
        >
          <meshStandardMaterial
            color={theme === 'dark' 
              ? `hsl(${i * 20}, 100%, 70%)`
              : `hsl(${i * 20}, 100%, 60%)`}
            emissive={theme === 'dark'
              ? `hsl(${i * 20}, 100%, 50%)`
              : `hsl(${i * 20}, 100%, 40%)`}
            roughness={0}
            metalness={1}
            opacity={0.8}
            transparent
            depthWrite={true}
          />
        </Sphere>
      ))}
    </group>
  );
}

export default function Scene3D() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="!fixed top-0 left-0 -z-10"
        dpr={[1, 2]}
      >
        <color attach="background" args={[theme === 'dark' ? '#000000' : '#ffffff']} />
        <fog attach="fog" args={[theme === 'dark' ? '#000000' : '#ffffff', 5, 15]} />
        <ambientLight intensity={theme === 'dark' ? 0.5 : 0.8} />
        <pointLight 
          position={[10, 10, 10]} 
          intensity={2}
          color={theme === 'dark' ? '#818cf8' : '#4f46e5'}
        />
        <pointLight
          position={[-10, -10, -10]}
          intensity={1.5}
          color={theme === 'dark' ? '#60a5fa' : '#3b82f6'}
        />
        <AnimatedSphere />
        <FloatingSpheres />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}