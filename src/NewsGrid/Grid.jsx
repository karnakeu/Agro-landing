import React from "react";
import Image1 from "../../src/assets/grid/1.svg";
import Image2 from "../../src/assets/grid/2.svg";
import Image3 from "../../src/assets/grid/3.svg";
import Image4 from "../../src/assets/grid/4.svg";
import Image5 from "../../src/assets/grid/5.svg";
import Image6 from "../../src/assets/grid/6.svg";
import Image7 from "../../src/assets/news/4.svg";
import Image8 from "../../src/assets/news/5.svg";

const Grid = () => {
  return (
    <section className="flex flex-col">
      {" "}
      <div className="flex flex-row justify-center gap-[30px] mt-[50px]">
        <div
          className="w-[370px] h-[514px] rounded-[10px] relative shadow-lg"
          style={{ backgroundImage: `url(${Image1})` }}
        >
          <div className="flex-col bg-white mt-[300px] h-[214px] rounded-b-[10px] flex items-center justify-center">
            <button className="font-manrope-bold text-white text-[14px] bg-green flex items-center justify-center w-[135px] h-[40px] rounded-[10px] mt-[-50px]">
              05 July 2022
            </button>
            <div className="flex flex-row flex-center items-center text-center justify-center mt-[16px]">
              <div className="flex flex-row">
                <img src={Image7} alt="Image4" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  Kevin Martin
                </div>
              </div>
              <div className="flex flex-row ml-[14px]">
                <img src={Image8} alt="Image5" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  1 Comment
                </div>
              </div>
            </div>
            <div className="font-manrope-extrabold text-[26px] text-center mt-[8px]">
              Bringing Food <br /> Production Back To <br /> Cities
            </div>
          </div>
        </div>
        <div
          className="w-[370px] h-[514px] rounded-[10px] relative shadow-lg"
          style={{ backgroundImage: `url(${Image2})` }}
        >
          <div className="flex-col bg-white mt-[300px] h-[214px] rounded-b-[10px] flex items-center justify-center">
            <button className="font-manrope-bold text-white text-[14px] bg-green flex items-center justify-center w-[135px] h-[40px] rounded-[10px] mt-[-50px]">
              05 July 2022
            </button>
            <div className="flex flex-row flex-center items-center text-center justify-center mt-[16px]">
              <div className="flex flex-row">
                <img src={Image7} alt="Image4" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  Kevin Martin
                </div>
              </div>
              <div className="flex flex-row ml-[14px]">
                <img src={Image8} alt="Image5" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  0 Comment
                </div>
              </div>
            </div>
            <div className="font-manrope-extrabold text-[26px] text-center mt-[8px]">
              The Future of <br /> Farming, Smart <br /> Irrigation Solutions
            </div>
          </div>
        </div>
        <div
          className="w-[370px] h-[514px] rounded-[10px] relative shadow-lg"
          style={{ backgroundImage: `url(${Image3})` }}
        >
          <div className="flex-col bg-white mt-[300px] h-[214px] rounded-b-[10px] flex items-center justify-center">
            <button className="font-manrope-bold text-white text-[14px] bg-green flex items-center justify-center w-[135px] h-[40px] rounded-[10px] mt-[-50px]">
              05 July 2022
            </button>
            <div className="flex flex-row flex-center items-center text-center justify-center mt-[16px]">
              <div className="flex flex-row">
                <img src={Image7} alt="Image4" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  Kevin Martin
                </div>
              </div>
              <div className="flex flex-row ml-[14px]">
                <img src={Image8} alt="Image5" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  0 Comment
                </div>
              </div>
            </div>
            <div className="font-manrope-extrabold text-[26px] text-center mt-[8px]">
              Agronomy and <br /> relation to Other <br /> Sciences
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-[30px] mt-[50px]">
        <div
          className="w-[370px] h-[514px] rounded-[10px] relative shadow-lg"
          style={{ backgroundImage: `url(${Image4})` }}
        >
          <div className="flex-col bg-white mt-[300px] h-[214px] rounded-b-[10px] flex items-center justify-center">
            <button className="font-manrope-bold text-white text-[14px] bg-green flex items-center justify-center w-[135px] h-[40px] rounded-[10px] mt-[-50px]">
              05 July 2022
            </button>
            <div className="flex flex-row flex-center items-center text-center justify-center mt-[16px]">
              <div className="flex flex-row">
                <img src={Image7} alt="Image4" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  Kevin Martin
                </div>
              </div>
              <div className="flex flex-row ml-[14px]">
                <img src={Image8} alt="Image5" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  1 Comment
                </div>
              </div>
            </div>
            <div className="font-manrope-extrabold text-[26px] text-center mt-[8px]">
              Bringing Food <br /> Production Back To <br /> Cities
            </div>
          </div>
        </div>
        <div
          className="w-[370px] h-[514px] rounded-[10px] relative shadow-lg"
          style={{ backgroundImage: `url(${Image5})` }}
        >
          <div className="flex-col bg-white mt-[300px] h-[214px] rounded-b-[10px] flex items-center justify-center">
            <button className="font-manrope-bold text-white text-[14px] bg-green flex items-center justify-center w-[135px] h-[40px] rounded-[10px] mt-[-50px]">
              05 July 2022
            </button>
            <div className="flex flex-row flex-center items-center text-center justify-center mt-[16px]">
              <div className="flex flex-row">
                <img src={Image7} alt="Image4" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  Kevin Martin
                </div>
              </div>
              <div className="flex flex-row ml-[14px]">
                <img src={Image8} alt="Image5" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  0 Comment
                </div>
              </div>
            </div>
            <div className="font-manrope-extrabold text-[26px] text-center mt-[8px]">
              The Future of <br /> Farming, Smart <br /> Irrigation Solutions
            </div>
          </div>
        </div>
        <div
          className="w-[370px] h-[514px] rounded-[10px] relative shadow-lg"
          style={{ backgroundImage: `url(${Image6})` }}
        >
          <div className="flex-col bg-white mt-[300px] h-[214px] rounded-b-[10px] flex items-center justify-center">
            <button className="font-manrope-bold text-white text-[14px] bg-green flex items-center justify-center w-[135px] h-[40px] rounded-[10px] mt-[-50px]">
              05 July 2022
            </button>
            <div className="flex flex-row flex-center items-center text-center justify-center mt-[16px]">
              <div className="flex flex-row">
                <img src={Image7} alt="Image4" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  Kevin Martin
                </div>
              </div>
              <div className="flex flex-row ml-[14px]">
                <img src={Image8} alt="Image5" width={13} height={13} />
                <div className="font-manrope-medium text-[14px] grey-scale-3 ml-[6px]">
                  0 Comment
                </div>
              </div>
            </div>
            <div className="font-manrope-extrabold text-[26px] text-center mt-[8px]">
              Agronomy and <br /> relation to Other <br /> Sciences
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
