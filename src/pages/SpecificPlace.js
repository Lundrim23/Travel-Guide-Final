import React, { useEffect, useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import SpecificPlaceMap from "../components/SpecificPlaceMap";
import { useLocation } from "react-router-dom";
import { getPlaceById } from "../utils/fetch";
import Map from "../assets/img/map.png";

const SpecificPlace = () => {
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
  return (
    <>
      <div className="max-w-[1240px] mx-auto py-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {place.placeName}
          </h1>
        </div>

        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
          <img
            className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 rounded-md"
            src={place.placePhoto}
            alt="Syri i Kalter"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-4 px-4 py-16">
          <div className="lg:col-span-2 flex flex-col justify-evenly">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {place.placeName}
              </h2>
              <h3 className="font-bold text-gray-800 py-2">{place.terrain}</h3>
              <p className="py-4">{place.placeDetails}</p>
              <br />
            </div>
            <div className="grid sm:grid-cols-2 gap-8 py-4">
              <div className="flex flex-col lg:flex-row items-center text-center">
                <div>
                  <h3 className="font-bold text-gray-800 py-2">
                    {place.likes.length} Likes
                  </h3>
                  {/* <p className="py-1">{props.description1}</p> */}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center text-center">
                <div>
                  {/* <h3 className="font-bold text-gray-800 py-2">{place.likes.length} Likes</h3> */}
                  {/* <p className="py-1">{props.description2}</p> */}
                </div>
              </div>
            </div>
          </div>
          <img
            src={Map}
            alt="map"
            className="w-full mx-auto my-auto sm:w-1/2"
          />
        </div>

        <React.StrictMode>
          <ChakraProvider theme={theme}>
            <SpecificPlaceMap />
          </ChakraProvider>
        </React.StrictMode>
      </div>
    </>
  );
};

export default SpecificPlace;
