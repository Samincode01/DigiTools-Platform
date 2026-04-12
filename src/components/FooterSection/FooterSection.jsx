import React from "react";
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <div className="bg-[#0b1a2b] text-white py-16 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">DigiTools</h1>
          <p className="text-white/70 max-w-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Product</h2>
          <ul className="space-y-2 text-white/70">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-white/70">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-white/70">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-4">Social Links</h2>
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
              <FaYoutube />
            </div>
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
              <FaXTwitter />
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;