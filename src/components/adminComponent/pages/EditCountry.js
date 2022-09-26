import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCoutrybyId, updateCountryy } from "../../../utils/fetch";
import EditCountryForm from "./EditCountryForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditCountry() {
  const [countryedit, setCountryedit] = useState({
    CountryName: "",
    CapitalCity: "",
    Population: "",
  });

  const { id } = useParams();
  const notify = () => {
    toast.success("Country Updated Successfuly");
  };

  useEffect(() => {
    const editCountryid = async () => {
      getCoutrybyId(id).then(function (response) {
        setCountryedit(response.data);
      });
    };
    editCountryid();
  }, [id]);

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
      notify();
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <EditCountryForm
      countryedit={countryedit}
      handleEdit={handleEdit}
      updateCountry={updateCountry}
    />
  );
}

export default EditCountry;
