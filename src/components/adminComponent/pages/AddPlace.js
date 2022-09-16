import React from "react";
import { Upload } from "../../AllSvgs";

export default function AddPlace() {
  return (
    <div className=" flex flex-auto w-10/12 px-5 dark:bg-neutral-800 transition delay-500 ">
      <div class="flex w-full lg:w-6/12  bg-white space-y-8 dark:bg-neutral-800 transition delay-500 ">
        <div class="w-full px-8 md:px-32 lg:px-24 ">
          <form class="bg-white dark:bg-neutral-700 transition rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <h1 class="text-gray-800 dark:text-gray-50 font-bold text-2xl mb-1">
              Hello Admin!
            </h1>
            <p class="text-sm font-normal text-gray-600 dark:text-gray-400 mb-8">
              Add a place
            </p>
            {/* <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl"> */}
            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                type="text"
                id="placename"
                required
                class="bg-gray-100 dark:bg-neutral-800 dark:text-gray-50 dark:border-neutral-600 dark:focus:border-neutral-400 focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="placename"
                class="dark:text-gray-50 transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Place Name
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                type="text"
                id="placelocation"
                required
                class="bg-gray-100 dark:bg-neutral-800 dark:text-gray-50 dark:border-neutral-600 dark:focus:border-neutral-400 focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="placelocation"
                class="dark:text-gray-50 transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Place Location
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <select className="bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-neutral-400">
                <option>--Choose Place Terrain--</option>
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
            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <label className="pl-3 cursor-pointer flex" htmlFor="file">
                <Upload />
                <span className="ml-2 dark:text-gray-50 ">Upload a photo</span>
              </label>
              <input type="file" id="file" className="hidden" />
            </div>

            <button
              type="submit"
              class="block w-full bg-teal-400 mt-5 py-2 rounded-2xl hover:bg-teal-600 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
