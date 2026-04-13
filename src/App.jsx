import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSectionnew from "./components/NavBar/HeroSectionnew/HeroSectionnew";
import RatingSection from "./components/NavBar/RatingSection/RatingSection";
import GetStarted from "./components/GetStarted/GetStarted";
import PricingSection from "./components/PricingSection/PricingSection";
import TransformSection from "./components/TransformSection/TransformSection";
import FooterSection from "./components/FooterSection/FooterSection";
import ProductSection from "./components/ProductSection/ProductSection";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <NavBar cart={cart} />

      <HeroSectionnew />
      <RatingSection />

      <ProductSection cart={cart} setCart={setCart} />

      <GetStarted />
      <PricingSection />
      <TransformSection />
      <FooterSection />
    </div>
  );
}

export default App;