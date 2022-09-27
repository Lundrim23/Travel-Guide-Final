import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function EditCountryForm(props) {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mb-5 rounded-lg dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <form action="">
        <div className="flex items-center mb-5">
          <label
            for="name"
            className="inline-block w-16 mr-8 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Name
          </label>
          <input
            value={props.countryedit.CountryName}
            onChange={(e) => props.handleEdit(e)}
            type="text"
            id="name"
            name="CountryName"
            className="flex-1 py-2 border-b-2 bg-gray-100 border-gray-400 dark:bg-neutral-600 dark:text-gray-50 rounded-md pl-2 focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div className="flex items-center mb-5">
          <label
            for="countrycapital"
            className="inline-block w-16 mr-8 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Capital
          </label>
          <input
            value={props.countryedit.CapitalCity}
            onChange={(e) => props.handleEdit(e)}
            type="text"
            id="countrycapital"
            name="CapitalCity"
            className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 border-gray-400 dark:bg-neutral-600 dark:text-gray-50 rounded-md focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-8 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Population
          </label>
          <input
            type="number"
            id="countrypopulation"
            name="Population"
            value={props.countryedit.Population}
            onChange={(e) => props.handleEdit(e)}
            className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 dark:bg-neutral-600 dark:text-gray-50 rounded-md border-gray-400 focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>
        <div className="flex justify-end">
          <div className="mr-2">
            <button
              onClick={() => navigate("/admin/countries")}
              className="py-3 px-8 bg-red-400 rounded-lg text-white font-bold"
            >
              Cancel
            </button>
          </div>

          <div className="text-right">
            <button
              onClick={() => props.updateCountry(props.countryedit._id)}
              className="py-3 px-8 bg-teal-400 rounded-lg text-white font-bold"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default EditCountryForm;
