import './Styles/App.css'
import Header from './Components/Header'
import ScrollToTop from './Components/ScrollToTop'
import ThemeToggle from './Components/ThemeToggle'
import Home from './Pages/Home'
import About from './Pages/About'
import Designs from './Pages/Designs'
import ProjectDetail from './Pages/ProjectDetail'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'




function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      {/* Header */}
     <Header/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/designs"  element={<Designs/>}/>
        <Route path="/designs/:slug"  element={<ProjectDetail/>}/>
        <Route path="/contact"  element={<Contact/>}/>

      </Routes>
     {/* Footer */}
      <Footer/>
      <ThemeToggle/>
     </Router>
    </>
  )
}

export default App
