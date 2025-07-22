import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import {
  Star,
  Camera,
  LocationEdit,
  Award,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import Offline from "../assets/images/offline.png";
import Online from "../assets/images/online.png";

const TrustBuildersSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  // Helper to get initials
  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const reviews = [
    {
      name: "Priya Kumar",
      role: "Student - Batch 2024",
      rating: 5,
      comment:
        "BM Academy-ல AI course முடிச்சதுக்கு அப்புறம் என் business 3x grow ஆயிடுச்சு! Best decision ever!",
    },
    {
      name: "Rajesh M",
      role: "Shop Owner",
      rating: 5,
      comment:
        "தமிழ்ல class எடுத்ததால எனக்கு எல்லாம் easy-ஆ புரிஞ்சது. Now I use AI daily for my work!",
    },
    {
      name: "Divya S",
      role: "College Student",
      rating: 5,
      comment:
        "Certificate கிடைச்சதும் campus placement-ல select ஆயிட்டேன்! Thank you BM Academy!",
    },
  ];

  const classImages = [
    {
      url: Online,
      caption: "Live Online Class in Progress",
      type: "online",
    },
    {
      url: Offline,
      caption: "Offline Batch - Pondicherry Center",
      type: "offline",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % classImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + classImages.length) % classImages.length
    );
  };

  // Auto-slide for reviews (every 5 seconds)
  useEffect(() => {
    const reviewInterval = setInterval(nextReview, 5000);
    return () => clearInterval(reviewInterval);
  }, []);

  // Auto-slide for images (every 5 seconds)
  useEffect(() => {
    const imageInterval = setInterval(nextImage, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section
      id="reviews"
      className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-[#02290c] to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Scarcity + Pride Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold shadow-lg text-sm sm:text-base border-2 border-yellow-300">
            <Award className="w-5 h-5 text-black" />
            Tamilnadu’s 1st AI Course
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            நம்ம Students{" "}
            <span className="text-yellow-400 font-extrabold">சொல்றாங்க! </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            1000+ Success Stories from Tamil Nadu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Student Reviews */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Student Reviews
                </h3>
              </div>
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={prevReview}
                  className="p-1.5 sm:p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-1.5 sm:p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="relative">
              <Quote className="absolute -top-2 sm:-top-4 -left-1 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 text-white/20" />
              <div className="pl-4 sm:pl-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview} // Key on index to trigger animation on change
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      {/* Avatar with initials fallback */}
                      {reviews[currentReview].image ? (
                        <img
                          src={reviews[currentReview].image}
                          alt={reviews[currentReview].name}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white/30 object-cover bg-gray-200"
                        />
                      ) : (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 text-white text-lg sm:text-xl md:text-2xl font-bold border-2 border-white/30">
                          {getInitials(reviews[currentReview].name)}
                        </div>
                      )}
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white">
                          {reviews[currentReview].name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-300">
                          {reviews[currentReview].role}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-200 italic">
                      "{reviews[currentReview].comment}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Class Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Real Class Pics
                </h3>
              </div>
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={prevImage}
                  className="p-1.5 sm:p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-1.5 sm:p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage} // Key on index to trigger animation on change
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative"
                >
                  <img
                    src={classImages[currentImage].url}
                    alt={classImages[currentImage].caption}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 rounded-b-lg">
                    <p className="text-sm sm:text-base text-white font-medium">
                      {classImages[currentImage].caption}
                    </p>
                    <span className="inline-block mt-1 px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                      {classImages[currentImage].type === "online" ? (
                        <span className="flex items-center gap-1">
                          <Camera className="w-4 h-4 text-green-400" /> Online
                        </span>
                      ) : classImages[currentImage].type === "offline" ? (
                        <span className="flex items-center gap-1">
                          <LocationEdit className="w-4 h-4 text-blue-400" />{" "}
                          Offline
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" /> Practical
                        </span>
                      )}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-4 sm:p-6 md:p-8 text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">
            இன்னும் யோசிக்கிறீங்களா? 🤔
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8">
            Join 1000+ successful students today!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://wa.me/919944940051?text=Hi%20BM%20Academy%2C%20I%20am%20interested%20in%20your%20AI%20course.%20Please%20share%20details."
              target="_blank"
              className="flex items-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">WhatsApp Now</span>
            </a>

            <a
              href="tel:9944940051"
              className="flex items-center gap-2 sm:gap-3 bg-white text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">Call: 9944940051</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBuildersSection;
