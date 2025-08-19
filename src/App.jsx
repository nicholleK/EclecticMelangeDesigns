import { useState } from 'react'
import './Styles/App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Designs from './Pages/Designs'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import useEmblaCarousel  from 'embla-carousel-react'




function App() {
  return (
    <>
    <Router> 
      {/* Header */}
     <Header/>  
     
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/designs"  element={<Designs/>}/>

      </Routes>
     {/* Footer */}
      <Footer/>
     </Router>
    </>
  )
}

export default App
