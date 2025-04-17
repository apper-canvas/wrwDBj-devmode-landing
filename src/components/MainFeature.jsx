import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Copy, Check, Eye, Layers, Palette, X } from 'lucide-react'

const MainFeature = () => {
  const [activeTab, setActiveTab] = useState('visual')
  const [htmlInput, setHtmlInput] = useState('<div class="card">\n  <h2>Hello World</h2>\n  <p>This is a sample card component</p>\n  <button class="btn">Click me</button>\n</div>')
  const [cssInput, setCssInput] = useState('.card {\n  padding: 1.5rem;\n  border-radius: 0.5rem;\n  background-color: white;\n  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);\n}\n\n.btn {\n  background-color: #00AEEF;\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 0.25rem;\n}')
  const [copied, setCopied] = useState(false)
  const [previewMode, setPreviewMode] = useState('split')
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Reset copied state after 2 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  // Validate HTML input
  const validateHtml = (html) => {
    // Basic validation - check for matching tags
    const openTags = html.match(/<[^/][^>]*>/g) || []
    const closeTags = html.match(/<\/[^>]*>/g) || []
    
    if (openTags.length !== closeTags.length) {
      setShowError(true)
      setErrorMessage('HTML has mismatched tags')
      return false
    }
    
    setShowError(false)
    return true
  }

  const handleHtmlChange = (e) => {
    setHtmlInput(e.target.value)
    validateHtml(e.target.value)
  }

  const handleCssChange = (e) => {
    setCssInput(e.target.value)
  }

  const copyToClipboard = () => {
    const textToCopy = activeTab === 'visual' 
      ? htmlInput 
      : activeTab === 'code' 
        ? cssInput 
        : `${htmlInput}\n\n${cssInput}`
    
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
  }

  const renderPreview = () => {
    // Create a style element for the CSS
    const styleContent = document.createElement('style')
    styleContent.textContent = cssInput
    
    // Create a container for the HTML
    const htmlContent = document.createElement('div')
    htmlContent.innerHTML = htmlInput
    
    // Return the preview
    return (
      <div className="preview-container relative overflow-hidden rounded-lg bg-white dark:bg-surface-800 shadow-card">
        <div 
          className="preview-content p-4"
          dangerouslySetInnerHTML={{ 
            __html: `<style>${cssInput}</style>${htmlInput}` 
          }}
        />
      </div>
    )
  }

  const tabs = [
    { id: 'visual', label: 'Visual Mode', icon: <Eye size={18} /> },
    { id: 'code', label: 'Code Mode', icon: <Code size={18} /> },
    { id: 'layers', label: 'Layers', icon: <Layers size={18} /> }
  ]

  const viewModes = [
    { id: 'split', label: 'Split View' },
    { id: 'code', label: 'Code Only' },
    { id: 'preview', label: 'Preview Only' }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-white dark:bg-surface-800 shadow-card"
    >
      {/* Header with tabs */}
      <div className="flex items-center justify-between border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-900 px-4 py-2">
        <div className="flex space-x-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-surface-600 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700'
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="bg-surface-100 dark:bg-surface-700 rounded-md p-1 flex">
            {viewModes.map(mode => (
              <button
                key={mode.id}
                onClick={() => setPreviewMode(mode.id)}
                className={`px-3 py-1 text-xs font-medium rounded transition-all duration-200 ${
                  previewMode === mode.id
                    ? 'bg-white dark:bg-surface-800 shadow-sm'
                    : 'text-surface-600 dark:text-surface-300'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
          
          <button
            onClick={copyToClipboard}
            className="flex items-center px-3 py-1.5 text-sm font-medium rounded-md bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-600 transition-all duration-200"
          >
            {copied ? <Check size={16} className="text-accent-green" /> : <Copy size={16} />}
            <span className="ml-1">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>
      
      {/* Main content area */}
      <div className={`flex ${previewMode === 'split' ? 'flex-col md:flex-row' : 'flex-col'}`}>
        {/* Code editor */}
        {previewMode !== 'preview' && (
          <div className={`${previewMode === 'split' ? 'md:w-1/2' : 'w-full'} border-r border-surface-200 dark:border-surface-700`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {activeTab === 'visual' && (
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-surface-600 dark:text-surface-300">HTML</h3>
                      <div className="flex items-center">
                        <Palette size={16} className="text-accent-pink mr-1" />
                        <span className="text-xs text-surface-500 dark:text-surface-400">Structure</span>
                      </div>
                    </div>
                    <div className="relative">
                      <textarea
                        value={htmlInput}
                        onChange={handleHtmlChange}
                        className="w-full h-64 p-3 text-sm font-mono bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-md focus:ring-1 focus:ring-primary focus:border-primary dark:focus:ring-primary dark:focus:border-primary"
                        placeholder="Enter HTML code here..."
                      />
                      <AnimatePresence>
                        {showError && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-2 right-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-md flex items-center"
                          >
                            <span>{errorMessage}</span>
                            <button 
                              onClick={() => setShowError(false)}
                              className="ml-1 text-red-800 hover:text-red-900"
                            >
                              <X size={12} />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
                
                {activeTab === 'code' && (
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-surface-600 dark:text-surface-300">CSS</h3>
                      <div className="flex items-center">
                        <Palette size={16} className="text-accent-blue mr-1" />
                        <span className="text-xs text-surface-500 dark:text-surface-400">Styling</span>
                      </div>
                    </div>
                    <textarea
                      value={cssInput}
                      onChange={handleCssChange}
                      className="w-full h-64 p-3 text-sm font-mono bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-md focus:ring-1 focus:ring-primary focus:border-primary dark:focus:ring-primary dark:focus:border-primary"
                      placeholder="Enter CSS code here..."
                    />
                  </div>
                )}
                
                {activeTab === 'layers' && (
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-surface-600 dark:text-surface-300">Component Layers</h3>
                      <div className="flex items-center">
                        <Layers size={16} className="text-accent-orange mr-1" />
                        <span className="text-xs text-surface-500 dark:text-surface-400">Structure</span>
                      </div>
                    </div>
                    <div className="bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-md p-3 h-64 overflow-auto">
                      <div className="space-y-2">
                        <div className="p-2 bg-white dark:bg-surface-800 rounded border-l-4 border-accent-blue shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs">&lt;div class="card"&gt;</span>
                            <span className="text-xs text-surface-500">Root</span>
                          </div>
                        </div>
                        
                        <div className="p-2 bg-white dark:bg-surface-800 rounded border-l-4 border-accent-pink shadow-sm ml-4">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs">&lt;h2&gt;</span>
                            <span className="text-xs text-surface-500">Text</span>
                          </div>
                        </div>
                        
                        <div className="p-2 bg-white dark:bg-surface-800 rounded border-l-4 border-accent-pink shadow-sm ml-4">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs">&lt;p&gt;</span>
                            <span className="text-xs text-surface-500">Text</span>
                          </div>
                        </div>
                        
                        <div className="p-2 bg-white dark:bg-surface-800 rounded border-l-4 border-accent-green shadow-sm ml-4">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs">&lt;button class="btn"&gt;</span>
                            <span className="text-xs text-surface-500">Interactive</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
        
        {/* Preview */}
        {previewMode !== 'code' && (
          <div className={`${previewMode === 'split' ? 'md:w-1/2' : 'w-full'} p-4 bg-surface-100 dark:bg-surface-900 flex items-center justify-center`}>
            <div className="w-full max-w-md">
              {renderPreview()}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default MainFeature