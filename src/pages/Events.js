import React from "react";

import EventHero from "../components/EventHero";
import EventSection from "../components/EventSection";
import EventTitle from "../components/EventTitle";
import EventFilms from "../components/EventFilms";
import EventPart from "../components/EventPart";
import Posts from "../redux/features/posts/Posts";
import MostLikedPosts from "../redux/features/posts/MostLikedPosts";
import ArtandMovies from "../redux/features/posts/ArtandMovies";
import FoodnCulture from "../redux/features/posts/FoodnCulture";

function Events() {
  return (
    <div>
      <EventHero />
      <div className="bg-slate-50">
        <EventTitle TitleEvent="Best Beach Events" />
      </div>
      {/* <Posts /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  bg-gradient-to-b from-slate-50 to-gray-300 pt-10 ">
        <MostLikedPosts />
      </div>

      <div className="h-40 bg-gray-300"></div>

      <EventSection />
      <div className="bg-gray-300 pt-20">
        <EventTitle TitleEvent="Best Festivals" />
      </div>

      {/* posts from redux toolkit */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-gray-300 pt-10 ">
        <Posts />
      </div>
      <div className="h-20 bg-slate-50"></div>

      <EventFilms />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  bg-slate-50 ">
        <ArtandMovies />
      </div>

      <EventPart />
      <EventTitle TitleEvent="Food and Culture Events" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  bg-slate-50 ">
        <FoodnCulture />
      </div>

      <div className="h-40 bg-slate-50"></div>
    </div>

    // import ReviewSlider from "../components/ReviewSlider";
    // import { data } from "../Data/EventsReviewData";

    // function Events() {
    // return (
    // <>
    // <ReviewSlider reviews={data} />
    // </>

    // <ReviewSlider reviews={data} />
  );
}

export default Events;
