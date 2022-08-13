import React from "react";
import beachVid from "../assets/video/beachVid.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video className="w-full h-full object-cover" src={beachVid} autoPlay loop muted/>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <p className="md:text-3xl sm:text-2xl text-xl text-[#6366F1] font-bold p-2">TRAVELERS PARADISE</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">EXPLORE BALKAN</h1>
        <p className="md:text-3xl sm:text-2xl text-xl font-bold py-2">Fast and valuable information for tourists.</p>
        <p className='md:text-2xl text-xl font-bold'>Start the journey with us !</p> 
        <button className='bg-[#6366F1] w-[200px] rounded-md border border-white font-medium my-8 mx-auto py-3'>Our Places</button>               
      </div>
    </div>
  );
};

export default Hero;
