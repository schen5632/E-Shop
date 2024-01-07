import React from "react";
import "./hero.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">Shop for the</p>
      <h3>Newest</h3>
      <h1>TECH</h1>
      <img
        src={
          "https://www.mcsteve.com/wp-content/uploads/2021/04/sony-xm4-1-600x600.png"
        }
        alt="headphones"
        className="hero-banner-image"
      />
    </div>
  );
};

export default HeroBanner;
