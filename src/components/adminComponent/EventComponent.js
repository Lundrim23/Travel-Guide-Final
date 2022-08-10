import React from "react";
import { Outlet } from "react-router-dom";
import AddEvent from "../adminComponent/AddEvent";

const EventComponent = () => {
  return (
    <>
      {/* Popup starts here */}
      <div>
        <AddEvent />
      </div>
    </>
  );
};

export default EventComponent;
