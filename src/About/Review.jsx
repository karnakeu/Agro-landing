import React from "react";
import circle from "../../src/assets-amelie/circle.svg";
import avatarM from "../../src/assets-amelie/avatarM.png";
import avatarW from "../../src/assets-amelie/avatarW.png";
import fon from "../../src/assets-amelie/fon.png";


const Review = () => {

    const reviews = [
        {
          imgSrc: avatarM, 
          name: "Bonnie T.",
          text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomized.",
          role: "Customer",
        },
        {
          imgSrc: avatarW,
          name: "John Doe",
          text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomized.",
          role: "Customer",
        },
      ];
    return (
        <div className="w-full h-[662px]" style={{ backgroundImage: `url(${fon})`}} >
            <div className="flex flex-col items-center justify-center">
                    <p className=" w-[138px] h-[36px] font-covered orange text-2xl mt-[113px]">Our Testimonials</p>
                    <h1 className=" w-[348px] h-[58px] font-manrope-extrabold text-4xl text-center">What They Say</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6 p-8  h-[285px]">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-6 flex items-start space-x-4 max-w-md relative overflow-visible"
                    >
                        
                        <div className="relative -mt-2 -ml-10">
                            <img
                            src={review.imgSrc}
                            alt={review.name}
                            className="w-[440px] h-[184px] rounded-lg shadow-lg"
                            />
                            <div className="absolute bottom-0 right-0 w-8 h-8">
                            <img src={circle} alt="icon" className="w-full h-full" />
                            </div>
                        </div>

                        
                        <div className="relative z-10 w-full">
                            <p className="font-manrope-regular grey-scale-3 mb-4 text-base">{review.text}</p>
                            <p className="font-manrope-extrabold ml-[225px] ">{review.name}</p>
                            <p className="text-sm grey-scale-3 font-manrope-medium ml-[240px]">{review.role}</p>
                            <hr className="border-t-2 border-yellow-500 w-12 mt-0" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Review