import React from "react";
// import albania from "../assets/HomePart-img/Albania.jpg";
// import MacedoniaChurch from "../assets/HomePart-img/MacedoniaChurch.jpg";
// import AlbaniaRiver from "../assets/HomePart-img/AlbaniaRiver.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMostLikedPlace } from "../redux/features/places/placesSlice";

function HomePart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostLikedPlace({}));
  }, [dispatch]);

  const mostLikedPlaces = useSelector((state) => state.places.mostLikedPlace);

  console.log("mostlikedplace", mostLikedPlaces);

  return (
    <div>
      <div className="w-full z-50 sticky px-6 bg-gradient-to-b from-white via-slate-500 to-white">
        <>
          {mostLikedPlaces.slice(0, 1).map((place) => {
            return (
              <div
                key={place._id}
                className="px-4 py-26 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
              >
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                  <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6 ">
                      <h2 className=" text-3xl font-bold tracking-tight lg:text-white md:text-slate-500 sm:text-slate-500 sm:text-4xl sm:leading-none max-w-lg mb-6">
                        {place.placeName}
                      </h2>
                      <p className="lg:text-white  md:text-slate-500 text-base md:text-lg">
                        {place.placeDetails}
                      </p>
                    </div>
                    <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#3a5477] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  group">
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#3a5477] group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                        See More
                      </span>
                    </div>
                  </div>
                  <img
                    className=" lg:w-112 h-96 rounded-lg "
                    src={place.placePhoto}
                    alt="sdgdfsg"
                  />
                </div>
              </div>
            );
          })}
        </>

        <>
          {mostLikedPlaces.slice(1, 2).map((place) => {
            return (
              <div
                key={place._id}
                className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
              >
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                  <img
                    className="logo lg:w-112 h-96 rounded-lg"
                    src={place.placePhoto}
                    alt="asdasd"
                  />

                  <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                      <h2 className="text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                        {place.placeName}
                      </h2>
                      <p className="text-white text-base md:text-lg">
                        {place.placeDetails}
                      </p>
                    </div>
                    <a
                      href="#_"
                      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#3a5477] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  group"
                    >
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#3a5477] group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                        See More
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </>

        <>
          {mostLikedPlaces.slice(2, 3).map((place) => {
            return (
              <div
                key={place._id}
                className="px-4 py-26 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
              >
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                  <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6 ">
                      <h2 className=" text-3xl font-bold tracking-tight text-white  sm:text-4xl sm:leading-none max-w-lg mb-6">
                        {place.placeName}
                      </h2>
                      <p className="text-white text-base md:text-lg">
                        {place.placeDetails}
                      </p>
                    </div>
                    <a
                      href="#_"
                      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#3a5477] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  group"
                    >
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#3a5477] group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                        See More
                      </span>
                    </a>
                  </div>
                  <img
                    className=" lg:w-112 h-96 rounded-lg "
                    src={place.placePhoto}
                    alt="asfafsa"
                  />
                </div>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
}

export default HomePart;
