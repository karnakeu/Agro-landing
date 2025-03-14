import React from "react";
import icon1 from "../../src/assets-amelie/icon1.svg";
import icon2 from "../../src/assets-amelie/icon2.svg";
import icon3 from "../../src/assets-amelie/icon3.svg";
import men from "../../src/assets-amelie/men.png";
import circle1 from "../../src/assets-amelie/circle1.png";


const Garden = () => {
    return (
        <div className="flex grid-cols-1 ml-[400px] h-[630px] items-center mx-[100px] mt-[80px]">
                <div className="relative w-[500px] h-[595px]">
                    
                    <img 
                        src={circle1} 
                        alt="circle" 
                        className="absolute left-[-80px] top-[50px] w-[530px] h-[530px] z-0"
                    />
                    
                    
                    <img 
                        src={men} 
                        alt="men" 
                        className="relative w-[500px] h-[595px] z-10"
                    />
                </div>
                <div className="w-[600px] h-[600px] ml-[90px]">
                    <div className="w-[570px] h-[115px]">
                        <p className="font-covered orange text-2xl">What We Do</p>
                        <h1 className=" font-manrope-extrabold text-5xl">Healthy Food for Good Growth</h1>
                    </div>
                        
                    <div className="grey-scale-3 font-manrope-medium w-[526px] h-[90px] text-lg mt-[40px]">Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum estibu dignissim posuere cubilia durae. Leo sit met entum cubilia crae onec.</div>
                    <div className="grey-scale-3 font-manrope-medium w-[526px] h-[90px] text-lg mt-[40px]">Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat posuere dui. Pellentesque venenatis sem non lacus ac auctor.</div>
                    <div className="grid grid-cols-3 gap-4 justify-items-center">
                        <div className="bg-green w-[170px] h-[198px] rounded-lg flex flex-col items-center justify-center ml-[-20px]">
                            <img src={icon1} alt="1" className="py-7 px-10" />
                            <h1 className="text-white font-manrope-bold px-10">Harvesting</h1>
                        </div>
                        <div className="bg-light-green w-[170px] h-[198px] rounded-lg flex flex-col items-center justify-center">
                            <img src={icon2} alt="2" className="py-7 px-10" />
                            <h1 className="text-white font-manrope-bold px-10">Harvesting</h1>
                        </div>
                        <div className="bg-orange w-[170px] h-[198px] rounded-lg flex flex-col items-center justify-center">
                            <img src={icon3} alt="3" className="py-7 px-10" />
                            <h1 className="text-white font-manrope-bold px-10">Harvesting</h1>
                        </div>
                    </div>

                </div>
        </div>
    );
};



export default Garden