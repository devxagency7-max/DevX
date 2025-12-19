import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, Send } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        className="w-6 h-6 md:w-8 md:h-8"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export default function FloatingContactButtons() {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        setIsChatOpen(!isChatOpen);
    };

    const handleSendMessage = () => {
        window.open('https://wa.me/201107130093?text=Hello%20DevX,%20I%20wanna%20inquire%20about...', '_blank');
        setIsChatOpen(false);
    };

    const contactMethods = [
        {
            id: 'phone',
            icon: Phone,
            href: 'tel:+201107130093',
            color: 'bg-devx-accent',
            shadow: 'shadow-[0_4px_14px_rgba(77,123,255,0.5)]',
            label: 'Call Us',
            labelColor: 'text-devx-accent'
        },
        {
            id: 'whatsapp',
            icon: WhatsAppIcon,
            href: '#',
            onClick: handleWhatsAppClick,
            color: 'bg-[#25D366]',
            shadow: 'shadow-[0_4px_14px_rgba(37,211,102,0.5)]',
            label: 'Chat with us',
            labelColor: 'text-green-600'
        }
    ];

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4 items-start">
            {/* Chat Popup */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        className="fixed bottom-24 left-6 w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden z-[60] origin-bottom-left font-sans"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {/* Header */}
                        <div className="bg-[#095E54] p-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <WhatsAppIcon />
                                <span className="font-semibold text-lg">WhatsApp</span>
                            </div>
                            <button
                                onClick={() => setIsChatOpen(false)}
                                className="hover:bg-white/20 p-1 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body - Chat Area */}
                        <div className="bg-[#E5DDD5] p-5 h-64 flex flex-col gap-3 overflow-y-auto bg-opacity-30 relative">
                            {/* Background Pattern Hint */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}></div>

                            {/* Messages */}
                            <motion.div
                                className="bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm text-gray-800 text-sm max-w-[85%] self-start relative z-10"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Hello 👋, welcome to opream
                                <span className="text-[10px] text-gray-400 block text-right mt-1">10:00 AM</span>
                            </motion.div>

                            <motion.div
                                className="bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm text-gray-800 text-sm max-w-[85%] self-start relative z-10"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Can we help you?
                                <span className="text-[10px] text-gray-400 block text-right mt-1">10:01 AM</span>
                            </motion.div>
                        </div>

                        {/* Footer - Send Button */}
                        <div className="p-3 bg-white border-t border-gray-100">
                            <button
                                onClick={handleSendMessage}
                                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg"
                            >
                                <Send size={18} />
                                Send Messages
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 1
                }}
                className="flex flex-col gap-4 items-start"
            >
                {contactMethods.map((method) => (
                    <div
                        key={method.id}
                        className="flex items-center gap-2"
                        onMouseEnter={() => setHoveredButton(method.id)}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        <AnimatePresence>
                            {/* Only show tooltip if chat is NOT open, or for the phone button */}
                            {hoveredButton === method.id && (!isChatOpen || method.id !== 'whatsapp') && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10, width: 0 }}
                                    animate={{ opacity: 1, x: 0, width: 'auto' }}
                                    exit={{ opacity: 0, x: -10, width: 0 }}
                                    className={`overflow-hidden whitespace-nowrap bg-white ${method.labelColor} px-4 py-2 rounded-full shadow-lg font-semibold text-sm hidden md:block`}
                                >
                                    {method.label}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {method.id === 'whatsapp' ? (
                            <motion.button
                                onClick={method.onClick}
                                className={`${method.color} text-white p-3 md:p-4 rounded-full ${method.shadow} flex items-center justify-center relative group`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className={`absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:animate-ping`}></div>
                                <method.icon />
                            </motion.button>
                        ) : (
                            <motion.a
                                href={method.href}
                                className={`${method.color} text-white p-3 md:p-4 rounded-full ${method.shadow} flex items-center justify-center relative group`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className={`absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:animate-ping`}></div>
                                <method.icon size={24} className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                            </motion.a>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
