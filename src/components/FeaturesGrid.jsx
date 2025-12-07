import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Smartphone, Layout, Lock, Database, Bot, BarChart } from 'lucide-react';

const features = [
    { icon: <Bot />, title: "AI Integration", desc: "LLMs, Computer Vision, and Predictive Analytics." },
    { icon: <Smartphone />, title: "Mobile & Web", desc: "Cross-platform apps ensuring consistent experiences." },
    { icon: <Cloud />, title: "Cloud Native", desc: "Scalable architecture on AWS, Google Cloud, and Azure." },
    { icon: <Layout />, title: "UI/UX Design", desc: "Intuitive interfaces driven by user behavior data." },
    { icon: <Lock />, title: "Cybersecurity", desc: "Enterprise-grade encryption and security protocols." },
    { icon: <Database />, title: "Big Data", desc: "Processing massive datasets for actionable insights." },
    { icon: <Cpu />, title: "IoT Solutions", desc: "Connecting physical devices to the digital realm." },
    { icon: <BarChart />, title: "Consulting", desc: "Strategic digital transformation guidance." },
];

export default function FeaturesGrid() {
    return (
        <section className="py-24 bg-transparent relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Leveraging cutting-edge technologies to solve complex challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="bg-devx-glass backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-devx-accent/50 hover:shadow-[0_10px_30px_rgba(77,123,255,0.1)] transition-all group"
                        >
                            <div className="w-12 h-12 bg-devx-accent/10 rounded-lg flex items-center justify-center text-devx-accent mb-6 group-hover:bg-devx-accent group-hover:text-white transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-devx-accent transition-colors">{feature.title}</h3>
                            <p className="text-white/50 text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
