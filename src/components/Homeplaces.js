import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaces } from "../redux/features/places/placesSlice";

function Homeplaces() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaces({}));
  }, [dispatch]);

  const allPlaces = useSelector((state) => state.places.list);
  return (
    <div>
      <div className="flex items-center justify-center bg-white ">
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap">
            {allPlaces.slice(0, 4).map((place) => {
              return (
                <div key={place._id} className="pt-12 md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 ">
                  <div className="mx-auto">
                    <img
                      className="rounded-2xl h-48 w-80 pl-2 drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src={place.placePhoto}
                      alt="asdasdw"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      {place.placeName}
                    </h1>

                    <div className="text-gray-700 font-light mb-2">
                      {place.placeLocation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeplaces;
