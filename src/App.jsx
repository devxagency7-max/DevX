import React, { useState, createContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Context
export const AppContext = createContext();

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import FeaturesGrid from './components/FeaturesGrid';
import ServicesGrid from './components/ServicesGrid';
import Portfolio from './components/Portfolio';
import ProcessTimeline from './components/ProcessTimeline';
import ClientsCarousel from './components/ClientsCarousel';
import StartProjectPanel from './components/StartProjectPanel';
import ContactPanel from './components/ContactPanel';
import FloatingSocialIcons from './components/FloatingSocialIcons';
import FloatingContactButtons from './components/FloatingContactButtons';
import MoreProjects from './components/MoreProjects';

import Starfield from './components/Starfield';

export default function App() {
    const [isStartProjectOpen, setIsStartProjectOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <Router>
            <AppContext.Provider
                value={{
                    isStartProjectOpen,
                    setIsStartProjectOpen,
                    isContactOpen,
                    setIsContactOpen
                }}
            >
                <div className="relative min-h-screen bg-devx-dark text-white font-sans selection:bg-devx-accent selection:text-white overflow-x-hidden">
                    <Starfield />

                    <FloatingSocialIcons />
                    <FloatingContactButtons />

                    <AnimatedRoutes />


                    <AnimatePresence>
                        {isStartProjectOpen && (
                            <StartProjectPanel
                                isOpen={isStartProjectOpen}
                                onClose={() => setIsStartProjectOpen(false)}
                            />
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {isContactOpen && (
                            <ContactPanel
                                isOpen={isContactOpen}
                                onClose={() => setIsContactOpen(false)}
                            />
                        )}
                    </AnimatePresence>

                </div>
            </AppContext.Provider>
        </Router>
    );
}

function AnimatedRoutes() {
    const location = useLocation();

    const pageTransition = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 }
    };

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <motion.div {...pageTransition} className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-grow">
                            <Hero />
                            <About />
                            <FeaturesGrid />
                            <ServicesGrid />
                            <Portfolio />
                            <ProcessTimeline />
                            <ClientsCarousel />
                        </main>
                        <Footer />
                    </motion.div>
                } />
                <Route path="/projects" element={
                    <motion.div {...pageTransition}>
                        <MoreProjects />
                    </motion.div>
                } />
            </Routes>
        </AnimatePresence>
    );
}
