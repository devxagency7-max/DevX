import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

// Using placeholder images for clients
const clients = [
    { id: 1, name: 'Google', logo: '/assets/devx-logo.png' },
    { id: 2, name: 'Amazon', logo: '/assets/devx-logo.png' },
    { id: 3, name: 'Microsoft', logo: '/assets/devx-logo.png' },
    { id: 4, name: 'Spotify', logo: '/assets/devx-logo.png' },
    { id: 5, name: 'Netflix', logo: '/assets/devx-logo.png' },
    { id: 6, name: 'Airbnb', logo: '/assets/devx-logo.png' },
];

export default function ClientsCarousel() {
    return (
        <section id="clients" className="py-24 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4 opacity-80">Trusted by Industry Leaders</h2>
            </div>

            <Swiper
                modules={[Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                speed={1500} // Faster continuous scroll
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false, // Smoother experience without stopping
                    reverseDirection: true,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    640: { slidesPerView: 3, spaceBetween: 30 },
                    1024: { slidesPerView: 5, spaceBetween: 40 },
                }}
                className="w-full py-12"
            >
                {clients.map((client) => (
                    <SwiperSlide key={client.id} className="w-40! h-40! flex items-center justify-center">
                        {({ isActive }) => (
                            <div
                                className={`
                  w-32 h-32 bg-white/5 rounded-2xl flex items-center justify-center p-6 border border-white/5 transition-all duration-500
                  ${isActive ? 'scale-125 bg-white/10 border-devx-accent shadow-[0_0_30px_rgba(77,123,255,0.3)] z-10' : 'opacity-50'}
                `}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className={`w-full h-auto object-contain filter grayscale ${isActive ? 'grayscale-0' : ''} transition-all`}
                                />
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Testimonials (Simple Integration) */}
            <div className="container mx-auto px-6 mt-16 text-center max-w-3xl">
                <blockquote className="text-xl md:text-2xl font-medium italic text-white/80 leading-relaxed">
                    "DevX transformed our digital presence. Their team didn't just build a website; they built an entire brand experience that resonates with our audience."
                </blockquote>
                <div className="mt-6 flex items-center justify-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-full"></div>
                    <div className="text-left">
                        <div className="font-bold text-white">Sarah Johnson</div>
                        <div className="text-sm text-devx-accent">CTO, TechFlow</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
