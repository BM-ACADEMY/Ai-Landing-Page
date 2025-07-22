// src/components/CourseCategories.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  BotMessageSquare,
  GraduationCap,
  Briefcase,
  ChevronsUp,
  FileText,
  Phone,
  Clock,
} from "lucide-react";

// Data for the courses - makes the component cleaner and easier to update
const courseData = [
  {
    icon: BotMessageSquare,
    title: "Basic AI for School Students",
    features: "AI Drawing, ChatGPT Games, Text to Voice Bots",
    duration: "1 Month (Online / Offline)",
    bgColor: "from-sky-500/10 to-transparent",
    borderColor: "border-sky-500/30",
  },
  {
    icon: GraduationCap,
    title: "No-Code AI for College Students",
    features: "ChatGPT, Canva AI, Resume AI, AI for Study & Exams",
    duration: "45 Days",
    bgColor: "from-purple-500/10 to-transparent",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Briefcase,
    title: "AI Career Course for Job Seekers",
    features: "Email AI, CRM, Freelance Setup, Resume + Interview Prep",
    duration: "1.5 Months",
    bgColor: "from-green-500/10 to-transparent",
    borderColor: "border-green-500/30",
  },
  {
    icon: ChevronsUp,
    title: "AI Business Booster for Entrepreneurs",
    features:
      "Meta Ads AI, Invoice AI, Instagram Automation, CRM + Billing Tools",
    duration: "1 Month",
    bgColor: "from-orange-500/10 to-transparent",
    borderColor: "border-orange-500/30",
  },
];

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of children
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const CourseCategories = () => {
  return (
    <section className="bg-gradient-to-t from-black to-[#02290c] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Course{" "}
            <span className="text-yellow-400 font-extrabold">Categories</span>
          </h2>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {courseData.map((course, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800/50 rounded-xl shadow-lg overflow-hidden flex flex-col p-6 border ${course.borderColor} bg-gradient-to-br ${course.bgColor}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`flex-shrink-0 ${course.bgColor}`}>
                <course.icon className="h-12 w-12  mb-4" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-white">
                  {course.title}
                </h3>
                <p className="mt-3 text-base text-gray-400">
                  {course.features}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-500/90 flex items-center text-gray-500">
                <Clock className="h-5 w-5 mr-2" />
                <span className="text-sm text-gray-400 font-medium">
                  {course.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Buttons */}
        {/* Call to Action Buttons */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Primary CTA */}
          <motion.a
            href="#full-syllabus"
            className="flex items-center  justify-center gap-2 px-8 py-3 text-base font-semibold rounded-lg 
           border border-white/30 text-white 
           bg-white/30 backdrop-blur-md 
           hover:bg-white/40 hover:shadow-lg 
           transition duration-200 
           md:py-4 md:text-lg md:px-10 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={20} />
            See Full Syllabus PDF
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="tel:9944940051"
            className="flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold rounded-lg 
    border border-white/30 text-white 
    bg-white/10 backdrop-blur-md 
    hover:bg-white/20 hover:shadow-lg 
    transition duration-200 
    md:py-4 md:text-lg md:px-10 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={20} />
            Book Free Counselling Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseCategories;
