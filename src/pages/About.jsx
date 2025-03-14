import React from "react";
import About from "../About/About";
import Video from "../About/Video";
import Review from "../About/Review";
import Farmer from "../About/Farmer";
import Footer from "../componets/Footer";

const AboutPage = () => {
  return (
    <div>
      <About />
      <Video />
      <Review />
      <Farmer />
      <Footer />
    </div>
  );
};

export default AboutPage;
