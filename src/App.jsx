import React from "react";
import Footer from "./components/Homepage/Footer";
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
<<<<<<< HEAD
=======
      <Navbar />
      <div className="mt-[460px]">
        <About />
        <Video />
        <Review />
        <Farmer />
      </div>
>>>>>>> 33467ca8fa3fa022e9e1138913ddb16da4132082
    </div>
  );
};

export default App;
