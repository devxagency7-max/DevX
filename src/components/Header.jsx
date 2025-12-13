import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { AppContext } from '../App';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' }, // Special behavior handled in click
];

export default function Header() {
    const { setIsStartProjectOpen, setIsContactOpen } = useContext(AppContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, name) => {
        e.preventDefault();
        if (name === 'Contact') {
            setIsContactOpen(true);
        } else {
            const element = document.getElementById(name.toLowerCase());
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMobileMenuOpen(false);
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-devx-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="relative group">
                    <div className="absolute -inset-2 bg-devx-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                        src="/assets/devx-logo.png"
                        alt="DevX"
                        className="h-10 w-auto relative z-10 drop-shadow-[0_0_10px_rgba(77,123,255,0.5)]"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.name)}
                            className="text-white/70 hover:text-devx-accent transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA & Mobile Menu Toggle */}
                <div className="flex items-center space-x-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsStartProjectOpen(true)}
                        className="hidden md:block px-6 py-2.5 bg-devx-accent hover:bg-devx-accent/90 text-white text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(77,123,255,0.3)] hover:shadow-[0_0_30px_rgba(77,123,255,0.5)] transition-all"
                    >
                        Start a Project
                    </motion.button>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-devx-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.name)}
                                    className="text-lg text-white/80 hover:text-devx-accent"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/10">
                                <button
                                    onClick={() => {
                                        setIsStartProjectOpen(true);
                                        setMobileMenuOpen(false);
                                    }}
                                    className="w-full py-3 bg-devx-accent text-white font-semibold rounded-lg"
                                >
                                    Start a Project
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
