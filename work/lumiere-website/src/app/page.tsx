'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Hero3D from '@/components/Hero3D';
import '@/styles/Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <Hero3D />
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <motion.div
            className="hero-glass-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The <span className="text-primary">Eternal</span> Banquet
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A symphony of shadows and flavors.
              Dine in the embrace of the night.
            </motion.p>
            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link href="/reservations" className="btn btn-primary">Book a Table</Link>
              <Link href="/menu" className="btn btn-outline">View Menu</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section featured">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Signature Dishes</h2>
            <p>Curated by our world-class culinary team.</p>
          </motion.div>
          <div className="featured-grid">
            {[
              {
                img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
                name: "Wild Mushroom Risotto",
                desc: "Creamy arborio rice with porcini mushrooms, parmesan, and truffle oil.",
                price: "$34"
              },
              {
                img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
                name: "Hokkaido Scallops",
                desc: "Pan-seared scallops with cauliflower purée, raisins, and caper butter.",
                price: "$34"
              },
              {
                img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
                name: "Wagyu Ribeye",
                desc: "Grilled A5 Wagyu ribeye served with truffle mash and bordelaise sauce.",
                price: "$85"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="featured-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -15 }}
              >
                <div className="card-image-container">
                  <img src={item.img} alt={item.name} className="card-image" loading="lazy" />
                </div>
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <span className="price">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-text">
              <h2>A Modern Culinary <span className="text-primary">Experience</span></h2>
              <p>
                Welcome to LUMIÈRE, where contemporary design meets exceptional gastronomy.
                Our space is designed to provide an immersive dining atmosphere that balances
                elegance with comfort.
              </p>
              <p>
                Led by Executive Chef Valerian Noctis, our kitchen focuses on sourcing the finest
                ingredients to create dishes that are both visually stunning and incredibly delicious.
                We invite you to join us for an evening of refined flavors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Guest Reviews</h2>
          </motion.div>
          <div className="testimonial-grid">
            {[
              {
                text: "The best dining experience of my life. The atmosphere is unmatched and the food is simply divine.",
                author: "Sarah Johnson"
              },
              {
                text: "An absolute gem. The service was impeccable and the mushroom risotto is a must-try.",
                author: "Michael Chen"
              },
              {
                text: "Elegant, sophisticated, and delicious. Perfect for our anniversary dinner.",
                author: "Emily & James"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#e5c15d" color="#e5c15d" />)}
                </div>
                <p>&quot;{testimonial.text}&quot;</p>
                <h4>- {testimonial.author}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
