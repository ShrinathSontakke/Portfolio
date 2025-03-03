import { motion, AnimatePresence } from 'framer-motion';
import { Github, Instagram, Linkedin, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ 
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }
    }}
  >
    {children}
  </motion.div>
);

function SocialLink({ href, icon: Icon, delay = 0 }: { href: string; icon: any; delay?: number }) {
  const { theme } = useTheme();
  
  return (
    <motion.a
      href={href}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ 
        scale: 1.2,
        boxShadow: theme === 'dark' 
          ? '0 0 20px rgba(255,255,255,0.3)' 
          : '0 0 20px rgba(0,0,0,0.2)'
      }}
      className={`p-3 rounded-full flex items-center justify-center ${
        theme === 'dark'
          ? 'bg-white/10 hover:bg-white/20 text-white'
          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
      } transition-all duration-300`}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}

const BackgroundAnimation = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg
      className="absolute w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,0 L100,0 L100,100 L0,100 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 0.2,
          transition: { duration: 2, repeat: Infinity }
        }}
        className="text-blue-500/20"
      />
    </svg>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.2, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }
        }}
      >
        <div 
          className={`w-2 h-2 rounded-full ${
            Math.random() > 0.5 ? 'bg-blue-400/20' : 'bg-purple-400/20'
          }`}
        />
      </motion.div>
    ))}
  </div>
);

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-50'
    }`}>
      <BackgroundAnimation />

      {/* Theme Toggle */}
      <AnimatePresence mode="wait">
        <motion.button
          key={theme}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          onClick={toggleTheme}
          className={`fixed top-8 right-8 p-3 rounded-full ${
            theme === 'dark'
              ? 'bg-white/10 hover:bg-white/20'
              : 'bg-gray-100 hover:bg-gray-200'
          } transition-colors duration-300 z-50`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === 'dark' ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-800" />
          )}
        </motion.button>
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Hi, I am
                  <motion.span 
                    className={`block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Shrinath
                  </motion.span>
                  <motion.span 
                    className={`block bg-clip-text text-transparent ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Software Developer
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Software Developer with 1.5+ years of experience specializing in backend development, 
                  API design, and database optimization.
                </motion.p>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                <SocialLink href="https://github.com/ShrinathSontakke" icon={Github} delay={1.0} />
                <SocialLink href="https://www.linkedin.com/in/shrinath-sontakke/" icon={Linkedin} delay={1.2} />
                <SocialLink href="mailto:shrisontakke88@gmail.com" icon={Instagram} delay={1.4} />
              </div>

              {/* Resume Button */}
              <motion.a
                href="/path-to-your-resume.pdf"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className={`inline-block px-8 py-4 text-lg font-medium rounded-full ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                } transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: theme === 'dark'
                    ? '0 0 30px rgba(147, 197, 253, 0.3)'
                    : '0 0 30px rgba(37, 99, 235, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* Right Profile Image */}
            <FloatingElement delay={0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src="/your-profile-photo.jpg"
                  alt="Shrinath Sontakke"
                  className="relative z-10 w-full rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            </FloatingElement>
          </div>
        </div>
      </div>
    </div>
  );
}