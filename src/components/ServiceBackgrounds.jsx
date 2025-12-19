import React from 'react';

// Common Gradient Definitions
const Gradients = () => (
    <defs>
        <linearGradient id="neon-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4D7BFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="neon-purple" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A78BFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4D7BFF" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
    </defs>
);

export const ErpCoreBg = () => (
    <svg className="w-full h-full absolute inset-0 opacity-60 pointer-events-none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <Gradients />
        <circle cx="200" cy="200" r="100" stroke="url(#neon-blue)" strokeWidth="2" fill="none" opacity="0.7" />
        <circle cx="200" cy="200" r="150" stroke="url(#neon-purple)" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="10 5" />
        <circle cx="200" cy="200" r="50" fill="url(#neon-blue)" filter="url(#glow)" opacity="0.6" />
        <path d="M200 50 L200 350 M50 200 L350 200" stroke="white" strokeWidth="0.5" opacity="0.3" />
    </svg>
);

export const FinanceBg = () => (
    <svg className="w-full h-full absolute inset-0 opacity-60 pointer-events-none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <Gradients />
        <path d="M50 350 L120 280 L180 320 L250 150 L350 100" stroke="url(#neon-blue)" strokeWidth="4" fill="none" filter="url(#glow)" />
        <circle cx="350" cy="100" r="10" fill="url(#neon-purple)" filter="url(#glow)" />
        <rect x="100" y="300" width="40" height="100" fill="white" opacity="0.1" />
        <rect x="160" y="250" width="40" height="150" fill="white" opacity="0.1" />
        <rect x="220" y="180" width="40" height="220" fill="white" opacity="0.1" />
    </svg>
);

export const InventoryBg = () => (
    <svg className="w-full h-full absolute inset-0 opacity-60 pointer-events-none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <Gradients />
        <path d="M100 300 L200 350 L300 300 L300 200 L200 150 L100 200 Z" stroke="url(#neon-purple)" strokeWidth="2" fill="none" opacity="0.8" />
        <path d="M200 150 L200 350" stroke="url(#neon-purple)" strokeWidth="2" opacity="0.6" />
        <path d="M200 250 L300 200" stroke="url(#neon-purple)" strokeWidth="2" opacity="0.6" />
        <path d="M200 250 L100 200" stroke="url(#neon-purple)" strokeWidth="2" opacity="0.6" />
        <path d="M130 130 L230 180 L330 130 L230 80 Z" fill="url(#neon-blue)" opacity="0.2" />
    </svg>
);

export const HrBg = () => (
    <svg className="w-full h-full absolute inset-0 opacity-60 pointer-events-none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <Gradients />
        <circle cx="200" cy="200" r="40" stroke="url(#neon-blue)" strokeWidth="2" fill="none" />
        <circle cx="200" cy="100" r="20" fill="url(#neon-purple)" opacity="0.6" />
        <circle cx="100" cy="250" r="20" fill="url(#neon-purple)" opacity="0.6" />
        <circle cx="300" cy="250" r="20" fill="url(#neon-purple)" opacity="0.6" />
        <line x1="200" y1="160" x2="200" y2="120" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="170" y1="220" x2="120" y2="250" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="230" y1="220" x2="280" y2="250" stroke="white" strokeWidth="1" opacity="0.4" />
    </svg>
);

export const OperationsBg = () => (
    <svg className="w-full h-full absolute inset-0 opacity-60 pointer-events-none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <Gradients />
        <circle cx="150" cy="150" r="60" stroke="url(#neon-blue)" strokeWidth="8" strokeDasharray="20 10" fill="none" opacity="0.7" />
        <circle cx="250" cy="250" r="40" stroke="url(#neon-purple)" strokeWidth="6" strokeDasharray="15 8" fill="none" opacity="0.7" />
        <path d="M50 50 L350 350" stroke="white" strokeWidth="1" opacity="0.3" />
    </svg>
);

export const CrmBg = () => (
    <svg className="w-full h-full absolute inset-0 opacity-60 pointer-events-none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <Gradients />
        <circle cx="150" cy="200" r="80" fill="url(#neon-blue)" opacity="0.2" mixBlendMode="screen" />
        <circle cx="250" cy="200" r="80" fill="url(#neon-purple)" opacity="0.2" mixBlendMode="screen" />
        <path d="M150 200 Q200 150 250 200" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
);

export const AnalyticsBg = () => (
    <svg className="w-full h-full absolute inset-0 opacity-60 pointer-events-none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <Gradients />
        <path d="M50 350 Q125 350 200 200 T350 50" stroke="url(#neon-blue)" strokeWidth="3" fill="none" filter="url(#glow)" />
        <path d="M50 350 L350 350 L350 300 M50 300 L50 350" stroke="white" strokeWidth="1" opacity="0.3" />
        <rect x="80" y="280" width="30" height="70" fill="url(#neon-purple)" opacity="0.5" />
        <rect x="140" y="220" width="30" height="130" fill="url(#neon-purple)" opacity="0.6" />
        <rect x="200" y="150" width="30" height="200" fill="url(#neon-purple)" opacity="0.7" />
    </svg>
);
