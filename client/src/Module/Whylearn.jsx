import React from "react";
import { motion } from "framer-motion";
import { Briefcase, DollarSign, TrendingUp, Building2 } from "lucide-react";

const stats = [
  {
    Icon: Briefcase,
    title: "1.2 Cr+ Jobs in AI by 2026",
    source: "— NASSCOM",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-900/20",
    iconBg: "bg-blue-500/20",
    hoverGlow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]",
    borderColor: "border-blue-500/30"
  },
  {
    Icon: DollarSign,
    title: "₹25K–1L/Month Freelance AI Income",
    source: "",
    iconColor: "text-green-400",
    bgColor: "bg-green-900/20",
    iconBg: "bg-green-500/20",
    hoverGlow: "hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]",
    borderColor: "border-green-500/30"
  },
  {
    Icon: TrendingUp,
    title: "8X Faster Career Growth with AI Skills",
    source: "",
    iconColor: "text-purple-400",
    bgColor: "bg-purple-900/20",
    iconBg: "bg-purple-500/20",
    hoverGlow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]",
    borderColor: "border-purple-500/30"
  },
  {
    Icon: Building2,
    title: "Top Companies Hiring: TCS, Google, Zoho, Infosys",
    source: "",
    iconColor: "text-orange-400",
    bgColor: "bg-orange-900/20",
    iconBg: "bg-orange-500/20",
    hoverGlow: "hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]",
    borderColor: "border-orange-500/30"
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const WhyLearnAI = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#02290c] py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Why Learn AI in{" "}
            <span className="text-yellow-400 font-extrabold">2025?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className={`group relative overflow-hidden  border-white/40 border rounded-2xl p-6 transition-all duration-300 ${item.hoverGlow}`}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Floating icon effect */}
              <div className={`absolute -right-4 -bottom-4 opacity-0 ${item.bgColor}  group-hover:opacity-10 transition-opacity duration-700`}>
                <item.Icon className={`w-24 h-24 ${item.iconColor}`} strokeWidth={0.5} />
              </div>

              {/* Main icon container */}
              <div className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-full mb-5 mx-auto transition-all duration-500 group-hover:scale-110 ${item.iconBg}`}>
                <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
                <item.Icon className={`w-7 h-7 ${item.iconColor} drop-shadow-lg`} />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2">
                <p className="text-lg font-bold text-white/80 text-center leading-tight">
                  {item.title}
                </p>
                {item.source && (
                  <p className="text-xs text-white/50 mt-2">
                    {item.source}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLearnAI;