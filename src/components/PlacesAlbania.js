import React from "react";

const PlacesAlbania = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 px-5 ">
        <div className="pt-10 pb-20">
          <div
            className="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none
         md:bg-white bg-white lg:bg-white lg:h-full"
          >
            <div
              className=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl 
      rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none 
      lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white"
            >
              <img
                className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
                src="https://theculturetrip.com/wp-content/uploads/2018/07/27142447003_2d6b3e5dee_o.jpg"
                alt="Albania"
              ></img>
              <h1 className="mt-5 font-bold text-xl lg:mt-7 text-emerald-900">
                BEST ALBANIAN PLACES
              </h1>
              <h1 className="font-bold text-md text-gray-600">
                Get started today!
              </h1>
              <h1 className="text-lg text-gray-600 text-justify pt-2 pr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h1>
              <button className="mt-5 bg-emerald-800 p-3 shadow-2xl rounded-xl text-white font-bold hover:bg-emerald-700">
                READ MORE
              </button>
            </div>

            <div className="hidden relative lg:block  lg:col-span-3">
              <img
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://theculturetrip.com/wp-content/uploads/2018/07/27142447003_2d6b3e5dee_o.jpg"
                alt="Albania"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesAlbania;
