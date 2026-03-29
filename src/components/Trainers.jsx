import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';
import './Trainers.css';

const Trainers = () => {
  const trainers = [
    {
      name: "Alex Vance",
      role: "Head Strength Coach",
      credibility: "12 Years Experience | 5x Powerlifting Champ",
      image: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1470&auto=format&fit=crop"
    },
    {
      name: "Mia Thorne",
      role: "HIIT & Conditioning Specialist",
      credibility: "Certified PT | Former Pro Athlete",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop"
    },
    {
      name: "Jordan Cross",
      role: "Nutrition & Fat Loss Coach",
      credibility: "Sports Nutritionist | BSc Sports Science",
      image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=1471&auto=format&fit=crop"
    }
  ];

  return (
    <section id="trainers" className="section trainers-section">
      <div className="container">
        
        <div className="section-header">
          <motion.h4 
            className="accent-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Experts
          </motion.h4>
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
          >
            Meet Your dedicated Trainers
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            They've walked the walk. Now they are here to ensure you reach your maximum potential.
          </motion.p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index} 
              className="trainer-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="trainer-image-wrap">
                <img src={trainer.image} alt={trainer.name} className="trainer-img" />
                <div className="trainer-social">
                  <a href="#"><Instagram size={20} /></a>
                  <a href="#"><Twitter size={20} /></a>
                </div>
              </div>
              <div className="trainer-info glass">
                <h3>{trainer.name}</h3>
                <h4 className="accent-text">{trainer.role}</h4>
                <p>{trainer.credibility}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;
