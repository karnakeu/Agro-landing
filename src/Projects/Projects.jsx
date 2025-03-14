import React from "react";

import a1 from "../../src/assets-amelie/a1.png";
import a2 from "../../src/assets-amelie/a2.png";
import a3 from "../../src/assets-amelie/a3.png";
import a4 from "../../src/assets-amelie/a4.png";
import a5 from "../../src/assets-amelie/a5.png";
import a6 from "../../src/assets-amelie/a6.png";

const Projects = () => {
    const items = [
        { title: "Agriculture Farming", image: a1 },
        { title: "Ecological Farming", image: a2 },
        { title: "Organic Solutions", image: a3 },
        { title: "Fresh Products", image: a4 },
        { title: "Healthy Food", image: a5 },
        { title: "Easy Harvesting", image: a6 },
      ];

    return (
        <div className="grid grid-cols-3 gap-4 p-4 w-[1170px] mt-[450px] mx-[120px]">
            {items.map((item, index) => (
                <div
                key={index}
                className={`relative w-[370px] h-[570px] bg-cover bg-center rounded-xl shadow-lg`}
                style={{ backgroundImage: `url(${item.image})` }}
                >
                {item.title && (
                    <div className="absolute w-[168px] bottom-4 left-4  bg-opacity-50 white text-3xl  text-left font-manrope-extrabold p-2 rounded">
                    {item.title}
                    </div>
                )}
                </div>
            ))}
        </div>
    );
};


export default Projects