import React, { useState } from "react";
import { motion } from "framer-motion";
import Payment from '../assets/images/payment.jpg'

const PricingSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleWhatsAppClick = (courseName) => {
    const phoneNumber = "9944940051";
    const message = `Hi, I'm interested in joining the ${courseName} course. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePayClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const cards = [
    {
      title: "AI for School Students (8th–12th Std)",
      price: "₹999",
      originalPrice: "₹1,499",
      discount: "50% OFF",
      features: [
        "Create AI Memes, Voice Bots & Stories",
        "Mode: Online / Offline",
        "Language: Tamil & English",
        "Certificate of Completion",
      ],
      popular: false,
    },
    {
      title: "AI for College Students",
      price: "₹1,999",
      originalPrice: "₹3,999",
      discount: "50% OFF",
      features: [
        "Build Final Year Projects, Resume & Freelance Tools",
        "Mode: Online / Offline",
        "Language: Tamil & English",
        "Certificate of Completion",
      ],
      popular: true,
    },
    {
      title: "AI for Job Seekers",
      price: "₹4,999",
      originalPrice: "₹6,999",
      discount: "50% OFF",
      features: [
        "Create ATS-Friendly Resume, Automate Job Search & LinkedIn",
        "Mode: Online / Offline",
        "Language: Tamil & English",
        "Certificate of Completion",
      ],
      popular: false,
    },
    {
      title: "AI for Entrepreneurs",
      price: "₹6,999",
      originalPrice: "₹9,999",
      discount: "48% OFF",
      features: [
        "Use AI for WhatsApp Bots, Insta Content, CRM & Billing",
        "Mode: Online / Offline",
        "Language: Tamil & English",
        "Certificate of Completion",
      ],
      popular: false,
    },
    {
      title: "AI for Digital Marketers",
      price: "₹9,999",
      originalPrice: "₹11,999",
      discount: "48% OFF",
      features: [
        "Meta Ads, Reels Automation, Analytics with AI",
        "Mode: Online / Offline",
        "Language: Tamil & English",
        "Certificate of Completion",
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-gradient-to-t from-black to-[#02290c] min-h-screen" id="plan">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Choose Your {" "}
            <span className="text-[#facc15] not-italic">AI Path</span>
          </h1>
          <p className="text-center text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Learn and grow with AI – suitable for students, job seekers, and
            entrepreneurs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <Card
                {...card}
                onEnrollClick={() => handleWhatsAppClick(card.title)}
                onPayClick={() => handlePayClick(card)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 rounded-lg p-6 max-w-lg w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">{selectedCourse?.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <img
              src={Payment} // Replace with your image URL
              alt="Course Preview"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const Card = ({ title, price, originalPrice, discount, features, popular, onEnrollClick, onPayClick }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className={`relative rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex flex-col justify-between h-full shadow-xl ${
      popular ? "border-2 border-yellow-300" : "border border-gray-700"
    }`}
  >
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
        MOST POPULAR
      </div>
    )}

    <div className="flex flex-col items-center border-b border-gray-700 pb-6">
      <span className="mb-3 text-xl font-bold text-white text-center">
        {title}
      </span>
      <div className="flex items-end gap-2 mb-1">
        <span className="text-4xl font-bold text-yellow-400">{price}</span>
        <span className="text-sm line-through text-gray-400">
          {originalPrice}
        </span>
        <span className="text-xs bg-yellow-900 text-yellow-300 px-2 py-1 rounded-full">
          {discount}
        </span>
      </div>
    </div>

    <div className="space-y-3 py-6">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <span className="text-green-400 text-lg">✓</span>
          <span className="text-gray-300">{feature}</span>
        </div>
      ))}
    </div>

    <div className="mt-4 flex flex-col gap-3">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onPayClick}
        className={`w-full px-6 py-3 font-medium rounded-lg transition ${
          popular
            ? "bg-yellow-500 hover:bg-yellow-600 text-white"
            : "bg-gray-600 hover:bg-gray-700 text-white"
        }`}
      >
        Pay & Join Now
      </motion.button>
     <a className="text-red-50" href="upi://pay?pa=alamaanath2025-1@oksbi&pn=Al%20Amaanath%20Promoters&am=5000&cu=INR&tn=Booking%20Advance">
  Pay ₹5000 via UPI
</a>


      <motion.button
        onClick={onEnrollClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-3 font-medium border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition"
      >
        View Syllabus
      </motion.button>
    </div>
  </motion.div>
);

export default PricingSlider;