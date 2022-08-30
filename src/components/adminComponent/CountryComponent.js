import React, { useEffect, useState } from "react";
import CountryTable from "./CountryTable";
import AddNewCountry from "./AddNewCountry";
import { addCountry, getCountries, updateCountryy, deleteCountryy } from "../../utils/fetch";

const CountryComponent = () => {
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
      try{
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

    try{
      addCountry(newCountry).then((response) => {
        setDisplayCountries([...displayCountries, response.data]);
      });
    } catch(err){
      console.log(`Error: ${err.message}`);
    }
  };

  //this method updates a country
  const updateCountry = (id) => {
    const updateCountry = {
      CountryName: country.CountryName,
      CapitalCity: country.CapitalCity,
      Population: country.Population,
    };

    try{
      updateCountryy(id, updateCountry).then((response) => {
        setDisplayCountries(
          displayCountries.map((oneCountry) => 
          oneCountry.id === id? {...response.data} : oneCountry)
        );
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method deletes a country
  const deleteCountry = (id) => {
    try{
      deleteCountryy(id);
      const myAllData = displayCountries.filter((item) => item._id !== id);
      setDisplayCountries(myAllData);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method sorts by name
  const [order, setOrder] = useState("ASC");
  const sort = (col) => {
    if(order === "ASC"){
      const sorted = [...displayCountries].sort((a,b) => 
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1 );
      setDisplayCountries(sorted);
      setOrder("DSC")
    }
    if(order === "DSC"){
      const sorted = [...displayCountries].sort((a,b) => 
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1 );
      setDisplayCountries(sorted);
      setOrder("ASC")
    }
  }

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
        sort={sort}
      />
    </>
  );
};

export default CountryComponent;
