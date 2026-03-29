import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="accent-text">Get In Touch</h4>
          <h2>Visit us today</h2>
          <p>Ready to make a change? Drop by our facility for a tour or contact us directly to book your first free session.</p>

          <div className="info-items">
            <div className="info-item">
              <MapPin className="info-icon" size={24} />
              <div>
                <h4>Location</h4>
                <p>123 Iron Street, Fitness District<br/>Mumbai, MH 400001</p>
              </div>
            </div>
            
            <div className="info-item">
              <Phone className="info-icon" size={24} />
              <div>
                <h4>Phone</h4>
                <p>+91 98765 12345<br/>+91 98765 54321 (WhatsApp)</p>
              </div>
            </div>

            <div className="info-item">
              <Mail className="info-icon" size={24} />
              <div>
                <h4>Email</h4>
                <p>join@dcampgym.com<br/>support@dcampgym.com</p>
              </div>
            </div>
          </div>

        </motion.div>

        <motion.div 
          className="contact-form-wrapper glass"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Send Us A Message</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Rahul Sharma" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="+91 98765 43210" required />
            </div>

            <div className="form-group">
              <label htmlFor="goal">Primary Goal</label>
              <select id="goal" required>
                <option value="">Select your goal...</option>
                <option value="weight_loss">Weight Loss</option>
                <option value="muscle_gain">Muscle Gain</option>
                <option value="general_health">General Health & Fitness</option>
                <option value="sports_performance">Sports Performance</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-submit">Send Inquiry</button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
