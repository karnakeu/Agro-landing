import React from "react";
import Hero from "../Homepage/Hero";
import OrganicProduct from "../Homepage/OrganicProduct";
import Offer from "../Homepage/Offer";
import Explore from "../Homepage/Explore";
import Agrios from "../Homepage/Agrios";
import Market from "../Homepage/Market";
import NewsArticles from "../Homepage/NewsArticles";
import Footer from "../componets/Footer";

const Home = () => {
  return (
    <div>
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

export default Home;
