import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { AppContext } from '../App';

import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';


export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const { setIsStartProjectOpen } = useContext(AppContext);

    return (
        <section id="portfolio" className="py-24 bg-transparent relative">
            <div className="container mx-auto px-6">
                <div className="mb-16 flex justify-between items-end">
                    <div>
                        <span className="text-devx-accent font-semibold tracking-wider uppercase mb-2 block">Our Work</span>
                        <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
                    </div>
                    {/* <Link to="/projects" className="hidden md:inline-flex px-8 py-3 bg-devx-accent text-white font-bold rounded-full shadow-[0_0_20px_rgba(77,123,255,0.4)] hover:shadow-[0_0_40px_rgba(77,123,255,0.6)] hover:scale-105 transition-all items-center space-x-2 group">
                        <span>More Projects</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center md:hidden">
                <Link to="/projects" className="inline-flex px-8 py-3 bg-devx-accent text-white font-bold rounded-full shadow-[0_0_20px_rgba(77,123,255,0.4)] hover:shadow-[0_0_40px_rgba(77,123,255,0.6)] hover:scale-105 transition-all items-center space-x-2 group">
                    <span>More Projects</span>
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
            </div>


            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={`project-${selectedProject.id}`}
                            className="relative w-full max-w-4xl bg-devx-blue rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white z-20 transition-colors"
                            >
                                <X />
                            </button>

                            <div className="h-64 sm:h-80 relative overflow-hidden">
                                {selectedProject.image ? (
                                    <>
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                                    </>
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-r from-devx-accent/20 to-purple-500/20" />
                                )}
                                <div className="absolute bottom-8 left-8 z-10">
                                    <span className="inline-block px-4 py-1 rounded-full bg-devx-accent text-white text-sm font-semibold mb-4">{selectedProject.category}</span>
                                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                </div>
                            </div>

                            <div className="p-8 sm:p-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 text-white">Project Overview</h3>
                                        <p className="text-white/70 leading-relaxed mb-8">{selectedProject.summary} This solution was designed to scale globally while ensuring maximum security and user engagement.</p>

                                        <h4 className="text-lg font-semibold mb-3 text-white">Key Features</h4>
                                        <ul className="space-y-2 mb-8">
                                            {selectedProject.features.map((feature, i) => (
                                                <li key={i} className="flex items-start text-white/70">
                                                    <span className="mr-3 text-devx-accent">•</span> {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="bg-white/5 rounded-2xl p-6 mb-8">
                                            <h4 className="text-lg font-semibold mb-4 text-white">Impact</h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                {selectedProject.kpis.map((kpi, i) => (
                                                    <div key={i}>
                                                        <p className="text-3xl font-bold text-devx-accent mb-1">{kpi.split(' ')[0]}</p>
                                                        <p className="text-xs text-white/50 uppercase tracking-wide">{kpi.substring(kpi.indexOf(' ') + 1)}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <h4 className="text-lg font-semibold mb-3 text-white">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {selectedProject.stack.map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => { setSelectedProject(null); setIsStartProjectOpen(true); }}
                                            className="w-full py-4 bg-devx-accent hover:bg-devx-accent/90 text-white font-bold rounded-xl transition-all shadow-[0_4px_20px_rgba(77,123,255,0.4)]"
                                        >
                                            Start a Project Like This
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section >
    );
}
