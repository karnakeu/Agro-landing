import React from "react";
import "./index.css";
import Navbar from "./componets/Navbar";
import About from "./About/About";
import Video from "./About/Video";
import Review from "./About/Review";
import Farmer from "./About/Farmer";
import Frame from "./Service/Frame";
import Future from "./Service/Future";
import Garden from "./Service/Garden";
import Fon from "./Service/Fon";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[460px]">
        <About />
        <Video />
        <Review />
        <Farmer />
      </div>
      <Frame />
      <Future />
      <Garden />
      <Fon />
    </div>
  );
};

export default App;
