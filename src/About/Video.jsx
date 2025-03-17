import React from "react";
import video from "../../src/assets-amelie/video.svg";
import flowers from "../../src/assets-amelie/flowers.png";

const Video = () => {
  return (
    <div className="w-full h-[800px] mt-[120px]">
      <div
        className="w-full h-[616px] flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${flowers})` }}
      >
        <img src={video} alt="video" className="w-[100px] h-[100px]" />
        <h1 className="font-manrope-extrabold text-5xl white w-[740px] h-[144px] text-center mt-[50px]">
          ECO-Friendly Products can be Made from Scratch
        </h1>
      </div>
      <div className="w-full h-[184px] bg-black flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-20 text-center text-white">
          <p className="font-manrope-medium text-sm md:text-lg text-gray-400">
            Agriculture Products
          </p>
          <p className="font-manrope-medium text-sm md:text-lg text-gray-400">
            Projects Completed
          </p>
          <p className="font-manrope-medium text-sm md:text-lg text-gray-400">
            Satisfied Clients
          </p>
          <p className="font-manrope-medium text-sm md:text-lg text-gray-400">
            Experts Farmers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
