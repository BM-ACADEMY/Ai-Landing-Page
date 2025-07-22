import React, { useState } from "react";
import { motion } from "framer-motion";

const PricingSlider = () => {
  const [showModal, setShowModal] = useState(false);

  const handleWhatsAppClick = (courseName) => {
    const phoneNumber = "9944940051";
    const message = `Hi, I'm interested in joining the ${courseName} course. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };


  React.useEffect(() => {
  if (!showModal) return;
  const handleEsc = (e) => {
    if (e.key === "Escape") setShowModal(false);
  };
  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, [showModal]);


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
      upiAmount: "1",
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
      upiAmount: "1999",
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
      upiAmount: "4999",
      popular: false,
    },
    {
      title: "AI for Entrepreneurs",
      price: "₹6,299",
      originalPrice: "₹9,999",
      discount: "48% OFF",
      features: [
        "Use AI for WhatsApp Bots, Insta Content, CRM & Billing",
        "Mode: Online / Offline",
        "Language: Tamil & English",
        "Certificate of Completion",
      ],
      upiAmount: "6299",
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
      upiAmount: "9999",
      popular: false,
    },
  ];

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

  // Helper function to detect mobile device
  const isMobile = () =>
    /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(
      navigator.userAgent
    );

  // Pass setShowModal to Card as prop
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
            Choose Your <span className="text-[#facc15] not-italic">AI Path</span>
          </h1>
          <p className="text-center text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Learn and grow with AI – suitable for students, job seekers, and entrepreneurs.
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
                setShowModal={setShowModal}
                isMobile={isMobile}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for desktop UPI message */}
     {showModal && (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setShowModal(false)}
    aria-modal="true"
    role="dialog"
    tabIndex={-1}
  >
    <motion.div
      className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative"
      initial={{ scale: 0.9, y: 40, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.9, y: 40, opacity: 0 }}
      onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
    >
      <button
        className="absolute top-3 right-4 text-gray-400 hover:text-black text-2xl focus:outline-none"
        onClick={() => setShowModal(false)}
        aria-label="Close"
      >
        &times;
      </button>
      <div className="flex flex-col items-center">
        <div className="text-yellow-500 text-4xl mb-2 animate-bounce">⚠️</div>
        <h2 className="text-xl font-bold mb-2 text-gray-800">UPI Payment Notice</h2>
        <div className="w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          UPI payment links work <b>only on mobile devices</b>.<br /><br />
          <span className="text-yellow-700 font-semibold">
            Please use your phone to pay via UPI.
          </span>
        </p>
        <button
          className="mt-2 px-6 py-2 bg-yellow-500 text-white rounded-lg font-semibold shadow hover:bg-yellow-600 transition"
          onClick={() => setShowModal(false)}
          autoFocus
        >
          OK, Got it!
        </button>
      </div>
    </motion.div>
  </motion.div>
)}
    </div>
  );
};

const Card = ({
  title,
  price,
  originalPrice,
  discount,
  features,
  popular,
  upiAmount,
  onEnrollClick,
  setShowModal,
  isMobile,
}) => {
  const upiId = "ns2karthika-1@okaxis";
  const upiName = "Karthika N";
  const upiNote = encodeURIComponent(`Course Fee: ${title}`);
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    upiName
  )}&am=${upiAmount}&tn=${upiNote}&cu=INR`;

  const handlePayClick = () => {
    if (isMobile()) {
      window.location.href = upiUrl;
    } else {
      setShowModal(true);
    }
  };

  return (
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
          onClick={handlePayClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full px-6 py-3 font-medium rounded-lg transition text-center ${
            popular
              ? "bg-yellow-500 hover:bg-yellow-600 text-white"
              : "bg-gray-600 hover:bg-gray-700 text-white"
          }`}
        >
          Pay & Join Now
        </motion.button>
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
};

export default PricingSlider;