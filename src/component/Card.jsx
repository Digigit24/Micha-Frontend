import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ product }) => {
    return (
        <Link
            to={`/product/${product.id}`}
            className='bg-[var(--color-bg-primary)] shadow-sm hover:shadow-xl border border-[var(--color-border-light)] rounded-lg flex flex-col h-[450px] overflow-hidden transition-all duration-500 hover:-translate-y-1 block group'
        >
            {/* IMAGE SECTION - 50% of card */}
            <div className='h-1/2 w-full overflow-hidden bg-[var(--color-bg-secondary)] relative'>
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className='h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700'
                />
                {/* Discount Badge */}
                {product.discount > 0 && (
                    <div className="absolute top-3 right-3 bg-[var(--color-gold-primary)] text-[var(--color-text-inverse)] px-2.5 py-1 text-[10px] uppercase tracking-widest rounded-full font-bold shadow-lg">
                        {product.discount}% OFF
                    </div>
                )}
            </div>

            {/* CONTENT SECTION - 50% of card */}
            <div className='h-1/2 p-6 flex flex-col justify-between bg-[var(--color-bg-primary)] transition-colors duration-300'>

                <div>
                    {/* Brand/Category Tag */}
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-primary)] font-bold mb-2 block">
                        {product.category || 'Premium Beauty'}
                    </span>

                    <h2 className='font-heading text-lg text-[var(--color-text-primary)] leading-tight line-clamp-2 group-hover:text-[var(--color-gold-primary)] transition-colors'>
                        {product.title}
                    </h2>

                    <p className='font-body text-xs text-[var(--color-text-secondary)] mt-3 line-clamp-3 leading-relaxed'>
                        {product.description}
                    </p>
                </div>

                {/* Price and Action Section */}
                <div className='flex items-center justify-between mt-4 border-t border-[var(--color-border-light)] pt-4'>
                    <div className="flex flex-col">
                        <p className='font-bold text-lg text-[var(--color-text-primary)]'>
                            ₹{product.price.toLocaleString('en-IN')}
                        </p>
                        <span className="text-[10px] text-green-600 font-bold">Inclusive of all taxes</span>
                    </div>

                    <div className='bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] w-10 h-10 flex items-center justify-center rounded-full group-hover:bg-[var(--color-gold-primary)] transition-all duration-300 shadow-md'>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default Card
