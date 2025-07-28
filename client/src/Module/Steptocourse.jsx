import {
  MonitorPlay,
  Boxes,
  MessageSquare,
  BadgeCheck,
  LayoutTemplate,
  Languages
} from 'lucide-react';
import { motion } from "framer-motion";

const CourseFeatures = () => {
  const features = [
    {
      icon: MonitorPlay,
      title: "Live & Recorded Classes",
      description: "Access both live interactive sessions and recorded lectures for flexible learning",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Boxes,
      title: "AI Toolkits & Templates",
      description: "Get practical AI resources and ready-to-use templates for immediate application",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Support Group",
      description: "24/7 support through dedicated WhatsApp groups with instructors and peers",
      color: "from-green-400 to-green-600"
    },
    {
      icon: BadgeCheck,
      title: "Completion Certificate",
      description: "Earn a verifiable certificate upon successfully finishing the course",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: LayoutTemplate,
      title: "Real-World Projects",
      description: "Work on hands-on projects that mirror actual industry challenges",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Languages,
      title: "English & Tamil Teaching",
      description: "Learn in both English and Tamil for better comprehension",
      color: "from-red-400 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#02290c]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            What You<span className="text-[#facc15] not-italic">'ll Get</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Comprehensive learning experience with all our courses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
             <motion.div
  key={index}
  whileHover={{ y: -10 }}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
  className={`relative group rounded-2xl p-8 bg-gradient-to-br from-[#1f1f1f] to-[#111] border border-white/30 hover:border-white/40 backdrop-blur-sm shadow-xl transition-all duration-300 overflow-hidden`}
>
  {/* Glowing background icon */}
<div
  className={`absolute -right-6 -bottom-6 opacity-0 group-hover:opacity-10 group-hover:scale-[1.6]  duration-500 ease-out z-0 text-yellow-400`}
>
  <Icon className="w-32 h-32" />
</div>



  <div className="relative z-10">
    <div className="flex items-center mb-6">
      <div className={`p-3 rounded-full bg-gradient-to-br ${feature.color} text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
    </div>
    <p className="text-gray-300">{feature.description}</p>
  </div>
</motion.div>

            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
