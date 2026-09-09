'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Calculate scroll progress
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-content">
                    <Link href="/" className="logo">LUMIÈRE</Link>

                    <div className="desktop-menu">
                        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                        <Link href="/menu" className={pathname === '/menu' ? 'active' : ''}>Menu</Link>
                        <Link href="/reservations" className={pathname === '/reservations' ? 'active' : ''}>Reserve</Link>
                        <Link href="/notices" className={pathname === '/notices' ? 'active' : ''}>Notices</Link>
                        <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
                    </div>

                    <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Scroll Progress Bar */}
                <div className="scroll-progress-container">
                    <div
                        className="scroll-progress-bar"
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <Link href="/" onClick={handleLinkClick}>Home</Link>
                    <Link href="/about" onClick={handleLinkClick}>About</Link>
                    <Link href="/menu" onClick={handleLinkClick}>Menu</Link>
                    <Link href="/reservations" onClick={handleLinkClick}>Reserve</Link>
                    <Link href="/notices" onClick={handleLinkClick}>Notices</Link>
                    <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
                </div>
            )}
        </>
    );
};

export default Header;
