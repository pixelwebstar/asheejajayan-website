'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/About.css';

const teamMembers = [
    {
        id: 'adrian',
        name: 'Adrian Vallon',
        role: 'Executive Chef',
        image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2680&auto=format&fit=crop',
        topic: 'The Pause',
        manifesto: "I put 14 hours into a sauce that is eaten in 3 seconds. Why? It's not for the flavor. It's for the silence that follows. The moment when the conversation stops, and the world narrows down to a single sensation. That split-second of absolute presence... that is the only thing I care about.",
        detail: 'Obsession: Reduced Veal Stock (48 Hours)'
    },
    {
        id: 'elena',
        name: 'Elena Rostova',
        role: 'Head Sommelier',
        image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=2687&auto=format&fit=crop',
        topic: 'Time Travel',
        manifesto: "Wine is a ghost. It remembers the rain of 2012. It remembers the heat of August. My job isn't to pour you a drink. My job is to introduce you to that ghost. To let you taste a sunlight that hasn't existed for a decade. It is the only form of time travel we have.",
        detail: 'Current Love: 1996 Barolo'
    },
    {
        id: 'marcus',
        name: 'Marcus Thorne',
        role: 'Chef de Cuisine',
        image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=2574&auto=format&fit=crop',
        topic: 'Controlled Chaos',
        manifesto: "The kitchen is violence. It is fire, shouting, burns, and sharp steel. It is chaos. My job is to take that chaos and trap it. To discipline it until it becomes the pristine, silent geometry on your plate. You eat the peace; I keep the war in the kitchen.",
        detail: 'Philosophy: Knife Skills > Gadgets'
    }
];

export default function About() {
    const [activeChef, setActiveChef] = useState(teamMembers[0].id);
    const currentChef = teamMembers.find(m => m.id === activeChef) || teamMembers[0];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="hero-title">The Soul of Lumière</h1>
                    <p className="hero-subtitle">
                        More than a restaurant. A living, breathing dedication to the art of gathering.
                    </p>
                </motion.div>
            </section>

            <div className="container">
                {/* Genesis Section */}
                <section className="story-section">
                    <div className="story-grid">
                        <motion.div
                            className="story-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>The Genesis</h2>
                            <p>
                                It started with a simple question: <em>&quot;What happens when you strip away the noise?&quot;</em>
                            </p>
                            <p>
                                Lumière wasn&apos;t built to impress. It was built to connect. We believed that if we could create a space where time slows down, where the food speaks a language older than words, we could create something permanent in a temporary world.
                            </p>
                            <p>
                                We define ourselves not by what we add, but by what we refuse to compromise on. No shortcuts. No &quot;good enough.&quot; Just the raw, honest pursuit of perfection on a plate.
                            </p>
                        </motion.div>
                        <motion.div
                            className="story-image-wrapper"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="/images/about/about-story-lupwtdps.webp"
                                alt="Chef plating a dish"
                                className="story-image"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">12</span>
                            <span className="stat-label">Years of Craft</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4</span>
                            <span className="stat-label">Seasons / Year</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">∞</span>
                            <span className="stat-label">Memories Made</span>
                        </div>
                    </div>
                </section>

                {/* Shadow & Light Section */}
                <section className="story-section">
                    <div className="story-grid reverse">
                        <motion.div
                            className="story-image-wrapper"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="/images/about/about-philosophy-cagditfz.webp"
                                alt="Fresh ingredients"
                                className="story-image"
                            />
                        </motion.div>
                        <motion.div
                            className="story-text"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>Shadow & Light</h2>
                            <p>
                                Our name, <strong>Lumière</strong>, means light. But light requires shadow to exist.
                            </p>
                            <p>
                                We embrace the shadows of the kitchen—the early mornings, the burns, the failures that teach us—so that we can serve you the light. Every dish serves a purpose. Every ingredient has a name. We know our farmers. We respect the soil.
                            </p>
                            <p>
                                This isn&apos;t just about sustainability. It&apos;s about responsibility. It&apos;s the understanding that we are caretakers of the earth&apos;s bounty for the brief moment it&apos;s in our hands.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="team-section">
                    <div className="section-header">
                        <h2>The Architects</h2>
                        <p>The obsessive minds running the pass. Click to hear their story.</p>
                    </div>

                    <motion.div
                        className="team-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                    >
                        {teamMembers.map((member) => (
                            <motion.div
                                key={member.id}
                                className={`team-card ${activeChef === member.id ? 'active' : 'inactive'}`}
                                onClick={() => setActiveChef(member.id)}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                                }}
                                whileHover={activeChef !== member.id ? { scale: 0.98 } : {}}
                            >
                                <img src={member.image} alt={member.name} className="team-image" />
                                <div className="team-info">
                                    <h3 className="team-name">{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                </div>
                                <AnimatePresence>
                                    {activeChef === member.id && (
                                        <motion.div
                                            className="mobile-chef-details"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        >
                                            <div className="mobile-details-content">
                                                <h4 className="mobile-topic">{member.topic}</h4>
                                                <p className="mobile-manifesto">&quot;{member.manifesto}&quot;</p>
                                                <span className="mobile-signature">{member.detail}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeChef}
                            className="chef-detail-panel desktop-only"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="manifesto-title">{currentChef.topic}</h3>
                            <p className="manifesto-text">{currentChef.manifesto}</p>
                            <div className="manifesto-signature">
                                <span className="signature-label">{currentChef.detail}</span>
                                <span className="signature-name">— {currentChef.name}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </section>
            </div>
        </div>
    );
}
