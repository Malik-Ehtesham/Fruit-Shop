import React from "react";

const ProductCard = () => {
  return (
    <div className="w-40 shadow hover:shadow-lg sm:w-52 flex flex-col border-2 p-2 rounded-lg m-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
      <img src="/apple.jpg" className="w-28 sm:w-44 m-auto" />
      <div className="flex justify-between border-t-2 p-1">
        <p className="text-black font-semibold text-lg sm:text-xl">Apple</p>
        <p className="text-red-500 font-bold text-xl sm:text-2xl">$10</p>
      </div>
    </div>
  );
};

export default ProductCard;
