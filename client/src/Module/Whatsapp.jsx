import React from "react";
import { motion } from "framer-motion";
import whatsappIcon from "../assets/images/whatsapp.png";

const WhatsappFloatButton = () => {
  const phoneNumber = "9944940051";
  const message = encodeURIComponent(
    "Hi, I'm interested in your AI courses. Can you please share more details?"
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
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
  );
};

export default WhatsappFloatButton;
