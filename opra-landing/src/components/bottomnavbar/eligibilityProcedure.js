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
    {/* <div className={styles.div1}>
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
    </div> */}
     <div className={styles.procedureContainer}>
      <h2 className={styles.procedureHeading}>
        Procedure for <span className={styles.opraText}>OPRA</span> 
      </h2>
      <ul className={styles.procedureList}>
        <li>
          <h3 className={styles.procedureTitle}>1. Initial Skill Assessment by Australian Pharmacy Council</h3>
          <p className={styles.procedureDescription}>
            The first step is to check if you are eligible to appear for the OPRA Exam. For this, the Australian Pharmacy Council will check your records and declare your eligibility.
            <br />
            Once you clear this initial assessment, then you will be eligible to appear for the OPRA Exam.
          </p>
        </li>
        <li>
          <h3 className={styles.procedureTitle}>2. The OPRA Exam</h3>
          <p className={styles.procedureDescription}>
            The OPRA Exam is an online computer-based exam, which you can take from the choice of a test centre in your home country. The exam is conducted thrice yearly in March, July, and November.
            <br />
            The exam comprises 120 multiple-choice questions to be completed within 2.5 hours and is in a single-paper format. There is no negative marking.
          </p>
        </li>
        <li>
          <h3 className={styles.procedureTitle}>3. English Proficiency</h3>
          <p className={styles.procedureDescription}>
            The Pharmacy Board of Australia acknowledges various language assessment methods, including IELTS, OET, and PTE.
            <br />
            To meet their language proficiency requirements, you should attain a minimum score of 7.5 on the academic version of IELTS, with no less than 7 in each section.
            <br />
            Alternatively, for the Occupational English Test (OET), a minimum score of 6.5 overall, or a 7 in every individual component, is necessary.
            <br />
            For the Pearson Test of English (PTE), a minimum overall score of 65, with no communicative skill score below 65, is required.
          </p>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default OpraEligibility;
