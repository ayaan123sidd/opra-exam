import React from 'react';
import styles from '../../styles/bottomnavbar/aboutexam.module.css';
import EligibilityProcedure from '../bottomnavbar/eligibilityProcedure';
import TestingCentres from '../bottomnavbar/testingcentres'
import examImage from '../../assets/iimmgg.jpg'; 

const AboutExam = () => {
  return (
    <div className={styles.aboutExamSection}>
        <h1 className={styles.aboutHeader}>About the OPRA Examination</h1>
        <div className={styles.procedure}>
      <div className={styles.aboutExamContainer}>
        <div className={styles.aboutExamLeft}>
        
          <h2 className={styles.heading}>What is the OPRA Exam?</h2>
          <p className={styles.description}>
            There is a consistent demand for healthcare professionals, especially pharmacists, in Australia. That’s why Australia is inviting internationally trained pharmacists to work in their country. To get a job in Australia, a pharmacist must clear the OPRA Exam.<br /><br />
            The Knowledge Assessment of Pharmaceutical Sciences (KAPS) exam was the qualifying exam for pharmacists in Australia. Beginning in March 2025, the OPRA exam will replace the KAPS exam. While this transition introduces a new exam format, the level of difficulty remains unchanged.<br /><br />
            The OPRA exam evaluates whether candidates possess the essential knowledge and understanding of the biomedical, pharmaceutical, and clinical sciences fundamental to practising pharmacy in Australia. It ensures that pharmacists trained overseas meet the Australian standards required to practise as registered pharmacists in the country.<br /><br />
            Once you clear this exam, you can apply for a job, earn well, and have a chance to get a work and PR Visa.
          </p>
        </div>
        <div className={styles.aboutExamRight}>
          <img src={examImage} alt="OPRA Exam" className={styles.examImage} />
        </div>

        </div>
        <EligibilityProcedure />
        
      </div>
      <TestingCentres />
    </div>
  );
};

export default AboutExam;
