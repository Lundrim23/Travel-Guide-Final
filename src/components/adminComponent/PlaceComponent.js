import React, { useEffect, useState } from "react";
import PlaceTable from "./PlaceTable";
import AddNewPlace from "./AddNewPlace";
import axios from "axios";

const PlaceComponent = () => {
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
    const url = process.env.REACT_APP_GET_ALL_PLACES;

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
  function handleChange(event) {
    const { name, value } = event.target;

    setPlace((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };


 const [uplphoto, setUplphoto] = useState("")
   //this method uploads photo in cloudinary 
  const imageUpload = async(event) => {
    
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append("upload_preset", "jipopo2x");

    const res = await axios.post("https://api.cloudinary.com/v1_1/starlabstitans/image/upload", data);

    setUplphoto(res.data.secure_url);
  }

  //Submit method to submit all data in db ("creates a new place")
  const handleSubmit = async (event, id) => {
    const url = process.env.REACT_APP_SAVE_NEW_PLACE;
    event.preventDefault();

    const newPlace = {
      placeName: place.placeName,
      placeLocation: place.placeLocation,
      placeDetails: place.placeDetails,
      placePhoto: uplphoto,
    };

    axios.post(url, newPlace);
  };

  //this method updates an event
  const updatePlace = (id) => {
    const url = process.env.REACT_APP_EDIT_PLACE;

    const updatePlace = {
      placeName: place.placeName,
      placeLocation: place.placeLocation,
      placeDetails: place.placeDetails,
      placePhoto: uplphoto,
    };

    axios.patch(url + id, updatePlace);
  };

  //this method deletes a place
  const removePlace = (id) => {
    const url = process.env.REACT_APP_DELETE_PLACE;

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
