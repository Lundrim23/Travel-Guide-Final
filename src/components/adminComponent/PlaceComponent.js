import React, { useEffect, useState } from "react";
import PlaceTable from "./PlaceTable";
import AddNewPlace from "./AddNewPlace";
import axios from "axios";
import { apii } from "../../utils/fetch";

const PlaceComponent = () => {
  const [place, setPlace] = useState({
    placeName: "",
    placeLocation: "",
    placeDetails: "",
    placePhoto: "",
  });

  const [displayPlaces, setDisplayPlaces] = useState([]);

  useEffect(() => {
    //this method gets all places
    const fetchPlaces = async () => {
      try {
        const response = await apii.get("/get");
        setDisplayPlaces(response.data);
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
    fetchPlaces();
  }, []);

  //this method populates state with data
  function handleChange(event) {
    const { name, value } = event.target;

    setPlace((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const [uplphoto, setUplphoto] = useState("");
  //this method uploads photo in cloudinary
  const imageUpload = async (event) => {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "jipopo2x");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/starlabstitans/image/upload",
      data
    );

    setUplphoto(res.data.secure_url);
  };

  //Submit method to submit all data in db ("creates a new place")
  const handleSubmit = async (event, id) => {
    event.preventDefault();

    const newPlace = {
      placeName: place.placeName,
      placeLocation: place.placeLocation,
      placeDetails: place.placeDetails,
      placePhoto: uplphoto,
    };

    try {
      const response = await apii.post("/", newPlace);
      const allPlaces = [...displayPlaces, response.data];
      setDisplayPlaces(allPlaces);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method updates an event
  const updatePlace = async (id) => {
    const updatePlace = {
      placeName: place.placeName,
      placeLocation: place.placeLocation,
      placeDetails: place.placeDetails,
      placePhoto: uplphoto,
    };

    try {
      const response = await apii.patch(`/edit/${id}`, updatePlace);
      setDisplayPlaces(
        displayPlaces.map((onePlace) =>
          onePlace.id === id ? { ...response.data } : displayPlaces
        )
      );
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method deletes a place
  const removePlace = async (id) => {
    try {
      await apii.delete(`/delete/${id}`);
      const myAllData = displayPlaces.filter((oneplace) => oneplace._id !== id);
      setDisplayPlaces(myAllData);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <>
      <AddNewPlace
        imageUpload={imageUpload}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        place={place}
      />
      <PlaceTable
        displayPlaces={displayPlaces}
        remove={removePlace}
        update={updatePlace}
      />
    </>
  );
};

export default PlaceComponent;
