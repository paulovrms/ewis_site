import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import './index.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header isOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App