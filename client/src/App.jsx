// import CourseHighlights from "./Module/CourseHighlights"
// import Footer from "./Module/Footer"
// import Gallery from "./Module/gallery"
// import HeroSection from "./Module/Home"
// import OfferSection from "./Module/offersection"
// import PricingSlider from "./Module/PricingSlider"
// import WhatYoullGet from "./Module/Steptocourse"
// import TrustBuildersSection from "./Module/TrustBuildersSection"
// import WhatsappFloatButton from "./Module/Whatsapp"
// import WhoCanLearn from "./Module/WhoCanLearn"
// import WhyBMSection from "./Module/WhyBMSection"
// import WhyLearnAI2025 from "./Module/Whylearn"
 
// function App() {
//   return (
//     <div>
//       <HeroSection/>
//       <WhoCanLearn/>
//       <CourseHighlights/>
//       <WhyLearnAI2025/>
//       <PricingSlider/>
//       <WhyBMSection/>
//       <TrustBuildersSection/>
//       <Gallery/>
//       <OfferSection/>
//       <WhatYoullGet/>
//       <WhatsappFloatButton/>
//       <Footer/>   
//     </div>
//   )
// }
 
// export default App



import React from "react";

const UpiPayment = () => {
  const handleUpiPayment = () => {
    const upiUrl = `upi://pay?pa=aakashaakash0013@okicici&pn=Aakash&am=10&cu=INR`;
    window.location.href = upiUrl; // Opens UPI app on mobile
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Pay ₹10 via UPI</h2>
        <button
          onClick={handleUpiPayment}
          className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 transition"
        >
          Pay Now
        </button>
        <p className="text-sm text-gray-500 mt-4">
          ⚠️ This works only on mobile with UPI apps like GPay, PhonePe, or Paytm.
        </p>
      </div>
    </div>
  );
};

export default UpiPayment;
