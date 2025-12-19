import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Puzzle, ShieldCheck, Infinity } from 'lucide-react';


export default function About() {


    return (
        <section id="about" className="py-20 bg-devx-blue/30 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Decorative Gradient Blob */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-devx-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-devx-purple/20 rounded-full blur-[100px] pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col lg:flex-row gap-16 items-center"
                    >
                        {/* Text Content */}
                        <div className="lg:w-1/2 relative z-10">
                            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                                Who We Are
                            </h2>
                            <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed font-light">
                                <p>
                                    At DevX, we don’t just build software — <span className="text-white font-medium">we build systems that dominate.</span>
                                </p>
                                <p>
                                    Specializing in high-performance web platforms, ERPs, and automation,. We engineer tailored solutions that define the future of your business.
                                </p>
                                <p>
                                    Logic-driven. Design-obsessed. Speed-oriented.
                                    We translate complex business goals into <span className="text-devx-accent">seamless digital realities.</span>
                                </p>
                            </div>
                            <div className="mt-8 h-1.5 w-24 bg-gradient-to-r from-devx-accent to-devx-purple rounded-full"></div>
                        </div>

                        {/* Cards Grid - Bento Box Style */}
                        <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">

                            {/* Card 1 */}
                            <div className="group relative p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-devx-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(77,123,255,0.15)] hover:-translate-y-1 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-devx-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-devx-accent/20 to-transparent border border-devx-accent/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(77,123,255,0.4)] transition-all duration-300">
                                        <Zap className="w-7 h-7 text-white group-hover:text-devx-accent transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-devx-accent transition-colors">Speed & Execution</h3>
                                    <p className="text-sm text-white/60 leading-relaxed">Fast delivery. Zero shortcuts. Disciplined engineering.</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-devx-purple/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(167,139,255,0.15)] hover:-translate-y-1 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-devx-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-devx-purple/20 to-transparent border border-devx-purple/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(167,139,255,0.4)] transition-all duration-300">
                                        <Puzzle className="w-7 h-7 text-white group-hover:text-devx-purple transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-devx-purple transition-colors">Business-First</h3>
                                    <p className="text-sm text-white/60 leading-relaxed">Your logic, your rules. No generic templates.</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="group relative p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-devx-purple/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(167,139,255,0.15)] hover:-translate-y-1 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-devx-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-devx-purple/20 to-transparent border border-devx-purple/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(167,139,255,0.4)] transition-all duration-300">
                                        <ShieldCheck className="w-7 h-7 text-white group-hover:text-devx-purple transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-devx-purple transition-colors">Scalability & Growth</h3>
                                    <p className="text-sm text-white/60 leading-relaxed">Systems that grow with your business, not ones you outgrow</p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="group relative p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-devx-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(77,123,255,0.15)] hover:-translate-y-1 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-devx-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-devx-accent/20 to-transparent border border-devx-accent/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(77,123,255,0.4)] transition-all duration-300">
                                        <Infinity className="w-7 h-7 text-white group-hover:text-devx-accent transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-devx-accent transition-colors">Long-Term Partner</h3>
                                    <p className="text-sm text-white/60 leading-relaxed">We support, optimize, and evolve your ecosystem.</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
