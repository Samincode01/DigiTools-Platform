import React from 'react';
import Banner from '../../../assets/banner.png';
import Doticon from '../../../assets/doticon.png';
import { CiPlay1 } from 'react-icons/ci';

const HeroSectionnew = () => {
  return (
    <div className="px-10 md:px-20 lg:px-28 py-16">
      
      <div className="flex items-center justify-between gap-16">
        
        <div className="max-w-xl flex flex-col gap-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e9e7ff] rounded-full w-fit">
            <img src={Doticon} alt="" className="w-7 h-7" />
            <span className="text-[16px] text-[#6c4df6]">
              New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2d3440] leading-tight">
            Supercharge Your
            <span className="block">Digital Workflow</span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <p className="text-gray-500">
            Explore Products
          </p>


          <div className="flex items-center gap-4 mt-2">
            
            <button className="bg-[#6c4df6] text-white px-6 py-3 rounded-full font-medium shadow-md cursor-pointer hover:bg-[#7a5ff3]">
              Explore Products
            </button>

            <button className="flex items-center gap-2 border border-[#6c4df6] text-[#6c4df6] px-6 py-3 rounded-full font-medium cursor-pointer hover:bg-[#e6e6e7]">
              <CiPlay1 /> Watch Demo
            </button>

          </div>
        </div>


        <div className="w-full max-w-md lg:max-w-lg">
          <img
            src={Banner}
            alt=""
            className="w-full h-auto rounded-xl opacity-90"
          />
        </div>

      </div>
    </div>
  );
};

export default HeroSectionnew;