import React from 'react'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import { Route, Routes } from 'react-router'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import WhyChooseUsPage from './Pages/WhyChooseUsPage'
import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='/services' element={ <ServicesPage /> } />
        <Route path='/whychooseus' element={ <WhyChooseUsPage /> } />
        <Route path='/portfolio' element={ <PortfolioPage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
      </Routes>

      <Footer />
    </div>
  )
}

export default App