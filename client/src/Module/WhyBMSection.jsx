import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  GraduationCap, 
  MessageCircle, 
  MapPin 
} from 'lucide-react';

const WhyBMSection = () => {
  const features = [
    {
      icon: Users,
      title: "10,000+ Students Trained",
      description: "Join our thriving community of successful learners",
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
      hoverColor: "group-hover:text-blue-300"
    },
    {
      icon: Award,
      title: "Govt. Regd Certification",
      description: "Recognized certification to boost your career",
      color: "text-green-400",
      bgColor: "bg-green-400/20",
      hoverColor: "group-hover:text-green-300"
    },
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Live + Recorded Classes for flexible learning",
      color: "text-purple-400",
      bgColor: "bg-purple-400/20",
      hoverColor: "group-hover:text-purple-300"
    },
    {
      icon: MessageCircle,
      title: "Tamil Support Group",
      description: "24/7 community support in your native language",
      color: "text-orange-400",
      bgColor: "bg-orange-400/20",
      hoverColor: "group-hover:text-orange-300"
    },
    {
      icon: MapPin,
      title: "From Pondicherry",
      description: "Local connect with global standards",
      color: "text-red-400",
      bgColor: "bg-red-400/20",
      hoverColor: "group-hover:text-red-300"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Split features into two rows
  const topRowFeatures = features.slice(0, 3);
  const bottomRowFeatures = features.slice(3, 5);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-[#02290c]">
      <div className="max-w-7xl mx-auto">
        <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="text-center mb-12 px-4 md:px-8"
              >
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                  Why {" "}
                  <span className="text-[#facc15] not-italic">BM Academy?</span>
                </h1>
                 <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience excellence in education with our proven track record and comprehensive support system
          </p>
              </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRowFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 cursor-pointer hover:bg-white/15 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Background Icon - appears on hover */}
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:right-4">
                    <Icon className={`w-24 h-24 ${feature.hoverColor}`} />
                  </div>

                  <div className="relative z-10 flex items-start space-x-4">
                    {/* Main Icon - moves and fades on hover */}
                    <motion.div 
                      className={`${feature.bgColor} backdrop-blur-sm p-3 rounded-lg transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-0`}
                    >
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </motion.div>
                    
                    <div className="flex-1 transition-all duration-500 group-hover:-translate-x-12">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {bottomRowFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index + 3}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 cursor-pointer hover:bg-white/15 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Background Icon - appears on hover */}
                    <div className={`absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 ${index.bgColor} group-hover:opacity-20 transition-all duration-500 group-hover:right-4`}>
                      <Icon className={`w-24 h-24 ${feature.hoverColor}`} />
                    </div>

                    <div className="relative z-10 flex items-start space-x-4">
                      {/* Main Icon - moves and fades on hover */}
                      <motion.div 
                        className={`${feature.bgColor} backdrop-blur-sm p-3 rounded-lg transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-0`}
                      >
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </motion.div>
                      
                      <div className="flex-1 transition-all duration-500 group-hover:-translate-x-12">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBMSection;