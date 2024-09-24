import React from 'react'
import Navbar from '../components/navbar'
import CourseSection from '../components/CourseSection.js'
import FeaturesSection from '../components/FeaturesSection.js'
import WhyPharmacistSection from '../components/WhyPharmacistSection.js'
import SectionalNavbar from '../components/SectionalNavbar.js'
import Faq from '../components/faq.js'
import Tips from '../components/tips.js'
import Footer from '../components/footer.js'

const Opra = () => {
  return (
    <div>
        <Navbar />
        <CourseSection />
        <FeaturesSection />
        <WhyPharmacistSection />
        <SectionalNavbar />
        <Faq />
        <Tips />
        <Footer />
    </div>
  )
}

export default Opra