import React from "react";
import {
  FaPenNib,
  FaPaintBrush,
  FaCamera,
  FaCogs,
  FaFileAlt,
  FaMobileAlt,
} from "react-icons/fa";

const iconMap = {
  pen: FaPenNib,
  brush: FaPaintBrush,
  camera: FaCamera,
  cogs: FaCogs,
  file: FaFileAlt,
  mobile: FaMobileAlt,
};

const ProductCard = ({ items, addToCart, removeFromCart, view }) => {

  // 🟣 CART VIEW
  if (view === "cart") {
    return (
      <div className="max-w-3xl mx-auto space-y-4 p-10">

        <h2 className="text-xl font-semibold text-left mb-4">Your Cart</h2>

        {items.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-xl"
            >
      
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Icon className="text-purple-600 text-lg" />
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-[18px]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 text-left">
                    {item.price}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          );
        })}

    
        <div className="flex justify-between mt-6 font-semibold text-lg">
          <span className='text-[#627382] text-[16px]'>Total:</span>
          <span className='text-[#627382] text-[16px]'>
            $
            {items.reduce(
              (total, item) =>
                total + parseInt(item.price.replace("$", "")),
              0
            )}
          </span>
        </div>

        <button className="w-full mt-4 py-3 rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] font-bold text-white text-[16px] hover:cursor-pointer">
          Proceed To Checkout
        </button>
      </div>
    );
  }

 
  return (
    <div className="grid md:grid-cols-3 gap-6 p-10">
      {items.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <div
            key={item.id}
            className="bg-white rounded-2xl border p-6 shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Icon className="text-purple-600" />
              </div>

              <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                {item.badge}
              </span>
            </div>

            <h2 className="text-lg font-semibold">{item.title}</h2>

            <p className="text-gray-500 text-sm my-3">
              {item.description}
            </p>

            <h1 className="text-xl font-bold mb-4">
              {item.price}{" "}
              <span className="text-sm text-gray-500">
                {item.type}
              </span>
            </h1>

            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              {item.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <button
              onClick={() => addToCart(item)}
              className="btn w-full rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white border-none"
            >
              Buy Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;