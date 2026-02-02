import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import * as THREE from 'three'

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.05
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.08
    }
  })

  return (
    <group>
      {/* Central distorted sphere */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <mesh ref={meshRef} scale={1.5}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color="#00f5ff"
            emissive="#b829dd"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.8}
            distort={0.3}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Outer ring */}
      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={0.3}
      >
        <mesh ref={ringRef} scale={2.2}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#ff2d95"
            emissive="#ff2d95"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.9}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Second ring */}
      <Float
        speed={1}
        rotationIntensity={0.8}
        floatIntensity={0.4}
      >
        <mesh scale={2.8} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#00f5ff"
            emissive="#00f5ff"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.9}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      {/* Floating particles */}
      {useMemo(() => (
        Array.from({ length: 20 }).map((_, i) => (
          <Float
            key={i}
            speed={1 + Math.random()}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <mesh
              position={[
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 4,
              ]}
            >
              <sphereGeometry args={[0.03 + Math.random() * 0.05, 8, 8]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? '#00f5ff' : '#ff2d95'}
                emissive={i % 2 === 0 ? '#00f5ff' : '#ff2d95'}
                emissiveIntensity={0.8}
              />
            </mesh>
          </Float>
        ))
      ), [])}
    </group>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  
  const { positions } = useMemo(() => {
    const count = 500
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    
    return { positions }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-5, -5, -5]} color="#b829dd" intensity={0.8} />
        <pointLight position={[5, -5, 5]} color="#00f5ff" intensity={0.8} />
        
        <FloatingGeometry />
        <ParticleField />
        
        <Stars 
          radius={50} 
          depth={50} 
          count={1000} 
          factor={4} 
          saturation={0.5} 
          fade 
          speed={0.5}
        />
      </Canvas>
    </div>
  )
}
