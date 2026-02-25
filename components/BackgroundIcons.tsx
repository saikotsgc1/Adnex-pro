import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Filter, Target, Layout, Megaphone, Hash } from 'lucide-react';

const BackgroundIcons: React.FC = () => {
  const icons = [
    { Icon: TrendingUp, x: '10%', y: '20%', delay: 0 },
    { Icon: BarChart3, x: '80%', y: '15%', delay: 2 },
    { Icon: Filter, x: '15%', y: '70%', delay: 4 },
    { Icon: Target, x: '85%', y: '75%', delay: 1 },
    { Icon: Layout, x: '50%', y: '10%', delay: 5 },
    { Icon: Megaphone, x: '45%', y: '85%', delay: 3 },
    { Icon: Hash, x: '25%', y: '40%', delay: 6 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-brand-primary/20 dark:text-white/10" // Reduced opacity significantly
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.Icon size={64} strokeWidth={1} />
        </motion.div>
      ))}
      {/* Abstract strategy lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] dark:opacity-[0.07]">
        <line x1="10%" y1="20%" x2="50%" y2="10%" stroke="currentColor" strokeWidth="1" />
        <line x1="50%" y1="10%" x2="80%" y2="15%" stroke="currentColor" strokeWidth="1" />
        <line x1="85%" y1="75%" x2="45%" y2="85%" stroke="currentColor" strokeWidth="1" />
        <line x1="45%" y1="85%" x2="15%" y2="70%" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default BackgroundIcons;