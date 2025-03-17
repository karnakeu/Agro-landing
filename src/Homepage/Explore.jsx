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
      <div className="flex justify-center gap-4 mt-12 px-4">
        {[Image1, Image2, Image3, Image4].map((image, index) => (
          <div
            key={index}
            className="rounded-[10px] shadow-lg bg-cover bg-center flex items-end p-6 transition-all duration-300"
            style={{
              backgroundImage: `url(${image})`,
              width: "22vw",
              height: "35vw",
              minWidth: "180px",
              minHeight: "280px",
              maxWidth: "360px",
              maxHeight: "560px",
            }}
          >
            <div className="text-white font-manrope-extrabold text-[24px] md:text-[28px] lg:text-[30px]">
              {index === 0 && "Easy Harvesting"}
              {index === 1 && "Agriculture Farming"}
              {index === 2 && "Ecological Farming"}
              {index === 3 && "Organic Solutions"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
