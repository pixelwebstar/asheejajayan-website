'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sparkles, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Blood Red Crystal
const BloodCrystal = ({ position }: { position: [number, number, number] }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.3;
        meshRef.current.rotation.y = t * 0.2;
        const scale = 1 + Math.sin(t * 2) * 0.1;
        meshRef.current.scale.set(scale, scale, scale);
    });

    return (
        <mesh ref={meshRef} position={position}>
            <octahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial
                color="#c41e3a"
                emissive="#8a0303"
                emissiveIntensity={0.8}
                roughness={0.2}
                metalness={0.9}
            />
        </mesh>
    );
};

// Purple Orb
const PurpleOrb = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();
        meshRef.current.position.y = position[1] + Math.sin(t * 1.5 + position[0]) * 0.3;
        meshRef.current.rotation.y = t * 0.5;
        const material = meshRef.current.material as THREE.MeshStandardMaterial;
        const intensity = 0.5 + Math.sin(t * 3) * 0.3;
        material.emissiveIntensity = intensity;
    });

    return (
        <Sphere ref={meshRef} args={[scale, 32, 32]} position={position}>
            <meshStandardMaterial
                color="#9b4f96"
                emissive="#6b2d66"
                emissiveIntensity={0.6}
                roughness={0.1}
                metalness={0.8}
                transparent
                opacity={0.9}
            />
        </Sphere>
    );
};

// Centerpiece
const LuminousCenterpiece = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.getElapsedTime();
        groupRef.current.rotation.y = t * 0.15;
        groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
        groupRef.current.position.y = Math.sin(t * 0.8) * 0.2;
    });

    return (
        <group ref={groupRef}>
            <mesh>
                <octahedronGeometry args={[2, 0]} />
                <meshStandardMaterial
                    color="#ff0055"
                    emissive="#c41e3a"
                    emissiveIntensity={1.2}
                    roughness={0}
                    metalness={1}
                />
            </mesh>

            <Sphere args={[1.2, 32, 32]}>
                <meshStandardMaterial
                    color="#6b2d66"
                    emissive="#9b4f96"
                    emissiveIntensity={0.8}
                    transparent
                    opacity={0.6}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </group>
    );
};

const Hero3D = () => {
    return (
        <div style={{ height: '100vh', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <color attach="background" args={['#0a0000']} />

                <ambientLight intensity={0.3} />
                <pointLight position={[0, 0, 0]} intensity={2} color="#ff0055" />
                <pointLight position={[-10, 5, -10]} intensity={1.5} color="#9b4f96" />
                <pointLight position={[10, -5, 10]} intensity={1} color="#c41e3a" />
                <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} color="#6b2d66" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
                    <LuminousCenterpiece />
                </Float>

                <Float speed={3} rotationIntensity={1} floatIntensity={2}>
                    <BloodCrystal position={[-4, 2, -3]} />
                </Float>
                <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.8}>
                    <BloodCrystal position={[4, -2, -4]} />
                </Float>

                <Float speed={4} rotationIntensity={0.5} floatIntensity={2.5}>
                    <PurpleOrb position={[-6, 1, -5]} scale={0.8} />
                </Float>
                <Float speed={3.5} rotationIntensity={0.6} floatIntensity={2}>
                    <PurpleOrb position={[5, -3, -6]} scale={1} />
                </Float>
                <Float speed={4.5} rotationIntensity={0.7} floatIntensity={3}>
                    <PurpleOrb position={[0, 4, -7]} scale={0.6} />
                </Float>

                <Sparkles
                    count={80}
                    scale={12}
                    size={2.5}
                    speed={0.25}
                    opacity={0.5}
                    color="#c41e3a"
                />

                <Sparkles
                    count={50}
                    scale={10}
                    size={1.5}
                    speed={0.2}
                    opacity={0.35}
                    color="#9b4f96"
                />

                <Stars
                    radius={100}
                    depth={50}
                    count={2000}
                    factor={3}
                    saturation={0.4}
                    fade
                    speed={0.4}
                />
            </Canvas>
        </div>
    );
};

export default Hero3D;
