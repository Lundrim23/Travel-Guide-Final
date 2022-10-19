import React, { useState } from "react";
import EventHero from "../components/EventHero";
import EventSection from "../components/EventSection";
import EventTitle from "../components/EventTitle";
import EventFilms from "../components/EventFilms";
import EventPart from "../components/EventPart";
import Posts from "../redux/features/posts/Posts";
import MostLikedPosts from "../redux/features/posts/MostLikedPosts";
import ArtandMovies from "../redux/features/posts/ArtandMovies";
import FoodnCulture from "../redux/features/posts/FoodnCulture";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { like, unlike } from "../utils/fetch";
import { useEffect } from "react";
import { beachEvent } from "../redux/features/posts/postsSlice";

function Events() {
  const [IdPostit, setIdPostit] = useState();

  //console.log("IdPostit", IdPostit);

  const navigate = useNavigate();

  const openprofile = () => {
    navigate("/events/fullpost/", {
      state: {
        idpost: IdPostit,
      },
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(beachEvent());
  }, [dispatch]);

  //this method likes an event later will change in redux
  const likeEvent = async (id) => {
    try {
      like(id).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //this method unlikes an event
  const unlikeEvenet = (id) => {
    try {
      unlike(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <EventHero />
      <div className="bg-slate-50">
        <EventTitle TitleEvent="Best Beach Events" />
      </div>
      <Outlet />
      {/* <Posts /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  bg-gradient-to-b from-slate-50 to-gray-300 pt-10 ">
        <MostLikedPosts
          openprofile={openprofile}
          setIdPostit={setIdPostit}
          likeEvent={likeEvent}
          unlikeEvenet={unlikeEvenet}
        />
      </div>

      <div className="h-40 bg-gray-300"></div>

      <EventSection />
      <div className="bg-gray-300 pt-20">
        <EventTitle TitleEvent="Best Festivals" />
      </div>

      {/* posts from redux toolkit */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-gradient-to-b from-gray-300 to-slate-50 pt-10 ">
        <Posts
          openprofile={openprofile}
          setIdPostit={setIdPostit}
          likeEvent={likeEvent}
          unlikeEvenet={unlikeEvenet}
        />
      </div>
   
      <div className="h-20 bg-slate-50"></div>

      <EventFilms />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  bg-slate-50 ">
        <ArtandMovies
          openprofile={openprofile}
          setIdPostit={setIdPostit}
          likeEvent={likeEvent}
          unlikeEvenet={unlikeEvenet}
        />
      </div>

      <EventPart />
      <EventTitle TitleEvent="Food and Culture Events" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  bg-slate-50 ">
        <FoodnCulture
          openprofile={openprofile}
          setIdPostit={setIdPostit}
          likeEvent={likeEvent}
          unlikeEvenet={unlikeEvenet}
        />
      </div>

      <div className="h-40 bg-slate-50"></div>
    </div>
  );
}

export default Events;
