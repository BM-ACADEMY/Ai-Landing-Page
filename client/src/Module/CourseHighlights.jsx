import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  BookOpen,
  BadgeCheck,
  Gift,
  Hammer,
} from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Designed for Tamil Students",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Learning",
  },
  {
    icon: BookOpen,
    title: "Bilingual Teaching (English + தமிழ்)",
  },
  {
    icon: BadgeCheck,
    title: "Certification + Placement / Freelance Support",
  },
  {
    icon: Gift,
    title: "Internship + Mini Projects",
  },
  {
    icon: Hammer,
    title: "Real Tools + AI Templates",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CourseHighlights = () => {
  return (
    <div className="bg-gradient-to-t from-black to-[#02290c] py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Course{" "}
            <span className="text-yellow-400 font-extrabold">Highlights</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400/20 text-yellow-400 p-3 rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-medium text-lg">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights;
