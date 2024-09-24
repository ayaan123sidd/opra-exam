import React from 'react';
import styles from '../styles/tips.module.css';
import resumeIcon from '../assets/resume.svg'; 
import interview from '../assets/interview.svg'; 
import career from '../assets/career.svg'; 

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      {/* First Column with Heading */}
      <div className={styles.servicesHeading}>
        <h2>Our Services Are Way Beyond Exam Preparations!</h2>
      </div>

      {/* Three Columns for Services */}
      <div className={styles.servicesGrid}>
        <div className={styles.serviceItem}>
        <div className={styles.icondiv}>
          <img src={resumeIcon} alt="Resume Tips Icon" className={styles.serviceIcon} />
          </div>
          <h3 className={styles.serviceTitle}>Resume Tips</h3>
          <p className={styles.serviceDescription}>
            Get proven tips from experts on building a robust resume to help you land your dream job.
          </p>
        </div>

        <div className={styles.serviceItem}>
        <div className={styles.icondiv}>
          <img src={interview} alt="Resume Tips Icon" className={styles.serviceIcon} />
          </div>
          <h3 className={styles.serviceTitle}>Interview Preparation</h3>
          <p className={styles.serviceDescription}>
          Chisel your interview skills to ensure you mesmerise the interviewers into giving in.
          </p>
        </div>

        <div className={styles.serviceItem}>
        <div className={styles.icondiv}>
          <img src={career} alt="Resume Tips Icon" className={styles.serviceIcon} />
          </div>
          <h3 className={styles.serviceTitle}>Career Support</h3>
          <p className={styles.serviceDescription}>
          Receive support at each step of your journey- during your exam preparation and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
