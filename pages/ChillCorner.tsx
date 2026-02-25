import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Play, Users, Coffee, Sparkles, MessageCircle } from 'lucide-react';

const ChillCorner: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 100 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="pt-32 md:pt-48 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <motion.header variants={containerVariants} className="text-center mb-24">
        <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black mb-10 tracking-tighter text-white leading-[0.9]">
          Chill <span className="text-brand-primary">Corner.</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-2xl text-slate-300 max-w-2xl mx-auto font-medium opacity-80">
          Inside AdNex PRO — where ideas become execution. Experience the vibe in person.
        </motion.p>
      </motion.header>

      {/* Office Tour Section */}
      <motion.div variants={containerVariants} className="mb-32">
        <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 tracking-tight flex items-center gap-4">
          <div className="h-10 w-2.5 bg-brand-primary rounded-full"></div>
          Office Tour
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Workspace", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&h=400&fit=crop" },
            { title: "Meeting Room", img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=400&h=400&fit=crop" },
            { title: "Chill Zone", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&h=400&fit=crop" },
            { title: "Collaboration", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&h=400&fit=crop" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card rounded-[2rem] overflow-hidden group border-white/10 relative aspect-square"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-brand-navy/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play size={40} className="text-white opacity-80" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card bg-white/10 border-white/5 rounded-xl backdrop-blur-md">
                <p className="text-sm font-black uppercase tracking-widest text-white">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Behind the scenes */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mb-32"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 tracking-tight flex items-center gap-4">
          <div className="h-10 w-2.5 bg-brand-primary rounded-full"></div>
          Behind the Scenes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Coffee />, title: "Brainstorming Clips", text: "Where strategies are born over morning caffeine." },
            { icon: <Sparkles />, title: "Casual Moments", text: "The team synergy that drives performance." },
            { icon: <MessageCircle />, title: "Strategy Discussions", text: "Data deep-dives that build brand authority." }
          ].map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-card p-10 rounded-[3rem] border-white/10 flex flex-col items-center text-center">
              <div className="bg-brand-primary/10 p-6 rounded-3xl text-brand-primary mb-8">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-2xl font-black mb-3 text-white">{item.title}</h3>
              <p className="text-slate-400 text-base font-medium leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-44"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 0.98 }}
              className="glass-card rounded-[1.5rem] overflow-hidden border-white/5 aspect-square bg-slate-800/20"
            >
              <div className="w-full h-full flex items-center justify-center opacity-20">
                <Camera size={48} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChillCorner;