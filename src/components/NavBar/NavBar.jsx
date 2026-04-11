import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const NavBar = () => {
    return (
        <div>
            <div className="m-auto px-48 py-4 max-lg:collapse bg-white lg:mb-48 shadow-sm w-full rounded-md items-center">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button className="btn btn-ghost text-5xl text-[#4f39f6] font-bold">DigiTools</button>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 text-[#101727] font-semibold">
     <li><button>Products</button></li>
      <li><button>Features</button></li>
      <li><button>Pricing</button></li>
      <li><button>Testimonials</button></li>
      <li><button>FAQ</button></li>
      </ul>
    </div>
    <div className="navbar-end font-semibold">
        <ul className='flex justify-between gap-4 items-center text-[#101727]'>
            <li className='text-3xl cursor-pointer hover:bg-gray-100'> <CiShoppingCart/> </li>
            <li className='cursor-pointer hover:bg-gray-100'>Login</li>
            <li><button className="btn btn-primary rounded-2xl text-white">Get Started</button></li>
        </ul>
    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu font-semibold">
      <li><button>Products</button></li>
      <li><button>Features</button></li>
      <li><button>Pricing</button></li>
      <li><button>Testimonials</button></li>
      <li><button>FAQ</button></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default NavBar;