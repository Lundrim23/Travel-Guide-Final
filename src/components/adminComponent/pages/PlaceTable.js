import React from "react";
import { Link } from "react-router-dom";
import { SortIcon, Delete } from "../../AllSvgs";

export default function PlaceTable() {
  return (
    <div className="flex-auto w-10/12 px-5 dark:bg-neutral-800 transition delay-500">
      {/* <Link to="newEvent"> */}
      <button className="w-40 border-none p-1 mb-4 bg-teal-400 rounded-md cursor-pointer text-white">
        Create Place
      </button>
      {/* </Link> */}
      <div class="overflow-x-auto relative sm:rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 transition dark:text-gray-400">
            <tr>
              <th
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Place Name
                  <SortIcon />
                </div>
              </th>
              <th
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Place Location
                  <SortIcon />
                </div>
              </th>
              <th
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Place Details
                  <SortIcon />
                </div>
              </th>
              <th
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Place Terrain
                  <SortIcon />
                </div>
              </th>
              <th
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Place Photo
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6 dark:text-gray-50">
                <span>Edit</span>
              </th>
              <th scope="col" class="py-3 px-6 dark:text-gray-50">
                <span>Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="dark:bg-neutral-900 transition dark:divide-neutral-700 dark:text-gray-50">
            <tr class="bg-white border-b dark:bg-neutral-600 transition dark:border-none">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Name
              </th>
              <td class="py-4 px-6">Location</td>
              <td class="py-4 px-6">Details</td>
              <td class="py-4 px-6">Terrain</td>
              <td class="py-4 px-6">Photo</td>
              <td class="py-4 px-6 text-left">
                {/* <Link> */}
                <button className="font-medium text-blue-600 dark:text-blue-500 dark:bg-gray-700 px-2 py-1 rounded-full hover:underline">
                  Edit
                </button>
                {/* </Link> */}
              </td>

              <td class="py-4 px-6 text-left">
                <button className="font-medium text-red-500 dark:text-red-500 hover:underline">
                  <Delete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
