import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import { SparklesText } from "@/components/magicui/sparkles-text";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section
      className="relative flex flex-col min-h-[93vh] bg-black text-white text-sm pb-16 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] bg-center bg-cover"
      id="home"
    >
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
  className={`max-md:fixed max-md:inset-0 max-md:z-50 max-md:h-screen max-md:w-full transition-all duration-300 max-md:backdrop-blur max-md:bg-black/90 max-md:text-base flex flex-col md:flex-row items-center justify-center gap-8 font-medium ${
    isMenuOpen ? "max-md:left-0" : "max-md:-left-full"
  }`}
>

          <li onClick={toggleMenu}>
            <a href="#home" className="hover:text-slate-300">
              Home
            </a>
          </li>
         
          <li onClick={toggleMenu}>
            <a href="#about" className="hover:text-slate-300">
              About
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#plan" className="hover:text-slate-300">
              Plan
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#reviews" className="hover:text-slate-300">
              Reviews
            </a>
          </li>

          <button
            onClick={toggleMenu}
            className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square transition"
          >
            <X size={24} />
          </button>
        </ul>

        <button className="md:hidden" onClick={toggleMenu}>
          <Menu size={28} />
        </button>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="max-md:hidden px-6 py-2.5 bg-yellow-600 hover:bg-yellow-700 transition rounded-full"
        >
          Contact
        </button>
      </nav>

      <div className="flex flex-1 flex-col items-center justify-center w-full text-center">
  <motion.h1
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
    className="text-3xl md:text-4xl text-center font-extrabold max-w-4xl bg-gradient-to-r from-white to-[#facc15] text-transparent bg-clip-text leading-[1.6]"
  >
    <SparklesText className="inline-block bg-gradient-to-r from-white to-[#facc15] text-transparent bg-clip-text">
      Tamil Nadu
    </SparklesText> -ல முதல் முறையா AI கத்துக்கிறீங்களா?
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
    className="text-slate-300 md:text-xl font-semibold max-w-2xl mt-4"
  >
    Any Age, Any Background – Unlock High-Paying AI Careers from
    Pondicherry's 1st AI Academy!
    <br />
    <span className="block mt-2 text-yellow-300 font-bold">
      100% Beginner-Friendly | Certificate + Career Support | Tamil &
      English Mixed Teaching
    </span>
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
    className="flex items-center gap-4 mt-8"
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() =>
        document
          .getElementById("plan")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 transition rounded-full font-semibold text-white"
    >
      Enroll Now
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsVideoOpen(true)}
      className="px-6 py-3 bg-white/10 border border-white/15 rounded-full font-semibold text-white"
    >
      Watch Free Demo
    </motion.button>
  </motion.div>
</div>

      {/* HeroVideoDialog Modal */}
      {isVideoOpen && (
       <HeroVideoDialog
  animationStyle="from-center"
  videoSrc="https://www.youtube.com/embed/ZWdVJwufdVk?si=qN3G8oemrkNFn8p3"
  
  thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
  onClose={() => setIsVideoOpen(false)}
/>

      )}
    </section>
  );
};

export default HeroSection;
