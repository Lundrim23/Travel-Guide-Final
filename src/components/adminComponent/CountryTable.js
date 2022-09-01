import React from "react";
import { SortIcon } from "../AllSvgs";

const CountryTable = (props) => {
  return (
    <>
      <div className="pl-4 py-4 overflow-auto rounded-lg hidden lg:block">
        <table className=" w-2/3">
          <thead className="bg-gray-50 border-b-2 border-gray-200 dark:bg-neutral-700 transition dark:border-none delay-600">
            <tr>
              <th
                onClick={() => props.sort("CountryName")}
                className="p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-50 transition"
              >
                <div className="flex">
                  Country Name <SortIcon className="ml-2" />
                </div>
              </th>
              <th
                onClick={() => props.sort("CapitalCity")}
                className="p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-50 transition"
              >
                <div className="flex">
                  Country Capital <SortIcon className="ml-2" />
                </div>
              </th>
              <th
                onClick={() => props.sort("Population")}
                className="p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-50 transition"
              >
                Country Population
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
            {props.displayCountries.map((country) => (
              <>
                <tr className="bg-white dark:bg-neutral-600 transition">
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 whitespace-nowrap ">
                    {country.CountryName}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 whitespace-nowrap ">
                    {country.CapitalCity}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 whitespace-nowrap ">
                    {country.Population}
                  </td>
                  <td className="p-3 text-sm dark:text-gray-50 whitespace-nowrap ">
                    <button
                      onClick={() => props.update(country._id)}
                      className="font-bold text-blue-500 hover:underline dark:text-teal-500"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="p-3 text-sm ">
                    <button
                      onClick={() => props.remove(country._id)}
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
        {props.displayCountries.map((country) => (
          <>
            <div className="bg-white p-4 rounded-lg shadow dark:bg-neutral-600 transition">
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {country.CountryName}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {country.CapitalCity}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {country.Population}
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <button
                    onClick={() => props.update(country._id)}
                    className="font-bold text-blue-500 hover:underline dark:text-teal-500"
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => props.remove(country._id)}
                    className="font-bold text-red-500 hover:underline dark:text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CountryTable;
