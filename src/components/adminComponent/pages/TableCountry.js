import React, { useEffect, useState } from "react";
import { Delete, SortIcon } from "../../AllSvgs";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCountries, deleteCountryy } from "../../../utils/fetch";

const TableCountry = () => {
  //to display countries on the table
  const [displayCountries, setDisplayCountries] = useState([]);

  useEffect(() => {
    //This method gets all the countries
    const fetchCountries = () => {
      try {
        getCountries().then(function (response) {
          setDisplayCountries(response.data);
        });
      } catch (err) {
        if (err.response) {
          //not in the 200 respose range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchCountries();
  }, []);

  const notify = () => {
    toast.success("Country Deleted Successfuly");
  };

  //this method deletes a country
  const deleteCountry = (id) => {
    try {
      deleteCountryy(id);
      notify();
      const myAllData = displayCountries.filter((item) => item._id !== id);
      setDisplayCountries(myAllData);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method sorts by name
  const [order, setOrder] = useState("ASC");
  const sort = (col) => {
    if (order === "ASC") {
      const sorted = [...displayCountries].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setDisplayCountries(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...displayCountries].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setDisplayCountries(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div className="flex-auto w-10/12 px-5 dark:bg-neutral-800 transition delay-500">
      <Link to="/admin/newcountry">
        {/* {" "} */}
        <button className="w-40 border-none p-1 mb-4 bg-teal-400 rounded-md cursor-pointer text-white">
          Create Country
        </button>
      </Link>

      <Outlet />
      <div className="overflow-x-auto relative sm:rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 transition dark:text-gray-400">
            <tr>
              <th
                onClick={() => sort("CountryName")}
                scope="col"
                className="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div className="flex items-center">
                  Country Name
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => sort("CapitalCity")}
                scope="col"
                className="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div className="flex items-center">
                  Country Capital
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => sort("Population")}
                scope="col"
                className="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div className="flex items-center">
                  Country Population
                  <SortIcon />
                </div>
              </th>
              <th scope="col" className="py-3 px-6 dark:text-gray-50">
                <span>Edit</span>
              </th>
              <th scope="col" className="py-3 px-6 dark:text-gray-50">
                <span>Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="dark:bg-neutral-900 transition dark:divide-neutral-700 dark:text-gray-50">
            {displayCountries.map((country) => (
                <tr key={country._id} className="bg-white border-b dark:bg-neutral-600 transition dark:border-none">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {country.CountryName}
                  </th>
                  <td className="py-4 px-6"> {country.CapitalCity}</td>
                  <td className="py-4 px-6">{country.Population}</td>
                  <td className="py-4 px-6 text-left">
                    <Link to={`editcountry/${country._id}`}>
                      <button
                        // onClick={() => updateCountry(country._id)}
                        className="font-medium text-blue-600 dark:text-blue-500 dark:bg-gray-700 px-2 py-1 rounded-full hover:underline"
                      >
                        Edit
                      </button>
                    </Link>
                  </td>

                  <td className="py-4 px-6 text-left">
                    <button
                      onClick={() => deleteCountry(country._id)}
                      className="font-medium text-red-500 dark:text-red-500 hover:underline"
                    >
                      <Delete />
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </div>
  );
};

export default TableCountry;
