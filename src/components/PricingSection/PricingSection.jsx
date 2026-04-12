import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-[#f9fafc] py-20">
      

      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="flex justify-center gap-8">

        <div className="bg-white rounded-2xl border border-gray-200 p-8 w-[300px]">
          <h2 className="text-xl font-semibold">Starter</h2>
          <p className="text-gray-500 text-sm mb-4">
            Perfect for getting started
          </p>

          <h1 className="text-4xl font-bold mb-6">
            $0 <span className="text-base font-medium text-gray-500">/Month</span>
          </h1>

          <ul className="text-gray-600 space-y-2 mb-8">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="btn w-full rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white border-none">
            Get Started Free
          </button>
        </div>


        <div className="relative bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-2xl p-8 w-[300px]">

   
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-xs px-3 py-1 rounded-full text-black font-medium">
            Most Popular
          </div>

          <h2 className="text-xl font-semibold">Pro</h2>
          <p className="text-sm mb-4 opacity-90">
            Best for professionals
          </p>

          <h1 className="text-4xl font-bold mb-6">
            $29 <span className="text-base font-medium opacity-80">/Month</span>
          </h1>

          <ul className="space-y-2 mb-8 text-sm">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="btn w-full rounded-full bg-white text-purple-600 border-none">
            Start Pro Trial
          </button>
        </div>


        <div className="bg-white rounded-2xl border border-gray-200 p-8 w-[300px]">
          <h2 className="text-xl font-semibold">Enterprise</h2>
          <p className="text-gray-500 text-sm mb-4">
            For teams and businesses
          </p>

          <h1 className="text-4xl font-bold mb-6">
            $99 <span className="text-base font-medium text-gray-500">/Month</span>
          </h1>

          <ul className="text-gray-600 space-y-2 mb-8">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="btn w-full rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white border-none">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default PricingSection;