'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Search } from 'lucide-react';
import '@/styles/Menu.css';

const MENU_DATA = [
    { id: 1, name: "French Onion Soup", price: "$16", category: "Starters", description: "Rich beef broth with caramelized onions, topped with a baguette slice and melted Gruyère.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Beef Tartare", price: "$32", category: "Starters", description: "Finely chopped raw beef served with a raw egg yolk, capers, and crostini.", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Seared Scallops", price: "$34", category: "Starters", description: "Golden pan-seared scallops served on a bed of cauliflower purée with a light herb garnish.", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Mint Mojito", price: "$14", category: "Drinks", description: "Refreshing cocktail with white rum, sugar, lime juice, soda water, and fresh mint.", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Whiskey Sour", price: "$16", category: "Drinks", description: "Classic cocktail with whiskey, lemon juice, sugar, and an optional egg white.", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Foie Gras Terrine", price: "$42", category: "Starters", description: "Smooth duck liver terrine served with fig jam, toasted brioche, and balsamic glaze.", image: "https://images.unsplash.com/photo-1548029960-695d127f4543?auto=format&fit=crop&w=800&q=80" },
    { id: 7, name: "Smoked Salmon Platter", price: "$28", category: "Starters", description: "Slices of smoked salmon served with blinis, dill cream, and lemon wedges.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80" },
    { id: 8, name: "Grilled Quail", price: "$26", category: "Starters", description: "Whole grilled quail served with a fresh green salad and pomegranate seeds.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" },
    { id: 9, name: "Ribeye Steak", price: "$85", category: "Mains", description: "Thick-cut ribeye steak grilled to perfection, served with mashed potatoes and greens.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
    { id: 10, name: "Pan-Fried Salmon", price: "$42", category: "Mains", description: "Crispy skin salmon fillet served with asparagus and roasted potatoes.", image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80" },
    { id: 11, name: "Seafood Linguine", price: "$38", category: "Mains", description: "Pasta tossed with shrimp, mussels, and clams in a light white wine sauce.", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80" },
    { id: 12, name: "Whole Roasted Chicken", price: "$32", category: "Mains", description: "Golden brown whole roasted chicken served with root vegetables and herbs.", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80" },
    { id: 13, name: "Filet Mignon", price: "$48", category: "Mains", description: "Tender beef filet topped with foie gras and served with a rich reduction sauce.", image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80" },
    { id: 14, name: "Miso Glazed Sea Bass", price: "$52", category: "Mains", description: "Flaky sea bass fillet glazed with miso, served in a light broth with bok choy.", image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80" },
    { id: 15, name: "Mushroom Risotto", price: "$34", category: "Mains", description: "Creamy risotto cooked with wild mushrooms and finished with parmesan cheese.", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80" },
    { id: 16, name: "White Fish Fillet", price: "$48", category: "Mains", description: "Delicate white fish fillet poached and served with fresh herbs and lemon.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80" },
    { id: 17, name: "Vegetable Tart", price: "$28", category: "Mains", description: "Savory tart filled with roasted seasonal vegetables and goat cheese.", image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80" },
    { id: 18, name: "Chocolate Lava Cake", price: "$18", category: "Desserts", description: "Warm chocolate cake with a molten center, dusted with powdered sugar.", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80" },
    { id: 19, name: "Blackberry Tart", price: "$19", category: "Desserts", description: "Crisp tart shell filled with dark chocolate ganache and topped with fresh blackberries.", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80" },
    { id: 20, name: "Opera Cake", price: "$22", category: "Desserts", description: "French cake with layers of almond sponge, coffee syrup, and chocolate ganache.", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80" },
    { id: 21, name: "Macaron Assortment", price: "$16", category: "Desserts", description: "Colorful selection of French macarons in various flavors.", image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80" },
    { id: 22, name: "Berry Parfait", price: "$15", category: "Desserts", description: "Glass layered with yogurt, granola, and fresh mixed berries.", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80" },
    { id: 23, name: "Sliced Fruit Plate", price: "$18", category: "Desserts", description: "Freshly sliced exotic fruits including dragon fruit, papaya, and berries.", image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80" },
    { id: 24, name: "Chocolate Glazed Cake", price: "$20", category: "Desserts", description: "Dense chocolate cake covered in a shiny mirror glaze.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80" },
    { id: 25, name: "Coffee and Petit Fours", price: "$12", category: "Desserts", description: "Black coffee served with a side of small bite-sized chocolates.", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" },
    { id: 26, name: "Vanilla Crème Brûlée", price: "$14", category: "Desserts", description: "Custard base topped with a layer of hardened caramelized sugar.", image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80" },
    { id: 27, name: "Negroni", price: "$20", category: "Drinks", description: "Red aperitif cocktail garnished with an orange peel.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80" },
    { id: 28, name: "Smoked Cocktail", price: "$22", category: "Drinks", description: "Dark spirit cocktail served with a large ice cube and smoke effect.", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80" },
    { id: 29, name: "Red Wine", price: "$180", category: "Drinks", description: "Bottle of premium red wine, Château Margaux.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80" },
    { id: 30, name: "Coffee Cocktail", price: "$20", category: "Drinks", description: "Creamy coffee-based cocktail garnished with coffee beans.", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" }
];

const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Drinks"];

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState("");
    const [displayItems, setDisplayItems] = useState(MENU_DATA);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            let filtered = MENU_DATA;

            if (activeCategory !== 'All') {
                filtered = filtered.filter(item => item.category === activeCategory);
            }

            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                filtered = filtered.filter(item =>
                    item.name.toLowerCase().includes(query) ||
                    item.description.toLowerCase().includes(query)
                );
            }

            setDisplayItems(filtered);
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [activeCategory, searchQuery]);

    return (
        <div className="menu-page">
            <div className="menu-stars-bg">
                <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
                    <Stars radius={50} depth={50} count={2500} factor={4} saturation={0} fade speed={1} />
                </Canvas>
            </div>

            <motion.div
                className="menu-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        Our Menu
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    >
                        A culinary journey for the senses.
                    </motion.p>
                </div>
            </motion.div>

            <div className="container menu-container">
                <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "center" }}>
                    <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
                        <Search size={20} color="#888" style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }} />
                        <input
                            type="text"
                            placeholder="Search dishes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "0.8rem 1rem 0.8rem 3rem",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "30px",
                                color: "#fff",
                                outline: "none",
                                fontFamily: "Inter, sans-serif"
                            }}
                        />
                    </div>
                </div>

                <motion.div
                    className="category-tabs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    {CATEGORIES.map(category => (
                        <motion.button
                            key={category}
                            className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                            whileHover={{ scale: 1.05, color: "#c41e3a" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div className="menu-grid">
                    <AnimatePresence mode="popLayout">
                        {displayItems.map((item, index) => (
                            <motion.div
                                key={`${item.id}-${activeCategory}`}
                                className="menu-card"
                                layout
                                initial={index > 5 ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={index > 5 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -20, scale: 0.96 }}
                                transition={index > 5 ? { delay: 0.4, duration: 0 } : { duration: 0.4, delay: index * 0.03, ease: [0.25, 0.46, 0.45, 0.94], layout: { duration: 0.3 } }}
                                whileHover={{ y: -12 }}
                            >
                                <div className="card-image-container">
                                    <img src={item.image} alt={item.name} className="card-image" loading="lazy" />
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3 className="card-title">{item.name}</h3>
                                        <span className="card-price">{item.price}</span>
                                    </div>
                                    <p className="card-description">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {!loading && displayItems.length === 0 && (
                        <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "#888" }}>
                            <p>No dishes found matching your criteria.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
