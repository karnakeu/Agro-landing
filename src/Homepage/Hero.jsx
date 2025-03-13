import React from "react";
import bgImage from "/src/assets/hero/1.svg";
import Image1 from "/src/assets/hero/2.svg";

const Hero = () => {
  return (
    <section>
      <div
        className="w-[100%] h-[810px]"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="flex flex-col">
          <div className="font-manrope-semibold white font-[16px] uppercase">
            Welcome to agrios farming
          </div>
          <div className="font-covered white text-[120px]">
            Agriculture & Eco Farming
          </div>
          <div className="font-manrope-semibold white opacity-[70%] w-[522px] h-[52px] mt-[26px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
          <div className="flex flex-row">
            <button className="font-manrope-bold white bg-green px-[50px] py-[14px] rounded-[10px]">
              Discover More
            </button>
            <img src={Image1} alt="Image1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
