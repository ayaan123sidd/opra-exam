import React from 'react';
import styles from '../styles/WhyPharmacistSection.module.css';

const WhyPharmacistSection = () => {
  return (
    <section className={styles.whyPharmacistSection}>
      <h2 className={styles.heading}>Why Become a Pharmacist in Australia?</h2>
      <div className={styles.columnsContainer}>
        <div className={styles.column}>
          <h3 className={styles.salary}>₹ 50 lakh</h3>
          <p className={styles.subheading}>Annual salary of Registered Pharmacists in Australia</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.salary}>₹ 50 lakh</h3>
          <p className={styles.subheading}>Annual salary of Registered Pharmacists in Australia</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.salary}>₹ 50 lakh</h3>
          <p className={styles.subheading}>Annual salary of Registered Pharmacists in Australia</p>
        </div>
      </div>
    </section>
  );
};

export default WhyPharmacistSection;
