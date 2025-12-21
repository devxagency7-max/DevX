import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick }) {
    return (
        <motion.div
            layoutId={`project-${project.id}`}
            onClick={onClick}
            className="group cursor-pointer"
        >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-devx-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white font-medium">View Case Study</span>
                </div>
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500">
                        {/* Placeholder content since we don't have project specific images */}
                        <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl font-bold">
                            {project.title[0]}
                        </div>
                    </div>
                )}
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-devx-accent transition-colors">{project.title}</h3>
            <p className="text-devx-accent/80 text-sm mb-2">{project.category}</p>
            <p className="text-white/60 line-clamp-2">{project.summary}</p>
        </motion.div>
    );
}
