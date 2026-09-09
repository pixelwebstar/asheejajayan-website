'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import '@/styles/AudioPlayer.css';

const AudioPlayer = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const toggleMute = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play().catch(error => {
                    console.log("Audio play failed:", error);
                });
                setIsMuted(false);
            } else {
                audioRef.current.pause();
                setIsMuted(true);
            }
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2; // Set volume to 20%
            audioRef.current.addEventListener('canplaythrough', () => {
                setIsReady(true);
            });
        }
    }, []);

    return (
        <div className="audio-player">
            <audio ref={audioRef} loop preload="auto">
                <source src="/music.mp3" type="audio/mpeg" />
            </audio>
            <button
                className={`audio-btn ${isReady ? 'ready' : ''}`}
                onClick={toggleMute}
                title={isMuted ? "Play Music" : "Mute Music"}
            >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            {!isMuted && (
                <div className="audio-visualizer">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
        </div>
    );
};

export default AudioPlayer;
