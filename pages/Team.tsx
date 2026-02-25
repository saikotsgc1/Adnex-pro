import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Linkedin, Mail, Facebook } from 'lucide-react';
import MarketingFlood from '../components/MarketingFlood';

const Team: React.FC = () => {
  const navigate = useNavigate();
  const team = [
    {
      name: "Hasan Ahmed Saikot",
      role: "CEO",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=500&fit=crop",
      bio: "Vision, strategy, and growth leadership.",
      socials: { fb: "#", li: "#", mail: "hasan@adnexpro.com" }
    },
    {
      name: "Shahriyer Mahi",
      role: "Content Writer",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=500&fit=crop",
      bio: "Brand voice, storytelling, and audience engagement.",
      socials: { fb: "#", li: "#", mail: "mahi@adnexpro.com" }
    },
    {
      name: "Omar Farouk",
      role: "Graphic Designer",
      img: "https://images.unsplash.com/photo-1519085185758-2098f13bb1f7?q=80&w=400&h=500&fit=crop",
      bio: "Visual identity, creative assets, and brand aesthetics.",
      socials: { fb: "#", li: "#", mail: "omar@adnexpro.com" }
    },
    {
      name: "Mohammad Navid",
      role: "Motion Graphics Designer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&fit=crop",
      bio: "Dynamic visuals, animation, and video storytelling.",
      socials: { fb: "#", li: "#", mail: "navid@adnexpro.com" }
    },
    {
      name: "Tareque Ahammed",
      role: "Adviser",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&fit=crop",
      bio: "Strategic guidance and high-level decision support.",
      socials: { fb: "#", li: "#", mail: "tareque@adnexpro.com" }
    },
    {
      name: "Hussain Mia",
      role: "Support Manager",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&fit=crop",
      bio: "Managing client support systems and service quality.",
      socials: { fb: "#", li: "#", mail: "hussain@adnexpro.com" }
    },
    {
      name: "Tanvir Hossen",
      role: "Digital Growth Specialist",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&fit=crop",
      bio: "Ads, YouTube SEO, and channel/page growth.",
      socials: { fb: "#", li: "#", mail: "tanvir@adnexpro.com" }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
      className="relative min-h-screen"
    >
      <div className="absolute inset-0 z-0 overflow-hidden h-[100vh] opacity-40">
        <MarketingFlood />
      </div>

      <div className="pt-32 md:pt-44 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <motion.header variants={containerVariants} className="text-center mb-32">
          <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black mb-10 tracking-tighter text-white flex flex-col items-center leading-[0.9]">
            <span className="block overflow-hidden">
              <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                Meet the People
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span className="block text-brand-primary" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
                Behind the Growth
              </motion.span>
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
            Strategists. Builders. Problem-solvers. The specialized architects behind AdNex PRO.
          </motion.p>
        </motion.header>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-32"
        >
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-[2rem] overflow-hidden group border-white/10 relative flex flex-col"
              whileHover={{ y: -12 }}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-card/40 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-10 relative z-20 flex-grow">
                <h3 className="text-2xl font-black mb-2 text-white tracking-tight">{member.name}</h3>
                <p className="text-[#8F7BC8] text-xs font-black uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-base text-slate-400 mb-8 font-medium">
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  <a href={member.socials.fb} className="text-slate-500 hover:text-[#8F7BC8] transition-colors"><Facebook size={20} /></a>
                  <a href={member.socials.li} className="text-slate-500 hover:text-[#8F7BC8] transition-colors"><Linkedin size={20} /></a>
                  <a href={`mailto:${member.socials.mail}`} className="text-slate-500 hover:text-[#8F7BC8] transition-colors"><Mail size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-32">
           <button 
            onClick={() => navigate('/contact')}
            className="bg-[#8F7BC8] text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-[1.03] transition-all shadow-2xl shadow-[#8F7BC8]/30"
           >
            Work with the team that delivers results.
           </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Team;