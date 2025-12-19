import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactPanel({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',

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
            className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-devx-blue/95 backdrop-blur-xl border-l border-white/10 shadow-2xl p-8 flex flex-col overflow-y-auto"
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <X size={24} className="text-white/70" />
                </button>
            </div>

            {/* Top Image */}
            <div className="w-full mb-8">
                <img
                    src="/assets/conact_us.png"
                    alt="Contact Us"
                    className="w-full h-48 object-cover rounded-xl border border-white/10 shadow-lg"
                />
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Email Card */}
                <a
                    href="mailto:devx.agency7@gmail.com"
                    className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 hover:border-devx-accent/50 transition-all flex flex-col items-center text-center group"
                >
                    <div className="bg-devx-accent/10 p-3 rounded-full mb-3 group-hover:bg-devx-accent/20 transition-colors">
                        <Mail size={20} className="text-devx-accent" />
                    </div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-xs text-white/60 break-all">devx.agency7@gmail.com</p>
                </a>

                {/* Phone Card */}
                <a
                    href="tel:+201107130093"
                    className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 hover:border-devx-accent/50 transition-all flex flex-col items-center text-center group"
                >
                    <div className="bg-devx-accent/10 p-3 rounded-full mb-3 group-hover:bg-devx-accent/20 transition-colors">
                        <Phone size={20} className="text-devx-accent" />
                    </div>
                    <h3 className="font-bold text-white mb-1">Phone</h3>
                    <p className="text-xs text-white/60">+20 110 713 0093</p>
                </a>

                {/* Location Card */}
                <a
                    href="https://maps.app.goo.gl/QpuQGiK8heiBfKa88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 hover:border-devx-accent/50 transition-all flex flex-col items-center text-center group"
                >
                    <div className="bg-devx-accent/10 p-3 rounded-full mb-3 group-hover:bg-devx-accent/20 transition-colors">
                        <MapPin size={20} className="text-devx-accent" />
                    </div>
                    <h3 className="font-bold text-white mb-1">Location</h3>
                    <p className="text-xs text-white/60">Beni Suef, Egypt</p>
                </a>
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
                        <label className="block text-sm font-medium text-white/60 mb-2">Message</label>
                        <textarea
                            required
                            name="message"
                            onChange={(e) => {
                                handleChange(e);
                                e.target.style.height = 'auto';
                                e.target.style.height = e.target.scrollHeight + 'px';
                            }}
                            rows={2}
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-devx-accent focus:ring-1 focus:ring-devx-accent outline-none transition-all resize-none overflow-hidden"
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

                    <div className="pt-8 mt-8 border-t border-white/10">
                        <p className="text-center text-white/40 text-sm">We typically respond within 2 hours during business days.</p>
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
