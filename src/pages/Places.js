import React from "react";
import "tw-elements";
import PlacesSlider from "../components/PlacesSlider";

function Places() {
  return (
    <>
      <PlacesSlider />
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around ">
        <div className="container w-[200px] m-4 p-5 text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md">
          <p className="text-2xl">
            <a href="#">Mountains</a>
          </p>
        </div>
        <div className="container w-[200px] m-4 p-5 text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0">
          <p className="text-2xl">
            <a href="#">Cities</a>
          </p>
        </div>
        <div className="container w-[200px] m-4 p-5 text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0">
          <p className="text-2xl">
            <a href="#">Lakes</a>
          </p>
        </div>
        <div className="container w-[200px] m-4 p-5 text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0">
          <p className="text-2xl">
            <a href="#">Waterfalls</a>
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between"></section>
    </>
  );
}

export default Places;
