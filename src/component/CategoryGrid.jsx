import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGrid = () => {
    const categories = [
        {
            id: 1,
            title: "Skincare",
            subtitle: "Clean & Pure",
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop",
            className: "col-span-12 md:col-span-6 lg:col-span-6 row-span-2 min-h-[500px]"
        },
        {
            id: 2,
            title: "Luxury Makeup",
            subtitle: "Enhance Beauty",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=1887&auto=format&fit=crop",
            className: "col-span-12 md:col-span-6 lg:col-span-3 min-h-[240px]"
        },
        {
            id: 3,
            title: "Fragrance",
            subtitle: "Signature Scents",
            image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop",
            className: "col-span-12 md:col-span-6 lg:col-span-3 min-h-[240px]"
        },
        {
            id: 4,
            title: "Bath & Body",
            subtitle: "Spa at Home",
            image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1887&auto=format&fit=crop",
            className: "col-span-12 md:col-span-4 lg:col-span-3 min-h-[240px]"
        },
        {
            id: 5,
            title: "Tools & Brushes",
            subtitle: "Pro Essentials",
            image: "https://images.unsplash.com/photo-1629198774797-2a4fe9734df2?q=80&w=1887&auto=format&fit=crop",
            className: "col-span-12 md:col-span-4 lg:col-span-3 min-h-[240px]"
        },
        {
            id: 6,
            title: "Gift Sets",
            subtitle: "For Loved Ones",
            image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2070&auto=format&fit=crop",
            className: "col-span-12 md:col-span-4 lg:col-span-12 min-h-[200px] flex items-center justify-center"
        }
    ];

    return (
        <section className="h-full px-6 md:px-12 bg-[var(--color-bg-primary)]">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl text-[var(--color-text-primary)] mb-4">
                        Curated Categories
                    </h2>
                    <p className="font-body text-[var(--color-text-secondary)] tracking-wide uppercase text-sm ">
                        Explore Our Essentials
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-4 auto-rows-min">
                    {categories.map((item) => (
                        <Link
                            to={`/category/${item.title.toLowerCase().replace(/ /g, '-')}`}
                            key={item.id}
                            className={`group relative overflow-hidden rounded-[var(--radius-md)] hover:shadow-lg transition-all duration-300 ${item.className}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 object-cover">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                            </div>

                            {/* Text Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10">
                                <span className="font-heading text-[var(--color-porcelain)] text-xs md:text-sm tracking-[0.2em] uppercase mb-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    {item.subtitle}
                                </span>
                                <h3 className="font-heading text-[var(--color-porcelain)] text-2xl md:text-3xl font-bold tracking-tight">
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
