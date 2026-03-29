import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    "Certified, World-Class Trainers",
    "Modern, High-End Equipment",
    "Supportive & Aggressive Environment",
    "Personalized Transformation Plans"
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
            alt="Gym Environment" 
            className="about-image"
          />
          <div className="experience-badge">
            <span className="years">10+</span>
            <span className="text">Years of<br/>Results</span>
          </div>
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="section-header-inline">
            <h4 className="accent-text">About DCAMP</h4>
            <h2>More Than Just A Gym</h2>
          </div>
          
          <p className="about-description">
            We don't just sell memberships; we sell <strong>results</strong>. At DCAMP, we believe in transformation through discipline, hard work, and a community that pushes you to your absolute limits.
          </p>
          <p className="about-description">
            Whether your goal is to lose weight, build muscle, or simply become the strongest version of yourself, our dedicated coaches and state-of-the-art facility are here to make it happen.
          </p>

          <ul className="about-highlights">
            {highlights.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
              >
                <CheckCircle className="highlight-icon" size={24} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <a href="#programs" className="btn btn-primary mt-4">Explore Our Programs</a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
