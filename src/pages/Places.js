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
      <PlacesCards PlacesLocation="Tirane, Albania" PlacesTitle="Albania" PlacesText="Test test test"/>
      <PlacesCards PlacesLocation="Tirane, Albania" PlacesTitle="Albania" PlacesText="Test test test"/>
      <PlacesCards  PlacesLocation="Tirane, Albania" PlacesTitle="Albania" PlacesText="Test test test"/>
      </div>

      <PlacesMacedonia />
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8">
      <PlacesCards PlacesLocation="Macedonia" PlacesTitle="Macedonia" PlacesText="Test test test"/>
      <PlacesCards PlacesLocation="Macedonia" PlacesTitle="Macedonia" PlacesText="Test test test"/>
      <PlacesCards PlacesLocation="Maedonia" PlacesTitle="Macedonia" PlacesText="Test test test"/>
      </div>
    </>
  );
}

export default Places;
