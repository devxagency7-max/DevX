import React, { useContext, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AppContext } from '../App';

export default function Hero() {
    const { setIsStartProjectOpen, setIsContactOpen } = useContext(AppContext);
    const containerRef = useRef(null);

    // Parallax for binary background
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 500], [0, 200]);

    // Binary stream component
    const BinaryStream = () => {
        // Generate random binary strings
        const streams = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: `${(i * 5) + Math.random() * 5}%`,
            delay: Math.random() * 5,
            duration: 10 + Math.random() * 10
        }));

        return (
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                {streams.map((stream) => (
                    <motion.div
                        key={stream.id}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: '100vh', opacity: [0, 1, 0] }}
                        transition={{
                            duration: stream.duration,
                            repeat: Infinity,
                            delay: stream.delay,
                            ease: "linear"
                        }}
                        className="absolute top-0 text-devx-accent font-mono text-xs select-none"
                        style={{ left: stream.left }}
                    >
                        {Array.from({ length: 30 }).map(() => Math.round(Math.random())).join('\n')}
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10 bg-devx-dark">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-80"
                >
                    <source src="/assets/hero_bagegraound.mp4" type="video/mp4" />
                </video>
                {/* Overlay for legibility - Lighter to show more video */}
                <div className="absolute inset-0 bg-devx-dark/60 bg-gradient-to-t from-devx-dark to-transparent"></div>
            </div>

            {/* Binary stream component (Optional: kept for tech feel, effectively overlaying the video) */}
            <BinaryStream />

            {/* Glow Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-devx-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 flex flex-col items-center justify-center relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        className="inline-block relative mb-8"
                        animate={{ scale: [0.98, 1.03, 0.98] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="absolute inset-0 bg-devx-accent/30 rounded-full blur-xl animate-pulse"></div>
                        <img src="/assets/devx-logo.png" alt="DevX Logo" className="h-24 w-auto relative z-10 drop-shadow-[0_0_25px_rgba(77,123,255,0.6)]" />
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                        We Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-devx-accent">Intelligent Digital</span> <br />
                        Experiences.
                    </h1>

                    <div className="space-y-4 mb-10 text-lg md:text-xl text-white/70 font-light">
                        <p className="leading-relaxed">Building the future is our mission.</p>
                        <p className="leading-relaxed">Wherever DevX exists, solutions exist.</p>
                        <p className="leading-relaxed">Your goal becomes our purpose.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsStartProjectOpen(true)}
                            className="px-8 py-4 bg-devx-accent text-white font-bold rounded-full shadow-[0_0_30px_rgba(77,123,255,0.4)] hover:shadow-[0_0_50px_rgba(77,123,255,0.6)] transition-all w-full sm:w-auto"
                        >
                            Start a Project
                        </motion.button>
                        <motion.button
                            onClick={() => setIsContactOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:border-devx-accent/50 transition-all w-full sm:w-auto inline-block text-center"
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>

                {/* 3D Decorative Cards Right Side */}

            </div>
        </section>
    );
}
