'use client';

import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-column">
                    <h3>LUMIÈRE</h3>
                    <p className="footer-tagline">The Eternal Banquet</p>
                    <div className="social-links">
                        <a href="https://instagram.com/asheejajayan" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="https://facebook.com/valentineashvin" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="https://twitter.com/ValentineAshvin" target="_blank" rel="noopener noreferrer" aria-label="X">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <Link href="/" className="footer-link">Home</Link>
                    <Link href="/about" className="footer-link">About</Link>
                    <Link href="/menu" className="footer-link">Menu</Link>
                    <Link href="/reservations" className="footer-link">Reserve</Link>
                    <Link href="/contact" className="footer-link">Contact</Link>
                </div>

                <div className="footer-column">
                    <h4>Contact</h4>
                    <a href="https://www.google.com/maps/search/?api=1&query=11910+76+St+NW+Edmonton" target="_blank" rel="noopener noreferrer" className="footer-link">Address: 11910 76 St NW, Edmonton</a>
                    <a href="mailto:asheejajayan@gmail.com" className="footer-link">Email: asheejajayan@gmail.com</a>
                    <a href="tel:+17803607447" className="footer-link">Phone: +1 780-360-7447</a>
                    <Link href="/notices" className="footer-link">Notice Board</Link>
                    <Link href="/404" className="footer-link">Resurrect</Link>
                </div>

                <div className="footer-column">
                    <h4>Hours</h4>
                    <Link href="/reservations" className="footer-link">Tue - Fri: 6PM - 11PM</Link>
                    <Link href="/reservations" className="footer-link">Saturday: 5PM - 12AM</Link>
                    <Link href="/reservations" className="footer-link">Sunday: 5PM - 10PM</Link>
                    <Link href="/notices" className="footer-link footer-closed">Closed on Mondays & Holidays</Link>
                    <Link href="/404" className="footer-link">I am feeling luck</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} LUMIÈRE Restaurant. All rights reserved.</p>
                <p className="footer-credits">Music by <a href="https://www.bensound.com" target="_blank" rel="noopener noreferrer">Bensound</a></p>
            </div>
        </footer>
    );
};

export default Footer;
