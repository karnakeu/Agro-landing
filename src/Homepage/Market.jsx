import React from "react";
import Image1 from "/src/assets/market/1.svg";
import Image2 from "/src/assets/market/2.svg";
import Image3 from "/src/assets/market/3.svg";
import Image4 from "/src/assets/market/4.svg";

const Market = () => {
  return (
    <section className="mt-[120px] flex flex-row  items-center justify-center text-center">
      <div
        className="w-[700px] h-[734px]"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <div className="bg-orange font-covered white text-[30px] w-[306px] h-[168px] rounded-t-[10px] rounded-l-[10px] mt-[170px] ml-[310px] text-start pl-[140px] pt-[20px]">
          Agriculture <br /> Professional <br /> Leader
        </div>
        <div
          className="bg-orange w-[30px] h-[30px] ml-[586px]"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
          }}
        />
      </div>
      <div className="flex flex-col text-start">
        <div className="flex flex-col px-[30px] w-[600px] h-auto">
          <div className="font-covered orange text-[24px]">
            Our Farm Benefits
          </div>
          <div className="font-manrope-extrabold text-[48px]">
            Why Choose Agrios
            <br />
            Market
          </div>
          <div className="font-manrope-medium grey-scale-3 text-[16px] mt-[30px]">
            There are many variations of passages of available but the majortity
            have sufferred alteration in some form by injected humor or random
            word which don't look even.
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row mt-[34px]">
              <img src={Image2} alt="Image2" className="mb-[30px]" />
              <div className="flex flex-col ml-[25px] ">
                <div className="font-manrope-extrabold text-[24px]">
                  Quality Organic Food
                </div>
                <div className="font-manrope-medium grey-scale-3 text-[16px] mt-[5px]">
                  There are variation You need to be sure there is anything
                  hidden in the middle of text.
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-[34px]">
              <img src={Image3} alt="Image3" className="mb-[30px]" />
              <div className="flex flex-col ml-[25px] ">
                <div className="font-manrope-extrabold text-[24px]">
                  Professional Farmers
                </div>
                <div className="font-manrope-medium grey-scale-3 text-[16px] mt-[5px]">
                  There are variation You need to be sure there is anything
                  hidden in the middle of text.
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-[34px]">
              <img src={Image4} alt="Image4" className="mb-[30px]" />
              <div className="flex flex-col ml-[25px] ">
                <div className="font-manrope-extrabold text-[24px]">
                  Quality Products
                </div>
                <div className="font-manrope-medium grey-scale-3 text-[16px] mt-[5px]">
                  There are variation You need to be sure there is anything
                  hidden in the middle of text.
                </div>
              </div>
            </div>
          </div>
          <button className="font-manrope-bold text-white bg-green flex items-center justify-center w-[200px] h-[60px] rounded-[10px] mt-[30px]">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Market;
