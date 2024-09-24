import React from 'react';
import '../styles/CourseSection.css';

const CourseSection = () => {
  return (
    <section className="course-section">
      <div className="course-container">
        {/* Left Column */}
        <div className="course-column left-column">
        <div className="learning-format-container">
            <div className="learning-format">
              <span className="format-text">Learning format</span>
              <div className="class-type">Live classes + Recordings</div>
            </div>
          </div>
          <h1 className="course-heading">OPRA Exam Preparation Course</h1>
          <h2 className="course-subheading">Become a Registered Pharmacist in Australia</h2>
          <p className="course-description">
            Pass the Overseas Pharmacist Readiness Assessment (OPRA) exam on your first attempt with the best online OPRA coaching. 
            Our OPRA preparation course includes online classes, extensive study resources, and AI-driven mock tests, 
            making it the ideal OPRA Exam Preparation Course for international pharmacists seeking to move to and practise in Australia. 
            Enrol in our trusted course today and confidently pass the Overseas Pharmacist Readiness Assessment (OPRA) exam with ease.
          </p>

          {/* Info Table */}
          <div className="course-table">
            <div className="table-column">
              <h3 className="table-subheading">Batch Starts On</h3>
              <h4 className="table-heading">30 Sep 2024</h4>
            </div>
            <div className="table-column">
              <h3 className="table-subheading">Course Duration</h3>
              <h4 className="table-heading">4 months</h4>
            </div>
          </div>
        </div>

        {/* Right Column (Will be used later) */}
        <div className="course-column right-column">
          {/* YouTube Embed */}
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/UaYblagtxeE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <a href="https://academically.com/pharmacist/opra-exam-preparation-course/process/" className="enroll-button">
              Enroll Now
            </a>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;