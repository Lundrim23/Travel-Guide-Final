import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getMostLikedPlace } from "../redux/features/places/placesSlice";

function PlacesCard(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostLikedPlace({}));
  }, [dispatch]);

  const mostLikedPlace = useSelector((state) => state.places.mostLikedPlace);

  return (
    <>
      {mostLikedPlace.map((place) => {
        return (
          <div
            className="w-80 mx-3 my-5 rounded-2xl shadow-xl shadow-slate-300/60"
            key={place._id}
          >
            <img
              className="w-full h-[300px]  hover:opacity-75 object-cover rounded-t-2xl "
              src={place.placePhoto}
              alt={place.placeName}
            />
            <small className="text-emerald-800 text-xs ml-2">
              {place.placeLocation}
            </small>
            <h1 className="text-2xl px-2">{place.placeName}</h1>
            <h3 className="max-w-fit p-2 text-md tracking-tight font-light text-slate-400 leading-6 text-ellipsis overflow-hidden">
              {place.placeDetails}
            </h3>
            <button
              type="button"
              title="more about"
              className="w-[120px]order-first py-2 px-3 ml-2 mb-2 text-center rounded-xl bg-gray-200 transition hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
            >
              <span className="block text-gray-600 font-semibold">
                Read more
              </span>
            </button>
          </div>
        );
      })}
    </>
  );

  {
    /* <div
      className="w-80 mx-3 my-5 rounded-2xl shadow-xl shadow-slate-300/60"
      key={props.id}
    >
      <img
        className="w-full h-[300px]  hover:opacity-75 object-cover rounded-t-2xl "
        src={props.img}
        alt={props.name}
      />
      <h1 className="text-2xl pt-2 px-2">{props.name}</h1>
      <h3 className="max-w-fit p-2 text-md tracking-tight font-light text-slate-400 leading-6 text-ellipsis overflow-hidden">
        {props.title}
      </h3>
      <button
        type="button"
        title="more about"
        className="w-full order-first py-2 px-3 ml-2 mb-2 text-center rounded-xl bg-gray-200 transition hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
      >
        <span className="block text-gray-600 font-semibold">Read more</span>
      </button>
    </div> */
  }
}

PlacesCard.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default PlacesCard;
