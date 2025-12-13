import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, MapPin, Mail, MessageSquare, Phone } from 'lucide-react';

export default function ContactPanel({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
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
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
                className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 z-[70] w-full max-w-2xl bg-gradient-to-b from-slate-900/95 to-black/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl p-8 flex flex-col overflow-y-auto"
            >
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-white tracking-tight">Get in Touch</h2>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors group">
                        <X size={24} className="text-white/70 group-hover:text-white transition-colors" />
                    </button>
                </div>

                {!isSuccess ? (
                    <form onSubmit={handleSubmit} className="flex-grow space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Name</label>
                                <input
                                    required
                                    name="name"
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-devx-accent focus:ring-1 focus:ring-devx-accent outline-none transition-all placeholder:text-white/20 hover:bg-white/10"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">Phone Number</label>
                                <input
                                    required
                                    name="phone"
                                    onChange={handleChange}
                                    type="tel"
                                    placeholder="+20..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-devx-accent focus:ring-1 focus:ring-devx-accent outline-none transition-all placeholder:text-white/20 hover:bg-white/10"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/60 mb-2">Message</label>
                            <textarea
                                required
                                name="message"
                                onChange={handleChange}
                                rows={6}
                                placeholder="Tell us about your project..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-devx-accent focus:ring-1 focus:ring-devx-accent outline-none transition-all placeholder:text-white/20 hover:bg-white/10 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-devx-accent to-blue-600 hover:from-devx-accent/90 hover:to-blue-600/90 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {isSubmitting ? (
                                <span>Sending...</span>
                            ) : (
                                <>
                                    <Send size={20} />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>

                        <div className="pt-8 mt-8 border-t border-white/10 space-y-4">
                            {/* Phone Card */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center space-x-5 hover:bg-white/10 transition-colors group cursor-default">
                                <div className="w-12 h-12 rounded-xl bg-devx-accent/10 flex items-center justify-center group-hover:bg-devx-accent transition-colors duration-300">
                                    <Phone size={22} className="text-devx-accent group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1 font-semibold">Phone</p>
                                    <p className="text-white font-medium text-lg" dir="ltr">+20 110 713 0093</p>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center space-x-5 hover:bg-white/10 transition-colors group cursor-default">
                                <div className="w-12 h-12 rounded-xl bg-devx-accent/10 flex items-center justify-center group-hover:bg-devx-accent transition-colors duration-300">
                                    <Mail size={22} className="text-devx-accent group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1 font-semibold">Email</p>
                                    <p className="text-white font-medium text-lg">devx.agency7@gmail.com</p>
                                </div>
                            </div>

                            {/* Address Card */}
                            <a
                                href="https://maps.app.goo.gl/5c691TAsaufNJpY37"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center space-x-5 hover:bg-white/10 transition-colors group cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-xl bg-devx-accent/10 flex items-center justify-center group-hover:bg-devx-accent transition-colors duration-300">
                                    <MapPin size={22} className="text-devx-accent group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1 font-semibold">Location</p>
                                    <p className="text-white font-medium text-lg">بني سويف مصر</p>
                                </div>
                            </a>
                        </div>
                    </form>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            type="spring"
                            className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-4"
                        >
                            <Send size={40} className="text-green-500" />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                        <p className="text-white/60 text-lg max-w-sm">Thank you for reaching out. We will get back to you within 24 hours.</p>
                        <button onClick={onClose} className="mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-white font-medium transition-all">Close Panel</button>
                    </div>
                )}
            </motion.div>
        </>
    );
}
