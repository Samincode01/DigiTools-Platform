import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSectionnew from './components/NavBar/HeroSectionnew/HeroSectionnew'
import RatingSection from './components/NavBar/RatingSection/RatingSection'

function App() {


  return (
   <>
   <div>
    <NavBar></NavBar>
   <HeroSectionnew></HeroSectionnew>
   <RatingSection></RatingSection>
   </div>

   </>
  )
}

export default App
