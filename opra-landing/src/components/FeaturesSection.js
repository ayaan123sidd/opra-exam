import React from 'react';
import styles from '../styles/FeaturesSection.module.css';
import tickIcon from '../assets/tick.png'; 

const FeaturesSection = () => {
  const points = [
    '120+ hours of live and recorded OPRA Exam video tutorials',
    'Live classes + recorded sessions, study handouts, mock tests, and final OPRA exam grand test',
    'Extended OPRA course trainer access',
    'Adaptive AI-driven OPRA exam mock tests according to Rasch methodology',
    'One-on-one feedback sessions with the OPRA exam trainer',
    'Exclusive tips on approaching the new pattern of OPRA exam for international pharmacists'
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        {points.map((point, index) => (
          <div className={styles.featureItem} key={index}>
            <img src={tickIcon} alt="Tick Icon" className={styles.tickIcon} />
            <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
