import React from "react";
import check from "../../src/assets-amelie/check.svg";
import picture from "../../src/assets-amelie/picture.png";


const About = () => {
    return (
        <div className="flex grid-cols-1 w-[1200px] h-[610px] items-center mx-[160px] mt-[60px]">
            <div>
                <img 
                    src={picture} 
                    alt="women"
                    className="w-[700px] h-[600px]"
                />
            </div>
            <div className="w-[600px] h-[600px]">
                <div className="w-[570px] h-[115px]">
                    <p className="font-covered orange text-2xl">Get to Know Us</p>
                    <h1 className=" font-manrope-extrabold text-5xl">The Best Agriculture Market</h1>
                </div>
                <div className="w-[550px] h-[60px] font-manrope-bold green mt-[40px] text-xl">There are many variations of passa of lorem available, but the majority have suffered alteration.</div>
                <div className="grey-scale-3 font-manrope-medium w-[526px] h-[90px] text-lg mt-[40px]">There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.</div>
                <div className="space-y-4 mt-[30px]">
                    <div className="flex items-center space-x-2">
                        <img src={check} alt="Check" className="w-5 h-5" />
                        <span className="font-manrope-bold black ">Suspe ndisse suscipit sagittis leo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src={check}  alt="Check" className="w-5 h-5" />
                        <span className="font-manrope-bold black ">Entum estibulum dignissim posuere</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src={check}  alt="Check" className="w-5 h-5" />
                        <span className="font-manrope-bold black ">Lorem Ipsum on the tend to repeat</span>
                    </div>
                </div>
                <div className="mt-[50px]">
                    <button className="bg-green w-[196px] h-[60px] rounded-lg white font-manrope-bold text-sm">Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default About

