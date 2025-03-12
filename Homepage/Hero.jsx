import React from "react";
import bgImage from "/src/assets/hero/1.svg";
import Image1 from "/src/assets/hero/2.svg";

const Hero = () => {
  return (
    <section>
      <div
        className="w-full h-[810px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="flex flex-col text-white">
            <div className="font-manrope-semibold text-[16px] uppercase mb-4">
              Welcome to agrios farming
            </div>
            <div className="font-covered text-[120px] leading-[1.1] mb-6">
              Agriculture & Eco Farming
            </div>
            <div className="font-manrope-semibold text-[18px] opacity-70 mb-8 max-w-[522px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
            <div className="flex items-center gap-4">
              <button className="font-manrope-bold text-white bg-green px-[50px] py-[14px] rounded-[10px]">
                Discover More
              </button>
              <img src={Image1} alt="Image1" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
