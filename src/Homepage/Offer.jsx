import React from "react";
import Image1 from "/src/assets/offer/1.svg";
import Image2 from "/src/assets/offer/2.svg";
import Image3 from "/src/assets/offer/3.svg";
import Image4 from "/src/assets/offer/4.svg";
import Image5 from "/src/assets/offer/5.svg";
import Image6 from "/src/assets/offer/6.svg";
import Image7 from "/src/assets/offer/7.svg";
import Image8 from "/src/assets/offer/8.svg";
import Image9 from "/src/assets/offer/9.svg";

const Offer = () => {
  return (
    <section className="flex flex-col">
      <div className="bg-grey-scale-9 w-full h-[410px] flex flex-col items-center justify-center text-center pt-[20px]">
        <div className="font-covered orange text-[24px]">Our Services</div>
        <div className="font-manrope-extrabold text-[48px]">What We Offer</div>
      </div>

      <div className="flex flex-row justify-center gap-[30px] mt-[-100px]">
        <div
          className="w-[260px] h-[420px] rounded-[10px] relative"
          style={{ backgroundImage: `url(${Image1})` }}
        >
          <div className="flex flex-col items-center justify-center text-center mt-[240px]">
            <div className="bg-light-green w-[70px] h-[70px] rounded-[10px] mb-[-40px] z-1 flex items-center justify-center">
              <img src={Image5} alt="Image5" className="w-[50px] h-[50px]" />
            </div>

            <button className="font-manrope-bold text-white bg-green flex items-center justify-center w-[110px] h-[46px] rounded-[10px] z-1 absolute top-[200px] right-[-20px]">
              Read More
            </button>

            <div className="bg-white w-[210px] h-[130px] rounded-[10px] font-manrope-extrabold text-[20px] pt-[50px]">
              Agriculture <br /> Products
            </div>
          </div>
        </div>

        <div
          className="w-[260px] h-[420px] rounded-[10px] relative"
          style={{ backgroundImage: `url(${Image2})` }}
        >
          <div className="flex flex-col items-center justify-center text-center mt-[240px]">
            <div className="bg-light-green w-[70px] h-[70px] rounded-[10px] mb-[-40px] z-1 flex items-center justify-center">
              <img src={Image6} alt="Image6" className="w-[50px] h-[50px]" />
            </div>

            <button className="font-manrope-bold text-white bg-green flex items-center justify-center w-[110px] h-[46px] rounded-[10px] z-1 absolute top-[200px] right-[-20px]">
              Read More
            </button>

            <div className="bg-white w-[210px] h-[130px] rounded-[10px] font-manrope-extrabold text-[20px] pt-[50px]">
              Organic <br /> Products
            </div>
          </div>
        </div>

        <div
          className="w-[260px] h-[420px] rounded-[10px] relative"
          style={{ backgroundImage: `url(${Image3})` }}
        >
          <div className="flex flex-col items-center justify-center text-center mt-[240px]">
            <div className="bg-light-green w-[70px] h-[70px] rounded-[10px] mb-[-40px] z-1 flex items-center justify-center">
              <img src={Image7} alt="Image7" className="w-[50px] h-[50px]" />
            </div>

            <button className="font-manrope-bold text-white bg-green flex items-center justify-center w-[110px] h-[46px] rounded-[10px] z-1 absolute top-[200px] right-[-20px]">
              Read More
            </button>

            <div className="bg-white w-[210px] h-[130px] rounded-[10px] font-manrope-extrabold text-[20px] pt-[50px]">
              Fresh <br />
              Vegetables
            </div>
          </div>
        </div>

        <div
          className="w-[260px] h-[420px] rounded-[10px] relative"
          style={{ backgroundImage: `url(${Image4})` }}
        >
          <div className="flex flex-col items-center justify-center text-center mt-[240px]">
            <div className="bg-light-green w-[70px] h-[70px] rounded-[10px] mb-[-40px] z-1 flex items-center justify-center">
              <img src={Image8} alt="Image8" className="w-[50px] h-[50px]" />
            </div>

            <button className="font-manrope-bold text-white bg-green flex items-center justify-center w-[110px] h-[46px] rounded-[10px] z-1 absolute top-[200px] right-[-20px]">
              Read More
            </button>

            <div className="bg-white w-[210px] h-[130px] rounded-[10px] font-manrope-extrabold text-[20px] pt-[50px]">
              Dairy <br /> Products
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[84px] mb-[-120px] z-1">
        <div className="bg-green w-[1100px] h-[184px] rounded-[10px] flex flex-row items-center justify-between px-[50px]">
          <div className="font-manrope-medium text-[18px] text-white">
            Agriculture Products
          </div>
          <div className="font-manrope-medium text-[18px] text-white">
            Projects Completed
          </div>
          <div className="font-manrope-medium text-[18px] text-white">
            Satisfied Clients
          </div>
          <div className="font-manrope-medium text-[18px] text-white">
            Experts Farmers
          </div>
        </div>
      </div>
      <div
        className="mx-[7px] h-[690px]"
        style={{ backgroundImage: `url(${Image9})` }}
      >
        {" "}
        <div className="font-manrope-extrabold text-[70px] white mt-[200px] ml-[350px]">
          Agriculture <br /> Matters to the <br /> Future of <br /> Development
        </div>
      </div>
    </section>
  );
};

export default Offer;
