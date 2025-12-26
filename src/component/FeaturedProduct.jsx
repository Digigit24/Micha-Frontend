import React from 'react';
import Card from './Card';
import { cosmeticsData } from '../data/cosmeticsData';

const FeaturedProduct = () => {
    // We'll display all products as requested originally.

    return (
        <section className="py-16 px-6 md:px-12 bg-[var(--color-bg-primary)]">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-12">
                    <span className="font-body text-[var(--color-gold-primary)] text-sm uppercase tracking-[0.2em] font-bold block mb-3">
                        Our Collection
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-text-primary)] mb-6">
                        Featured Products
                    </h2>
                    <p className="font-body text-[var(--color-text-secondary)] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Discover our curated selection of premium cosmetics, designed to enhance your natural beauty.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cosmeticsData.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] px-8 py-3 rounded-full font-bold hover:bg-[var(--color-gold-primary)] transition-colors duration-300 uppercase tracking-wider text-xs">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;
