import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Globe } from 'lucide-react';

export default function About() {
    const values = [
        { icon: <Shield size={24} />, title: "Trust", desc: "Security first in every line of code." },
        { icon: <Zap size={24} />, title: "Speed", desc: "Optimized performance for global scale." },
        { icon: <Target size={24} />, title: "Precision", desc: "Pixel-perfect execution of your vision." },
        { icon: <Globe size={24} />, title: "Impact", desc: "Solutions that change industries." },
    ];

    return (
        <section id="about" className="py-20 bg-devx-blue/30 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Main Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Who We Are</h2>
                        <p className="text-lg text-white/70 leading-relaxed mb-6">
                            DevX is a premier software & AI company based in Beni Suef, Egypt.
                            We don't just write code; we engineer intelligent ecosystems that empower businesses to lead in the digital age.
                            From rapid prototyping to enterprise-scale deployment, we are your partners in innovation.
                        </p>
                        <div className="h-1 w-20 bg-devx-accent rounded-full"></div>
                    </motion.div>

                    {/* Values Grid */}
                    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {values.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 border border-white/5 p-6 rounded-xl hover:bg-white/10 hover:border-devx-accent/30 transition-all group"
                            >
                                <div className="mb-4 text-devx-accent group-hover:drop-shadow-[0_0_8px_rgba(77,123,255,0.6)] transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-white/50 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
