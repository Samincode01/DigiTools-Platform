import React from 'react';
import User from '../../assets/user.png';
import Rocket from '../../assets/rocket.png';
import Packagepic from '../../assets/package.png';
const GetStarted = () => {
  return (
    <div className="bg-[#f9fafc] py-20">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Getting Started</h1>
        <p className="text-gray-500 mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="flex justify-center gap-8">

       
        <div className="bg-white rounded-2xl border border-gray-200 p-10 w-[300px] text-center shadow-sm relative">

  
          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
            01
          </div>


          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
            <img src={User} alt="" className="w-10" />
          </div>

          <h2 className="text-xl font-semibold text-gray-800">
            Create Account
          </h2>

          <p className="text-gray-500 mt-3 text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
       
        <div className="bg-white rounded-2xl border border-gray-200 p-10 w-[300px] text-center shadow-sm relative">


          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
            02
          </div>

    
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
            <img src={Packagepic} alt="" className="w-10" />
          </div>

          <h2 className="text-xl font-semibold text-gray-800">
             Choose Products
          </h2>

          <p className="text-gray-500 mt-3 text-sm">
            Browse our catalog and select the toolsthat fit your needs.
          </p>
        </div>
       
        <div className="bg-white rounded-2xl border border-gray-200 p-10 w-[300px] text-center shadow-sm relative">

  
          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
            03
          </div>

  
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
            <img src={Rocket} alt="" className="w-10" />
          </div>

          <h2 className="text-xl font-semibold text-gray-800">
            Start Creating
          </h2>

          <p className="text-gray-500 mt-3 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>

        
       

      </div>
    </div>
  );
};

export default GetStarted;