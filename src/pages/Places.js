import React from "react";
import "tw-elements";
import PlacesCard from "../components/PlacesCard";
import PlacesSlider from "../components/PlacesSlider";
import places from "../Data/places.data";
import ReviewSlider from "../components/ReviewSlider";
import { data } from "../Data/PlacesReviewData";
import PlacesAlbania from "../components/PlacesAlbania";
import PlacesCards from "../components/PlacesCards";
import PlacesMacedonia from "../components/PlacesMacedonia";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import AllPlaces from "../redux/features/places/AllPlaces.js";
import PlacesCardss from "../components/PlacesCardss";
import PlacesMontenegro from "../components/PlacesMontenegro";
import PlaceFilters from "../components/PlaceFilters";
import { useState } from "react";
import BestPlacesInKosovo from "../components/BestPlacesInKosovo";
import BestPlacesInMontenegro from "../components/BestPlacesInMontenegro";

const createPlace = (place) => {
  return (
    <PlacesCard
    />
  );
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

  const [value, setValue] = useState("");

  console.log("vlera", value);

  return (
    <>
      <PlacesSlider />
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around ">
        <PlaceFilters vlera={setValue} />
      </section>
      <div className="border bg-gray-400"></div>

      <section>
        <BestPlacesInKosovo />
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4 sm:py-5 ">
          <AllPlaces value={value} />
        </div>
      </section>

      <section>
        <BestPlacesInMontenegro />
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4 sm:py-5 ">
          <PlacesMontenegro 
            value={value}
          />
        </div>
      </section>

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
        <PlacesCards value={value} />
      </div>

      <PlacesMacedonia />
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8">
        <PlacesCardss value={value} />
      </div>
      <ReviewSlider reviews={data} />
    </>
  );
}

export default Places;
