import React, { useEffect, useRef } from 'react';

export default function Starfield() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 10000); // Responsive count
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2, // Small dust-like
                    speedX: (Math.random() - 0.5) * 0.2, // Very slow movement
                    speedY: (Math.random() - 0.5) * 0.2,
                    opacity: Math.random() * 0.5 + 0.1,
                    pulseSpeed: Math.random() * 0.02,
                    pulseOffset: Math.random() * Math.PI * 2
                });
            }
        };

        const drawParticles = () => {
            // Clear with transparency (so it layers over CSS background)
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                // Update position
                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap around screen
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Pulse opacity
                const opacity = p.opacity + Math.sin(Date.now() * 0.001 + p.pulseOffset) * 0.1;
                const clampedOpacity = Math.max(0, Math.min(1, opacity));

                // Draw
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(167, 139, 255, ${clampedOpacity})`; // Light purple/white tint
                ctx.fill();

                // Connect nearby particles (optional constellations effect, very subtle)
                // Kept simple for "Dust" feel as requested
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });

        resizeCanvas();
        createParticles();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ top: 0, left: 0 }}
        />
    );
}
