import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("products");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addToCart = (item) => {
    setCart((prev) => {
      if (prev.find((p) => p.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const displayedItems = view === "products" ? products : cart;

  return (
    <div className="text-center mb-12 mt-28">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">
        Premium Digital Tools
      </h1>

      <p className="text-gray-500 max-w-2xl mx-auto mb-6">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <div className="flex justify-center gap-3 mb-10">
        <div className="p-1 border-2 border-[#F6F6F6] bg-white rounded-full">

          <button
            onClick={() => setView("products")}
            className={`btn rounded-full px-6 ${
              view === "products"
                ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`btn rounded-full px-6 ${
              view === "cart"
                ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Cart ({cart.length})
          </button>

        </div>
      </div>

      <ProductCard
        items={displayedItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        view={view}
      />
    </div>
  );
};

export default ProductSection;