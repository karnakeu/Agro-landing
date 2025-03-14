import React from "react";
import About from "../About/About";
import Video from "../About/Video";
import Review from "../About/Review";
import Farmer from "../About/Farmer";


const AboutPage = () => {
  return (
    <div className="mt-[400px]">
      <About />
      <Video />
      <Review />
      <Farmer />
      
    </div>
  );
};

export default AboutPage;
