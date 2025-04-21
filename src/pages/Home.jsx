import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code, 
  Layers, 
  Copy, 
  Zap, 
  GitBranch, 
  Download, 
  Users, 
  ArrowRight, 
  ChevronDown,
  ExternalLink,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react'
import MainFeature from '../components/MainFeature'
import Header from '../components/Header'

// SVG Components
const HeroSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-float">
      <rect x="50" y="50" width="180" height="300" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2"/>
      <rect x="70" y="80" width="140" height="20" rx="4" fill="#F1FFD4"/>
      <rect x="70" y="110" width="100" height="10" rx="2" fill="#E8D9F0"/>
      <rect x="70" y="130" width="120" height="10" rx="2" fill="#E8D9F0"/>
      <rect x="70" y="160" width="80" height="30" rx="4" fill="#00AEEF"/>
      <rect x="70" y="210" width="140" height="1" rx="0.5" fill="#CBD5E1"/>
      <rect x="70" y="230" width="60" height="60" rx="4" fill="#FFB3C1"/>
      <rect x="140" y="230" width="70" height="60" rx="4" fill="#A5E887"/>
    </g>
    
    <g>
      <rect x="270" y="50" width="180" height="300" rx="8" fill="#0A0A0A" stroke="#1E293B" strokeWidth="2"/>
      <rect x="290" y="80" width="140" height="20" rx="4" fill="#1E293B"/>
      <text x="300" y="94" fill="#A5E887" fontFamily="monospace" fontSize="12">&lt;div class="card"&gt;</text>
      <rect x="290" y="110" width="140" height="20" rx="4" fill="#1E293B"/>
      <text x="310" y="124" fill="#FFB3C1" fontFamily="monospace" fontSize="12">&lt;h2&gt;Hello&lt;/h2&gt;</text>
      <rect x="290" y="140" width="140" height="20" rx="4" fill="#1E293B"/>
      <text x="310" y="154" fill="#FFB3C1" fontFamily="monospace" fontSize="12">&lt;p&gt;Content&lt;/p&gt;</text>
      <rect x="290" y="170" width="140" height="20" rx="4" fill="#1E293B"/>
      <text x="310" y="184" fill="#00AEEF" fontFamily="monospace" fontSize="12">&lt;button&gt;...&lt;/button&gt;</text>
      <rect x="290" y="200" width="140" height="20" rx="4" fill="#1E293B"/>
      <text x="300" y="214" fill="#A5E887" fontFamily="monospace" fontSize="12">&lt;/div&gt;</text>
    </g>
    
    <path d="M240 200 L260 200" stroke="#4B0055" strokeWidth="2" strokeDasharray="4 2"/>
  </svg>
)

const FeatureIcon = ({ icon, color }) => (
  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
    {icon}
  </div>
)

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero')
  
  // Track active section on scroll (keeping this for any direct section monitoring outside header)
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      title: "Live Code Preview",
      description: "See your code and design side by side in real-time as you make changes.",
      icon: <FeatureIcon icon={<Code size={24} />} color="bg-accent-blue bg-opacity-10" />,
      iconColor: "text-accent-blue"
    },
    {
      title: "Component Breakdown",
      description: "Analyze and understand the structure of any UI component with detailed layers view.",
      icon: <FeatureIcon icon={<Layers size={24} />} color="bg-accent-plum bg-opacity-10" />,
      iconColor: "text-accent-plum"
    },
    {
      title: "Instant Copy-Paste",
      description: "Copy any code snippet with a single click to use in your own projects.",
      icon: <FeatureIcon icon={<Copy size={24} />} color="bg-accent-green bg-opacity-10" />,
      iconColor: "text-accent-green"
    },
    {
      title: "Lightning Fast",
      description: "Optimized performance ensures DevMode works smoothly even with complex interfaces.",
      icon: <FeatureIcon icon={<Zap size={24} />} color="bg-accent-orange bg-opacity-10" />,
      iconColor: "text-accent-orange"
    }
  ]
  
  const devTools = [
    {
      title: "Code Snippets",
      description: "Save and organize frequently used code patterns for quick access.",
      icon: <Code size={24} className="text-accent-blue" />
    },
    {
      title: "Git Integration",
      description: "Commit your changes directly to your repository from DevMode.",
      icon: <GitBranch size={24} className="text-accent-plum" />
    },
    {
      title: "Export Options",
      description: "Export your code in multiple formats including HTML, CSS, React, and Vue.",
      icon: <Download size={24} className="text-accent-green" />
    },
    {
      title: "Team Collaboration",
      description: "Share your work with team members and collaborate in real-time.",
      icon: <Users size={24} className="text-accent-orange" />
    }
  ]

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Integrations", href: "#" },
        { name: "Pricing", href: "#pricing" },
        { name: "Changelog", href: "#" },
        { name: "Roadmap", href: "#" }
      ]
    },
    {
      title: "Use Cases",
      links: [
        { name: "Developers", href: "#" },
        { name: "Designers", href: "#" },
        { name: "Teams", href: "#" },
        { name: "Agencies", href: "#" },
        { name: "Startups", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Support", href: "#" },
        { name: "API", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Press", href: "#" },
        { name: "Legal", href: "#" }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* New Header Component */}
      <Header />

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden pt-16 md:pt-24 pb-16 bg-background-offWhite dark:bg-surface-900">
          <div className="absolute inset-0 bg-grid opacity-50"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-background-yellowGreen dark:bg-accent-plum dark:bg-opacity-20 rounded-bl-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-background-lavender dark:bg-accent-blue dark:bg-opacity-20 rounded-tr-full opacity-50 blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-surface-900 dark:text-white leading-tight"
                >
                  Visualize. <span className="text-gradient">Inspect.</span> Code.
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-4 text-xl text-surface-600 dark:text-surface-300 max-w-xl mx-auto lg:mx-0"
                >
                  DevMode lets you see the code behind any interface, instantly. Bridge the gap between design and development.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                >
                  <a href="#cta" className="btn btn-primary animate-pulse-glow">
                    Try it free
                  </a>
                  <a href="#how-it-works" className="btn btn-outline">
                    See how it works
                  </a>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative mx-auto max-w-md lg:max-w-full">
                  <HeroSVG />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-white dark:bg-surface-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-white"
              >
                Powerful features for modern development
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-xl text-surface-600 dark:text-surface-300"
              >
                Everything you need to inspect, understand, and recreate any interface
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="feature-card group"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 group-hover:${feature.iconColor}`}>{feature.title}</h3>
                  <p className="text-surface-600 dark:text-surface-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-background-yellowGreen dark:bg-surface-900 dark:bg-opacity-95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-white"
              >
                See DevMode in action
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-xl text-surface-600 dark:text-surface-300"
              >
                Try our interactive demo to experience the power of DevMode
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MainFeature />
            </motion.div>
          </div>
        </section>

        {/* Developer Tools Section */}
        <section id="dev-tools" className="py-16 md:py-24 bg-background-lavender dark:bg-surface-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-white"
              >
                Built for developers, by developers
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-xl text-surface-600 dark:text-surface-300"
              >
                Advanced tools that integrate seamlessly with your workflow
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devTools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white dark:bg-surface-900 rounded-xl shadow-card hover:shadow-soft transition-all duration-300 p-6 flex"
                >
                  <div className="mr-4 mt-1">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-surface-900 dark:text-white">{tool.title}</h3>
                    <p className="text-surface-600 dark:text-surface-300">{tool.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Workflow Section */}
        <section id="team-workflow" className="py-16 md:py-24 bg-white dark:bg-surface-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-white"
              >
                Streamline your team's workflow
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-xl text-surface-600 dark:text-surface-300"
              >
                Connect designers, developers, and product teams with a shared visual language
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background-offWhite dark:bg-surface-800 rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-accent-pink flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-surface-900 dark:text-white">Designers</h3>
                <p className="text-surface-600 dark:text-surface-300 mb-4">
                  "DevMode helps me understand how my designs will be implemented, making handoff so much smoother."
                </p>
                <div className="bg-white dark:bg-surface-900 p-4 rounded-lg">
                  <h4 className="font-medium text-sm text-surface-900 dark:text-white mb-2">Design to Code</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-300">
                    See exactly how your designs translate to code, ensuring your vision is implemented correctly.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background-offWhite dark:bg-surface-800 rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18L22 12L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6L2 12L8 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 4L10 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-surface-900 dark:text-white">Developers</h3>
                <p className="text-surface-600 dark:text-surface-300 mb-4">
                  "I can instantly see how any UI is built, saving hours of reverse engineering and guesswork."
                </p>
                <div className="bg-white dark:bg-surface-900 p-4 rounded-lg">
                  <h4 className="font-medium text-sm text-surface-900 dark:text-white mb-2">Inspect & Implement</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-300">
                    Analyze any interface and understand its structure, styles, and behavior in seconds.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background-offWhite dark:bg-surface-800 rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-accent-green flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-surface-900 dark:text-white">Product Teams</h3>
                <p className="text-surface-600 dark:text-surface-300 mb-4">
                  "DevMode bridges the gap between our design and development teams, accelerating our product cycles."
                </p>
                <div className="bg-white dark:bg-surface-900 p-4 rounded-lg">
                  <h4 className="font-medium text-sm text-surface-900 dark:text-white mb-2">Collaborate & Ship</h4>
                  <p className="text-sm text-surface-600 dark:text-surface-300">
                    Reduce miscommunication and speed up development with a shared visual language.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-background-offWhite dark:bg-surface-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-white"
              >
                Simple, transparent pricing
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-xl text-surface-600 dark:text-surface-300"
              >
                Start for free, upgrade when you need more power
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-surface-900 rounded-xl shadow-card p-6"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-background-yellowGreen dark:bg-accent-green dark:bg-opacity-20 text-accent-green">
                    Free
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-surface-900 dark:text-white">Starter</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-surface-900 dark:text-white">$0</span>
                  <span className="text-surface-600 dark:text-surface-300">/month</span>
                </div>
                <p className="text-surface-600 dark:text-surface-300 mb-6">
                  Perfect for trying out DevMode and occasional use.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-surface-600 dark:text-surface-300">Basic code inspection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-surface-600 dark:text-surface-300">5 projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-surface-600 dark:text-surface-300">Community support</span>
                  </li>
                </ul>
                <a href="#cta" className="btn btn-outline w-full">
                  Get started
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-surface-900 rounded-xl shadow-card p-6 border-2 border-primary relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-background-lavender dark:bg-accent-blue dark:bg-opacity-20 text-accent-blue">
                    Pro
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-surface-900 dark:text-white">Professional</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-surface-900 dark:text-white">$19</span>
                  <span className="text-surface-600 dark:text-surface-300">/month</span>
                </div>
                <p className="text-surface-600 dark:text-surface-300 mb-6">
                  For professional developers working on multiple projects.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-surface-600 dark:text-surface-300">Advanced code inspection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-surface-600 dark:text-surface-300">Unlimited projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-surface-600 dark:text-surface-300">Git integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-surface-600 dark:text-surface-300">Priority email support</span>
                  </li>
                </ul>
                <a href="#cta" className="btn btn-primary w-full">
                  Get started
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-surface-900 rounded-xl shadow-card p-6"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-background-lavender dark:bg-accent-plum dark:bg-opacity-20 text-accent-plum">
                    Team
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-surface-900 dark:text-white">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-surface-900 dark:text-white">$49</span>
                  <span className="text-surface-600 dark:text-surface-300">/user/month</span>
                </div>
                <p className="text-surface-600 dark:text-surface-300 mb-6">
                  For teams that need advanced collaboration features.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-surface-600 dark:text-surface-300">Everything in Pro</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-surface-600 dark:text-surface-300">Team collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-surface-600 dark:text-surface-300">Advanced security</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-accent-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-surface-600 dark:text-surface-300">Dedicated support</span>
                  </li>
                </ul>
                <a href="#cta" className="btn btn-outline w-full">
                  Contact sales
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-accent-plum to-accent-pink opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-blue opacity-20 rounded-bl-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-pink opacity-20 rounded-tr-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-white mb-6"
            >
              See the code. Build with clarity.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-surface-600 dark:text-surface-300 mb-8 max-w-2xl mx-auto"
            >
              Join thousands of developers and designers who use DevMode to bridge the gap between design and development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a href="#" className="btn btn-primary text-lg px-8 py-4">
                Start using DevMode
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a href="#" className="btn btn-outline text-lg px-8 py-4">
                Schedule a demo
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-bold text-lg">D</div>
                <span className="ml-2 text-xl font-bold">DevMode</span>
              </div>
              <p className="text-surface-400 mb-6">
                See the code behind any visual interface, instantly.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-surface-400 hover:text-white transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-surface-400 hover:text-white transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="#" className="text-surface-400 hover:text-white transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-surface-400 hover:text-white transition-colors duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-surface-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-surface-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DevMode. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-surface-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-surface-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-surface-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home