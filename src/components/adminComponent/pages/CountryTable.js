import React from "react";
import { SortIcon, Delete } from "../../AllSvgs";

export default function CountryTable() {
  return (
    <div className="flex-auto w-10/12 px-5">
          {/* <Link to="newcountry"> */}
        <button className="w-40 border-none p-1 mb-4 bg-teal-400 rounded-md cursor-pointer text-white">
          Create Event
        </button>
      {/* </Link> */}
      <div class="overflow-x-auto relative sm:rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Country Name
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Country Capital
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Country Population
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <span>Edit</span>
              </th>
              <th scope="col" class="py-3 px-6">
                <span>Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Name
              </th>
              <td class="py-4 px-6">Capital</td>
              <td class="py-4 px-6">Population</td>
              <td class="py-4 px-6 text-left">
                {/* <Link to="editevent"> */}
                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </button>
                {/* </Link> */}
              </td>

              <td class="py-4 px-6 text-left">
                <button className="font-medium text-red-500 dark:text-blue-500 hover:underline">
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
