import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
// Komponen 3D Sphere
const Sphere = () => {
    const meshRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial
                color="#6a5acd"
                metalness={0.6}
                roughness={0.2}
                transparent
                opacity={0.8}
            />
        </mesh>
    );
};

const Welcome = () => {
    const navigate = useNavigate();
    const glassRef = useRef();

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
            {/* Background 3D */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Sphere />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Glassmorphism Card */}
            <div
                ref={glassRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-11/12 max-w-2xl p-8 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl"
                style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)'
                }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
                    Selamat Datang di <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Aplikasi Management Email</span>
                </h1>

                <p className="text-lg text-white/80 text-center mb-10">
                    Kelola email Anda dengan mudah dan efisien dalam satu platform terintegrasi
                </p>

                {/* Tombol Interaktif */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/login')}
                        className="relative px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold overflow-hidden group"
                    >
                        <span className="relative z-10">Login</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        <div className="absolute inset-0 border-2 border-white/30 rounded-lg group-hover:border-white/50 transition-all duration-500"></div>
                    </button>

                    <button
                        onClick={() => navigate('/register')}
                        className="relative px-8 py-4 rounded-lg bg-transparent border-2 border-white/30 text-white font-semibold overflow-hidden group"
                    >
                        <span className="relative z-10">Register</span>
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 rounded-lg transition-all duration-500"></div>
                    </button>
                </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/10 backdrop-blur-sm"
                        style={{
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* CSS untuk animasi floating */}
            <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default Welcome;