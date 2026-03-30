import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <Dumbbell className="logo-icon" size={32} color="var(--color-accent)" />
            <span>GYM</span>
          </a>
          <p className="footer-desc">
            The ultimate destination for serious fitness enthusiasts. We provide the equipment, the plan, and the motivation to help you achieve your goals.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Programs</h4>
          <ul>
            <li><a href="#">Weight Loss</a></li>
            <li><a href="#">Muscle Building</a></li>
            <li><a href="#">HIIT & Cardio</a></li>
            <li><a href="#">Powerlifting</a></li>
            <li><a href="#">Group Classes</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for fitness tips, motivation and exclusive offers.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>

      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} GYM Fitness. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
