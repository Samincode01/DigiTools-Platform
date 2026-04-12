import React from 'react';

const RatingSection = () => {
  return (
    <div className="bg-[#4f39f6]">
      <div className="px-48 py-14 flex justify-center text-center text-white">

        <div className="px-12 border-r border-white/40">
          <h1 className="text-6xl font-extrabold">50K+</h1>
          <span className="text-2xl font-medium">Active Users</span>
        </div>

        <div className="px-12 border-r border-white/40">
          <h1 className="text-6xl font-extrabold">200+</h1>
          <span className="text-2xl font-medium">Premium Tools</span>
        </div>

        <div className="px-12">
          <h1 className="text-6xl font-extrabold">4.9</h1>
          <span className="text-2xl font-medium">Rating</span>
        </div>

      </div>
    </div>
  );
};

export default RatingSection;