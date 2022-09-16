import React from "react";
import { Delete, SortIcon } from "../../AllSvgs";
import { Link } from "react-router-dom";

const TableCountry = (props) => {
  return (
    <div className="flex-auto w-10/12 px-5 dark:bg-neutral-800 transition delay-500">
      <Link to="/admin/newcountry">
        {/* {" "} */}
        <button className="w-40 border-none p-1 mb-4 bg-teal-400 rounded-md cursor-pointer text-white">
          Create Country
        </button>
      </Link>

      <div class="overflow-x-auto relative sm:rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 transition dark:text-gray-400">
            <tr>
              <th
                onClick={() => props.sort("CountryName")}
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Country Name
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => props.sort("CapitalCity")}
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Country Capital
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => props.sort("Population")}
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Country Population
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
            {props.displayCountries.map((country) => (
              <>
                <tr class="bg-white border-b dark:bg-neutral-600 transition dark:border-none">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {country.CountryName}
                  </th>
                  <td class="py-4 px-6"> {country.CapitalCity}</td>
                  <td class="py-4 px-6">{country.Population}</td>
                  <td class="py-4 px-6 text-left">
                    {/* <Link to="editevent"> */}
                    <button
                      onClick={() => props.update(country._id)}
                      className="font-medium text-blue-600 dark:text-blue-500 dark:bg-gray-700 px-2 py-1 rounded-full hover:underline"
                    >
                      Edit
                    </button>
                    {/* </Link> */}
                  </td>

                  <td class="py-4 px-6 text-left">
                    <button
                      onClick={() => props.remove(country._id)}
                      className="font-medium text-red-500 dark:text-red-500 hover:underline"
                    >
                      <Delete />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCountry;
