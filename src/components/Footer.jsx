import React from 'react';
import { Facebook, Instagram, Linkedin, Github, Mail, Phone } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Instagram size={20} />, href: 'https://www.instagram.com/devx.tech7/', label: 'Instagram' },
        { icon: <Facebook size={20} />, href: 'https://www.facebook.com/profile.php?id=61583095754836', label: 'Facebook' },
        { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/dev-x-bbb364399/', label: 'LinkedIn' },
        { icon: <Mail size={20} />, href: 'mailto:devx.agency7@gmail.com', label: 'Email' },
    ];

    return (
        <footer id="contact" className="bg-devx-blue border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-devx-accent/50 blur-[100px]"></div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <img src="/assets/devx-logo.png" alt="DevX" className="h-8 w-auto mb-6 opacity-80" />
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            We build intelligent digital experiences that define the future.
                            Based in Beni Suef, Egypt.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-devx-accent hover:text-white hover:shadow-[0_0_15px_rgba(77,123,255,0.4)] transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-3 text-sm text-white/50">
                            <li><a href="#" className="hover:text-devx-accent transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-devx-accent transition-colors">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-devx-accent transition-colors">AI Solutions</a></li>
                            <li><a href="#" className="hover:text-devx-accent transition-colors">UI/UX Design</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-white/50">
                            <li><a href="#" className="hover:text-devx-accent transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-devx-accent transition-colors">Portfolio</a></li>
                            <li><a href="#" className="hover:text-devx-accent transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-devx-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-white/50">
                            <li><a href="#" className="hover:text-devx-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-devx-accent transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/30 text-xs">
                        &copy; {currentYear} DevX. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-2 mt-4 md:mt-0">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-white/40 text-xs">All Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
