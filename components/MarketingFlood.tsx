import React from 'react';
import { motion } from 'framer-motion';

const MarketingFlood: React.FC = () => {
  const words = ["GROWTH", "SCALE", "AUTHORITY", "ENGINEERING", "DATA", "PERFORMANCE", "MARKETING", "ADNEX PRO", "SYNERGY", "STRATEGY"];
  
  return (
    <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.02] pointer-events-none select-none flex flex-col justify-around py-20 rotate-[-5deg] scale-125">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: i % 2 === 0 ? "0%" : "-50%" }}
          animate={{ x: i % 2 === 0 ? "-50%" : "0%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap text-[8vw] font-black tracking-tighter"
        >
          {words.concat(words).map((word, j) => (
            <span key={j} className="mx-8">{word}</span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default MarketingFlood;