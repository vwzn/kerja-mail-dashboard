import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// Komponen 3D Sphere untuk background
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

const NotFound = () => {
    const navigate = useNavigate();

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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-11/12 max-w-md p-8 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl text-center">
                <h1 className="text-9xl font-bold text-white mb-2">404</h1>
                <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
                <p className="text-white/80 mb-8 text-lg">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

export default NotFound;