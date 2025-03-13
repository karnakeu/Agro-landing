import React from "react";
import Footer from "./componets/Footer";
import Hero from "./Homepage/Hero";
import "./index.css";
import Navbar from "./componets/Navbar";
import About from "./About/About";
import Video from "./About/Video";
import Review from "./About/Review";
import Farmer from "./About/Farmer";
import Shop from "./Shop/Shop";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mt-[460px]">
        <About />
        <Video />
        <Review />
        <Farmer />
        <Shop />
        <Footer />
      </div>
    </div>
  );
};

export default App;
