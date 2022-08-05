import React from "react";
import HeroImage from "../assets/img/hero-bg.jpg";

const Hero = () => {
  return (
    <div className="bg-black bg-opacity-50 relative">
      <img
        src={HeroImage}
        className="hero-img w-full h-full object-cover absolute mix-blend-multiply"
        alt="hero"
      ></img>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl s pb-24 pt-24 m-0 text-white font-medium text-center relative">
        EXPLORE BALKAN
      </h1>
    </div>
  );
};

export default Hero;
