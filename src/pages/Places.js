import React from "react";
import ReviewSlider from "../components/ReviewSlider";
import { data } from "../Data/PlacesReviewData";

function Places() {
  return (
    <>
      <ReviewSlider reviews={data} />
    </>
  );
}

export default Places;
