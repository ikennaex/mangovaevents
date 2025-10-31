import React from 'react'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import { Route, Routes } from 'react-router'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path='/' element={ <HomePage /> } />
        {/* <Route path='/about' element={ <About /> } /> */}
      </Routes>
    </div>
  )
}

export default App