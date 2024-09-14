import React from 'react';
import styles from '../../styles/bottomnavbar/curriculum.module.css';
import lockIcon from '../../assets/lock.png'

const Curriculum = () => {
  // Array of curriculums
  const curriculums = [
    'Curriculum 1',
    'Curriculum 2',
    'Curriculum 3',
    'Curriculum 4',
    'Curriculum 5',
    // Add more items as needed
  ];

  return (
    <div className={styles.curriculumSection}>
        <h1 className={styles.aboutHeader}>About the Curriculum</h1>
      <div className={styles.curriculumGrid}>
        {curriculums.map((curriculum, index) => (
          <div className={styles.curriculumContainer} key={index}>
            <div className={styles.moduleBox}>Module {index + 1}</div>
            <div className={styles.curriculumItem}>
              <p>{curriculum}</p>
              <img src={lockIcon} alt="Lock Icon" className={styles.lockIcon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
