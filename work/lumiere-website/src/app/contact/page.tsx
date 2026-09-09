'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, BookOpen, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import PopularTimes from '@/components/PopularTimes';
import { notices, specialHours } from '@/data/notices';
import '@/styles/Contact.css';

export default function Contact() {
    const [status, setStatus] = useState('Checking...');
    const [statusColor, setStatusColor] = useState('#f0f0f0');

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();
            const minutes = now.getMinutes();
            const currentTime = hour + minutes / 60;

            const dateString = now.toLocaleDateString('en-CA');
            const activeClosure = notices.find(notice => notice.closureDate === dateString);

            if (activeClosure) {
                setStatus('Closed');
                setStatusColor('#ff4444');
                return;
            }

            const activeSpecial = specialHours.find(special => special.date === dateString);
            let ranges: { open: number; close: number }[] = [];

            if (activeSpecial) {
                ranges = activeSpecial.ranges;
            } else {
                if (day >= 2 && day <= 5) ranges = [{ open: 18, close: 23 }];
                else if (day === 6) ranges = [{ open: 17, close: 24 }];
                else if (day === 0) ranges = [{ open: 17, close: 22 }];
            }

            let isOpen = false;
            let isClosingSoon = false;
            let isOpeningSoon = false;

            for (const range of ranges) {
                if (currentTime >= range.open && currentTime < range.close) {
                    isOpen = true;
                    if (currentTime >= range.close - 1) isClosingSoon = true;
                    break;
                }
                if (currentTime >= range.open - 1 && currentTime < range.open) {
                    isOpeningSoon = true;
                }
            }

            if (isOpen) {
                setStatus('Open');
                setStatusColor('#4caf50');
                if (isClosingSoon) {
                    setStatus('Closing Soon');
                    setStatusColor('#ff9800');
                }
            } else {
                setStatus('Closed');
                setStatusColor('#ff4444');
                if (isOpeningSoon) {
                    setStatus('Opening Soon');
                    setStatusColor('#2196f3');
                }
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1>Contact Us</h1>
                    <p>We&apos;d love to hear from you.</p>
                </motion.div>
            </div>

            <div className="container contact-container">
                <motion.div
                    className="contact-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div className="contact-info-card" variants={itemVariants}>
                        <a href="geo:0,0?q=11910+76+St+NW,+Edmonton,+AB+T5B+2C7" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <div className="icon-wrapper"><MapPin size={32} /></div>
                        </a>
                        <h3>Location</h3>
                        <p>
                            <a href="geo:0,0?q=11910+76+St+NW,+Edmonton,+AB+T5B+2C7" target="_blank" rel="noopener noreferrer">
                                11910 76 St NW,<br />Edmonton, AB T5B 2C7
                            </a>
                        </p>
                    </motion.div>

                    <motion.div className="contact-info-card" variants={itemVariants}>
                        <a href="tel:+17803607447" className="icon-link">
                            <div className="icon-wrapper"><Phone size={32} /></div>
                        </a>
                        <h3>Phone</h3>
                        <p>
                            <a href="tel:+17803607447">+1 780-360-7447</a>
                        </p>
                    </motion.div>

                    <motion.div className="contact-info-card" variants={itemVariants}>
                        <a href="mailto:asheejajayan@gmail.com" className="icon-link">
                            <div className="icon-wrapper"><Mail size={32} /></div>
                        </a>
                        <h3>Email</h3>
                        <p>
                            <a href="mailto:asheejajayan@gmail.com">asheejajayan@gmail.com</a>
                        </p>
                    </motion.div>

                    <motion.div className="contact-info-card" variants={itemVariants}>
                        <Link href="/journal" className="icon-link">
                            <div className="icon-wrapper"><BookOpen size={32} /></div>
                        </Link>
                        <h3>The Journal</h3>
                        <p>Chef&apos;s stories, recipes<br />& culinary insights</p>
                    </motion.div>

                    <motion.div className="contact-info-card" variants={itemVariants}>
                        <a href="#gathering" className="icon-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="icon-wrapper"><Clock size={32} /></div>
                        </a>
                        <h3>Status</h3>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: statusColor }}>
                            <a href="#gathering" style={{ textDecoration: 'none', color: 'inherit' }}>
                                {status}
                            </a>
                        </p>
                    </motion.div>

                    <motion.div className="contact-info-card" variants={itemVariants}>
                        <Link href="/blog" className="icon-link">
                            <div className="icon-wrapper"><MessageSquare size={32} /></div>
                        </Link>
                        <h3>The Lounge</h3>
                        <p>Rate dishes, share photos<br />& join the conversation</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    id="gathering"
                    className="map-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <PopularTimes />
                </motion.div>
            </div>
        </div>
    );
}
