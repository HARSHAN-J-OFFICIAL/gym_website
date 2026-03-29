import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Michael R.",
      role: "Member for 1 year",
      content: "I've tried 5 different gyms. DCAMP is the only one that actually pushed me past my plateau. The energy here is contagious.",
      rating: 5
    },
    {
      name: "Jessica L.",
      role: "Member for 6 months",
      content: "Lost 10kg in my first 4 months. The trainers don't let you quit, but they support you every step of the way.",
      rating: 5
    },
    {
      name: "Brian T.",
      role: "Member for 2 years",
      content: "Best equipment in the city. The Heavy Duty lifting section has everything you need to become a beast.",
      rating: 5
    }
  ];

  return (
    <section className="section testimonials-section">
      <div className="container">
        
        <div className="section-header">
          <motion.h4 
            className="accent-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Word on the Street
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Member Stories
          </motion.h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              className="testimonial-card glass"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-content">"{review.content}"</p>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
                <div className="stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
