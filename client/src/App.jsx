import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page components

// Import your section components
import CourseHighlights from "./Module/CourseHighlights";
import Footer from "./Module/Footer";
import Gallery from "./Module/gallery";
import HeroSection from "./Module/Home";
import OfferSection from "./Module/offersection";
import PricingSlider from "./Module/PricingSlider";
import WhatYoullGet from "./Module/Steptocourse";
import TrustBuildersSection from "./Module/TrustBuildersSection";
import WhatsappFloatButton from "./Module/Whatsapp";
import WhoCanLearn from "./Module/WhoCanLearn";
import WhyBMSection from "./Module/WhyBMSection";
import WhyLearnAI2025 from "./Module/Whylearn";
import AdminPaymentHistory from './Module/admin/AdminPaymentHistory';

// Create a component for your main landing page
const MainPage = () => (
  <>
    <HeroSection/>
    <WhoCanLearn/>
    <CourseHighlights/>
    <WhyLearnAI2025/>
    <PricingSlider/>
    <WhyBMSection/>
    <TrustBuildersSection/>
    <Gallery/>
    <OfferSection/>
    <WhatYoullGet/>
    <WhatsappFloatButton/>
    <Footer/>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the main landing page */}
        <Route path="/" element={<MainPage />} />
        
        {/* Route for the admin payment history */}
        <Route path="/adminbmtechx" element={<AdminPaymentHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;