import React, { useState, createContext } from 'react';
import { AnimatePresence } from 'framer-motion';

// Context
export const AppContext = createContext();

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';

import ServicesGrid from './components/ServicesGrid';
import Portfolio from './components/Portfolio';
import ProcessTimeline from './components/ProcessTimeline';
import ClientsCarousel from './components/ClientsCarousel';
import StartProjectPanel from './components/StartProjectPanel';
import ContactPanel from './components/ContactPanel';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingSocialIcons from './components/FloatingSocialIcons';

import Starfield from './components/Starfield';

export default function App() {
    const [isStartProjectOpen, setIsStartProjectOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
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

                <Header />

                <main className="flex-grow">
                    <Hero />
                    <About />

                    <ServicesGrid />
                    <Portfolio />
                    <ProcessTimeline />
                    <ClientsCarousel />
                </main>

                <Footer />

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

                <WhatsAppButton />
                <FloatingSocialIcons />

            </div>
        </AppContext.Provider>
    );
}
