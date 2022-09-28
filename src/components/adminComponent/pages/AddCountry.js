import React from "react";
import { useEffect, useState } from "react";
import { getCountries, addCountry } from "../../../utils/fetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCountryForm from "./AddCountryForm";

export default function AddCountry() {
  const [country, setCountry] = useState({
    CountryName: "",
    CapitalCity: "",
    Population: "",
  });

  //to display countries on the table
  const [displayCountries, setDisplayCountries] = useState([]);

  const notify = () => {
    toast.success("Country Added Successfuly");
  };

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
      notify();
      addCountry(newCountry).then((response) => {
        setDisplayCountries([...displayCountries, response.data]);
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <AddCountryForm 
      handleChange={handleChange}
      country={country}
      handleSubmit={handleSubmit}
    />
  );
}