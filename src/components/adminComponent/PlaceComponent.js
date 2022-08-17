import React from "react";
import PlaceTable from "./PlaceTable";
import AddNewPlace from "./AddNewPlace";

const PlaceComponent = () => {
  return (
    <>
      <AddNewPlace 
        // name={""}
        // location={""}
        // details={""}
        // image={""}
      />
      <PlaceTable
        name={"Kosovo Tour"}
        location={"Kosovo"}
        details={"Details"}
        photo={"photo"}
        edit={"edit"}
        delete={"delete"}
      />
    </>
  );
};

export default PlaceComponent;
