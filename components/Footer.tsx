import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-32 pb-16 px-8 relative z-10">
      <div className="max-w-7xl mx-auto pt-16 border-t border-slate-200 dark:border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo isSmall />
            <p className="text-slate-700 dark:text-slate-300 font-bold uppercase tracking-widest text-[10px]">
              Growth is engineered. Not guessed.
            </p>
          </div>
          
          <div className="flex justify-center gap-8 text-xs font-black uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <Link to="/team" className="hover:text-brand-primary transition-colors">Team</Link>
            <Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
            <Link to="/chill" className="hover:text-brand-primary transition-colors">Chill</Link>
          </div>
          
          <div className="flex justify-center md:justify-end gap-6">
            <a 
              href="https://facebook.com/adnexpro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-primary hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://x.com/adnexpro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-primary hover:scale-110 transition-transform"
              aria-label="X (formerly Twitter)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a 
              href="https://instagram.com/adnexpro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-primary hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://linkedin.com/company/adnexpro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-primary hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">
            © 2026 AdNex PRO. All rights reserved. Strategic Growth Engine.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;