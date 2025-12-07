import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ChevronRight, Upload } from 'lucide-react';

const steps = [
    { id: 1, title: 'Project Details' },
    { id: 2, title: 'Scope & Budget' },
    { id: 3, title: 'Contact Info' },
];

export default function StartProjectPanel({ isOpen, onClose }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Focus trap could be implemented here with useEffect

    const handleNext = () => {
        if (currentStep < steps.length) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Mock submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full md:w-[80vw] lg:w-[70vw] bg-devx-dark border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden"
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 text-white/50 hover:text-white transition-colors"
            >
                <X size={32} />
            </button>

            {/* Left Column: Process Summary */}
            <div className="hidden md:flex w-1/3 bg-devx-blue p-12 flex-col justify-between relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 -left-10 w-64 h-64 bg-devx-accent rounded-full blur-[100px]"></div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-8">How We Work</h2>
                    <div className="space-y-8">
                        {[
                            { title: 'Discovery', desc: 'We dive deep into your goals and challenges.' },
                            { title: 'Strategy', desc: 'We blueprint the perfect technical solution.' },
                            { title: 'Build', desc: 'Our experts craft your product with precision.' },
                            { title: 'Iterate', desc: 'We refine and scale based on real feedback.' },
                        ].map((step, idx) => (
                            <div key={idx} className="relative pl-6 border-l-2 border-white/10">
                                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-devx-dark ${idx === 0 ? 'bg-devx-accent border-devx-accent' : 'bg-white/20'}`}></div>
                                <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                                <p className="text-white/50 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <p className="text-white/40 text-sm">Need help instantly?</p>
                    <a href="mailto:project@devx.com" className="text-devx-accent hover:underline">project@devx.com</a>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-devx-dark relative">
                {!isSuccess ? (
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto h-full flex flex-col">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something <span className="text-devx-accent">Extraordinary</span></h2>
                            <div className="flex items-center space-x-2 text-sm text-white/50">
                                <span>Step {currentStep} of {steps.length}:</span>
                                <span className="text-white font-medium">{steps[currentStep - 1].title}</span>
                            </div>
                            {/* Progress Bar */}
                            <div className="w-full h-1 bg-white/10 mt-4 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                                    className="h-full bg-devx-accent"
                                />
                            </div>
                        </div>

                        <div className="flex-grow">
                            {currentStep === 1 && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                    <div>
                                        <label className="block text-sm text-white/70 mb-2">Project Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-devx-accent focus:outline-none focus:ring-1 focus:ring-devx-accent transition-all" placeholder="e.g. NextGen SaaS Platform" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-white/70 mb-2">Project Description</label>
                                        <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-devx-accent focus:outline-none focus:ring-1 focus:ring-devx-accent transition-all" placeholder="Tell us about your vision..."></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-white/70 mb-2">Upload Attachments (Optional)</label>
                                        <div className="border-2 border-dashed border-white/10 rounded-lg p-6 flex flex-col items-center justify-center text-white/40 hover:border-devx-accent/50 hover:bg-white/5 transition-all cursor-pointer">
                                            <Upload className="mb-2" />
                                            <span className="text-sm">Drag files here or click to browse</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                    <div>
                                        <label className="block text-sm text-white/70 mb-4">Estimated Budget (USD)</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['<$5k', '$5k - $15k', '$15k - $50k', '$50k+'].map(budget => (
                                                <label key={budget} className="cursor-pointer group">
                                                    <input type="radio" name="budget" className="hidden peer" />
                                                    <div className="border border-white/10 rounded-lg p-4 text-center text-white/60 peer-checked:border-devx-accent peer-checked:bg-devx-accent/10 peer-checked:text-devx-accent transition-all hover:bg-white/5">
                                                        {budget}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-white/70 mb-4">Scope Checklist</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['Web Development', 'Mobile App', 'AI Integration', 'UI/UX Design', 'Cloud Setup', 'Maintenance'].map(item => (
                                                <label key={item} className="flex items-center space-x-3 cursor-pointer">
                                                    <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-white/5 text-devx-accent focus:ring-devx-accent" />
                                                    <span className="text-white/80">{item}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm text-white/70 mb-2">Name</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-devx-accent focus:outline-none transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-white/70 mb-2">Company</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-devx-accent focus:outline-none transition-all" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-white/70 mb-2">Email</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-devx-accent focus:outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-white/70 mb-2">Phone (Optional)</label>
                                        <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-devx-accent focus:outline-none transition-all" />
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <div className="pt-8 flex items-center justify-between">
                            {currentStep > 1 ? (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="px-6 py-3 text-white/60 hover:text-white transition-colors"
                                >
                                    Back
                                </button>
                            ) : <div></div>}

                            {currentStep < steps.length ? (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="group flex items-center px-8 py-3 bg-white text-devx-dark font-bold rounded-lg hover:bg-white/90 transition-all"
                                >
                                    Next Step <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center px-8 py-3 bg-devx-accent text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(77,123,255,0.5)] transition-all disabled:opacity-70"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Launch Project'}
                                </button>
                            )}
                        </div>
                    </form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center space-y-6"
                    >
                        <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
                            <Check size={48} />
                        </div>
                        <h2 className="text-4xl font-bold">Proposal Received!</h2>
                        <p className="text-white/60 max-w-md">
                            Thanks for sharing your vision. Our team is already analyzing your requirements and will reach out within 24 hours.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-8 py-3 border border-white/10 rounded-lg hover:bg-white/5 transition-all mt-8"
                        >
                            Return to Homepage
                        </button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
