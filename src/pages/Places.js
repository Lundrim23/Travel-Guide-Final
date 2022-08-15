import React from "react";
import ReviewSlider from "../components/ReviewSlider";
import { data } from "../Data/PlacesReviewData";
import PlacesAlbania from "../components/PlacesAlbania";

function Places() {
  return (
    <>
      <ReviewSlider reviews={data} />
      <PlacesAlbania />
    </>
  );
}

export default Places;
