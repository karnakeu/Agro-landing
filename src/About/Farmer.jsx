import React from "react";
import master from "../../src/assets-amelie/master.png";
import grapes from "../../src/assets-amelie/grapes.png";
import plan from "../../src/assets-amelie/plan.png";
import span from "../../src/assets-amelie/span.svg";


const Farmer = () => {
    const farmers = [
        {
          imgSrc: master,
          name: "Kevin Smith",
          role: "Farmer",
        },
        {
          imgSrc: grapes,
          name: "Jessica Brown",
          role: "Farmer",
        },
        {
          imgSrc: plan,
          name: "David Martin",
          role: "Farmer",
        },
      ];
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                    <p className=" w-[138px] h-[36px] font-covered orange text-2xl mt-[113px]">Team Members</p>
                    <h1 className=" w-[348px] h-[58px] font-manrope-extrabold text-4xl text-center">Meet Our Farmers</h1>
            </div>
            <div className="flex justify-center gap-6 p-8">
                {farmers.map((farmer, index) => (
                    <div
                        key={index}
                        className="relative w-[370px] h-[440px]  shadow-lg overflow-hidden"
                    >
                        
                            <img
                                src={farmer.imgSrc}
                                alt={farmer.name}
                                className="w-full h-full object-cover"
                            />

                            
                            <div className="absolute  w-[220px] h-[92px] bottom-0 ml-[20px] right-0 bg-white p-4 flex items-center rounded-l-lg">
                                
                                <div className=" w-10 h-10 flex items-center justify-center  -ml-[30px]">
                                    <img src={span} alt="icon" className="w-[50px] h-[50px]" />
                                </div>

                                
                                <div className="ml-[30px] text-right">
                                    <p className="font-manrope-extrabold">{farmer.name}</p>
                                    <p className="text-sm font-manrope-medium grey-scale-3">{farmer.role}</p>
                                </div>
                            </div>
                    </div>
                 ))}
            </div>
        </div>
    );
};

export default Farmer