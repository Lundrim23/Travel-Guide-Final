import React from "react";
import { SortIcon } from "../AllSvgs";

const PlaceTable = (props) => {
  return (
    <div>
      <div className="pl-4 py-4 overflow-auto rounded-lg hidden lg:block ">
        <table className=" w-2/3">
          <thead className="bg-gray-50 border-b-2 border-gray-200 dark:bg-neutral-700 transition dark:border-none delay-600">
            <tr>
              <th
                onClick={() => props.sort("placeName")}
                className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer dark:text-gray-50 transition"
              >
                <div className="flex">
                  Name <SortIcon className="ml-2" />
                </div>
              </th>
              <th
                onClick={() => props.sort("placeLocation")}
                className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer dark:text-gray-50 transition"
              >
                <div className="flex">
                  Location <SortIcon className="ml-2" />
                </div>
              </th>
              <th
                onClick={() => props.sort("placeDetails")}
                className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer dark:text-gray-50 transition"
              >
                <div className="flex">
                  Details <SortIcon className="ml-2" />
                </div>
              </th>
              <th
                onClick={() => props.sort("terrain")}
                className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer dark:text-gray-50 transition"
              >
                <div className="flex">
                  Terrain <SortIcon className="ml-2" />
                </div>
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-50 transition">
                Photo
              </th>
              <th className="w-24  p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-50 transition">
                Edit
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-50 transition">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:bg-neutral-900 transition dark:divide-neutral-700">
            {props.displayPlaces.map((place) => (
              <>
                <tr className="bg-white dark:bg-neutral-600 transition">
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 whitespace-nowrap ">
                    {place.placeName}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 whitespace-nowrap ">
                    {place.placeLocation}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 whitespace-nowrap ">
                    {place.placeDetails}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 whitespace-nowrap ">
                    {place.terrain}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 whitespace-nowrap ">
                    <img
                      className="w-12"
                      src={place.placePhoto}
                      alt="On table"
                    />
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    <button
                      onClick={() => props.update(place._id)}
                      className="font-bold text-blue-500 dark:text-teal-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="p-3 text-sm text-gray-700 ">
                    <button
                      onClick={() => props.remove(place._id)}
                      className="font-bold text-red-500 dark:text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden w-3/4 pl-4">
        {props.displayPlaces.map((place) => (
          <>
            <div className="bg-white p-4 rounded-lg shadow dark:bg-neutral-600 transition">
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {place.placeName}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {place.placeLocation}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {place.placeDetails}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {place.terrain}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                <img className="w-4" src={place.placePhoto} alt="On table" />
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="font-bold text-blue-500 hover:underline dark:text-teal-500">
                  Edit
                </div>
                <div className="font-bold text-red-500 hover:underline dark:text-red-600">
                  Delete
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PlaceTable;
