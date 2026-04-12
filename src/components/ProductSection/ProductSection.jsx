import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
    return (
         <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-3">
        Premium Digital Tools
      </h1>

      <p className="text-gray-500 max-w-2xl mx-auto mb-6">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      <div className="flex justify-center gap-3">
        <button className="btn rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white border-none px-6">
          Products
        </button>

        <button className="btn rounded-full bg-gray-100 text-gray-700 border-none px-6">
          Cart (2)
        </button>
      </div>
      <div>
        <ProductCard></ProductCard>
      </div>
    </div>
    );
};

export default ProductSection;