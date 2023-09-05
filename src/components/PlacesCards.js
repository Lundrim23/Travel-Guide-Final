import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMostLikedPlaceAlbania } from "../redux/features/places/placesSlice";
import { FaHeart, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const PlacesCards = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostLikedPlaceAlbania({}));
  }, [dispatch]);

  const allPlaces = useSelector((state) => state.places.placesinAlbania);

  const placesFiltered = allPlaces.filter(
    (item) => item.terrain === props.value
  );

  const placesinAlbania = props.value ? placesFiltered : allPlaces;

  return (
    <>
      {placesinAlbania.map((place) => {
        return (
          <div key={place._id}>
            <div className="mx-auto flex w-96 flex-col bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20 ">
              <div onMouseEnter={() => props.setIdPostit(place._id)}>
                <img
                  className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                  src={place.placePhoto}
                  alt="cult"
                />
                <div className="p-4">
                  <small className="text-emerald-800 text-xs">
                    {place.placeLocation}
                  </small>
                  <h1 className="text-2xl font-medium text-gray-800 pb-2">
                    {place.placeName}
                  </h1>
                  <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                    {place.placeDetails.substring(0, 120) + "..."}
                  </p>
                  <button
                    type="button"
                    title="more about"
                    className="w-full order-first py-2 px-3 mt-2 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
                  >
                    <span
                      onClick={() => props.openprofile()}
                      className="block text-gray-600 font-semibold cursor-pointer"
                    >
                      Read more
                    </span>
                  </button>
                </div>
                <div className=" py-3 flex flex-wrap items-center relative">
                  <FaHeart color="#f43f5e" class="ml-3" icon="FaHeart" />
                  <p className="text-gray-400 text-sm ml-2">
                    : {place.likes.length}
                  </p>
                  <button
                    onClick={() => props.LikePlace(place._id)}
                    className=" ml-52 hover:bg-slate-100 hover:ring hover:ring-rose-400 hover:p-1"
                  >
                    <FaThumbsUp color="#f43f5e" icon="fa-solid FaThumbsUp" />
                  </button>
                  <button
                    onClick={() => props.UnlikePlace(place._id)}
                    className="ml-3 hover:bg-slate-100 hover:ring hover:ring-violet-300 hover:p-1"
                  >
                    <FaThumbsDown color="#818cf8" icon="FaThumbsDown" />
                  </button>
                  <div className="flex flex-wrap "></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PlacesCards;
