import React, { useState } from "react";
import PlaceTable from "./PlaceTable";
import AddNewPlace from "./AddNewPlace";

const PlaceComponent = (props) => {

  const [place, setPlace] = useState({
    placeName: "",
    placeLocation: "",
    placeDetails: "",
    placePhoto: "",
  });

  
  const handleChange = (event) => {

    const {name, value} = event.target;
    console.log("Event: ", event.target.value)

    setPlace((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  } 

  const handleSubmit = (event) => {
    event.preventDefault();

  const newPlace = {
      placeName: place.placeName,
      placeLocation: place.placeLocation,
      placeDetails: place.placeDetails,
      placePhoto: place.placePhoto,
    }

    console.log("State inside handlesubmit: ", newPlace);
  }

  console.log("qitu outside place: ", place);


  return (
    <>
      <AddNewPlace 
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
        value = {place}
      />
      <PlaceTable
        name={"Kosovo Tour"}
        location={"Kosovo"}
        details={"Details"}
        photo={"photo"}
        edit={"edit"}
        delete={"delete"}
      />

{/* <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden w-3/4 pl-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-700">{props.name}</div>
          <div className="text-sm text-gray-700">{props.location}</div>
          <div className="text-sm text-gray-700">{props.details}</div>
          <div className="text-sm text-gray-700">{props.photo}</div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="font-bold text-blue-500 hover:underline">{props.edit}</div>
            <div className="font-bold text-red-500 hover:underline">{props.delete}</div>
            <div className="text-sm text-gray-700">name</div>
          <div className="text-sm text-gray-700">location</div>
          <div className="text-sm text-gray-700">details</div>
          <div className="text-sm text-gray-700">photo</div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="font-bold text-blue-500 hover:underline">edit</div>
            <div className="font-bold text-red-500 hover:underline">delete</div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PlaceComponent;
