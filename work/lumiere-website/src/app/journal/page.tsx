'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import '@/styles/Journal.css';

const JOURNAL_ARTICLES = [
    {
        id: 1,
        title: "The Guestbook",
        summary: "Stories left behind by those who dined in the shadows. A collection of handwritten notes, sketches, and confessions found between the pages of our leather-bound guestbook.",
        readTime: "4 min read",
        category: "Stories",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "The Hunt",
        summary: "Every morning at 4 AM, Chef Valerian visits the market. This is the story of how we source the impossible—ingredients so rare they border on myth.",
        readTime: "6 min read",
        category: "Behind the Scenes",
        image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "19:00 Hours",
        summary: "The golden hour before service. A photographic essay capturing the quiet intensity of a kitchen preparing for war—and the calm before the first guest arrives.",
        readTime: "3 min read",
        category: "Photo Essay",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "The Last Supper Club",
        summary: "Once a month, we close our doors to the public and host a secret dinner for twelve strangers. No menu. No phones. No names. Only the food speaks.",
        readTime: "8 min read",
        category: "Events",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "A Letter to Salt",
        summary: "An open letter to the most underrated ingredient in every kitchen. From ancient seas to your plate—why salt is the silent hero of every dish we create.",
        readTime: "5 min read",
        category: "Philosophy",
        image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=800&q=80"
    }
];

export default function Journal() {
    const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);

    return (
        <div className="journal-page">
            {/* Hero Section */}
            <motion.section
                className="journal-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <div className="journal-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <BookOpen size={48} className="journal-icon" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        The Midnight <span className="highlight">Journal</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Stories, secrets, and culinary confessions from the heart of Lumière.
                    </motion.p>
                </div>
            </motion.section>

            {/* Articles Grid */}
            <section className="journal-content">
                <div className="container">
                    <div className="journal-grid">
                        {JOURNAL_ARTICLES.map((article, index) => (
                            <motion.article
                                key={article.id}
                                className={`journal-card ${hoveredArticle === article.id ? 'hovered' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredArticle(article.id)}
                                onMouseLeave={() => setHoveredArticle(null)}
                            >
                                <div className="journal-card-image">
                                    <img src={article.image} alt={article.title} loading="lazy" />
                                    <div className="journal-card-overlay" />
                                </div>
                                <div className="journal-card-content">
                                    <span className="journal-category">{article.category}</span>
                                    <h3>{article.title}</h3>
                                    <p>{article.summary}</p>
                                    <div className="journal-card-footer">
                                        <span className="read-time">
                                            <Clock size={14} />
                                            {article.readTime}
                                        </span>
                                        <span className="read-more">
                                            Read <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
