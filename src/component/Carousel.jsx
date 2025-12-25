import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
            title: "New Collection 2025",
            subtitle: "Elegance in every detail",
            cta: "Shop Now",
            link: "/shop"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
            title: "Winter Exclusives",
            subtitle: "Warmth meets luxury",
            cta: "View Collection",
            link: "/collections/winter"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
            title: "Modern Minimalist",
            subtitle: "Simplicity is the ultimate sophistication",
            cta: "Discover",
            link: "/about"
        }
    ];

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                nextSlide();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [current, isAutoPlaying]);

    return (
        <div
            className="relative w-full h-[80vh] overflow-hidden bg-[var(--color-bg-secondary)] group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Image & Overlay */}
                    <div className="absolute inset-0 bg-black/20 z-10" /> {/* Dark overlay for text readability */}
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-[var(--color-porcelain)] px-4">
                        <h3 className="font-heading text-lg md:text-xl tracking-[0.2em] uppercase mb-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                            {slide.subtitle}
                        </h3>
                        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            {slide.title}
                        </h2>
                        <Link
                            to={slide.link}
                            className="inline-block border border-[var(--color-porcelain)] px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--color-porcelain)] hover:text-[var(--color-text-primary)] transition-all duration-300 opacity-0 animate-fadeInUp"
                            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
                        >
                            {slide.cta}
                        </Link>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 md:left-8 z-30 -translate-y-1/2 p-2 rounded-full border border-white/30 text-white/80 hover:bg-white hover:text-black hover:border-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Previous Slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 md:right-8 z-30 -translate-y-1/2 p-2 rounded-full border border-white/30 text-white/80 hover:bg-white hover:text-black hover:border-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Next Slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-12 h-1 rounded-sm transition-all duration-300 ${index === current ? 'bg-[var(--color-porcelain)]' : 'bg-[var(--color-porcelain)]/40 hover:bg-[var(--color-porcelain)]/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
