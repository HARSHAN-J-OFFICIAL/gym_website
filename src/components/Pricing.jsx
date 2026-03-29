import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹3,999",
      duration: "1 Month",
      features: [
        "Full Gym Access strictly",
        "Locker Room & Showers",
        "Free Group Classes (1/week)",
        "No Personal Training"
      ],
      popular: false
    },
    {
      name: "Standard Plan",
      price: "₹9,999",
      duration: "3 Months",
      features: [
        "24/7 Unlimited Gym Access",
        "Locker Room & Showers",
        "Unlimited Group Classes",
        "1 Free PT Session / Month",
        "Custom Workout Plan"
      ],
      popular: true
    },
    {
      name: "Premium Plan",
      price: "₹29,999",
      duration: "12 Months",
      features: [
        "24/7 Unlimited Gym Access",
        "Sauna & Recovery Lounge",
        "Unlimited Group Classes",
        "Weekly 1-on-1 PT Session",
        "Custom Nutrition Plan",
        "Guest Passes"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        
        <div className="section-header">
          <motion.h4 
            className="accent-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Membership
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Invest In Yourself
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            Simple, transparent pricing. No hidden fees or complex contracts. Choose the plan that fits your commitment.
          </motion.p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''} glass`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="card-header">
                <h3>{plan.name}</h3>
                <div className="price-container">
                  <span className="price">{plan.price}</span>
                  <span className="duration">/ {plan.duration}</span>
                </div>
              </div>
              
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={20} className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="card-footer">
                <a href="#contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} full-btn`}>
                  Join Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
