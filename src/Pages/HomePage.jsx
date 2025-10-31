import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import WhatWeDo from '../Components/WhatWeDo'
import Portfolio from '../Components/Porfolio'
import WhyChooseUs from '../Components/WhyChooseUs'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <About />
        <WhatWeDo />
        <Portfolio />
        <WhyChooseUs />
        <Footer />
    </div>
  )
}

export default HomePage