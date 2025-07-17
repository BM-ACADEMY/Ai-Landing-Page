import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="relative flex flex-col min-h-[80vh] bg-black text-white text-sm pb-16 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] bg-center bg-cover" id='home'>
      <nav className="flex items-center justify-between p-4 border-b border-white/25 md:px-16 lg:px-24 xl:px-32 w-full">
       <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              ABM
            </span>
            <span className="text-2xl font-bold text-yellow-400 tracking-tight">
              GROUPS
            </span>
          </a>

        <ul 
          id="menu" 
          className={`max-md:absolute max-md:h-full max-md:w-full max-md:top-0 transition-all duration-300 max-md:backdrop-blur max-md:bg-black/40 max-md:text-base flex flex-col md:flex-row items-center justify-center gap-8 font-medium ${
            isMenuOpen ? 'max-md:left-0' : 'max-md:-left-full'
          }`}
        >
          <li onClick={toggleMenu} className="hover:text-slate-300"><a href="#home">Home</a></li>
          <li onClick={toggleMenu} className="hover:text-slate-300"><a href="#achievements">Achievements</a></li>
          <li onClick={toggleMenu} className="hover:text-slate-300"><a href="#about">About</a></li>
          <li onClick={toggleMenu} className="hover:text-slate-300"><a href="#plan">plan</a></li>
          <li onClick={toggleMenu} className="hover:text-slate-300"><a href="#reviews">Reviews</a></li>

          <button 
            onClick={toggleMenu}
            className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
          >
            <X size={24} />
          </button>
        </ul>

        <button 
          id="open-menu" 
          className="md:hidden"
          onClick={toggleMenu}
        >
          <Menu size={28} />
        </button>

        <button onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})} className="max-md:hidden px-6 py-2.5 bg-yellow-600 hover:bg-yellow-700 transition rounded-full">
          Contact
        </button>
      </nav>

      {/* Centered Content with Framer Motion */}
      <div className="flex flex-1 flex-col items-center justify-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl text-center font-semibold max-w-4xl bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text"
        >
          BM Academy Presents India's Most Practical AI Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-slate-300 md:text-base line-clamp-3 max-md:px-2 text-center max-w-md mt-3"
        >
          Upgrade Your Career or Business in Just 7-10 Days
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="gap-3 mt-2 text-sm"
        >
          <div className="text-slate-300 text-center mb-4 md:mb-0">
            Live + Recorded Sessions | Certificate Included | Easy UPI Payment
          </div>
          <div className="text-slate-300 mt-2 text-center">
            Mode: Online & Offline (Pondicherry Centre) | Language: English & Tamil
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center gap-3 mt-8 text-sm"
        >
          <button onClick={()=>document.getElementById("achievements")?.scrollIntoView({behavior: "smooth"})} className="flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 transition rounded-full">
            <span>Get Started</span>
            <ArrowRight size={18} />
          </button>
          <button onClick={()=>document.getElementById("plan")?.scrollIntoView({behavior: "smooth"})} className="bg-white/10 border border-white/15 rounded-full px-6 py-3">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;