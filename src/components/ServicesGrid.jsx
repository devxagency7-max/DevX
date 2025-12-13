import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    'Custom Software Development',
    'AI Model Fine-tuning',
    'E-Commerce Platforms',
    'SaaS Product Development',
    'Mobile App Development',
    'Blockchain Solutions',
    'DevOps & Automation',
    'Data Science & Analytics',
    'Legacy System Modernization'
];

// Particle Background Component
const ParticleBackground = () => {
    // Generate random particles
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 10,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ opacity: 0, x: `${p.x}%`, y: `${p.y}%` }}
                    animate={{
                        opacity: [0, 0.4, 0],
                        y: [`${p.y}%`, `${p.y - 10}%`],
                        x: [`${p.x}%`, `${p.x + (Math.random() > 0.5 ? 10 : -10)}%`]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute rounded-full bg-devx-accent/30 blur-[1px]"
                    style={{ width: p.size, height: p.size }}
                />
            ))}
        </div>
    );
};

// Card Component with Hover Light Trail
const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onMouseMove={handleMouseMove}
            className="group relative h-full"
        >
            {/* Animated Light Border Container */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-devx-accent/50 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 group-hover:animate-spin-slow" />

            {/* Moving Spotlight Effect (User's Light Trail Request variant) */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(77, 123, 255, 0.15),
                        transparent 80%
                        )
                    `,
                }}
            />

            {/* Rotating Border Glow (Alternative interpretation of Light Trail) */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(77,123,255,0.3)_90deg,transparent_180deg)] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Main Card Content */}
            <div className="relative h-full bg-devx-glass backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-devx-accent/30 transition-colors shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between overflow-hidden">
                {/* Subtle Inner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-devx-accent/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-devx-accent/50 group-hover:shadow-[0_0_15px_rgba(77,123,255,0.3)] transition-all">
                            <span className="text-devx-accent font-bold text-lg">{index + 1}</span>
                        </div>
                        <ArrowUpRight className="text-white/30 group-hover:text-devx-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors relative z-10">
                        {service}
                    </h3>
                </div>

                <div className="relative z-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-sm text-white/60">
                        Advanced solutions engineered for scale and performance.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 bg-transparent relative overflow-hidden">
            {/* Abstract Light Waves / Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                {/* Constellations / Floating gradients */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-devx-blue/50 to-transparent"></div>
            </div>

            <ParticleBackground />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-devx-accent font-semibold tracking-wider uppercase mb-2 block">Services</span>
                        <h2 className="text-3xl md:text-5xl font-bold">Our Expertise</h2>
                    </div>
                    <p className="text-white/50 max-w-md mt-6 md:mt-0 text-right md:text-left">
                        Comprehensive services tailored to your specific industry needs.
                    </p>
                </div>

                {/* Separated Cards Grid (Gap increased) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} service={service} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
