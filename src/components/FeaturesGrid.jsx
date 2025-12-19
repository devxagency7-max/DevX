import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Palette, Server, Brain, Bot, Cloud, CheckCircle2 } from 'lucide-react';

const services = [
    {
        icon: <Laptop />,
        title: "Web Development",
        items: [
            "Frontend Development",
            "Backend Development",
            "Full-Stack Development",
            "Responsive Web Design",
            "Cross-Browser Compatibility",
            "Progressive Web Apps (PWA)",
            "Single Page Applications (SPA)",
            "Web Performance Optimization",
            "Website Maintenance & Support"
        ]
    },
    {
        icon: <Palette />,
        title: "UI / UX",
        items: [
            "UI Design",
            "UX Research",
            "UX Wireframing",
            "Prototyping",
            "Design Systems",
            "User Journey Mapping",
            "Mobile-First Design",
            "Accessibility (WCAG)"
        ]
    },
    {
        icon: <Server />,
        title: "Backend & APIs",
        items: [
            "RESTful APIs",
            "GraphQL APIs",
            "Authentication & Authorization",
            "Database Design",
            "Payment Gateway Integration",
            "Third-Party API Integration",
            "Microservices Architecture"
        ]
    },
    {
        icon: <Brain />,
        title: "AI & Data",
        items: [
            "Data Analysis",
            "Data Visualization",
            "Machine Learning Models",
            "Deep Learning",
            "Predictive Analytics",
            "Recommendation Systems",
            "AI Automation",
            "Chatbots & AI Assistants"
        ]
    },
    {
        icon: <Bot />,
        title: "Automation",
        items: [
            "Workflow Automation",
            "Business Process Automation",
            "Web Scraping",
            "RPA Solutions",
            "No-Code / Low-Code Automation"
        ]
    },
    {
        icon: <Cloud />,
        title: "Cloud & DevOps",
        items: [
            "Cloud Deployment",
            "Server Configuration",
            "CI / CD Pipelines",
            "Docker & Containerization",
            "Hosting & Domain Setup",
            "Performance Monitoring"
        ]
    }
];

export default function FeaturesGrid() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-devx-blue/30 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-devx-purple/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Services</span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
                        We don’t just code; we engineer digital ecosystems. From pixel-perfect frontends to robust AI backends.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-devx-accent/50 hover:shadow-[0_0_40px_rgba(77,123,255,0.15)] transition-all duration-300"
                        >
                            {/* Inner Gradient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-devx-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-devx-accent shadow-inner group-hover:scale-110 group-hover:border-devx-accent/30 transition-all duration-300">
                                        {React.cloneElement(service.icon, { size: 28 })}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-devx-accent transition-colors">{service.title}</h3>
                                </div>

                                <ul className="space-y-3">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start text-white/70 text-sm group/item">
                                            <CheckCircle2 size={16} className="mr-3 text-devx-accent/50 mt-0.5 group-hover/item:text-devx-accent transition-colors" />
                                            <span className="group-hover/item:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
