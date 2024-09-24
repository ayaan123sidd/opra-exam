import React from 'react';
import styles from '../styles/footer.module.css'; // Importing CSS module for styling
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/x-twitter.svg';
import linkedinIcon from '../assets/linkedin.svg';
import instagramIcon from '../assets/instagram.svg';
import youtubeIcon from '../assets/you-tube.svg';
import Whatsapp from '../assets/whatsapp.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Company</h3>
          <ul>
          <li><a href="https://academically.com/about-us/">About Us</a></li>
            <li><a href="https://academically.com/faculty/">Our Faculty</a></li>
            <li><a href="https://academically.com/all-courses/">Courses</a></li>
            <li><a href="https://academically.com/instructor-register/">Become a Mentor</a></li>
            <li><a href="https://academically.com/blogs/">Blog</a></li>
            <li><a href="https://academically.com/events/">Event</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Services</h3>
          <ul>
          <li><a href="https://academically.com/consultation/">Consultation</a></li>
            <li><a href="https://academically.com/scholarship-program/">Scholarship Program</a></li>
            <li><a href="https://academically.com/ambassador-program/">Ambassador Program</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Call Us At</h3>
          <ul>
          <li><a href="tel:+918069662074">+91 8069662074</a></li>
          <li><a href="https://wa.me/61416424328" target="_blank" rel="noopener noreferrer">+61 416 424 328</a></li>
          <li><a href="https://wa.me/61406525564" target="_blank" rel="noopener noreferrer">+61 406 525 564</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Write To Us At</h3>
          <ul>
            <li><a href="mailto:contact@academically.com">contact@academically.com</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Follow Us At</h3>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/academically.australia" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className={styles.icon} />
            </a>
            <a href="https://x.com/AcademicallyAus" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/company/academicallyai/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
            </a>
            </div>
            <div className={styles.icons}>
            <a href="https://www.instagram.com/academically.australia/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className={styles.icon} />
            </a>
            <a href="https://www.youtube.com/@DrAkramAhmad" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" className={styles.icon} />
            </a>
            <a href="https://wa.me/61406525564" target="_blank" rel="noopener noreferrer">
              <img src={Whatsapp} alt="whatsapp" className={styles.icon} />
            </a>
          </div>
          
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
