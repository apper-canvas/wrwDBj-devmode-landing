import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  
  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
      
      // Update header background
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Developer Tools", href: "#dev-tools" },
    { name: "Team Workflow", href: "#team-workflow" },
    { name: "Pricing", href: "#pricing" }
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 bg-white bg-opacity-95 dark:bg-surface-900 dark:bg-opacity-95 backdrop-blur-md shadow-md' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 group-hover:shadow-primary/30 group-hover:scale-105">
              D
            </div>
            <span className="ml-2 text-xl font-bold text-surface-900 dark:text-white">
              Dev<span className="text-gradient">Mode</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium relative py-2 transition-colors duration-200 ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary dark:text-primary' 
                    : 'text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}
          </nav>
          
          {/* Desktop Call-to-Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-surface-600 hover:text-surface-900 dark:text-surface-300 dark:hover:text-white transition-colors duration-200">
              Sign In
            </a>
            <motion.a 
              href="#cta" 
              className="btn btn-primary group relative overflow-hidden shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center">
                Get started
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"></span>
            </motion.a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-surface-600 hover:text-surface-900 hover:bg-surface-100 dark:text-surface-300 dark:hover:text-white dark:hover:bg-surface-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800 shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary bg-surface-50 dark:bg-surface-800'
                      : 'text-surface-600 hover:text-surface-900 hover:bg-surface-50 dark:text-surface-300 dark:hover:text-white dark:hover:bg-surface-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 pb-3 border-t border-surface-200 dark:border-surface-700 mt-2">
                <a 
                  href="#" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-surface-600 hover:text-surface-900 hover:bg-surface-50 dark:text-surface-300 dark:hover:text-white dark:hover:bg-surface-800"
                >
                  Sign In
                </a>
                <a 
                  href="#cta" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="flex items-center justify-between px-3 py-2 mt-2 rounded-md text-base font-medium bg-gradient-to-r from-primary to-accent-blue text-white hover:shadow-md hover:shadow-primary/30 transition-all duration-300"
                >
                  <span>Get started</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header