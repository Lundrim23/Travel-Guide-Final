import React from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "../../AllSvgs";
import { ToastContainer } from "react-toastify";

function EditPlaceForm(props) {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mb-5 rounded-lg dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <form action="">
        <div className="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-6 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Name
          </label>
          <input
            value={props.place.placeName}
            onChange={(e) => props.handleEdit(e)}
            type="text"
            id="name"
            name="placeName"
            className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 border-gray-400 dark:bg-neutral-600 dark:text-gray-50 rounded-md focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>
        <div class="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-6 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Terrain
          </label>
          <select
            className="bg-gray-100 border ml-2 border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-neutral-600 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
            value={props.place.placeLocation}
            onChange={props.addcountry}
          >
            <option>--Choose--</option>
            <option value="Kosovo">Kosovo</option>
                <option value="Albania">Albania</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Montenegro">Montenegro</option>
          </select>
        </div>

        <div class="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-6 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Details
          </label>
          <input
            type="text"
            id="countrypopulation"
            value={props.place.placeDetails}
            onChange={(e) => props.handleEdit(e)}
            name="placeDetails"
            className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 dark:bg-neutral-600 dark:text-gray-50 rounded-md border-gray-400 focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-6 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Terrain
          </label>
          <select
            className="bg-gray-100 border ml-2 border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-neutral-600 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
            value={props.place.terrain}
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

        <div class="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-6 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Photo
          </label>
          <div className="flex items-center">
            <img
              src={props.place.placePhoto}
              alt="userupdate"
              className="w-24 h-24 rounded-xl object-cover mr-5"
            />
            <label htmlFor="file" className="cursor-pointer">
              <Upload />
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={props.processFile}
              name="placePhoto"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <div className="mr-2">
            <button
              onClick={() => navigate("/admin/places")}
              className="py-3 px-8 bg-red-400 rounded-lg text-white font-bold"
            >
              Cancel
            </button>
          </div>

          <div className="text-right">
            <button
              onClick={() => props.update(props.place._id)}
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

export default EditPlaceForm;
