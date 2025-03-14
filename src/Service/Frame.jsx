import React from "react";
import logo1 from "../../src/assets-amelie/logo1.png";
import partner1 from "../../src/assets-amelie/partner1.svg";
import partner2 from "../../src/assets-amelie/partner2.svg";
import partner3 from "../../src/assets-amelie/partner3.svg";
import partner4 from "../../src/assets-amelie/partner4.svg";
import partner5 from "../../src/assets-amelie/partner5.svg";
import l1 from "../../src/assets-amelie/1.png";
import l2 from "../../src/assets-amelie/2.png";
import l3 from "../../src/assets-amelie/3.png";
import l4 from "../../src/assets-amelie/4.png";
import pic1 from "../../src/assets-amelie/pic1.svg";
import pic2 from "../../src/assets-amelie/pic2.svg";
import pic3 from "../../src/assets-amelie/pic3.svg";
import pic4 from "../../src/assets-amelie/pic4.svg";


const Frame  = () => {  
    return (
        <div>
            <div className="flex flex-row justify-center gap-[30px] mt-[400px]">
                <div
                    className="w-[260px] h-[420px] rounded-[10px] relative"
                    style={{ backgroundImage: `url(${l1})` }}
                >
                <div className="flex flex-col items-center justify-center text-center mt-[240px]">
                    <div className="bg-light-green w-[70px] h-[70px] rounded-[10px] mb-[-40px] z-1 flex items-center justify-center">
                    <img src={pic1} alt="Image5" className="w-[50px] h-[50px]" />
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
                    style={{ backgroundImage: `url(${l2})` }}
                >
                <div className="flex flex-col items-center justify-center text-center mt-[240px]">
                    <div className="bg-light-green w-[70px] h-[70px] rounded-[10px] mb-[-40px] z-1 flex items-center justify-center">
                    <img src={pic2} alt="Image6" className="w-[50px] h-[50px]" />
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
                    style={{ backgroundImage: `url(${ l3})` }}
                >
                <div className="flex flex-col items-center justify-center text-center mt-[240px]">
                    <div className="bg-light-green w-[70px] h-[70px] rounded-[10px] mb-[-40px] z-1 flex items-center justify-center">
                    <img src={pic3} alt="Image7" className="w-[50px] h-[50px]" />
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
                    style={{ backgroundImage: `url(${l4})` }}
                >
                <div className="flex flex-col items-center justify-center text-center mt-[240px]">
                    <div className="bg-light-green w-[70px] h-[70px] rounded-[10px] mb-[-40px] z-1 flex items-center justify-center">
                    <img src={pic4} alt="Image8" className="w-[50px] h-[50px]" />
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
            <div className="w-full h-[235px] mt-[200px]" style={{ backgroundImage: `url(${logo1})` }}>
                <div className="flex justify-between items-center mt-[80px]">
                    <img src={partner1} alt="1" className="mt-[80px]" />
                    <img src={partner2} alt="2" className="mt-[80px]" />
                    <img src={partner3} alt="3" className="mt-[80px]" />
                    <img src={partner4} alt="4" className="mt-[80px]" />
                    <img src={partner5} alt="5" className="mt-[80px]" />
                </div>
            </div>
        </div>
    );
};

export default Frame