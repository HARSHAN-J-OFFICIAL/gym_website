import React from 'react';
import { motion } from 'framer-motion';
import './Transformations.css';

const Transformations = () => {
  const stories = [
    {
      name: "Marcus T.",
      stats: "Lost 12kg in 3 months",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop",
      quote: "DCAMP gave me the discipline I needed. I'm faster, stronger, and in the best shape of my life."
    },
    {
      name: "Sarah J.",
      stats: "Gained 6kg muscle",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1374&auto=format&fit=crop",
      quote: "I used to be afraid of the weight room. Now, it's my second home. The trainers here are phenomenal."
    },
    {
      name: "David K.",
      stats: "Dropped 15% Body Fat",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
      quote: "The personalized plan and constant push made all the difference. I achieved my goal in half the time I expected."
    }
  ];

  return (
    <section id="transformations" className="section transformations-section">
      <div className="container">
      
        <div className="section-header">
          <motion.h4 
            className="accent-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Real Results
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Client Transformations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Don't just take our word for it. See what hard work and the right coaching can achieve.
          </motion.p>
        </div>

        <div className="transformations-grid">
          {stories.map((story, index) => (
            <motion.div 
              key={index} 
              className="transformation-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="image-container">
                <img src={story.image} alt={`${story.name} Transformation`} className="t-image" />
                <div className="stats-overlay">
                  <h4>{story.stats}</h4>
                </div>
              </div>
              <div className="t-content glass">
                <h3>{story.name}</h3>
                <p>"{story.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
