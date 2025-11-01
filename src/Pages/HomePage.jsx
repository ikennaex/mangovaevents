import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import WhatWeDo from '../Components/WhatWeDo'
import Portfolio from '../Components/Porfolio'
import WhyChooseUs from '../Components/WhyChooseUs'
import Stats from '../Components/Stats'
import Testimonials from '../Components/Testimonials'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <Stats />
        <About />
        <WhatWeDo />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
    </div>
  )
}

export default HomePage