import React from "react";

const AddNewPlace = (props) => {
  return (
    <div>
      <div className="lg:flex">
        <div className="bg-white lg:w-2/4 px-6 lg:ml-4 rounded-l-lg dark:bg-neutral-700 transition delay-500">
          <h1 className="text-3xl tex-gray-700 py-6 p-3 w-2/3 m-auto dark:text-gray-50 dark:bg-neutral-800 transition delay-500">
            Add Place
          </h1>
          <hr className="mx-40 dark:border-gray-500 transition delay-500" />
          <div className="py-8 p-3 w-2/3 m-auto">
            <div className="flex mb-4">
              <span className="flex justify-center border rounded-full w-6 h-6 mr-3 text-blue-700 border-blue-500 dark:text-teal-500 dark:border-teal-500 transition delay-500">
                1
              </span>
              <span className="font-bold text-gray-700  dark:text-teal-500 transition delay-500">
                Place Information
              </span>
            </div>
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 px-1">
                <label className="text-gray-600 font-light dark:text-gray-50 transition delay-500 ">
                  Place name
                </label>
                <input
                  type="text"
                  placeholder="Enter your Place name here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-100 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
                  onChange={props.handleChange}
                  name="placeName"
                  value={props.place.placeName}
                />
              </div>

              <div className="w-full lg:w-1/2 px-1">
                <label className="text-gray-600 font-light dark:text-gray-50 transition delay-500 ">
                  Place location
                </label>
                <input
                  type="text"
                  placeholder="Enter your Place location here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-100 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
                  onChange={props.handleChange}
                  name="placeLocation"
                  value={props.place.placeLocation}
                />
              </div>
            </div>
          </div>
          <hr className="lg:mx-40 dark:border-gray-500 transition delay-500" />
          <div className="py-8 p-3 w-2/3 m-auto">
            <div className="flex mb-4">
              <span className="flex justify-center border rounded-full w-6 h-6 mr-3 text-blue-700 border-blue-500 dark:text-teal-500 dark:border-teal-500 transition delay-500">
                2
              </span>
              <span className="font-bold text-gray-700 dark:text-teal-500 transition delay-500">
                Place Details
              </span>
            </div>

            <div className="flex">
              <div className="w-full px-1">
                <label className="text-gray-600 font-light dark:text-gray-50 transition delay-500 ">
                  Details
                </label>
                <textarea
                  type="text"
                  placeholder="Enter your place details here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-100 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
                  onChange={props.handleChange}
                  name="placeDetails"
                  value={props.place.placeDetails}
                />

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50 transition delay-500">
                  Choose Place terrain
                </label>
                <select
                  className="bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
                  value={props.valuee}
                  onChange={props.provo}
                >
                  <option>--Choose--</option>
                  <option value="Beach">Beach</option>
                  <option value="City">City</option>
                  <option value="Cultural Heritage">Cultural Heritage</option>
                  <option value="Lake">Lake</option>
                  <option value="Mountain">Mountain</option>
                  <option value="Park">Park</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Waterfall">Waterfall</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-3 w-2/3 m-auto">
            <div className="w-full px-1">
              <label className="text-gray-600 font-light dark:text-gray-50 transition delay-500 ">
                Place photo
              </label>
              {/* <input
                type="file"
                className="w-full mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-100 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
                onChange={props.imageUpload}
                name="placePhoto"
              />
              <input
                className="file-path validate dark:bg-neutral-700"
                type="text"
              /> */}
              <input 
              className="w-full mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-100 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
              type="file" 
              onChange={props.processFile} 
              />
            </div>
            <button
              onClick={props.handleSubmit}
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 dark:bg-teal-500 transition dark:text-gray-900"
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
