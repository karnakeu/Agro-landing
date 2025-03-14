import React from "react";
import Image1 from "/src/assets/organic/1.svg";
import Image2 from "/src/assets/organic/2.svg";
import Image3 from "/src/assets/organic/3.svg";
import Image4 from "/src/assets/organic/4.svg";
import Icon1 from "/src/assets/organic/5.svg";

const OrganicProduct = () => {
  return (
    <section className="flex flex-row my-[120px] mx-[200px]">
      <div className="relative px-[35px]">
        <img
          src={Image1}
          alt="Image1"
          width={550}
          height={550}
          className="rounded-[20px]"
        />

        <img
          src={Image2}
          alt="Image2"
          width={260}
          height={260}
          className="absolute bottom-[30px] left-[-50px] rounded-full border-[10px] border-white"
        />
      </div>

      <div className="flex flex-col px-[30px] w-[600px] h-[642px]">
        <div className="font-covered orange text-[24px]">Our Introductions</div>
        <div className="font-manrope-extrabold text-[48px]">
          Agriculture & Organic <br />
          Product Farm
        </div>
        <div className="font-manrope-extrabold green text-[26px] mt-[30px]">
          Agrios is the largest global organic farm.
        </div>
        <div className="font-manrope-medium grey-scale-3 text-[16px] mt-[30px]">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </div>

        <div className="flex flex-row mt-[40px]">
          <div className="flex items-center">
            <img src={Image3} alt="Image3" width={64} height={64} />
            <div className="font-manrope-extrabold text-[20px] ml-[20px]">
              Growing fruits <br /> vegetables
            </div>
          </div>

          <div className="flex items-center ml-[45px]">
            <img src={Image4} alt="Image4" width={64} height={64} />
            <div className="font-manrope-extrabold text-[20px] ml-[20px]">
              Tips for ripening <br /> your fruits
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[35px]">
          <div className="flex flex-row">
            <img src={Icon1} alt="Icon1" width={16} height={16} />
            <div className="font-manrope-semibold text-[16px] ml-[15px]">
              Lorem Ipsum is not simply random text.
            </div>
          </div>
          <div className="flex flex-row">
            <img src={Icon1} alt="Icon1" width={16} height={16} />
            <div className="font-manrope-semibold text-[16px] ml-[15px]">
              Making this the first true generator on the internet.
            </div>
          </div>
        </div>
        <button className="font-manrope-bold text-white bg-green flex items-center justify-center w-[200px] h-[60px] rounded-[10px] mt-[40px]">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default OrganicProduct;
