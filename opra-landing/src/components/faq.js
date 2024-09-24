import React, { useState } from 'react';
import styles from '../styles/faq.module.css';

const faqData = [
  { 
    question: "Should I take KAPS or OPRA?", 
    answer: "If you are aiming to complete your exam before the transition, taking KAPS in November might be a good option, as it will be the last time it is offered. However, if you are planning for the future or if the timing does not work for you, preparing for the OPRA exam could be a better choice." 
  },
  { 
    question: "Who can take the KAPS exam?", 
    answer: "If you have already registered for the KAPS exam or completed your skills assessment, you can sit for the KAPS exam in the November attempt. However, if you haven't registered yet, you need to act quickly and apply for the November KAPS exam, as it will be the last time it is conducted" 
  },
  { 
    question: "Is OPRA difficult than KAPS?", 
    answer: "According to the APC, the difficulty level of the OPRA exam remains the same as that of the KAPS exam. However, the shorter exam duration and different scoring methodology may present new challenges. These can be managed effectively with the right resources and thorough preparation, as provided by the best OPRA Exam Preparation Course." 
  },
  { 
    question: "How will the exam be tested and what is the passing criteria?", 
    answer: "The exam will be tested according to the Rasch methodology. The scoring pattern is based on the level of difficult questions attempted." 
  },
  { 
    question: "Are there any differences in the cost involved?", 
    answer: "Yes, the OPRA exam costs AUD 2190, which is less than the KAPS exam." 
  },
  { 
    question: "Will the eligibility and registration process change?", 
    answer: "There will be no change in the eligibility and registration process for OPRA. It will be the same as that of the KAPS exam." 
  },
  { 
    question: "What should I know if I have already registered or completed my skills assessment for the KAPS exam?", 
    answer: "If you have already registered or completed your skills assessment for the KAPS exam, it is advisable to take the KAPS exam in November. Delaying and taking the exam in March may involve adapting to a revised syllabus and a shorter exam duration. Opting for the current KAPS format, which you are already familiar with, could be more advantageous." 
  },
  { 
    question: "What if I want to take the KAPS exam only?", 
    answer: "If you wish to take only the KAPS exam, you should complete your skills assessment and register for the November KAPS exam. This will be the last opportunity to take the KAPS exam." 
  },
  { 
    question: "What if I have given KAPS part 1? Do I need to take OPRA again?", 
    answer: "If you have given the KAPS part 1, you do not need to retake the OPRA again. You have to take the KAPS exam only, even if you fail the November KAPS exam. " 
  },
  
  { 
    question: "Will the syllabus be the same for OPRA?", 
    answer: "The syllabus for the OPRA exam will be similar to that of the KAPS exam, but it will include additional emphasis on therapeutics and practical application to align with current Australian pharmacy practice standards." 
  },

  // Add more FAQs as needed
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
    <h1 className={styles.heading}>
        Frequently Asked Questions
    </h1>
      <div className={styles.faqContainer}>
        {/* FAQ Accordion */}
        <div className={styles.faqLeft}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${openIndex === index ? styles.active : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.accordionHeader}>
                <p>{faq.question}</p>
                <span className={`${styles.accordionArrow} ${openIndex === index ? styles.active : ''}`}>
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {openIndex === index && (
                <div className={styles.accordionContent}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Us Section */}
        <div className={styles.faqRight}>
          <div className={styles.contactUs}>
            <p>If you have more Questions</p>
            <a href="https://academically.com/contact-us/"><button className={styles.contactButton}>Contact Us</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
