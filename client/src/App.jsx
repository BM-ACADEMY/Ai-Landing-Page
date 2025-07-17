import AwardHeadingWithStats from "./Module/Achiements"
import Footer from "./Module/Footer"
import HeroSection from "./Module/Home"
import PricingSlider from "./Module/PricingSlider"
import { CardStackDemo } from "./Module/Reviews"
import WhatYoullGet from "./Module/Steptocourse"
import WhatsappFloatButton from "./Module/Whatsapp"
import WhyBM from "./Module/WhyBM"
 
function App() {
  return (
    <div>
      <HeroSection/>
      <AwardHeadingWithStats/>
      <WhyBM/>
      <PricingSlider/>
      <WhatYoullGet/>
      <CardStackDemo/>
      <WhatsappFloatButton/>
      <Footer/>
    </div>
  )
}
 
export default App