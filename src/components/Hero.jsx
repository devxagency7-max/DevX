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
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-devx-dark to-devx-blue pointer-events-none"></div>
            <BinaryStream />

            {/* Circuit overlay (SVG) */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M10 10 L30 10 L30 30 L50 30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-devx-accent" />
                    <circle cx="50" cy="30" r="1" fill="currentColor" className="text-devx-accent" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>

            {/* Glow Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-devx-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <motion.div
                        className="inline-block relative mb-8 lg:hidden"
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

                    <div className="space-y-2 mb-10 text-lg md:text-xl text-white/70 font-light border-l-4 border-devx-accent pl-6">
                        <p className="leading-relaxed">Building the future is our mission.</p>
                        <p className="leading-relaxed">Wherever DevX exists, solutions exist.</p>
                        <p className="leading-relaxed">Your goal becomes our purpose.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
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
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block h-[600px]"
                >
                    {/* Floating Cards Mockup */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-10 w-80 h-96 bg-devx-glass backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl z-20"
                    >
                        <div className="w-full h-40 bg-gradient-to-tr from-devx-accent/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center p-6">
                            <img src="/assets/devx-logo.png" alt="DevX Project" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(77,123,255,0.4)]" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 bg-white/10 rounded w-3/4"></div>
                            <div className="h-2 bg-white/10 rounded w-1/2"></div>
                            <div className="h-2 bg-white/10 rounded w-5/6"></div>
                        </div>
                        <div className="mt-8 flex justify-between items-center">
                            <div className="w-8 h-8 rounded-full bg-devx-accent/50"></div>
                            <div className="w-20 h-8 bg-white/5 rounded-full"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 30, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-60 left-10 w-72 h-80 bg-devx-dark/90 backdrop-blur-md rounded-2xl border border-devx-accent/30 p-6 shadow-[0_0_40px_rgba(77,123,255,0.15)] z-10"
                    >
                        {/* Code snippet decoration */}
                        <div className="font-mono text-xs text-devx-accent/80 space-y-2">
                            <p><span className="text-purple-400">const</span> <span className="text-blue-300">future</span> = <span className="text-yellow-300">await</span> build();</p>
                            <p><span className="text-purple-400">if</span> (success) {`{`}</p>
                            <p className="pl-4">scale(100);</p>
                            <p>{`}`}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
