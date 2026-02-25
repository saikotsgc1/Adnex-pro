import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import ChillCorner from './pages/ChillCorner';
import Confirmation from './pages/Confirmation';
import BackgroundIcons from './components/BackgroundIcons';
import { AnimatePresence, motion } from 'framer-motion';
import { WhatsAppIcon } from './components/Icons';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#1A0F1F] text-slate-100 dark">
      {/* Background Decor Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <BackgroundIcons />
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#8F7BC8]/10 dark:bg-[#8F7BC8]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-900/10 dark:bg-blue-900/5 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chill" element={<ChillCorner />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/8801738775957" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
};

export default App;