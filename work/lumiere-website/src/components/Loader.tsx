'use client';

import { motion } from 'framer-motion';
import '@/styles/Loader.css';

interface LoaderProps {
    onLoadComplete?: () => void;
}

const Loader = ({ onLoadComplete }: LoaderProps) => {
    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={onLoadComplete}
        >
            <div className="loader-backdrop"></div>
            <motion.div className="loader-content">
                {/* Reduced to 4 particles for better performance */}
                <div className="loader-particles">
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                '--delay': `${i * 0.3}s`,
                                '--rotation': `${i * 90}deg`
                            } as React.CSSProperties}
                        />
                    ))}
                </div>

                {/* Main logo */}
                <motion.h1
                    className="loader-logo"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeOut"
                    }}
                >
                    LUMIÈRE
                </motion.h1>

                {/* Animated line */}
                <motion.div
                    className="loader-line"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    The Eternal Banquet
                </motion.p>

                {/* Simplified glow effect */}
                <div className="loader-glow" />
            </motion.div>
        </motion.div>
    );
};

export default Loader;
