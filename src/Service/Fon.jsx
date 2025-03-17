import React from "react";
import fongreen from "../../src/assets-amelie/fongreen.png";

const Fon = () => {
  return (
    <div
      className="w-full h-[273px] mt-[150px]"
      style={{ backgroundImage: `url(${fongreen})` }}
    >
      <div className="flex flex-row mx-[300px]">
        <div className="mt-[70px]">
          <p className="font-covered orange text-2xl">
            Agriculture Market Leaders
          </p>
          <h1 className=" font-manrope-extrabold text-4xl white">
            We`re popular in agriculture market globally
          </h1>
        </div>
        <div className="mt-[110px] ml-[250px]">
          <button className="bg-orange w-[196px] h-[60px] rounded-lg white font-manrope-bold text-sm">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fon;
