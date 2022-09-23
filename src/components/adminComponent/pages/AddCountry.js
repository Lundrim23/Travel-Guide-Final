import React from "react";
import { useEffect, useState } from "react";
import { getCountries, addCountry } from "../../../utils/fetch";

export default function AddCountry() {
  const [country, setCountry] = useState({
    CountryName: "",
    CapitalCity: "",
    Population: "",
  });

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

  //populate state with data
  function handleChange(event) {
    const { name, value } = event.target;

    setCountry((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  //to submit all data in db
  const handleSubmit = async (event, id) => {
    event.preventDefault();

    const newCountry = {
      CountryName: country.CountryName,
      CapitalCity: country.CapitalCity,
      Population: country.Population,
    };

    try {
      addCountry(newCountry).then((response) => {
        setDisplayCountries([...displayCountries, response.data]);
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className=" flex flex-auto w-10/12 px-5 dark:bg-neutral-800 transition delay-500 ">
      <div class="flex w-full lg:w-6/12  bg-white space-y-8 dark:bg-neutral-800 transition delay-500">
        <div class="w-full px-8 md:px-32 lg:px-24 ">
          <form class="bg-white dark:bg-neutral-700 transition delay-500 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <h1 class="text-gray-800 dark:text-gray-50 font-bold text-2xl mb-1">
              Hello Admin!
            </h1>
            <p class="text-sm font-normal text-gray-600 dark:text-gray-400 mb-8">
              Add a country
            </p>
            {/* <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl"> */}
            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                onChange={handleChange}
                name="CountryName"
                value={country.CountryName}
                type="text"
                id="countryname"
                required
                class=" bg-gray-100 dark:bg-neutral-800 dark:border-neutral-600 focus:border-emerald-300 dark:focus:border-neutral-400 dark:text-gray-50 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="countryname"
                class="transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 dark:text-gray-50 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Country Name
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                onChange={handleChange}
                name="CapitalCity"
                value={country.CapitalCity}
                type="text"
                id="countrycapital"
                required
                class="bg-gray-100 dark:bg-neutral-800 dark:border-neutral-600 focus:border-emerald-300 dark:focus:border-neutral-400 dark:text-gray-50 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="countrycapital"
                class="transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 dark:text-gray-50 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Country Capital
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                onChange={handleChange}
                name="Population"
                value={country.Population}
                type="number"
                id="countrypopulation"
                required
                class="bg-gray-100 dark:bg-neutral-800 dark:border-neutral-600 dark:focus:border-neutral-400 focus:border-emerald-300 dark:text-gray-50 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="countrypopulation"
                class="transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 dark:text-gray-50 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Coutnry Population
              </label>
            </div>
            <button
              onClick={handleSubmit}
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