import React from "react";
import Footer from "./componets/Footer";
import Hero from "./Homepage/Hero";
import "./index.css";
import Navbar from "./componets/Navbar";
import About from "./About/About";
import Video from "./About/Video";
import Review from "./About/Review";
import Farmer from "./About/Farmer";
import OrganicProduct from "./Homepage/OrganicProduct";
import Offer from "./Homepage/Offer";
import Explore from "./Homepage/Explore";
import Agrios from "./Homepage/Agrios";
import Market from "./Homepage/Market";
import NewsArticles from "./Homepage/NewsArticles";

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
    </div>
  );
};

export default App;
