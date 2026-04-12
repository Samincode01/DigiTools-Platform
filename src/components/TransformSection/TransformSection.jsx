import React from "react";

const TransformSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] py-24 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Ready To Transform Your Workflow?
      </h1>

      <p className="text-white/80 max-w-2xl mx-auto mb-8">
        Join thousands of professionals who are already using Digitools to work smarter.
        Start your free trial today.
      </p>

      <div className="flex justify-center gap-4 mb-6">
        <button className="btn rounded-full bg-white text-purple-600 border-none px-8">
          Explore Products
        </button>

        <button className="btn rounded-full bg-transparent border border-white text-white px-8 hover:bg-white hover:text-purple-600 transition">
          View Pricing
        </button>
      </div>

      <p className="text-sm text-white/70">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default TransformSection;