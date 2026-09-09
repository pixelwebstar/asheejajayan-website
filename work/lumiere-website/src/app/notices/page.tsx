'use client';

import { motion } from 'framer-motion';
import { notices } from '@/data/notices';
import '@/styles/Notices.css';

export default function Notices() {
    const getStatusClass = (status: string) => {
        switch (status) {
            case 'upcoming': return 'status-upcoming';
            case 'active': return 'status-active';
            case 'recurring': return 'status-recurring';
            case 'past': return 'status-past';
            default: return '';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'upcoming': return 'Upcoming';
            case 'active': return 'Active';
            case 'recurring': return 'Recurring';
            case 'past': return 'Past';
            default: return '';
        }
    };

    return (
        <div className="notices-page">
            <motion.div
                className="notices-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Notice Board
                    </motion.h1>
                    <motion.p
                        className="notices-subtitle"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Stay informed about our latest announcements, events, and special closures
                    </motion.p>
                </div>
            </motion.div>

            <section className="notices-grid">
                <div className="container">
                    {notices.map((notice, index) => (
                        <motion.div
                            key={notice.id}
                            className={`notice-card ${getStatusClass(notice.status)}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="notice-header">
                                <div className="notice-icon">
                                    {notice.icon}
                                </div>
                                <div className="notice-meta">
                                    <span className="notice-type">{notice.type}</span>
                                    <span className={`notice-status ${getStatusClass(notice.status)}`}>
                                        {getStatusLabel(notice.status)}
                                    </span>
                                </div>
                            </div>
                            <h3 className="notice-title">{notice.title}</h3>
                            <p className="notice-date">{notice.date}</p>
                            <p className="notice-description">{notice.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
