import { useEffect } from 'react'
import Hero from './sections/Hero'
import Features from './sections/Features'
import About from './sections/About'
import Contact from './sections/Contact'
import Navigation from './components/Navigation'
import Background from './components/Background'
import './index.css'

function App() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Add loaded class for entrance animations
    setTimeout(() => {
      document.body.classList.add('loaded')
    }, 100)
  }, [])

  return (
    <div className="relative min-h-screen bg-bg-primary overflow-x-hidden">
      {/* Background effects */}
      <Background />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
