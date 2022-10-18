import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { getPlaceById } from "../utils/fetch";

function FullPostPlace() {
  const [place, setPlace] = useState({
    placeName: "",
    placeLocation: "",
    placeDetails: "",
    terrain: "",
    placePhoto: "",
    likes: "",
  });

  const location = useLocation();

  useEffect(() => {
    const id = location.state.idpost;
    getPlaceById(id).then(function (res) {
      setPlace(res.data);
      //console.log("res data", res.data);
    });
  }, []);

  // console.log("id deri qitu", location.state.idpost);

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={place.placePhoto}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {place.placeName}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-gray-600">{place.placeLocation}</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <span className="text-gray-600">{place.terrain}</span>
              </span>
            </div>
            <p className="leading-relaxed">{place.placeDetails}</p>
            <div className=" mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex items-center">
                <div className="flex items-center">
                  <FaHeart color="#f43f5e" class="mr-2" icon="FaHeart" />
                  <p className="text-gray-400 text-sm">
                    : {place.likes.length} Likes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullPostPlace;
