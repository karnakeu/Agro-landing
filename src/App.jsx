import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      

      {/* Навбар */}
      <Navbar />

      {/* Маршруты */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default App;
