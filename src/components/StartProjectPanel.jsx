import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, Sparkles, Code, Rocket, Globe } from 'lucide-react';

const steps = [
    { id: 1, title: 'Contact Info' },
    { id: 2, title: 'Project Details' },
    { id: 3, title: 'Budget & Timeline' }
];

export default function StartProjectPanel({ isOpen, onClose }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '', email: '', company: '',
        projectType: '', description: '',
        budget: '', timeline: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleNext = () => {
        if (currentStep < 3) setCurrentStep(c => c + 1);
        else handleSubmit();
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(c => c - 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const containerVariants = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: '0%', opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
        exit: { x: '100%', opacity: 0 }
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex justify-end backdrop-blur-sm bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={onClose}></div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full md:w-[800px] h-full bg-devx-dark border-l border-white/10 shadow-2xl flex flex-col md:flex-row overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 p-2 text-white/50 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-all"
                >
                    <X size={24} />
                </button>

                {/* Left Panel - Info */}
                <div className="hidden md:flex flex-col justify-between w-1/3 bg-devx-blue/10 p-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-devx-accent/10 to-transparent"></div>

                    <div className="relative z-10">
                        <div className="flex items-center space-x-2 text-devx-accent mb-6">
                            <Sparkles size={20} />
                            <span className="font-semibold tracking-wide">THE PROCESS</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Let's Build the Future.</h2>
                        <p className="text-white/60 text-sm leading-relaxed">
                            We partner with visionaries to create digital experiences that define the next generation of the web.
                        </p>
                    </div>

                    <div className="relative z-10 space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="p-2 bg-white/5 rounded-lg text-devx-accent"><Globe size={20} /></div>
                            <div>
                                <h4 className="font-semibold text-sm">Global Standards</h4>
                                <p className="text-xs text-white/50 mt-1">World-class engineering practices.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-2 bg-white/5 rounded-lg text-devx-accent"><Code size={20} /></div>
                            <div>
                                <h4 className="font-semibold text-sm">Clean Code</h4>
                                <p className="text-xs text-white/50 mt-1">Scalable, maintainable architecture.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-2 bg-white/5 rounded-lg text-devx-accent"><Rocket size={20} /></div>
                            <div>
                                <h4 className="font-semibold text-sm">Rapid Delivery</h4>
                                <p className="text-xs text-white/50 mt-1">From concept to launch in record time.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="flex-1 p-8 md:p-12 overflow-y-auto relative no-scrollbar">
                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400">
                                <Check size={40} />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">Request Received!</h3>
                            <p className="text-white/60 max-w-xs mx-auto mb-8">
                                Our team will review your project details and get back to you within 24 hours.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                            >
                                Close Panel
                            </button>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col">
                            {/* Progress Bar */}
                            <div className="mb-10">
                                <div className="flex justify-between mb-2">
                                    {steps.map((step) => (
                                        <div
                                            key={step.id}
                                            className={`text-xs font-medium tracking-wide ${currentStep >= step.id ? 'text-devx-accent' : 'text-white/30'}`}
                                        >
                                            0{step.id} {step.title}
                                        </div>
                                    ))}
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-devx-accent"
                                        initial={{ width: '0%' }}
                                        animate={{ width: `${(currentStep / 3) * 100}%` }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </div>

                            <form className="flex-grow space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <AnimatePresence mode="wait">
                                    {currentStep === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="space-y-4">
                                                <label className="block text-sm font-medium text-white/70">Full Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-devx-accent focus:outline-none focus:ring-1 focus:ring-devx-accent transition-all"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="block text-sm font-medium text-white/70">Email Address</label>
                                                <input
                                                    type="email"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-devx-accent focus:outline-none focus:ring-1 focus:ring-devx-accent transition-all"
                                                    placeholder="john@company.com"
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="block text-sm font-medium text-white/70">Company Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-devx-accent focus:outline-none focus:ring-1 focus:ring-devx-accent transition-all"
                                                    placeholder="Acme Inc."
                                                    value={formData.company}
                                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStep === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="space-y-4">
                                                <label className="block text-sm font-medium text-white/70">What are you building?</label>
                                                <select
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-devx-accent focus:outline-none focus:ring-1 focus:ring-devx-accent transition-all appearance-none"
                                                    value={formData.projectType}
                                                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                                                >
                                                    <option value="" className="bg-devx-dark">Select Project Type</option>
                                                    <option value="web" className="bg-devx-dark">Web Application</option>
                                                    <option value="mobile" className="bg-devx-dark">Mobile App</option>
                                                    <option value="ecommerce" className="bg-devx-dark">E-Commerce</option>
                                                    <option value="ai" className="bg-devx-dark">AI Integration</option>
                                                </select>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="block text-sm font-medium text-white/70">Project Description</label>
                                                <textarea
                                                    className="w-full h-40 bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-devx-accent focus:outline-none focus:ring-1 focus:ring-devx-accent transition-all resize-none"
                                                    placeholder="Tell us about your vision..."
                                                    value={formData.description}
                                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStep === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <div className="space-y-4">
                                                <label className="block text-sm font-medium text-white/70">Estimated Budget</label>
                                                <select
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-devx-accent focus:outline-none focus:ring-1 focus:ring-devx-accent transition-all appearance-none"
                                                    value={formData.budget}
                                                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                                >
                                                    <option value="" className="bg-devx-dark">Select Budget Range</option>
                                                    <option value="10-20k" className="bg-devx-dark">$10k - $20k</option>
                                                    <option value="20-50k" className="bg-devx-dark">$20k - $50k</option>
                                                    <option value="50-100k" className="bg-devx-dark">$50k - $100k</option>
                                                    <option value="100k+" className="bg-devx-dark">$100k+</option>
                                                </select>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="block text-sm font-medium text-white/70">Timeline Expectation</label>
                                                <select
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-devx-accent focus:outline-none focus:ring-1 focus:ring-devx-accent transition-all appearance-none"
                                                    value={formData.timeline}
                                                    onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                                                >
                                                    <option value="" className="bg-devx-dark">Select Timeline</option>
                                                    <option value="1-2m" className="bg-devx-dark">1-2 Months</option>
                                                    <option value="3-6m" className="bg-devx-dark">3-6 Months</option>
                                                    <option value="6m+" className="bg-devx-dark">6+ Months</option>
                                                </select>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>

                            <div className="mt-8 flex justify-between">
                                <button
                                    onClick={handleBack}
                                    className={`text-white/50 hover:text-white transition-colors ${currentStep === 1 ? 'invisible' : 'visible'}`}
                                >
                                    Back
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={isSubmitting}
                                    className="px-8 py-3 bg-devx-accent hover:bg-devx-accent/90 text-white font-semibold rounded-full flex items-center space-x-2 transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <span>Processing...</span>
                                    ) : (
                                        <>
                                            <span>{currentStep === 3 ? 'Submit Project' : 'Next Step'}</span>
                                            {currentStep !== 3 && <ArrowRight size={18} />}
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
