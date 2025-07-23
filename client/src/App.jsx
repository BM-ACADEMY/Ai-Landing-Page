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



const UpiPayment = () => {
  const handleUpiPayment = () => {
    const upiUrl = `upi://pay?pa=alamaanath2025-1@oksbi&pn=Al%20Amaanath%20Promoters&am=0.1&cu=INR&tn=Booking%20Advance`;
    window.location.href = upiUrl; // opens the UPI app
  };

  return (
    <div className="text-center mt-4">
      <button
        onClick={handleUpiPayment}
        className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition"
      >
        Pay ₹1 via UPI
      </button>
    </div>
  );
};

export default UpiPayment;
