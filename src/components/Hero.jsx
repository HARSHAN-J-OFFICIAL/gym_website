import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      {/* Background Image / Video Placeholder */}
      <img 
        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
        alt="Gym Workout" 
        className="hero-bg"
      />

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="accent-text">Transform</span> Your Body<br/> at GYM
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join the most result-driven fitness gym in your area. Push your limits, achieve your goals, and become the best version of yourself.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">
              Start Your Fitness Journey <ArrowRight size={20} className="btn-icon" />
            </a>
            <a href="#about" className="btn btn-outline">
              Get Free Trial
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
