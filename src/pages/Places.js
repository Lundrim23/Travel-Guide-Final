import React from "react";
import "tw-elements";
import PlacesCard from "../components/PlacesCard";
import PlacesSlider from "../components/PlacesSlider";
import places from "../Data/places.data";
import kosovo from "../Data/kosovo.data";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function createPlaces(place) {
  return (
    <PlacesCard
      key={place.id}
      img={place.image}
      name={place.name}
      title={place.title}
    />
  );
}
function createKosovo(kosovo) {
  return (
    <PlacesCard
      key={kosovo.id}
      img={kosovo.image}
      name={kosovo.name}
      title={kosovo.title}
    />
  );
}

function Places() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <>
      <PlacesSlider />
      <section className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around ">
        <div className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md">
          <p className="text-2xl">
            <a href="#">Mountains</a>
          </p>
        </div>
        <div className="container w-[150px] m-4 p-2 text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0">
          <p className="text-2xl">
            <a href="#">Cities</a>
          </p>
        </div>
        <div className="container w-[150px] m-4 p-2 text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0">
          <p className="text-2xl">
            <a href="#">Lakes</a>
          </p>
        </div>
        <div className="container w-[150px] m-4 p-2 text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0">
          <p className="text-2xl">
            <a href="#">Beaches</a>
          </p>
        </div>
        <div className="container w-[150px] m-4 p-2 text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0">
          <p className="text-2xl">
            <a href="#">Parks</a>
          </p>
        </div>
        <div className="container w-[150px] m-4 p-2 text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0">
          <p className="text-2xl">
            <a href="#">Waterfalls</a>
          </p>
        </div>
      </section>
      <div className="border bg-gray-400"></div>

      <section className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4">
        <div className="max-w-xs">
          <h1 className="text-xl">BEST KOSOVO PLACES</h1>
          <h3>Get started today!</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            sunt reiciendis et veritatis non perferendis eos neque, nemo illum
            perspiciatis!
          </p>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Read More
          </button>
        </div>
        <div className="w-[300px]  bg-sky-400 h-[200px]"></div>
      </section>

      <div className="border bg-gray-400 mt-3"></div>
      <section className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4">
        {kosovo.map(createKosovo)}
      </section>

      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-4xl mx-10">Best places to visit...</h1>
        <div className="slider max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex relative items-center ">
          <BsFillArrowLeftCircleFill
            className="px-2"
            onClick={slideLeft}
            size={80}
          />
          <div
            id="slider"
            className="max-w-7xl mx-auto py-10  flex flex-row  justify-between overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {places.map(createPlaces)}
          </div>
          <BsFillArrowRightCircleFill
            className="px-2"
            onClick={slideRight}
            size={80}
          />
        </div>
      </section>
    </>
  );
}

export default Places;
