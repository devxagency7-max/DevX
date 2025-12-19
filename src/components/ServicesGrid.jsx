import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe, Smartphone, Briefcase, Brain, Puzzle, Rocket, Headphones,
    Layers, DollarSign, Package, Users, Factory, HeartHandshake, PieChart, CheckCircle2
} from 'lucide-react';
import { ErpCoreBg, FinanceBg, InventoryBg, HrBg, OperationsBg, CrmBg, AnalyticsBg } from './ServiceBackgrounds';

const generalServices = [
    {
        icon: <Globe />,
        title: "Web Services",
        items: [
            "Website Design & Development",
            "Company Portfolio Websites",
            "Landing Pages",
            "Custom Web Applications",
            "Admin Dashboards",
            "SaaS Platforms"
        ]
    },
    {
        icon: <Smartphone />,
        title: "Mobile & Systems",
        items: [
            "Mobile-Friendly Web Apps",
            "Cross-Platform Solutions",
            "Internal Business Systems",
            "CRM Systems",
            "ERP Systems"
        ]
    },
    {
        icon: <Briefcase />,
        title: "Business Solutions",
        items: [
            "Startup MVP Development",
            "Business Automation Solutions",
            "Digital Transformation",
            "Custom Software Solutions",
            "Technical Consulting"
        ]
    },
    {
        icon: <Brain />,
        title: "Data & AI Services",
        items: [
            "Data Analysis Reports",
            "AI Model Development",
            "Business Intelligence Dashboards",
            "Data-Driven Decision Support",
            "Automation with AI"
        ]
    },
    {
        icon: <Puzzle />,
        title: "Integrations",
        items: [
            "Payment Systems Integration",
            "API Integrations",
            "Email & SMS Services",
            "Analytics Tools Integration",
            "Third-Party Platforms"
        ]
    },
    {
        icon: <Rocket />,
        title: "Performance & Growth",
        items: [
            "Website Optimization",
            "Speed & Performance Tuning",
            "SEO-Friendly Development",
            "Conversion Rate Optimization (CRO)"
        ]
    },
    {
        icon: <Headphones />,
        title: "Support & Maintenance",
        items: [
            "Website Maintenance",
            "Bug Fixing",
            "Feature Enhancements",
            "Long-Term Technical Support",
            "System Monitoring"
        ]
    }
];

const erpServices = [
    {
        icon: <Layers />,
        Background: ErpCoreBg,
        title: "ERP Core",
        items: [
            "ERP System Design",
            "ERP Architecture Planning",
            "Custom ERP Development",
            "Modular ERP Systems",
            "Scalable ERP Solutions",
            "Cloud-Based ERP",
            "On-Premise ERP"
        ]
    },
    {
        icon: <DollarSign />,
        Background: FinanceBg,
        title: "Finance & Accounting",
        items: [
            "Accounting Modules",
            "Financial Reporting",
            "General Ledger (GL)",
            "Accounts Payable & Receivable",
            "Invoicing Systems",
            "Tax Management",
            "Budgeting & Forecasting"
        ]
    },
    {
        icon: <Package />,
        Background: InventoryBg,
        title: "Inventory & Supply Chain",
        items: [
            "Inventory Management Systems",
            "Stock Tracking",
            "Warehouse Management",
            "Supply Chain Automation",
            "Procurement Systems",
            "Vendor Management"
        ]
    },
    {
        icon: <Users />,
        Background: HrBg,
        title: "HR & Payroll",
        items: [
            "HR Management Systems (HRMS)",
            "Employee Records",
            "Attendance & Leave Management",
            "Payroll Systems",
            "Performance Evaluation",
            "Recruitment Modules"
        ]
    },
    {
        icon: <Factory />,
        Background: OperationsBg,
        title: "Operations & Manufacturing",
        items: [
            "Production Planning",
            "Manufacturing ERP",
            "Bill of Materials (BOM)",
            "Quality Control Systems",
            "Maintenance Management"
        ]
    },
    {
        icon: <HeartHandshake />,
        Background: CrmBg,
        title: "CRM (Integrated)",
        items: [
            "Customer Relationship Management",
            "Sales Pipeline Management",
            "Lead & Opportunity Tracking",
            "Customer Support Modules",
            "Customer Analytics"
        ]
    },
    {
        icon: <PieChart />,
        Background: AnalyticsBg,
        title: "Reporting & Analytics",
        items: [
            "ERP Dashboards",
            "KPI Tracking",
            "Business Intelligence (BI)",
            "Custom Reports",
            "Real-Time Data Monitoring"
        ]
    }
];

const ServiceCard = ({ service, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-devx-accent/50 hover:shadow-[0_0_40px_rgba(77,123,255,0.15)] transition-all duration-300 flex flex-col h-full"
    >
        {/* Inner Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-devx-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none"></div>
        {/* Background Image/SVG */}
        {service.Background && (
            <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-100 pointer-events-none">
                <service.Background />
            </div>
        )}

        <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-devx-accent shadow-inner group-hover:scale-110 group-hover:border-devx-accent/30 transition-all duration-300 shrink-0">
                    {React.cloneElement(service.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-devx-accent transition-colors">{service.title}</h3>
            </div>

            <ul className="space-y-3 flex-grow">
                {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-white/70 text-sm group/item">
                        <CheckCircle2 size={16} className="mr-3 text-devx-accent/50 mt-0.5 group-hover/item:text-devx-accent transition-colors shrink-0" />
                        <span className="group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

export default function ServicesGrid() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-devx-blue/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-devx-purple/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* ERP Section */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-devx-accent to-devx-purple">Products</span>
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                            Comprehensive Enterprise Resource Planning modules to unify your workflow.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {erpServices.map((service, idx) => (
                            <ServiceCard key={idx} service={service} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
