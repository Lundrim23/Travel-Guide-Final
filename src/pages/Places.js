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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AllPlaces from "../redux/features/places/AllPlaces.js";
import PlacesCardss from "../components/PlacesCardss";
import PlacesMontenegro from "../components/PlacesMontenegro";
import PlaceFilters from "../components/PlaceFilters";
import { useState } from "react";
import BestPlacesInKosovo from "../components/BestPlacesInKosovo";
import BestPlacesInMontenegro from "../components/BestPlacesInMontenegro";
import { useNavigate } from "react-router-dom";
import { likePlace, unlikePlace } from "../utils/fetch";

const createPlace = (place) => {
  return <PlacesCard />;
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

  const [IdPostit, setIdPostit] = useState();

  const navigate = useNavigate();

  const openprofile = () => {
    navigate("/places/fullposti/", {
      state: {
        idpost: IdPostit,
      },
    });
  };

  const LikePlace = async (id) => {
    try {
      likePlace(id).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const UnlikePlace = async (id) => {
    try {
      unlikePlace(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PlacesSlider />
      <div className="max-w-7xl mx-auto py-3  sm:px-6 sm:py-5 lg:px-8 flex flex-row md:flex-wrap lg:flex-wrap overflow-x-auto scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        <PlaceFilters vlera={setValue} />
      </div>
      <div className="border bg-gray-400"></div>

      <section>
        <BestPlacesInKosovo />
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4 sm:py-5 ">
          <AllPlaces
            value={value}
            openprofile={openprofile}
            setIdPostit={setIdPostit}
            LikePlace={LikePlace}
            UnlikePlace={UnlikePlace}
          />
        </div>
      </section>

      <section>
        <BestPlacesInMontenegro />
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4 sm:py-5 ">
          <PlacesMontenegro
            value={value}
            openprofile={openprofile}
            setIdPostit={setIdPostit}
            LikePlace={LikePlace}
            UnlikePlace={UnlikePlace}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 md:py-8">
        <h1 className="text-4xl mx-10 font-medium">Best places to visit...</h1>
        <div className="slider max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex relative items-center ">
          <ArrowBackIosIcon
            className="px-2"
            onClick={slideLeft}
            sx={{ fontSize: 40 }}
          />
          <div
            id="slider"
            className="max-w-7xl mx-auto py-10  flex flex-row  justify-between overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {places.map((x) => createPlace(x))}
          </div>
          <ArrowForwardIosIcon
            className="px-2"
            onClick={slideRight}
            sx={{ fontSize: 40 }}
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4 sm:py-5 ">
      <PlacesAlbania />
        <PlacesCards
          value={value}
          openprofile={openprofile}
          setIdPostit={setIdPostit}
          LikePlace={LikePlace}
          UnlikePlace={UnlikePlace}
        />
      </div>

      <PlacesMacedonia />
      <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-around gap-4 sm:py-5 ">
        <PlacesCardss
          value={value}
          openprofile={openprofile}
          setIdPostit={setIdPostit}
          LikePlace={LikePlace}
          UnlikePlace={UnlikePlace}
        />
      </div>
      <ReviewSlider reviews={data} />
    </>
  );
}

export default Places;
