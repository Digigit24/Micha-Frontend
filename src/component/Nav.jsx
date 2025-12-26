import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/image/micha-logo.jpeg"
const Nav = () => {
    return (
        <div className='h-16 flex justify-between bg-[var(--color-sand)] font-medium items-center w-full '>
            <div className='flex w-[10%] justify-between items-center'>
                <img src={logo} alt="Logo" className="max-h-12 rounded-full size-50" />
            </div>
            <div className='flex w-[40%] justify-between items-center font-heading text-[var(--color-text-primary)]'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='flex w-[15%] gap-10 items-center text-[var(--color-text-primary)]'>
                {/* Wishlist */}
                <button className="hover:text-[var(--color-porcelain)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                    </svg>
                </button>
                {/* Cart */}
                <button className="hover:text-[var(--color-porcelain)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                </button>
                {/* User */}
                <button className="hover:text-[var(--color-porcelain)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="5"></circle>
                        <path d="M20 21a8 8 0 1 0-16 0"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Nav
