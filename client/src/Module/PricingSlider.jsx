import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactConfetti from "react-confetti";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { CheckCircle, X, Loader2 } from "lucide-react";

// A custom hook to get window dimensions for the confetti effect
const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
};

const PricingSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading animation

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const { width, height } = useWindowSize();
  const validAmounts = [799, 999, 2999, 6999, 9999];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handlePayClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    setError("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
    setEmail("");
    setPhone("");
    setError("");
  };

  const handlePaymentSuccess = (data) => {
    setPaymentInfo({
      course: data.courseName,
      amount: data.amount / 100,
      paymentId: data.paymentId,
      email: data.email,
    });
    setShowSuccessModal(true);
    setIsConfettiActive(true);
  };

  const handleRedirectToWhatsApp = () => {
    if (paymentInfo) {
      const message = `Hello! My payment for the '${paymentInfo.course}' course was successful. My payment ID is ${paymentInfo.paymentId}.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/9944940051?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");
      setShowSuccessModal(false);
    }
  };
  
  // --- NEW: Handler to allow only 10 numeric digits for phone ---
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handlePayment = async () => {
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!selectedCourse?.price || !selectedCourse?.title) {
      setError("Invalid course selection. Please try again.");
      return;
    }

    setIsLoading(true);

    try {
      const amount = parseInt(selectedCourse.price.replace(/[₹,]/g, ""));
      if (isNaN(amount) || !validAmounts.includes(amount)) {
        setError(`Invalid course price: ${selectedCourse.price}.`);
        return;
      }
      const courseName = selectedCourse.title;

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/payment/create-order`,
        {
          email,
          phone,
          courseName,
          amount,
        }
      );

      setIsModalOpen(false);

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "AI Course",
        description: `Payment for ${courseName}`,
        order_id: data.orderId,
        handler: async (response) => {
          try {
            const verifyResponse = await axios.post(
              `${import.meta.env.VITE_API_URL}/payment/verify-payment`,
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }
            );
            if (verifyResponse.data.status === "success") {
              handlePaymentSuccess({
                courseName,
                amount: data.amount,
                paymentId: response.razorpay_payment_id,
                email,
              });
            } else {
              setIsModalOpen(true);
              setError("Payment verification failed. Please contact support.");
            }
          } catch (err) {
            console.error("Error verifying payment:", err);
            setIsModalOpen(true);
            setError("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          email,
          contact: phone,
        },
        theme: {
          color: "#facc15",
        },
        modal: {
          ondismiss: function () {
            console.log("Razorpay modal closed by user.");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        setIsModalOpen(true);
        setError(`Payment failed: ${response.error.description}`);
      });
      rzp.open();
    } catch (err) {
      console.error("Error creating order:", err.response?.data || err);
      setError(err.response?.data?.error || "Failed to initiate payment.");
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const cards = [
    {
      title: "AI for School Students (8th–12th Std)",
      price: "₹799",
      originalPrice: "₹1,999",
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
      price: "₹999",
      originalPrice: "₹2,999",
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
      price: "₹2,999",
      originalPrice: "₹4,999",
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
    <div
      className="bg-gradient-to-t from-black to-[#02290c] min-h-screen"
      id="plan"
    >
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {" "}
            Choose Your{" "}
            <span className="text-[#facc15] not-italic">AI Path</span>{" "}
          </h1>
          <p className="text-center text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            {" "}
            Learn and grow with AI – suitable for students, job seekers, and
            entrepreneurs.{" "}
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
              {" "}
              <Card {...card} onPayClick={() => handlePayClick(card)} />{" "}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Payment Form Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white rounded-2xl shadow-xl p-6 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-white">
              {selectedCourse?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-300 font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-gray-800 text-white border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-gray-300 font-semibold">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel" // Use "tel" for semantic correctness
                value={phone}
                onChange={handlePhoneChange} // Use the new handler
                placeholder="Enter your 10-digit phone number"
                className="bg-gray-800 text-white border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
          </div>
          <DialogFooter className="flex justify-center gap-4 sm:justify-right">
            <Button
              variant="outline"
              onClick={closeModal}
              className="text-black border-gray-600 hover:bg-[#c9c7c7] rounded-lg"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePayment}
              disabled={isLoading}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg flex items-center justify-center min-w-[180px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Proceed to Payment"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      {showSuccessModal && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-[1000]"
            onClick={() => setShowSuccessModal(false)}
          />

          {isConfettiActive && (
            <ReactConfetti
              width={width}
              height={height}
              numberOfPieces={800}
              recycle={false}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1001,
                pointerEvents: "none",
              }}
              onConfettiComplete={handleRedirectToWhatsApp}
            />
          )}

          <div className="fixed inset-0 z-[1002] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 max-w-md w-full relative overflow-hidden pointer-events-auto"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-20"
              >
                {" "}
                <X size={24} />{" "}
              </button>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle
                    className="text-green-400"
                    size={48}
                    strokeWidth={1.5}
                  />
                </div>

                <h2 className="text-3xl font-bold text-white mb-2">
                  Payment Successful!
                </h2>
                <p className="text-gray-300 mb-6">
                  {" "}
                  You're now enrolled in{" "}
                  <span className="text-yellow-400 font-medium">
                    {paymentInfo?.course}
                  </span>{" "}
                </p>

                <div className="bg-gray-800/50 rounded-lg p-4 mb-6 text-left">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Amount Paid:</span>
                    <span className="font-medium text-gray-200">
                      ₹{paymentInfo?.amount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transaction ID:</span>
                    <span className="text-green-400 font-mono text-sm">
                      {paymentInfo?.paymentId}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
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
  onPayClick,
}) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className={`relative rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex flex-col justify-between h-full shadow-xl ${
      popular ? "border-2 border-yellow-300" : "border border-gray-700"
    }`}
  >
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
        {" "}
        MOST POPULAR{" "}
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
          {" "}
          <span className="text-green-400 text-lg">✓</span>{" "}
          <span className="text-gray-300">{feature}</span>{" "}
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
        {" "}
        Pay & Join Now{" "}
      </motion.button>
    </div>
  </motion.div>
);

export default PricingSlider;
