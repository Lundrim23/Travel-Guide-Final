import React, { useEffect, useState } from "react";
import PlaceTable from "./PlaceTable";
import AddNewPlace from "./AddNewPlace";
import {
  addPlace,
  deletePlace,
  getPlaces,
  updatePlacee,
  uploadCloudinary,
} from "../../utils/fetch";

const PlaceComponent = () => {
  const [place, setPlace] = useState({
    placeName: "",
    placeLocation: "",
    placeDetails: "",
    placePhoto: "",
    terrain: "",
  });

  const [displayPlaces, setDisplayPlaces] = useState([]);

  useEffect(() => {
    //this method gets all places
    const fetchPlaces = async () => {
      try {
        getPlaces().then(function (response) {
          setDisplayPlaces(response.data);
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

    const res = await uploadCloudinary(data);
    setUplphoto(res.data.secure_url);
  };

  const [valuee, setValuee] = useState("");
  const provo = (event) => {
    setValuee(event.target.value);
  };

  //Submit method to submit all data in db ("creates a new place")
  const handleSubmit = async (event, id) => {
    event.preventDefault();

    const newPlace = {
      placeName: place.placeName,
      placeLocation: place.placeLocation,
      placeDetails: place.placeDetails,
      placePhoto: uplphoto,
      terrain: valuee,
    };

    try {
      addPlace(newPlace).then((response) => {
        setDisplayPlaces([...displayPlaces, response.data]);
      });
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
      terrain: place.terrain,
    };

    try {
      updatePlacee(id, updatePlace).then((response) => {
        setDisplayPlaces(
          displayPlaces.map((plac) =>
            plac.id === id ? { ...response.data } : displayPlaces
          )
        );
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method deletes a place
  const removePlace = async (id) => {
    try {
      deletePlace(id);
      const myAllData = displayPlaces.filter((place) => place._id !== id);
      setDisplayPlaces(myAllData);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method sorts by name
  const [order, setOrder] = useState("ASC");
  const sort = (col) => {
    if (order === "ASC") {
      const sorted = [...displayPlaces].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setDisplayPlaces(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...displayPlaces].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setDisplayPlaces(sorted);
      setOrder("ASC");
    }
  };

  return (
    <>
      <AddNewPlace
        imageUpload={imageUpload}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        place={place}
        valuee={valuee}
        provo={provo}
      />
      <PlaceTable
        displayPlaces={displayPlaces}
        remove={removePlace}
        update={updatePlace}
        sort={sort}
      />
    </>
  );
};

export default PlaceComponent;
