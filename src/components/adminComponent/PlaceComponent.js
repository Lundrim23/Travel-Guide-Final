import React, { useEffect, useState } from "react";
import PlaceTable from "./PlaceTable";
import AddNewPlace from "./AddNewPlace";
import axios from "axios";

const PlaceComponent = (props) => {
  const [place, setPlace] = useState({
    placeName: "",
    placeLocation: "",
    placeDetails: "",
    placePhoto: "",
  });

  const [displayPlaces, setDisplayPlaces] = useState([]);

  useEffect(() => {
    fetchPlaces();
  }, []);

  //this method gets all places
  const fetchPlaces = () => {
    const url = "http://localhost:5000/api/places/get";

    axios
      .get(url)
      .then((res) => {
        setDisplayPlaces(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //this method populates state with data
  const handleChange = (event) => {
    const { name, value } = event.target;

    setPlace((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const [image, setImage] = useState("");
  //Submit method to submit all data in db ("creates a new place")
  const handleSubmit = async (event) => {
    const url = "http://localhost:5000/api/places/";
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "jipopo2x");

    const res = await axios.post("https://api.cloudinary.com/v1_1/starlabstitans/image/upload", formData);
    const imageUrl = res.data.secure_url;
    console.log("this is image url " + imageUrl);

    const newPlace = {
      placeName: place.placeName,
      placeLocation: place.placeLocation,
      placeDetails: place.placeDetails,
      placePhoto: imageUrl,
    };

    axios.post(url, newPlace);
  };

  //this method updates an event
  const updatePlace = (id) => {
    const url = "http://localhost:5000/api/places/edit/";

    const updatePlace = {
      placeName: place.placeName,
      placeLocation: place.placeLocation,
      placeDetails: place.placeDetails,
      placePhoto: place.placePhoto,
    };

    axios.patch(url + id, updatePlace);
  };

  //this method deletes a place
  const removePlace = (id) => {
    const url = "http://localhost:5000/api/places/delete/";

    axios
      .delete(url + id)
      .then((res) => {
        const myAllData = displayPlaces.filter((item) => item._id !== id);
        setDisplayPlaces(myAllData);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <AddNewPlace
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={place}
        name={image}
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
