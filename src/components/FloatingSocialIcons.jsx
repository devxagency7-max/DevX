import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Github, Mail } from 'lucide-react';

export default function FloatingSocialIcons() {
    const socialLinks = [
        { icon: <Facebook size={20} />, href: '#', label: 'Facebook', color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/10' },
        { icon: <Instagram size={20} />, href: '#', label: 'Instagram', color: 'hover:text-pink-500', bg: 'hover:bg-pink-500/10' },
        { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400', bg: 'hover:bg-blue-400/10' },
        { icon: <Mail size={20} />, href: 'mailto:info@devx.com', label: 'Email', color: 'hover:text-devx-accent', bg: 'hover:bg-devx-accent/10' },
    ];

    return (
        <div className="fixed right-3 lg:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 lg:gap-5">
            {socialLinks.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.2)] ${social.color} ${social.bg} group relative`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + (index * 0.1), type: 'spring', stiffness: 100 }}
                    whileHover={{ scale: 1.15, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {social.icon}

                    {/* Tooltip */}
                    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-devx-dark/90 backdrop-blur border border-white/10 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-xl">
                        {social.label}
                    </span>
                </motion.a>
            ))}
        </div>
    );
}
