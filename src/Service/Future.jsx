import React from "react";
import video from "../../src/assets-amelie/video.svg";
import frame1 from "../../src/assets-amelie/frame1.png";
import service1 from "../../src/assets-amelie/service1.png";
import service2 from "../../src/assets-amelie/service2.png";
import service3 from "../../src/assets-amelie/service3.png";

const Future = () => {
    const cards = [
        {
          image: service1 ,
          title: "Quality Standards",
        },
        {
          image: service2 ,
          title: "Organic Farming",
        },
        {
          image: service3 ,
          title: "Agriculture Products",
        },
      ];
    return (
        <div>
           <div className="relative w-full h-[616px] flex items-center" style={{backgroundImage: `url(${frame1})`}}>
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="relative z-10  flex justify-between">
                    <h1 className="text-white text-7xl text-left font-manrope-extrabold leading-tight px-6  w-[600px] h-[336px] ">
                        Agriculture Matters to the Future of Development
                    </h1>
                    
                    <div className=" absolute flex mt-[130px]  cursor-pointer ">
                        <img src={video} alt="Play Video" className="w-[100px] h-[100px] cursor-pointer ml-[1200px]" />
                    </div>
                    
                </div>
                <span className="orange text-2xl  z-10 font-covered  h-[30px] mt-[300px] ml-[450px]">
                        Watch our video
                </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 -mt-[70px] h-[360px]">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative w-80 bg-white rounded-2xl overflow-hidden"
                    >
                    
                    <div className="relative">
                        <img
                        src={card.image}
                        alt={card.title}
                        className="h-[288px] w-[370px] object-cover rounded-b-lg"
                        />
                       
                        <div className="absolute top-0  transform  w-[370px] h-[70px] bg-white rounded-top-lg  shadow-lg">
                        <h3 className="text-lg font-manrope-extrabold px-20 py-4">{card.title}</h3>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Future