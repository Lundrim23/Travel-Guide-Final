import React, { useState } from "react";

const AddNewPlace = (props) => {
  return (
    <div>
      <div className="lg:flex">
        <div className="bg-white lg:w-2/4 px-6 lg:ml-4 rounded-l-lg">
          <h1 className="text-3xl tex-gray-700 py-6 p-3 w-2/3 m-auto">
            Add Place
          </h1>
          <hr className="lg:mx-40" />
          <div className="py-8 p-3 w-2/3 m-auto">
            <div className="flex mb-4">
              <span className="flex justify-center border rounded-full w-6 h-6 mr-3 text-blue-700 border-blue-500">
                1
              </span>
              <span className="font-bold text-gray-700">Place Information</span>
            </div>
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 px-1">
                <label class="text-gray-600 font-light ">Place name</label>
                <input
                  type="text"
                  placeholder="Enter your Place name here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                  onChange={props.handleChange}
                  name="placeName"
                  value={props.value.placeName}
                />
              </div>

              <div className="w-full lg:w-1/2 px-1">
                <label class="text-gray-600 font-light ">Place location</label>
                <input
                  type="text"
                  placeholder="Enter your Place location here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                  onChange={props.handleChange}
                  name="placeLocation"
                  value={props.value.placeLocation}
                />
              </div>
            </div>
          </div>
          <hr className="lg:mx-40" />
          <div className="py-8 p-3 w-2/3 m-auto">
            <div className="flex mb-4">
              <span className="flex justify-center border rounded-full w-6 h-6 mr-3 text-blue-700 border-blue-500">
                2
              </span>
              <span className="font-bold text-gray-700">Place Details</span>
            </div>

            <div className="flex">
              <div className="w-full px-1">
                <label class="text-gray-600 font-light ">Details</label>
                <textarea
                  type="text"
                  placeholder="Enter your place details here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                  onChange={props.handleChange}
                  name="placeDetails"
                  value={props.value.placeDetails}
                />
              </div>
            </div>
          </div>
          <div className="p-3 w-2/3 m-auto">
            <div className="w-full px-1">
              <label class="text-gray-600 font-light ">Place photo</label>
              <input
                type="file"
                placeholder="Enter your Place location here"
                className="w-full mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                onChange={props.handleChange}
                name={props.name}
                // value={props.value.placePhoto}
              />
              <input className="file-path validate" type="text" />
            </div>
            <button
              onClick={props.handleSubmit}
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Save Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPlace;
