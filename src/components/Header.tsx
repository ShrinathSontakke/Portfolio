import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-black/50 backdrop-blur-lg'
            : 'bg-white/50 backdrop-blur-lg'
          : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className={`flex items-center space-x-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="h-8 w-8" />
            <span className="text-xl font-bold">Portfolio</span>
          </motion.a>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['About', 'Projects', 'Skills', 'Resume', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`relative group ${
                      theme === 'dark' ? 'text-white/90' : 'text-gray-700'
                    } hover:text-current transition-colors`}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-violet-600 via-blue-500 to-purple-500'
                        : 'bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500'
                    } transition-all duration-300 group-hover:w-full`} />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden"
          >
            <button
              className={`p-2 rounded-lg ${
                theme === 'dark'
                  ? 'bg-white/10 hover:bg-white/20'
                  : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
            >
              <div className="w-6 h-0.5 bg-current mb-1.5" />
              <div className="w-6 h-0.5 bg-current mb-1.5" />
              <div className="w-6 h-0.5 bg-current" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.nav
        initial={false}
        className={`fixed inset-0 z-50 ${
          theme === 'dark' ? 'bg-black/90' : 'bg-white/90'
        } backdrop-blur-lg md:hidden`}
        style={{ display: 'none' }}
      >
        <div className="container mx-auto px-6 py-8">
          <ul className="space-y-6 text-center">
            {['About', 'Projects', 'Skills', 'Resume', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                className="text-xl font-semibold"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block py-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  } hover:text-current transition-colors`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </motion.header>
  );
}