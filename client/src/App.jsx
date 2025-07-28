import CourseHighlights from "./Module/CourseHighlights"
import Footer from "./Module/Footer"
import Gallery from "./Module/gallery"
import HeroSection from "./Module/Home"
import OfferSection from "./Module/offersection"
import PricingSlider from "./Module/PricingSlider"
import WhatYoullGet from "./Module/Steptocourse"
import TrustBuildersSection from "./Module/TrustBuildersSection"
import WhatsappFloatButton from "./Module/Whatsapp"
import WhoCanLearn from "./Module/WhoCanLearn"
import WhyBMSection from "./Module/WhyBMSection"
import WhyLearnAI2025 from "./Module/Whylearn"
 
function App() {
  return (
    <div>
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
    </div>
  )
}
 
export default App




