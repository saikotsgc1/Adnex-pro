import React from 'react';
import { motion, Variants } from 'framer-motion';

interface GlitzTextProps {
  text: string;
  className?: string;
  isBrand?: boolean;
  delay?: number;
}

const GlitzText: React.FC<GlitzTextProps> = ({ text, className = "", isBrand = false, delay = 0 }) => {
  const words = text.split(" ");
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="mr-[0.25em] whitespace-nowrap">
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={charIdx}
              variants={child}
              style={{ display: "inline-block" }}
              className={isBrand ? 'text-brand-primary' : ''}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default GlitzText;