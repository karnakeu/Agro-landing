import React from "react";
import bgImage from "/src/assets/hero/1.svg";
import Image1 from "/src/assets/hero/2.svg";
import Image2 from "/src/assets/hero/3.svg";
import Image3 from "/src/assets/hero/4.svg";
import Image4 from "/src/assets/hero/5.svg";
import Image5 from "/src/assets/hero/6.svg";

const features = [
  {
    title: "Feature 01",
    heading: "We're using a new technology",
    image: Image3,
  },
  {
    title: "Feature 02",
    heading: "Good in smart organic services",
    image: Image4,
  },
  {
    title: "Feature 03",
    heading: (
      <>
        Reforming <br /> in the systems
      </>
    ),
    image: Image5,
  },
];

const FeatureCard = ({ title, heading, image }) => (
  <div className="bg-white shadow-lg w-[400px] h-[270px] rounded-[10px] pt-[40px] text-center">
    <div className="orange font-covered text-[24px]">{title}</div>
    <div className="font-manrope-extrabold text-[24px] mt-[20px]">
      {heading}
    </div>
    <div className="flex justify-center mt-[10px]">
      <img src={image} alt={title} width={90} height={90} />
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="mt-[-20px] flex flex-col">
      <div
        className="w-full h-[830px] bg-cover bg-center flex flex-row relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container mx-auto px-4 h-full flex items-center ml-[210px] pt-[40px]">
          <div className="flex flex-col text-white">
            <div className="font-manrope-semibold text-[16px] uppercase mb-4">
              Welcome to agrios farming
            </div>
            <div className="font-covered text-[120px] leading-[1.1] mb-6">
              Agriculture <span className="text-[#eec044]">&</span> <br /> Eco
              Farming
            </div>
            <div className="font-manrope-semibold text-[18px] opacity-70 mb-8 max-w-[522px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
            <div className="flex items-center gap-4">
              <button className="font-manrope-bold text-white bg-green px-[50px] py-[14px] rounded-[10px]">
                Discover More
              </button>
              <img
                src={Image1}
                alt="Image1"
                width={115}
                height={53}
                className="ml-[20px]"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-[340px] right-[200px] flex flex-col gap-[10px]">
          <img
            src={Image2}
            alt="Image2"
            width={100}
            height={100}
            className="opacity-[30%]"
          />
          <img src={Image2} alt="Image2" width={100} height={100} />
        </div>
      </div>

      <div className="flex flex-row gap-[30px] mx-[300px] mt-[-55px] z-1">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            heading={feature.heading}
            image={feature.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
