import React, { useEffect, useState } from "react";
import CountryTable from "./CountryTable";
import AddNewCountry from "./AddNewCountry";
import axios from "axios";

const CountryComponent = () => {
  const [country, setCountry] = useState({
    CountryName: "",
    CapitalCity: "",
    Population: "",
  });

  const [displayCountries, setDisplayCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  //This method gets all the countries
  const fetchCountries = () => {
    const url = process.env.REACT_APP_GET_ALL_COUNTRIES;

    axios
      .get(url)
      .then((res) => {
        setDisplayCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    const url = process.env.REACT_APP_SAVE_NEW_COUNTRY;
    event.preventDefault();

    const newCountry = {
      CountryName: country.CountryName,
      CapitalCity: country.CapitalCity,
      Population: country.Population,
    };

    axios.post(url, newCountry);
  };

  //this method updates a country
  const updateCountry = (id) => {
    const url = process.env.REACT_APP_EDIT_COUNTRY;

    const updateCountry = {
      CountryName: country.CountryName,
      CapitalCity: country.CapitalCity,
      Population: country.Population,
    };

    axios.patch(url + id, updateCountry);
  };

  //this method deletes a country
  const deleteCountry = (id) => {
    const url = process.env.REACT_APP_DELETE_COUNTRY;

    axios
      .delete(url + id)
      .then((res) => {
        const AllData = displayCountries.filter((item) => item._id !== id);
        setDisplayCountries(AllData);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <AddNewCountry
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        country={country}
      />
      <CountryTable
        displayCountries={displayCountries}
        update={updateCountry}
        remove={deleteCountry}
      />
    </>
  );
};

export default CountryComponent;
