import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getCountries,
  getCoutrybyId,
  updateCountryy,
} from "../../../utils/fetch";

function EditCountry() {
  {
    const [countryedit, setCountryedit] = useState({
      CountryName: "",
      CapitalCity: "",
      Population: "",
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      const editCountryid = async () => {
        getCoutrybyId(id).then(function (response) {
          setCountryedit(response.data);
        });
      };
      editCountryid();
    }, [id]);

    console.log("countryedit", countryedit);

    // const handleEdit = (e) => {
    //   setCountryedit({ ...countryedit, [e.target.name]: e.target.value });
    // };

    //populate state with data
    function handleEdit(event) {
      const { name, value } = event.target;

      setCountryedit((prevInput) => {
        return {
          ...prevInput,
          [name]: value,
        };
      });
    }

    //this method updates a country
    const updateCountry = (id) => {
      const updateCountry = {
        CountryName: countryedit.CountryName,
        CapitalCity: countryedit.CapitalCity,
        Population: countryedit.Population,
      };

      try {
        updateCountryy(id, updateCountry);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="counreyname"
            name="CountryName"
            value={countryedit.CountryName}
            onChange={(e) => handleEdit(e)}
          />
          <input
            type="text"
            placeholder="countrycapital"
            name="CapitalCity"
            value={countryedit.CapitalCity}
            onChange={(e) => handleEdit(e)}
          />
          <input
            type="number"
            placeholder="countrypopulation"
            name="Population"
            value={countryedit.Population}
            onChange={(e) => handleEdit(e)}
          />

          <button onClick={() => updateCountry(countryedit._id)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default EditCountry;
