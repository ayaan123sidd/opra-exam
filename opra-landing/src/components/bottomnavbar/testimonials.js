import React from 'react';
import styles from '../../styles/bottomnavbar/testimonials.module.css';
import start from '../../assets/star.png'

const Testimonials = () => {
  // Array of testimonials
  const testimonials = [
    {
      name: 'Prince Bansal',
      feedback:
        'Firstly, I am very grateful towards the Academically team. It has been a month being a student of Academically. They focus on the specific, relevant, and important content which they are assisting us to Crack KAPS. In this period, I found they are concentrating on Quality rather than Quantity. I am very delighted because of your guidance and support.',
    },
    {
      name: 'Testimonial 2',
      feedback:
        'This is another testimonial. The content here may vary in length depending on the feedback provided.',
    },
    {
      name: 'Testimonial 3',
      feedback: 'A short testimonial.',
    },
    {
      name: 'Testimonial 4',
      feedback:
        'This is a longer testimonial. The content here is meant to demonstrate a more text-heavy review from a client. The goal is to show that testimonials of different lengths can be accommodated gracefully within the layout.',
    },
    {
        name: 'Testimonial 4',
        feedback:
          'This is a longer testimonial. The content here is meant to demonstrate a more text-heavy review from a client. The goal is to show that testimonials of different lengths can be accommodated gracefully within the layout.',
      },
    {
        name: 'Prince Bansal',
        feedback:
          'Firstly, I am very grateful towards the Academically team. It has been a month being a student of Academically. They focus on the specific, relevant, and important content which they are assisting us to Crack KAPS. In this period, I found they are concentrating on Quality rather than Quantity. I am very delighted because of your guidance and support.',
      },
      {
        name: 'Testimonial 2',
        feedback:
          'This is another testimonial. The content here may vary in length depending on the feedback provided.',
      },
      {
        name: 'Testimonial 3',
        feedback: 'A short testimonial.',
      },
      {
        name: 'Testimonial 4',
        feedback:
          'This is a longer testimonial. The content here is meant to demonstrate a more text-heavy review from a client. The goal is to show that testimonials of different lengths can be accommodated gracefully within the layout.',
      },
      {
        name: 'Testimonial 4',
        feedback:
          'This is a longer testimonial. The content here is meant to demonstrate a more text-heavy review from a client. The goal is to show that testimonials of different lengths can be accommodated gracefully within the layout.',
      },
      {
        name: 'Testimonial 3',
        feedback: 'A short testimonial.A short testimonialA short testimonial',
      },
  ];

  return (
    <div className={styles.testimonialsSection}>
        <h1 className={styles.aboutHeader}>Testimonials</h1>
    <div className={styles.testimonialsWrapper}>
      {testimonials.map((testimonial, index) => (
        <div className={styles.testimonialItem} key={index}>
          <h4 className={styles.testimonialName}>{testimonial.name}</h4>
          <p className={styles.testimonialstar}><img src={start} alt="start" /><img src={start} alt="start" /><img src={start} alt="start" /><img src={start} alt="start" /><img src={start} alt="start" /></p>
          <p>{testimonial.feedback}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Testimonials;
