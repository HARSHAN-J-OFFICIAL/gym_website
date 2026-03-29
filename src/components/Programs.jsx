import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Dumbbell, Activity, Users } from 'lucide-react';
import './Programs.css';

const Programs = () => {
  const programs = [
    {
      title: "Weight Loss Program",
      description: "High-intensity cardio and core training designed to melt fat quickly while preserving muscle.",
      outcome: "Fat Loss & Conditioning",
      icon: <Flame size={40} className="program-icon" />,
      delay: 0
    },
    {
      title: "Muscle Building",
      description: "Hypertrophy-focused resistance training to pack on size and increase raw strength.",
      outcome: "Strength & Size",
      icon: <Dumbbell size={40} className="program-icon" />,
      delay: 0.1
    },
    {
      title: "Personal Training",
      description: "1-on-1 customized coaching tailored to your specific goals and dietary needs.",
      outcome: "Customized Results",
      icon: <Activity size={40} className="program-icon" />,
      delay: 0.2
    },
    {
      title: "Group Classes",
      description: "Energetic and supportive group sessions including HIIT, spin, and kickboxing.",
      outcome: "Endurance & Community",
      icon: <Users size={40} className="program-icon" />,
      delay: 0.3
    }
  ];

  return (
    <section id="programs" className="section programs-section">
      <div className="container">
        
        <div className="section-header">
          <motion.h4 
            className="accent-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Programs Built For Results
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            Pick a program that suits your goals. We provide the equipment, the plan, and the motivation.
          </motion.p>
        </div>

        <div className="programs-grid">
          {programs.map((prog, index) => (
            <motion.div 
              key={index} 
              className="program-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: prog.delay }}
            >
              {prog.icon}
              <h3>{prog.title}</h3>
              <p>{prog.description}</p>
              <div className="outcome">
                <span className="accent-text">Outcome:</span> {prog.outcome}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;
