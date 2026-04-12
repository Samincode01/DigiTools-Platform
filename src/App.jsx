import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSectionnew from './components/NavBar/HeroSectionnew/HeroSectionnew'
import RatingSection from './components/NavBar/RatingSection/RatingSection'
import GetStarted from './components/GetStarted/GetStarted'
import PricingSection from './components/PricingSection/PricingSection'
import TransformSection from './components/TransformSection/TransformSection'
import FooterSection from './components/FooterSection/FooterSection'
import ProductSection from './components/ProductSection/ProductSection'

function App() {


  return (
   <>
   <div>
    <NavBar></NavBar>
   <HeroSectionnew></HeroSectionnew>
   <RatingSection></RatingSection>
   <ProductSection></ProductSection>
   <GetStarted></GetStarted>
   <PricingSection></PricingSection>
   <TransformSection></TransformSection>
   <FooterSection></FooterSection>
   </div>

   </>
  )
}

export default App
