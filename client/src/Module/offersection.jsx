// OfferSection.jsx
import React, { useRef, useEffect, useState } from "react";
import { CheckCircle, ArrowRightCircle } from "lucide-react";
import { motion } from "framer-motion";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Confetti from "react-confetti";

const OfferSection = () => {
  const sectionRef = useRef(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Track window size to update confetti dimensions
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Trigger confetti when section is in view
  useEffect(() => {
    let observer;
    if (sectionRef.current && !showConfetti) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShowConfetti(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [showConfetti]); // Depend on showConfetti to avoid recreating the observer unnecessarily

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center bg-gradient-to-b from-[#02290c] to-black px-6 py-16 relative overflow-hidden"
    >
      {/* Confetti fixed to full screen without scroll */}
      {showConfetti && (
        <div
          className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
          style={{ width: "100%", height: "100%" }}
        >
          <Confetti
            width={dimensions.width}
            height={dimensions.height}
            numberOfPieces={250}
            recycle={false}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative backdrop-filter backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl shadow-black/30 max-w-2xl w-full text-center p-8 overflow-hidden z-10"
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col items-center gap-3 relative z-10">
          <h2 className="text-2xl md:text-2xl font-bold text-white">
            <TypingAnimation>
              🎉 Limited Offer: First 50 Enrollments Get
            </TypingAnimation>
          </h2>
          <p className="text-sm text-orange-300 font-medium">
            Hurry! Spots Filling Fast
          </p>
        </div>

        {/* Features List */}
        <ul className="mt-6 space-y-4 text-left relative z-10">
          {["Free Career Support", "Freelance Toolkit", "Certificate"].map(
            (item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5, color: "#fb923c" }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 text-white/90 text-lg cursor-default"
              >
                <CheckCircle className="text-green-400 h-6 w-6 drop-shadow-md" />
                {item}
              </motion.li>
            )
          )}
        </ul>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
          <motion.a
            href="https://wa.me/919944940051?text=Hi%20BM%20Academy%2C%20I%20am%20interested%20in%20your%20AI%20course.%20Please%20share%20details."
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-600/50 transition-all"
          >
            Enroll Now <ArrowRightCircle className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="tel:9944940051"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-orange-400/50 bg-orange-500/10 text-white font-medium rounded-xl hover:bg-orange-500/20 hover:text-white transition-all"
          >
            Talk to Career Expert
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default OfferSection;