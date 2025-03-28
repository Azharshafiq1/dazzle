import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Banner from "./components/Banner/Banner"
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import AboutUs from './components/About_Us/About_us'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Twenty from './components/Twenty/Twenty'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'
import AOS from "aos"




function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <FloatingButtons/>
      <Banner/>
      <Twenty/>
      <Gallery/>
      <Services/>
      <Testimonial/>
      <Footer/>
      
     
    
    </div>
    
  )
}

export default App
