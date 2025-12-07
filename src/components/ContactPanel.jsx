import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, MapPin, Mail, MessageSquare } from 'lucide-react';

export default function ContactPanel({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Mock submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-devx-blue/95 backdrop-blur-xl border-l border-white/10 shadow-2xl p-8 flex flex-col overflow-y-auto"
        >
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <X size={24} className="text-white/70" />
                </button>
            </div>

            {!isSuccess ? (
                <form onSubmit={handleSubmit} className="flex-grow space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">Name</label>
                        <input
                            required
                            name="name"
                            onChange={handleChange}
                            type="text"
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-devx-accent focus:ring-1 focus:ring-devx-accent outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">Email</label>
                        <input
                            required
                            name="email"
                            onChange={handleChange}
                            type="email"
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-devx-accent focus:ring-1 focus:ring-devx-accent outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">Company</label>
                        <input
                            name="company"
                            onChange={handleChange}
                            type="text"
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-devx-accent focus:ring-1 focus:ring-devx-accent outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">Interested In</label>
                        <select
                            name="service"
                            onChange={handleChange}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-devx-accent focus:ring-1 focus:ring-devx-accent outline-none transition-all"
                        >
                            <option value="" className="bg-devx-dark">Select a service...</option>
                            <option value="web" className="bg-devx-dark">Web Development</option>
                            <option value="app" className="bg-devx-dark">Mobile Application</option>
                            <option value="ai" className="bg-devx-dark">AI Solutions</option>
                            <option value="design" className="bg-devx-dark">UI/UX Design</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/60 mb-2">Message</label>
                        <textarea
                            required
                            name="message"
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-devx-accent focus:ring-1 focus:ring-devx-accent outline-none transition-all"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-devx-accent hover:bg-devx-accent/80 text-white font-bold py-4 rounded-lg shadow-[0_4px_20px_rgba(77,123,255,0.3)] transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                    >
                        {isSubmitting ? (
                            <span>Sending...</span>
                        ) : (
                            <>
                                <Send size={18} />
                                <span>Send Message</span>
                            </>
                        )}
                    </button>

                    <div className="pt-8 mt-8 border-t border-white/10 space-y-4">
                        <div className="flex items-center space-x-3 text-white/60">
                            <MapPin size={18} className="text-devx-accent" />
                            <span>Beni Suef, Egypt</span>
                        </div>
                        <div className="flex items-center space-x-3 text-white/60">
                            <Mail size={18} className="text-devx-accent" />
                            <span>contact@devx.com</span>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                        <Send size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-white/60">We'll get back to you within 24 hours.</p>
                    <button onClick={onClose} className="mt-8 text-devx-accent hover:underline">Close Panel</button>
                </div>
            )}
        </motion.div>
    );
}
