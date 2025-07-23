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






import React from 'react';

const UpiPayment = () => {
  const handlePayment = () => {
    const upiLink =
      "upi://pay?pa=aakashaakash0013@okicici&pn=Aakash&am=1&cu=INR&tn=TestPayment";
    window.location.href = upiLink;
  };

  return (
    <div className="text-center p-4">
      <h2 className="text-xl mb-4 font-semibold">Pay via Google Pay</h2>
      <button
        onClick={handlePayment}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Pay ₹1
      </button>
    </div>
  );
};

export default UpiPayment;
