import React from "react";
import "tw-elements";
import PlacesCard from "../components/PlacesCard";
import PlacesSlider from "../components/PlacesSlider";
import places from "../Data/places.data";
import kosovo from "../Data/kosovo.data";
import montenegro from "../Data/montenegro.data";
import ReviewSlider from "../components/ReviewSlider";
import { data } from "../Data/PlacesReviewData";
import PlacesAlbania from "../components/PlacesAlbania";
import PlacesCards from "../components/PlacesCards";
import PlacesMacedonia from "../components/PlacesMacedonia";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Prevalla from "../assets/kosovo-img/prevalla-natyra-kosova.jpg";
import Montenegro from "../assets/montenegro-img/anton-matis-btrBrLNldMk-unsplash.jpg";
import AllPlaces from "../redux/features/places/AllPlaces.js";
import PlacesCardss from "../components/PlacesCardss";
import PlacesMontenegro from "../components/PlacesMontenegro";
import { useState } from "react";

const createPlace = (place) => {
  return (
    <PlacesCard
    // key={place.id}
    // img={place.image}
    // name={place.name}
    // title={place.title}
    />
  );
};

const countries = [
  {
    id: 1,
    country: "Kosovo",
    image: Prevalla,
    places: kosovo,
  },
];

const secondCountry = [
  {
    id: 1,
    country: "Montenegro",
    image: Montenegro,
    places: montenegro,
  },
];

const filters = [
  {
    id: 1,
    name: "Mountains",
    href: "#",
  },
  {
    id: 2,
    name: "Cities",
    href: "#",
  },
  {
    id: 3,
    name: "Lakes",
    href: "#",
  },
  {
    id: 4,
    name: "Beaches",
    href: "#",
  },
  {
    id: 5,
    name: "Parks",
    href: "#",
  },
  {
    id: 6,
    name: "Waterfalls",
    href: "#",
  },
];

const getFilters = (filters) => {
  return filters.map((x) => (
    <div
      key={x.id}
      className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
    >
      <p className="text-2xl">
        <a href={x.href}>{x.name}</a>
      </p>
    </div>
  ));
};

const contryToVisit = (countries) => {
  return countries.map((x) => (
    <>
      <section
        key={x.id}
        className="max-w-7xl my-auto mx-auto pt-8 px-4 sm:mx-auto sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-center items-center sm:py-5"
      >
        <div className="max-w-sm mx-10 sm:py-5">
          <h1 className="text-4xl text-gray-800 font-bold md:text-5xl py-2">
            BEST PLACES IN <span className="text-emerald-700">{x.country}</span>
          </h1>
          <h3 className="text-gray-500">Get started today!</h3>
          <p className="text-lg leading-normal py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            sunt reiciendis et veritatis non perferendis eos neque, nemo illum
            perspiciatis!
          </p>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Read More
          </button>
        </div>
        <div className="max-w-md flex flex-wrap py-5">
          <img src={x.image} alt={x.country} className="rounded-xl" />
        </div>
      </section>
      <section>
        <h1 className="text-3xl text-center py-5 font-medium">
          Some of the best places to visit!
        </h1>
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4 sm:py-5 ">
          {/* best places in kosovo */}
          <AllPlaces 
            terrain="Monuments & Statues"
          />
        </div>
        {/* <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4 sm:py-5 ">
          {x.places.slice(0, 6).map((y) => createPlace(y))}
        </div> */}
      </section>
    </>
  ));
};

const secondCountryToVisit = (secondCountry) => {
  return secondCountry.map((x) => (
    <>
      <section
        key={x.id}
        className="max-w-7xl my-auto mx-auto pt-8 px-4 sm:mx-auto sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-center items-center sm:py-5"
      >
        <div className="max-w-sm mx-10 sm:py-5">
          <h1 className="text-4xl text-gray-800 font-bold md:text-5xl py-2">
            BEST PLACES IN <span className="text-emerald-700">{x.country}</span>
          </h1>
          <h3 className="text-gray-500">Get started today!</h3>
          <p className="text-lg leading-normal py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            sunt reiciendis et veritatis non perferendis eos neque, nemo illum
            perspiciatis!
          </p>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Read More
          </button>
        </div>
        <div className="max-w-md flex flex-wrap py-5">
          <img src={x.image} alt={x.country} className="rounded-xl" />
        </div>
      </section>
      <section>
        <h1 className="text-3xl text-center py-5 font-medium">
          Some of the best places to visit!
        </h1>
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4 sm:py-5 ">
          {/* best places in kosovo */}
          <PlacesMontenegro />
        </div>
        {/* <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4 sm:py-5 ">
          {x.places.slice(0, 6).map((y) => createPlace(y))}
        </div> */}
      </section>
    </>
  ));
};

function Places() {
  const [showTerrain, setShowTerrain] = useState("");

  console.log("Show terrain", showTerrain);


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
      <section>{secondCountryToVisit(secondCountry)}</section>
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 md:py-8">
        <h1 className="text-4xl mx-10 font-medium">Best places to visit...</h1>
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

      <PlacesAlbania />
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8">
        <PlacesCards />
      </div>

      <PlacesMacedonia />
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8">
        <PlacesCardss />
      </div>
      <ReviewSlider reviews={data} />
    </>
  );
}

export default Places;
