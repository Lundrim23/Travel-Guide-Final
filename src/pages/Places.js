import React from "react";
import "tw-elements";
import PlacesCard from "../components/PlacesCard";
import PlacesSlider from "../components/PlacesSlider";
import places from "../Data/places.data";
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

      <section></section>

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
