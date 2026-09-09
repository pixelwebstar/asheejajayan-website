'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Heart, Share2, Star, MoreHorizontal, Bookmark, X, Image as ImageIcon, Send, User } from 'lucide-react';
import '@/styles/Contact.css';

// --- Starfield Component ---
const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;

        interface StarType {
            x: number;
            y: number;
            radius: number;
            opacity: number;
            speed: number;
            direction: number;
        }

        const stars: StarType[] = [];
        const numStars = 2000;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                opacity: Math.random(),
                speed: 0.005 + Math.random() * 0.02,
                direction: Math.random() > 0.5 ? 1 : -1
            });
        }

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', resize);
        resize();

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            stars.forEach(star => {
                star.opacity += star.speed * star.direction;
                if (star.opacity >= 1 || star.opacity <= 0.1) star.direction *= -1;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />;
};

// --- Components ---
const Avatar = ({ char, size = '48px', border = 'none', onClick }: { char: string; size?: string; border?: string; onClick?: () => void }) => (
    <div onClick={onClick} style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#222',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `calc(${parseInt(size) || 48}px * 0.6)`,
        border: border,
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        flexShrink: 0
    }}>
        {char}
    </div>
);

interface Post {
    id: number;
    name: string;
    handle: string;
    avatar: string;
    time: string;
    rating: number;
    text: string;
    image: string | null;
    likes: number;
    comments: number;
    isLiked: boolean;
}

const INITIAL_POSTS: Post[] = [
    { id: 1, name: "Elena V.", handle: "@elena_eats", avatar: "🦁", time: "2h ago", rating: 5, text: "The Midnight Risotto is not just food. It is a memory I haven't lived yet. Absolutely surreal experience at Luminus tonight. 🌑✨", image: null, likes: 24, comments: 3, isLiked: false },
    { id: 2, name: "Marcus D.", handle: "@marcus_drinks", avatar: "🐶", time: "5h ago", rating: 5, text: "The 'Void Nectar'. Dangerous. Proceed with caution. 🥃💀 #Luminus #NightLife", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop", likes: 108, comments: 12, isLiked: false },
    { id: 3, name: "Aria W.", handle: "@aria_whispers", avatar: "🐱", time: "1d ago", rating: 5, text: "I swear I saw the chef levitate the garnish. 10/10 would recommend for the supernatural vibes alone.", image: null, likes: 892, comments: 45, isLiked: false },
    { id: 4, name: "Julian K.", handle: "@julian_knight", avatar: "🐯", time: "2d ago", rating: 5, text: "Captured this moment before the shadows took over. The atmosphere here is thick enough to cut with a knife. 🕯️", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1965&auto=format&fit=crop", likes: 420, comments: 28, isLiked: false }
];

const AVATAR_PRESETS = ["🦁", "🐯", "🐱", "🐶", "🐔"];

const SocialCard = ({ post, onLike }: { post: Post; onLike: (id: number) => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ background: 'rgba(10, 10, 10, 0.9)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem', position: 'relative', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Avatar char={post.avatar} size="48px" border="2px solid #1a1a1a" />
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <h4 style={{ margin: 0, fontSize: '1rem', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#fff' }}>{post.name}</h4>
                        <span style={{ fontSize: '0.9rem', color: '#666' }}>{post.handle}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                        <div style={{ display: 'flex', gap: '2px' }}>
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < post.rating ? "#c41e3a" : "transparent"} color={i < post.rating ? "#c41e3a" : "#444"} />)}
                        </div>
                        <span style={{ fontSize: '0.8rem', color: '#666' }}>• {post.time}</span>
                    </div>
                </div>
            </div>
            <MoreHorizontal size={20} color="#666" style={{ cursor: 'pointer' }} />
        </div>

        {post.image && (
            <div style={{ background: '#000', padding: '12px', paddingBottom: '40px', borderRadius: '2px', marginBottom: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', border: '1px solid #222' }}>
                <div style={{ width: '100%', paddingTop: '100%', position: 'relative', overflow: 'hidden', background: '#111' }}>
                    <img src={post.image} alt="Post" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) saturation(1.1)' }} />
                </div>
            </div>
        )}

        <p style={{ lineHeight: 1.6, color: '#e0e0e0', marginBottom: '1rem', fontSize: '0.95rem' }}>{post.text}</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div onClick={() => onLike(post.id)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: post.isLiked ? '#c41e3a' : '#ccc', transition: 'color 0.2s' }}>
                    <Heart size={20} fill={post.isLiked ? "#c41e3a" : "transparent"} /> <span style={{ fontSize: '0.9rem' }}>{post.likes}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: '#ccc' }}>
                    <MessageSquare size={20} /> <span style={{ fontSize: '0.9rem' }}>{post.comments}</span>
                </div>
                <Share2 size={20} color="#ccc" style={{ cursor: 'pointer' }} />
            </div>
            <Bookmark size={20} color="#ccc" style={{ cursor: 'pointer' }} />
        </div>
    </motion.div>
);

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => (
    <AnimatePresence>
        {isOpen && (
            <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', zIndex: 100 }} />
                <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', maxWidth: '450px', background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2rem', zIndex: 101, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3 style={{ margin: 0, fontFamily: 'Cinzel, serif', color: '#fff', fontSize: '1.5rem' }}>{title}</h3>
                        <X onClick={onClose} style={{ cursor: 'pointer', color: '#666' }} />
                    </div>
                    {children}
                </motion.div>
            </>
        )}
    </AnimatePresence>
);

interface UserType {
    name: string;
    handle: string;
    avatar: string;
}

export default function Blog() {
    const [user, setUser] = useState<UserType | null>(null);
    const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [signupData, setSignupData] = useState({ name: '', handle: '', avatar: AVATAR_PRESETS[0] });
    const [newPost, setNewPost] = useState({ text: '', image: '' });

    const handleAction = (action: () => void) => {
        if (!user) {
            setIsSignupOpen(true);
        } else {
            action();
        }
    };

    const handleSignup = (e: FormEvent) => {
        e.preventDefault();
        if (!signupData.name || !signupData.handle) return;
        setUser({ ...signupData, handle: signupData.handle.startsWith('@') ? signupData.handle : `@${signupData.handle}` });
        setIsSignupOpen(false);
    };

    const handleCreatePost = (e: FormEvent) => {
        e.preventDefault();
        if (!newPost.text || !user) return;

        const post: Post = {
            id: Date.now(),
            name: user.name,
            handle: user.handle,
            avatar: user.avatar,
            time: "Just now",
            rating: 5,
            text: newPost.text,
            image: newPost.image || null,
            likes: 0,
            comments: 0,
            isLiked: false
        };

        setPosts([post, ...posts]);
        setNewPost({ text: '', image: '' });
        setIsCreateOpen(false);
    };

    const toggleLike = (postId: number) => {
        handleAction(() => {
            setPosts(posts.map(post => {
                if (post.id === postId) {
                    return { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 };
                }
                return post;
            }));
        });
    };

    return (
        <div className="blog-page" style={{ background: '#050505', minHeight: '100vh', color: '#f0f0f0', fontFamily: 'Inter, sans-serif', paddingBottom: '10rem', overflowX: 'hidden', position: 'relative' }}>
            <Starfield />

            <div style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 20 }}>
                {user ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '50px', backdropFilter: 'blur(10px)' }}>
                        <Avatar char={user.avatar} size="32px" border="1px solid #c41e3a" />
                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{user.name}</span>
                    </div>
                ) : (
                    <button onClick={() => setIsSignupOpen(true)} style={{ background: '#c41e3a', color: '#fff', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontFamily: 'Cinzel, serif', fontWeight: 600, boxShadow: '0 4px 15px rgba(196, 30, 58, 0.3)' }}>
                        Join the Banquet
                    </button>
                )}
            </div>

            <div style={{ height: '30vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 10, borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'linear-gradient(to bottom, transparent, rgba(5,5,5,1))' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Cinzel, serif', letterSpacing: '0.1em', marginBottom: '0.5rem', color: '#fff' }}>The Social Chronicle</h1>
                    <p style={{ color: '#888', letterSpacing: '0.1em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Moments from the Banquet</p>
                </motion.div>
            </div>

            <div className="container" style={{ maxWidth: '600px', margin: '2rem auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
                <div onClick={() => handleAction(() => setIsCreateOpen(true))} style={{ background: 'rgba(20, 20, 20, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'background 0.2s' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {user ? <Avatar char={user.avatar} size="40px" /> : <User size={20} color="#666" />}
                    </div>
                    <span style={{ color: '#666', fontSize: '1rem' }}>Share your experience...</span>
                </div>

                {posts.map(post => <SocialCard key={post.id} post={post} onLike={toggleLike} />)}
            </div>

            <Modal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} title="Identify Yourself">
                <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', color: '#888', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Choose an Avatar</label>
                        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                            {AVATAR_PRESETS.map((char, i) => <Avatar key={i} char={char} onClick={() => setSignupData({ ...signupData, avatar: char })} border={signupData.avatar === char ? '2px solid #c41e3a' : '2px solid transparent'} />)}
                        </div>
                    </div>
                    <div>
                        <label style={{ display: 'block', color: '#888', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Display Name</label>
                        <input type="text" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} placeholder="e.g. The Nightwalker" style={{ width: '100%', background: '#222', border: '1px solid #333', padding: '0.8rem', borderRadius: '8px', color: '#fff', outline: 'none' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', color: '#888', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Handle</label>
                        <input type="text" value={signupData.handle} onChange={(e) => setSignupData({ ...signupData, handle: e.target.value })} placeholder="@username" style={{ width: '100%', background: '#222', border: '1px solid #333', padding: '0.8rem', borderRadius: '8px', color: '#fff', outline: 'none' }} />
                    </div>
                    <button type="submit" style={{ background: '#c41e3a', color: '#fff', border: 'none', padding: '1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, marginTop: '1rem' }}>Enter the Void</button>
                </form>
            </Modal>

            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="New Chronicle">
                <form onSubmit={handleCreatePost} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <textarea value={newPost.text} onChange={(e) => setNewPost({ ...newPost, text: e.target.value })} placeholder="What did you witness?" rows={4} style={{ width: '100%', background: '#222', border: '1px solid #333', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'none', fontFamily: 'Inter, sans-serif' }} />
                    <div>
                        <label style={{ display: 'block', color: '#888', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Image URL (Optional)</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input type="text" value={newPost.image} onChange={(e) => setNewPost({ ...newPost, image: e.target.value })} placeholder="https://..." style={{ flex: 1, background: '#222', border: '1px solid #333', padding: '0.8rem', borderRadius: '8px', color: '#fff', outline: 'none' }} />
                            <div style={{ width: '48px', height: '48px', background: '#222', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #333' }}>
                                {newPost.image ? <img src={newPost.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} /> : <ImageIcon size={20} color="#666" />}
                            </div>
                        </div>
                    </div>
                    <button type="submit" style={{ background: '#fff', color: '#000', border: 'none', padding: '1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <Send size={18} /> Publish
                    </button>
                </form>
            </Modal>
        </div>
    );
}
