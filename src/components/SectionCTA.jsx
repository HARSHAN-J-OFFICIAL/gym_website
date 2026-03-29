import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './SectionCTA.css';

const SectionCTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="container cta-container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>Ready To Transform Your Body?</h2>
          <p>The hardest step is the first one. Let us guide you through the rest. Join DCAMP today and get started on your fitness journey.</p>
          <a href="#contact" className="btn btn-primary cta-btn">
            Join DCAMP Today <ArrowRight className="btn-icon" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionCTA;
