import React from "react";
import Footer from "./components/Footer";
import Hero from "../Homepage/Hero";
import "./index.css";
import Navbar from "./componets/Navbar";
import About from "./About/About";
import Video from "./About/Video";
import Review from "./About/Review";
import Farmer from "./About/Farmer";

const App = () => {
  return (
    <div>
      <Hero />
      <Footer />
      <Navbar />
      <div className="mt-[460px]">
        <About />
        <Video />
        <Review />
        <Farmer />
      </div>
    </div>
  );
};

export default App;
