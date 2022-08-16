import React from "react";
import ReviewSlider from "../components/ReviewSlider";
import { data } from "../Data/PlacesReviewData";
import PlacesAlbania from "../components/PlacesAlbania";
import PlacesCards from "../components/PlacesCards";
import PlacesMacedonia from "../components/PlacesMacedonia";
function Places() {
  return (
    <>
      <ReviewSlider reviews={data} />
      <PlacesAlbania />

      <div className="max-w-[1640px] mx-auto p-4 py-12 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8">
      <PlacesCards />
      <PlacesCards />
      <PlacesCards />
      </div>

      <PlacesMacedonia />
    </>
  );
}

export default Places;
