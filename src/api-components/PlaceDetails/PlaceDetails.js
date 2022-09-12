import React, { useState } from "react";
import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  return (
    <div>
      <h1>{place.name}</h1>
    </div>
  );
};

export default PlaceDetails;
