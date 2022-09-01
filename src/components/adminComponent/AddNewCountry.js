import React from "react";

const AddNewCountry = (props) => {
  return (
    <>
      <div className="lg:flex">
        <div className="bg-white lg:w-2/4 px-6 lg:ml-4 rounded-l-lg dark:bg-neutral-700 transition delay-500">
          <h1 className="text-3xl tex-gray-700 py-6 p-3 w-2/3 m-auto dark:text-gray-50 transition delay-500">
            Add Country
          </h1>
          <hr className="mx-40 dark:border-gray-500 transition delay-500" />
          <div className="py-8 p-3 w-2/3 m-auto">
            <div className="flex mb-4">
              <span className="flex justify-center border rounded-full w-6 h-6 mr-3 text-blue-700 border-blue-500 dark:text-teal-500 dark:border-teal-500 transition delay-500">
                1
              </span>
              <span className="font-bold text-gray-700 dark:text-teal-500 transition delay-500">
                Country Information
              </span>
            </div>
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 px-1">
                <label className="text-gray-600 font-light dark:text-gray-50 transition delay-500 ">
                  Country Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your Country name here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-100 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
                  onChange={props.handleChange}
                  name="CountryName"
                  value={props.country.CountryName}
                />
              </div>

              <div className="w-full lg:w-1/2 px-1">
                <label className="text-gray-600 font-light dark:text-gray-50 transition delay-500 ">
                  Country Capital
                </label>
                <input
                  type="text"
                  placeholder="Enter your Country Capital here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-100 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
                  onChange={props.handleChange}
                  name="CapitalCity"
                  value={props.country.CapitalCity}
                />
              </div>
            </div>
          </div>
          <hr className="mx-40 dark:border-gray-500 transition delay-500" />
          <div className="py-8 p-3 w-2/3 m-auto">
            <div className="flex mb-4">
              <span className="flex justify-center border rounded-full w-6 h-6 mr-3 text-blue-700 border-blue-500 dark:text-teal-500 dark:border-teal-500 transition delay-500">
                2
              </span>
              <span className="font-bold text-gray-700 dark:text-teal-500 transition delay-500">
                Country Details
              </span>
            </div>

            <div className="flex">
              <div className="w-full px-1">
                <label class="text-gray-600 font-light dark:text-gray-50 transition delay-500 ">
                  Country Population
                </label>
                <textarea
                  type="number"
                  placeholder="Enter your Country population here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-100 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
                  onChange={props.handleChange}
                  name="Population"
                  value={props.country.props}
                />
              </div>
            </div>
          </div>
          <div className="p-3 w-2/3 m-auto">
            <button
              onClick={props.handleSubmit}
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 dark:bg-teal-500 transition dark:text-gray-900"
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
