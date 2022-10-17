import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPlaceById } from "../utils/fetch";

function FullPostPlace() {
  const [place, setPlace] = useState({
    placeName: "",
    placeLocation: "",
    placeDetails: "",
    terrain: "",
    placePhoto: "",
  });

  const location = useLocation();

  useEffect(() => {
    const id = location.state.idpost;
    getPlaceById(id).then(function (res) {
      setPlace(res.data);
      console.log("res data", res.data);
    });
  }, []);

  console.log("id deri qitu", location.state.idpost);

  return (
    <div>
      <h1>Hello {location.state.idpost}</h1>
    </div>
  );
}

export default FullPostPlace;
