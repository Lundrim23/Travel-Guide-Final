import React from "react";
import { SortIcon } from "../AllSvgs";

const CountryTable = (props) => {
  return (
    <>
      <div className="pl-4 py-4 overflow-auto rounded-lg hidden lg:block">
        <table className=" w-2/3">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th onClick={() => props.sort("CountryName")} className="p-3 text-sm font-semibold tracking-wide text-left">
                <div className="flex">
                Country Name <SortIcon className="ml-2" />
                </div>
              </th>
              <th onClick={() => props.sort("CapitalCity")} className="p-3 text-sm font-semibold tracking-wide text-left">
                <div className="flex">
                Country Capital <SortIcon className="ml-2" />
                </div>
              </th>
              <th onClick={() => props.sort("Population")} className="p-3 text-sm font-semibold tracking-wide text-left">
                Country Population
              </th>
              <th className="w-24  p-3 text-sm font-semibold tracking-wide text-left">
                Edit
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {props.displayCountries.map((country) => (
              <>
                <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    {country.CountryName}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    {country.CapitalCity}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    {country.Population}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    <button
                      onClick={() => props.update(country._id)}
                      className="font-bold text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="p-3 text-sm text-gray-700 ">
                    <button
                      onClick={() => props.remove(country._id)}
                      className="font-bold text-red-500 hover:underline"
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
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-sm text-gray-700">{country.CountryName}</div>
              <div className="text-sm text-gray-700">{country.CapitalCity}</div>
              <div className="text-sm text-gray-700">{country.Population}</div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="font-bold text-blue-500 hover:underline">
                  <button
                    onClick={() => props.update(country._id)}
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="font-bold text-red-500 hover:underline">
                  <button
                    onClick={() => props.remove(country._id)}
                    className="font-bold text-red-500 hover:underline"
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
