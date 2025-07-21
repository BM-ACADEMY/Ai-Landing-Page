// OfferSection.jsx
import React from "react";
import { CheckCircle, Sparkles, ArrowRightCircle } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="flex items-center justify-center bg-gradient-to-t from-[#02290c] to-black px-6 py-16">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full text-center p-8">
        {/* Header with Icon */}
        <div className="flex flex-col items-center gap-3">
          {/* <Sparkles className="text-orange-500 h-10 w-10 animate-pulse" /> */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            🎉 Limited Offer: First 50 Enrollments Get
          </h2>
        </div>

        {/* Features */}
        <ul className="mt-6 space-y-4 text-left">
          {[
            "Free Career Support",
            "Freelance Toolkit",
            "Certificate",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
              <CheckCircle className="text-green-500 h-6 w-6" />
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#enroll"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-xl shadow hover:bg-orange-600 transition"
          >
            Enroll Now <ArrowRightCircle className="h-5 w-5" />
          </a>
          <a
            href="tel:8056889971" target=""
            className="inline-flex items-center gap-2 px-6 py-3 border border-orange-500 text-orange-500 font-medium rounded-xl hover:bg-orange-50 transition"
          >
            Talk to Career Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
