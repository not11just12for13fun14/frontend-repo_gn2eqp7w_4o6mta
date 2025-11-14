import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
