import React, { useState, useEffect } from 'react';
import styles from '../styles/SectionalNavbar.module.css';
import About from '../components/bottomnavbar/about'
import Curriculum from './bottomnavbar/curriculum';
import Testimonials from './bottomnavbar/testimonials';
import AboutExam from './bottomnavbar/aboutexam';

const SectionalNavbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Sticky Navbar */}
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#about" className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}>About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#curriculum" className={`${styles.navLink} ${activeSection === 'curriculum' ? styles.active : ''}`}>Curriculum</a>
          </li>
          <li className={styles.navItem}>
            <a href="#testimonials" className={`${styles.navLink} ${activeSection === 'testimonials' ? styles.active : ''}`}>Testimonials</a>
          </li>
          <li className={styles.navItem}>
            <a href="#aboutExam" className={`${styles.navLink} ${activeSection === 'aboutExam' ? styles.active : ''}`}>About Exam</a>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="about" className={styles.section}>
        <About />
      </section>
      
      <section id="curriculum" className={styles.section}>
        <Curriculum />
      </section>

      <section id="testimonials" className={styles.section}>
       
        <Testimonials />
      </section>

      <section id="aboutExam" className={styles.section}>
        <AboutExam />
      </section>
    </div>
  );
};

export default SectionalNavbar;
