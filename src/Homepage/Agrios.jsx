import React from "react";
import Image1 from "/src/assets/agrios/1.svg";
import Image2 from "/src/assets/agrios/2.svg";
import Image3 from "/src/assets/agrios/3.svg";
import Image4 from "/src/assets/agrios/daulet.jpg";

const Agrios = () => {
  return (
    <section className="mt-[120px] flex flex-row">
      <div className="bg-grey-scale-9 w-full h-[700px] flex flex-row items-center justify-center text-center">
        <div className="flex flex-col px-[30px] w-[400px] h-auto text-start">
          <div className="font-covered orange text-[24px]">
            Our Testimonials
          </div>
          <div className="font-manrope-extrabold text-[48px]">
            What They're Talking About Agrios
          </div>
          <div className="font-manrope-medium grey-scale-3 text-[16px] mt-[30px]">
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form by injected humor
            or random word which don’t look even.
          </div>
          <button className="font-manrope-bold text-white bg-green flex items-center justify-center w-[242px] h-[60px] rounded-[10px] mt-[43px]">
            View All Testimonials
          </button>
        </div>

        <div className="flex flex-row bg-white w-[770px] h-[260px] ml-[70px] rounded-[10px] mb-[190px]">
          <div className="flex-flex-col mt-[50px] ml-[50px] text-start">
            <div className="font-manrope-medium grey-scale-3 text-[18px] w-[495px] ">
              There are many variations of passages of available but the
              majority have suffered alteration in some form by injected humor
              or random word which don't look even.
            </div>
            <div className="flex flex-row items-center flex-center">
              <div className="font-manrope-extrabold text-[24px] mt-[23px]">
                Bonnie Tolbert
              </div>
              <div className="flex flex-center items-center justify-center gap-[3px] mt-[25px] ml-[220px]">
                <img src={Image1} alt="Image1" />
                <img src={Image1} alt="Image1" />
                <img src={Image1} alt="Image1" />
                <img src={Image1} alt="Image1" />
                <img src={Image1} alt="Image1" />
              </div>
            </div>
          </div>
          <div className="ml-[45px] mt-[53px] relative">
            <img src={Image2} alt="Image2" width={130} height={130} />
            <div className="absolute bg-grey-scale-9 w-[110px] h-[110px] rounded-[60px] top-[31%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              <img src={Image4} alt="daulet" className="rounded-full" />
            </div>
            <div className="absolute bg-green w-[50px] h-[50px] rounded-[25px] bottom-[50px] left-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agrios;
