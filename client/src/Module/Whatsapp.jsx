import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import whatsappIcon from "../assets/images/whatsapp.png";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "9944940051";
  const message = encodeURIComponent(
    "Hi, I'm interested in your AI courses. Can you please share more details?"
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
        whileHover={{
          scale: 1.1,
          filter: "drop-shadow(0px 0px 12px rgba(37, 211, 102, 0.9))",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-12 h-12 object-contain"
        />
      </motion.a>

      {/* Back to Top Button */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-22 right-6 z-50 bg-blue-600 text-white p-3 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
          transition={{ type: "spring", stiffness: 300 }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </>
  );
};

export default FloatingButtons;