import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Instagram, Facebook, Send } from 'lucide-react';

const socialLinks = [
    {
        icon: Facebook,
        href: 'https://www.facebook.com/profile.php?id=61583095754836',
        label: 'Facebook',
        // Gen Z Blue - Vibrant & Punchy
        className: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white',
        shadow: 'hover:shadow-[0_0_30px_rgba(24,119,242,0.6)]'
    },
    {
        icon: Instagram,
        href: 'https://www.instagram.com/devx.tech7/',
        label: 'Instagram',
        // Instagram Gradient
        className: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:text-white',
        shadow: 'hover:shadow-[0_0_30px_rgba(220,39,67,0.6)]'
    },
    {
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/dev-x-bbb364399/',
        label: 'LinkedIn',
        // Professional but bright blue
        className: 'hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white',
        shadow: 'hover:shadow-[0_0_30px_rgba(0,119,181,0.6)]'
    },
    {
        icon: Send, // Using Send as Telegram icon
        href: 'https://t.me/+201107130093',
        label: 'Telegram',
        // Telegram Blue
        className: 'hover:bg-[#0088cc] hover:border-[#0088cc] hover:text-white',
        shadow: 'hover:shadow-[0_0_30px_rgba(0,136,204,0.6)]'
    },
    {
        icon: Mail,
        href: 'mailto:devx.agency7@gmail.com',
        label: 'Email',
        // Brand Accent
        className: 'hover:bg-devx-accent hover:border-devx-accent hover:text-white',
        shadow: 'hover:shadow-[0_0_30px_rgba(77,123,255,0.6)]'
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 }
};

export default function FloatingSocialIcons() {
    return (
        <motion.div
            className="fixed right-2 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3 md:gap-5 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Top Decorative Line */}
            <motion.div
                className="w-[2px] h-20 bg-gradient-to-b from-transparent to-white/20 rounded-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
            />

            {socialLinks.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className={`relative p-2 md:p-3.5 rounded-xl md:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white/60 transition-all duration-300 group ${social.className} ${social.shadow}`}
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <social.icon strokeWidth={2} className="w-5 h-5 md:w-6 md:h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
            ))}

            {/* Bottom Decorative Line */}
            <motion.div
                className="w-[2px] h-20 bg-gradient-to-t from-transparent to-white/20 rounded-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
            />
        </motion.div>
    );
}
