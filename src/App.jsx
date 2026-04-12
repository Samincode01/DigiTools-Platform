import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSectionnew from './components/NavBar/HeroSectionnew/HeroSectionnew'
import RatingSection from './components/NavBar/RatingSection/RatingSection'
import GetStarted from './components/GetStarted/GetStarted'
import PricingSection from './components/PricingSection/PricingSection'

function App() {


  return (
   <>
   <div>
    <NavBar></NavBar>
   <HeroSectionnew></HeroSectionnew>
   <RatingSection></RatingSection>
   <GetStarted></GetStarted>
   <PricingSection></PricingSection>
   </div>

   </>
  )
}

export default App
