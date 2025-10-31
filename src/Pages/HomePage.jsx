import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import WhatWeDo from '../Components/WhatWeDo'
import Portfolio from '../Components/Porfolio'
import WhyChooseUs from '../Components/WhyChooseUs'
import Stats from '../Components/Stats'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <Stats />
        <About />
        <WhatWeDo />
        <Portfolio />
        <WhyChooseUs />
        
    </div>
  )
}

export default HomePage