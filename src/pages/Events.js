import React from "react";
import ReviewSlider from "../components/ReviewSlider";
import { data } from "../Data/EventsReviewData";

function Events() {
  return (
    <>
      <ReviewSlider reviews={data} />
    </>
  );
}

export default Events;
