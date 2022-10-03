import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likePlace, unlikePlace } from "../utils/fetch";
import { FaHeart, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { getMostLikedPlaceMacedonia } from "../redux/features/places/placesSlice";

function PlacesCardss() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostLikedPlaceMacedonia({}));
  }, [dispatch]);

  const placesinMacedonia = useSelector(
    (state) => state.places.placesinMacedonia
  );

  const LikePlace = async (id) => {
    try {
      likePlace(id).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const UnlikePlace = async (id) => {
    try {
      unlikePlace(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {placesinMacedonia.map((place) => {
        return (
          <div
            className="w-80 mx-3 my-5 rounded-2xl shadow-xl shadow-slate-300/60"
            key={place._id}
          >
            <img
              className="w-full h-[300px]  hover:opacity-75 object-cover rounded-t-2xl "
              //src={props.img}
              //alt={props.name}
              src={place.placePhoto}
            />
            <h1 maxLength={10} className="text-2xl pt-2 px-2">
              {place.placeName}
            </h1>
            <h3 className="max-w-fit p-2 h-16 text-md tracking-tight font-light text-slate-400 leading-6 text-ellipsis overflow-hidden">
              {place.placeDetails.substring(0, 100)}
            </h3>
            <button
              type="button"
              title="more about"
              className="w-full order-first py-2 px-3 ml-2 mb-2 text-center rounded-xl bg-gray-200 transition hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
            >
              <span className="block text-gray-600 font-semibold">
                Read more
              </span>
            </button>

            <div className=" py-3 flex flex-wrap items-center relative">
              <FaHeart color="#f43f5e" class="ml-3" icon="FaHeart" />
              <p className="text-gray-400 text-sm ml-2">: {place.likes.length}</p>
              <button
                onClick={() => LikePlace(place._id)}
                className=" ml-52 hover:bg-slate-100 hover:ring hover:ring-rose-400 hover:p-1"
              >
                <FaThumbsUp
                  color="#f43f5e"
                  icon="fa-solid FaThumbsUp"
                  className=""
                />
              </button>
              <button
                onClick={() => UnlikePlace(place._id)}
                className="ml-3 hover:bg-slate-100 hover:ring hover:ring-violet-300 hover:p-1"
              >
                <FaThumbsDown
                  color="#818cf8"
                  icon="FaThumbsDown"
                  className=""
                />
              </button>
              <div className="flex flex-wrap "></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PlacesCardss;
