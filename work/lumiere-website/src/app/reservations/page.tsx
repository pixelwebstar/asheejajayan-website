'use client';

import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import '@/styles/Reservations.css';

interface FormData {
    name: string;
    email: string;
    date: string;
    time: string;
    guests: number;
    requests: string;
    website_url: string;
}

export default function Reservations() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: 2,
        requests: '',
        website_url: ''
    });

    const getMinDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    };

    const getMaxDate = () => {
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 6);
        return maxDate.toISOString().split('T')[0];
    };

    const isValidTime = (time: string) => {
        const [hours] = time.split(':').map(Number);
        return hours >= 17 && hours <= 23;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        if (formData.website_url) {
            setLoading(false);
            return;
        }

        if (!isValidTime(formData.time)) {
            setStatus({ type: 'error', message: 'Please select a time between 5:00 PM and 11:00 PM.' });
            setLoading(false);
            return;
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            setStatus({
                type: 'success',
                message: `Reservation Confirmed! A confirmation email has been sent to ${formData.email}.`
            });

            setFormData({
                name: '',
                email: '',
                date: '',
                time: '',
                guests: 2,
                requests: '',
                website_url: ''
            });

        } catch {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again or call us directly.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="reservations-page">
            <div className="reservations-hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h1>Book a Table</h1>
                    <p>Reserve your spot for an unforgettable evening.</p>
                </motion.div>
            </div>

            <div className="container reservations-container">
                <motion.div
                    className="reservation-form-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <div className="form-header">
                        <h1>Make a Reservation</h1>
                        <p>JOIN US FOR AN EXTRAORDINARY DINING EXPERIENCE</p>
                    </div>

                    <form ref={form} onSubmit={handleSubmit} className="reservation-form">
                        <div style={{ display: 'none' }}>
                            <input
                                type="text"
                                name="website_url"
                                value={formData.website_url}
                                onChange={handleChange}
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Full Name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                    min={getMinDate()}
                                    max={getMaxDate()}
                                />
                            </div>
                            <div className="form-group">
                                <label>Time</label>
                                <input
                                    type="time"
                                    name="time"
                                    required
                                    value={formData.time}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Guests</label>
                            <select name="guests" value={formData.guests} onChange={handleChange}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Special Requests</label>
                            <textarea
                                name="requests"
                                value={formData.requests}
                                onChange={handleChange}
                                placeholder="Allergies, special occasions, or seating preferences..."
                            ></textarea>
                        </div>

                        {status.message && (
                            <div className={`status-message ${status.type}`} style={{
                                color: status.type === 'error' ? '#ff4444' : '#00C851',
                                textAlign: 'center',
                                padding: '1rem',
                                background: 'rgba(0,0,0,0.2)',
                                borderRadius: '4px'
                            }}>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={loading}
                        >
                            {loading ? 'Confirming...' : 'Confirm Reservation'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
