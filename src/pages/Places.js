import React from "react";
import "tw-elements";
import PlacesCard from "../components/PlacesCard";
import PlacesSlider from "../components/PlacesSlider";
import places from "../Data/places.data";
import kosovo from "../Data/kosovo.data";
import montenegro from "../Data/montenegro.data";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Prevalla from "../assets/kosovo-img/prevalla-natyra-kosova.jpg";
import Montenegro from "../assets/montenegro-img/anton-matis-btrBrLNldMk-unsplash.jpg";

const createPlace = (place) => {
  return (
    <PlacesCard
      key={place.id}
      img={place.image}
      name={place.name}
      title={place.title}
    />
  );
};

const countries = [
  {
    country: "Kosovo",
    image: Prevalla,
    places: kosovo,
  },
  {
    country: "Montenegro",
    image: Montenegro,
    places: montenegro,
  },
];

const filters = [
  {
    name: "Mountains",
    href: "#",
  },
  {
    name: "Cities",
    href: "#",
  },
  {
    name: "Lakes",
    href: "#",
  },
  {
    name: "Beaches",
    href: "#",
  },
  {
    name: "Parks",
    href: "#",
  },
  {
    name: "Waterfalls",
    href: "#",
  },
];

const getFilters = (filters) => {
  return filters.map((x) => (
    <div className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md">
      <p className="text-2xl">
        <a href={x.href}>{x.name}</a>
      </p>
    </div>
  ));
};

const contryToVisit = (countries) => {
  return countries.map((x) => (
    <>
      <section className="max-w-7xl h-screen my-auto mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-center items-center sm:py-5">
        <div className="max-w-sm mx-10 sm:py-5">
          <h1 className="text-3xl py-2">BEST PLACES IN {x.country}</h1>
          <h3 className="text-gray-500">Get started today!</h3>
          <p className="text-lg leading-normal py-5">
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
        <div className="max-w-md flex flex-wrap">
          <img src={x.image} alt={x.country} className="rounded-xl" />
        </div>
      </section>
      <section>
        <h1 className="text-3xl text-center py-5">
          Some of the best places to visit!
        </h1>
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4 sm:py-5">
          {x.places.slice(1, 6).map((y) => createPlace(y))}
        </div>
      </section>
    </>
  ));
};

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
      <section className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row  justify-around ">
        {getFilters(filters)}
      </section>
      <div className="border bg-gray-400"></div>

      <section>{contryToVisit(countries)}</section>

      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 md:py-8">
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
            {places.map((x) => createPlace(x))}
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
