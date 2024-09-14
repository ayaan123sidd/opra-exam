import React from 'react';
import styles from '../styles/FeaturesSection.module.css';
import tickIcon from '../assets/tick.png'; 

const FeaturesSection = () => {
  const points = [
    'Point 1: Key feature or benefit',
    'Point 2: Another important aspect',
    'Point 3: Something users should know',
    'Point 4: Another feature to highlight',
    'Point 5: Additional value provided',
    'Point 6: Final point for emphasis'
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
