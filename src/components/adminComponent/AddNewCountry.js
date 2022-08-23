import React from "react";

const AddNewCountry = (props) => {
  return (
    <>
      <div className="lg:flex">
        <div className="bg-white lg:w-2/4 px-6 lg:ml-4 rounded-l-lg">
          <h1 className="text-3xl tex-gray-700 py-6 p-3 w-2/3 m-auto">
            Add Country
          </h1>
          <hr className="lg:mx-40" />
          <div className="py-8 p-3 w-2/3 m-auto">
            <div className="flex mb-4">
              <span className="flex justify-center border rounded-full w-6 h-6 mr-3 text-blue-700 border-blue-500">
                1
              </span>
              <span className="font-bold text-gray-700">Country Information</span>
            </div>
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 px-1">
                <label class="text-gray-600 font-light ">Country Name</label>
                <input
                  type="text"
                  placeholder="Enter your Place name here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                //   onChange={props.handleChange}
                onChange={props.handleChange}
                  name="CountryName"
                //   value={props.place.placeName}
                value={props.country.CountryName}
                />
              </div>

              <div className="w-full lg:w-1/2 px-1">
                <label class="text-gray-600 font-light ">Country Capital</label>
                <input
                  type="text"
                  placeholder="Enter your Place location here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                //   onChange={props.handleChange}
                onChange={props.handleChange}
                  name="CapitalCity"
                  value={props.country.CapitalCity}
                //   value={props.place.placeLocation}
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
              <span className="font-bold text-gray-700">Country Details</span>
            </div>

            <div className="flex">
              <div className="w-full px-1">
                <label class="text-gray-600 font-light ">Country Population</label>
                <textarea
                  type="number"
                  placeholder="Enter your place details here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                //   onChange={props.handleChange}
                onChange={props.handleChange}
                  name="Population"
                  value={props.country.props}
                //   value={props.place.placeDetails}
                />
              </div>
            </div>
          </div>
          <div className="p-3 w-2/3 m-auto">
            <button
            onClick={props.handleSubmit}
            //   onClick={props.handleSubmit}
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Save Country
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewCountry;
