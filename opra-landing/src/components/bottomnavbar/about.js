import React from 'react';
import styles from '../../styles/bottomnavbar/about.module.css';

const About = () => {
    const content = [
        "The OPRA (Overseas Pharmacist Readiness Assessment) is a comprehensive assessment conducted by the Australian Pharmacy Council (APC) for pharmacists seeking registration to practise in Australia",
        "It evaluates the knowledge, skills, and abilities required for safe and effective pharmacy practice.",
        
        "The OPRA Exam Preparation Course covers essential content and offers guidance and resources for boosting success in the OPRA Exam",
    
        "Secure lifelong membership to our pharmacist-led chat group and access complimentary CV writing webinars, along with tips for securing your first job",
    
        "By clearing this exam, international pharmacists can become and practise as registered pharmacists in Australia"
      ];

  return (
    <div className={styles.aboutSection}>
      <h1 className={styles.aboutHeader}>About the Course</h1>
      <div className={styles.aboutGrid}>
        {content.map((paragraph, index) => (
          <div className={styles.aboutItem} key={index}>
            <div className={styles.numberCircle}>{index + 1}</div>
            <p>{paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
