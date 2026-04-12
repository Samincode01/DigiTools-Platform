import React, { useEffect, useState } from "react";
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
const ProductCard = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
            fetch('../../../public/data.json')
            .then(res=>res.json())
            .then((data)=>setProducts(data.products));

    },[]);
     
    return (
    <div className="grid md:grid-cols-3 gap-6 p-10">
      {products.map((item) => {
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

            <button className="btn w-full rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white border-none">
              Buy Now
            </button>
          </div>
        );
      })}
    </div>
  );
};



export default ProductCard;