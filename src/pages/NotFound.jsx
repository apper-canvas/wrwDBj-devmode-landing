import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background-offWhite dark:bg-surface-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, 0] }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="mx-auto w-24 h-24 rounded-full bg-background-lavender dark:bg-secondary flex items-center justify-center text-4xl font-bold text-secondary dark:text-white"
          >
            404
          </motion.div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-surface-800 dark:text-white">Page Not Found</h1>
        <p className="text-surface-600 dark:text-surface-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound