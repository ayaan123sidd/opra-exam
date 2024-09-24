import React from 'react';
import styles from '../../styles/bottomnavbar/testingCentres.module.css';

const ExamFormat = () => {
  return (
    <div className={styles.examFormatContainer}>
      <div className={styles.examFormatContent}>
        <div className={styles.examLeft}>
          <h2 className={styles.heading}>Exam Format</h2>
          <p className={styles.description} style={{fontSize:'17px'}}>
            The OPRA consists of a single paper. A total of 120 questions to be attempted in 2.5 hours.
          </p>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.examRight}>
          <h2 className={styles.heading}>Testing Centres</h2>
          <p className={styles.description} style={{fontSize:'17px'}}>
            The OPRA Exam is conducted online so that you can write the exam at the test centre nearest to you.
            There are 10 test centres in India, which include:
            Bangalore, Chandigarh, Chennai, Hyderabad, Jalandhar, Ludhiana, Mumbai, New Delhi, Pune, Noida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamFormat;
