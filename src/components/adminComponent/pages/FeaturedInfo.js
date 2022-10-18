import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesIn30Days } from "../../../redux/features/countries/countriesSlice";
import { countPlaces30Days } from "../../../redux/features/places/placesSlice";
import { eventsInlatest30Day } from "../../../redux/features/posts/postsSlice";
import { ArrowDown, ArrowUp } from "../../AllSvgs";

export default function FeaturedInfo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesIn30Days({}));
    dispatch(countPlaces30Days({}));
    dispatch(eventsInlatest30Day({}));
  }, [dispatch]);

  const countries = useSelector((state) => state.countries.list);
  const places = useSelector((state) => state.places.countPlaces);
  const events = useSelector((state) => state.posts.eventcount);

  return (
    <div className="w-full flex justify-between ">
      <div className="flex-1 my-0 mx-5 p-7 rounded-xl cursor-pointer dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="text-xl dark:text-gray-50">New Events Added</span>
        <div className="flex mx-0 my-3 items-center">
          <span className="flex text-3xl font-bold dark:text-gray-200 transition">
            {events.data1}
          </span>
          <span className="flex items-center ml-4 dark:text-gray-300 transition">
            {events.data2}
            {events.data1 > countries.data2 ? <ArrowUp /> : <ArrowDown />}
          </span>
        </div>
        <span className="text-sm text-gray-400 dark:text-gray-300 transition">
          Compared to last 30 days
        </span>
      </div>

      <div className="flex-1 my-0 mx-5 p-7 rounded-xl cursor-pointer dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="text-xl dark:text-gray-50">New Places Added</span>
        <div className="flex mx-0 my-3 items-center">
          <span className="flex text-3xl font-bold dark:text-gray-200 transition">
            {places.data1}
          </span>
          <span className="flex items-center ml-4 dark:text-gray-300 transition">
            {places.data1}
            {places.data1 > places.data2 ? <ArrowUp /> : <ArrowDown />}
          </span>
        </div>
        <span className="text-sm text-gray-400 dark:text-gray-300 transition">
          Compared to last 30 days
        </span>
      </div>

      <div className="flex-1 my-0 mx-5 p-7 rounded-xl cursor-pointer dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="text-xl dark:text-gray-50">
          New Countries Added
        </span>
        <div className="flex mx-0 my-3 items-center">
          <span className="flex text-3xl font-bold dark:text-gray-200 transition">
            {countries.data1}
          </span>
          <span className="flex items-center ml-4 dark:text-gray-300 transition">
            {countries.data2}
            {countries.data1 > countries.data2 ? <ArrowUp /> : <ArrowDown />}
          </span>
        </div>
        <span className="text-sm text-gray-400 dark:text-gray-300 transition">
          Compared to last 30 days
        </span>
      </div>
    </div>
  );
}
