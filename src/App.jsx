import React from "react";
import Footer from "./componets/Footer";
import Hero from "./Homepage/Hero";
import "./index.css";
import Navbar from "./componets/Navbar";
import About from "./About/About";
import Video from "./About/Video";
import Review from "./About/Review";
import Farmer from "./About/Farmer";
<<<<<<< HEAD
import Shop from "./Shop/Shop";
=======
import OrganicProduct from "./Homepage/OrganicProduct";
import Offer from "./Homepage/Offer";
import Explore from "./Homepage/Explore";
import Agrios from "./Homepage/Agrios";
import Market from "./Homepage/Market";
import NewsArticles from "./Homepage/NewsArticles";
import Frame from "./Service/Frame";
import Future from "./Service/Future";
import Garden from "./Service/Garden";
import Fon from "./Service/Fon";
>>>>>>> 955f270cbe5af7bec0aaab85fce7d8d80f52ebc3

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OrganicProduct />
      <Offer />
      <Explore />
      <Agrios />
      <Market />
      <NewsArticles />
      <Footer />

      <div className="mt-[460px]">
        <About />
        <Video />
        <Review />
        <Farmer />
<<<<<<< HEAD
        <Shop />
=======

>>>>>>> 955f270cbe5af7bec0aaab85fce7d8d80f52ebc3
        <Footer />
      </div>
      <Frame />
      <Future />
      <Garden />
      <Fon />

    </div>
  );
};

export default App;
