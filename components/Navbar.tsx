import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
    { name: 'Chill Corner', path: '/chill' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? 'p-3 md:p-6' : 'p-4 md:p-10'}`}>
        <div className={`glass-card flex items-center justify-between w-full max-w-6xl px-6 py-3 md:py-4 rounded-[2rem] relative transition-all duration-500 ${scrolled ? 'shadow-2xl' : ''}`}>
          
          <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Logo isSmall />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-extrabold tracking-tight transition-colors ${
                  location.pathname === link.path 
                    ? 'text-[#8F7BC8] underline decoration-2 underline-offset-8' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-[#8F7BC8]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="lg:hidden p-2.5 glass-card border-none rounded-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[40] bg-[#1A0F1F]/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-4xl font-black ${location.pathname === link.path ? 'text-[#8F7BC8]' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;