import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Discovery',
        desc: 'Uncovering requirements and defining success metrics.',
        icon: <Search size={24} />
    },
    {
        id: 2,
        title: 'Strategy',
        desc: 'Architecting the solution and designing the user experience.',
        icon: <PenTool size={24} />
    },
    {
        id: 3,
        title: 'Development',
        desc: 'Writing clean, scalable code and rigorous testing.',
        icon: <Code size={24} />
    },
    {
        id: 4,
        title: 'Delivery',
        desc: 'Deployment, training, and ongoing optimization.',
        icon: <Rocket size={24} />
    },
];

export default function ProcessTimeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={containerRef} className="py-24 bg-devx-blue/50 relative overflow-hidden">
            {/* Connecting Line Background */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block"></div>

            <div className="container mx-auto px-6 relative z-10 w-full">
                <motion.div style={{ scale, opacity }} className="text-center mb-20">
                    <span className="text-devx-accent font-semibold tracking-wider uppercase mb-2 block">How It Works</span>
                    <h2 className="text-3xl md:text-5xl font-bold">The DevX Process</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="relative group"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-6xl font-black text-white/5 select-none group-hover:text-devx-accent/10 transition-colors">
                                0{step.id}
                            </div>

                            <div className="bg-devx-dark border border-white/10 p-8 rounded-2xl relative z-10 hover:-translate-y-2 hover:border-devx-accent transition-all duration-300 shadow-lg">
                                <div className="w-14 h-14 bg-gradient-to-br from-devx-accent to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-devx-accent/30 group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-white/60 text-sm">{step.desc}</p>
                            </div>

                            {/* Connecting Line Glow (Desktop) */}
                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-[18px] right-[-50%] w-full h-[2px] bg-gradient-to-r from-devx-accent to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
