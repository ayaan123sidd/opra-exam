import React from 'react';
import styles from '../../styles/bottomnavbar/eligibilityProcedure.module.css';

const OpraEligibility = () => {
  return (
    <div className={styles.eligibilityContainer}>
        <div className={styles.div1}>
      <h2 className={styles.eligibilityHeading}>
        <span className={styles.opraExam}>OPRA Exam</span> Eligibility Criteria
      </h2>
      <p className={styles.eligibilityDescription}>
      To be eligible to write the OPRA Exam, a pharmacist must have the following:
      </p>
      <ul className={styles.eligibilityList}>
        <li>Bachelor of Pharmacy (BPharm) or Doctor of Pharmacy (PharmD), including mark sheets and degree certificates</li>
        <li>Active registration with the state pharmacy council in your home country as a practising pharmacist</li>
      </ul>
    </div>
    <div className={styles.div1}>
      <h2 className={styles.eligibilityHeading}>
        <span className={styles.opraExam}>OPRA Exam</span> Eligibility Criteria
      </h2>
      <p className={styles.eligibilityDescription}>
      To be eligible to write the OPRA Exam, a pharmacist must have the following:
      </p>
      <ul className={styles.eligibilityList}>
        <li>Bachelor of Pharmacy (BPharm) or Doctor of Pharmacy (PharmD), including mark sheets and degree certificates</li>
        <li>Active registration with the state pharmacy council in your home country as a practising pharmacist</li>
      </ul>
    </div>
    </div>
  );
};

export default OpraEligibility;
