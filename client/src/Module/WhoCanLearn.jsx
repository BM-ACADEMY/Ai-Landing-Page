import React from "react";
import {
  School,
  GraduationCap,
  Briefcase,
  Rocket,
  Info,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";


// Data for each user group
const groups = [
  {
    title: "School Students (9th to 12th)",
    icon: <School className="w-8 h-8 text-indigo-600" />,
    description: (
      <ul className="list-disc pl-4 text-sm text-white space-y-1">
        <li>Learn AI early – create Chatbots, AI art & smart tools.</li>
        <li>No coding needed – just curiosity & a mobile phone!</li>
      </ul>
    ),
  },
  {
    title: "College Students (Arts, Commerce, Science)",
    icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
    description:
      "80% of AI jobs don't require coding! Learn tools like ChatGPT, Canva AI, Excel AI, and stand out in campus placements.",
    extra: (
      <div className="mt-4 p-3 bg-indigo-50 text-indigo-700 rounded-lg text-sm">
        <div className="flex items-center gap-2 font-semibold mb-1">
          <Info className="w-4 h-4" />
          Real Fact:
        </div>
        <ul className="list-disc pl-5">
          <li>
            AI jobs grew by <strong>500%</strong> in India (2024)
          </li>
          <li>₹6.5 LPA avg AI starting salary</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Job Seekers",
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    description:
      "No experience? No problem. Learn practical AI tools and freelancing skills to start earning from Day 1.",
    extra: (
      <div className="mt-4">
        <p className="text-sm font-medium text-white mb-2 flex items-center gap-2">
          <BadgeCheck className="w-4 h-4 text-green-600" />
          Included In:
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Resume AI",
            "Email AI",
            "Support AI",
            "Customer Support AI",
            "Marketing Automation",
            "Marketing AI",
            "Freelance Projects",
            "Interview Prep",
          ].map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full"
            >
              <BadgeCheck className="w-3 h-3 mr-1" />
              {tool}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Entrepreneurs",
    icon: <Rocket className="w-8 h-8 text-indigo-600" />,
    description:
      "Run your business smarter! Use AI for marketing, content, chat, billing & more.",
    extra: (
      <div className="mt-4">
        <p className="text-sm font-medium text-white mb-2 flex items-center gap-2">
          <BadgeCheck className="w-4 h-4 text-green-600" />
          Tools You’ll Master:
        </p>
        <div className="flex flex-wrap gap-2">
          {["ChatGPT", "Notion AI", "CRM AI", "Canva Magic", "Billing AI"].map(
            (tool) => (
              <span
                key={tool}
                className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full"
              >
                <BadgeCheck className="w-3 h-3 mr-1" />
                {tool}
              </span>
            )
          )}
        </div>
      </div>
    ),
  },
];

// Framer Motion animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

const WhoCanLearn = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-12 bg-gradient-to-b from-black to-[#02290c]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Who Can <span className="text-[#facc15] not-italic">Learn?</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Discover how our courses empower students, job seekers, and
          entrepreneurs to achieve more with AI.
        </p>
      </motion.div>

      {/* Animated Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {groups.map((group, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-100/30 border border-white/30 backdrop-blur-sm text-white rounded-2xl shadow-sm hover:shadow-lg p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-100 p-2 rounded-full">{group.icon}</div>
              <h3 className="text-md font-semibold">{group.title}</h3>
            </div>
            <div className="text-sm flex-1">{group.description}</div>
            {group.extra && <div className="mt-4">{group.extra}</div>}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhoCanLearn;
