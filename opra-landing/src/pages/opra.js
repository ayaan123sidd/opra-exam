import React from 'react'
import Navbar from '../components/navbar'
import CourseSection from '../components/CourseSection.js'
import FeaturesSection from '../components/FeaturesSection.js'
import WhyPharmacistSection from '../components/WhyPharmacistSection.js'
import SectionalNavbar from '../components/SectionalNavbar.js'

const Opra = () => {
  return (
    <div>
        <Navbar />
        <CourseSection />
        <FeaturesSection />
        <WhyPharmacistSection />
        <SectionalNavbar />
    </div>
  )
}

export default Opra