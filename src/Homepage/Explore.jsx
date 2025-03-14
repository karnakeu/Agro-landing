import React from "react";
import Image1 from "/src/assets/explore/1.svg";
import Image2 from "/src/assets/explore/2.svg";
import Image3 from "/src/assets/explore/3.svg";
import Image4 from "/src/assets/explore/4.svg";

const Explore = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center mt-[113px]">
        <div className="font-covered orange text-[24px]">
          Recently Completed
        </div>
        <div className="font-manrope-extrabold text-[48px]">
          Explore Projects
        </div>
      </div>
      <div className="flex flex-row justify-center gap-[10px] mt-[50px]">
        <div
          className="w-[360px] h-[560px] rounded-[10px] relative shadow-lg"
          style={{ backgroundImage: `url(${Image1})` }}
        >
          <div className="white font-manrope-extrabold text-[30px] mt-[430px] ml-[40px]">
            Easy <br />
            Harvesting
          </div>
        </div>
        <div
          className="w-[360px] h-[560px] rounded-[10px] relative shadow-lg"
          style={{ backgroundImage: `url(${Image2})` }}
        >
          <div className="white font-manrope-extrabold text-[30px] mt-[430px] ml-[40px]">
            Agriculture <br />
            Farming
          </div>
        </div>
        <div
          className="w-[360px] h-[560px] rounded-[10px] relative shadow-lg"
          style={{ backgroundImage: `url(${Image3})` }}
        >
          <div className="white font-manrope-extrabold text-[30px] mt-[430px] ml-[40px]">
            Ecological <br />
            Farming
          </div>
        </div>
        <div
          className="w-[360px] h-[560px] rounded-[10px] relative shadow-lg"
          style={{ backgroundImage: `url(${Image4})` }}
        >
          <div className="white font-manrope-extrabold text-[30px] mt-[430px] ml-[40px]">
            Organic <br />
            Solutions
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
