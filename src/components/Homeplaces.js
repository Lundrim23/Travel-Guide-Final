import React from "react";
import Card from "./Card";

function Homeplaces() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-white ">
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <Card />
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <Card />
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <Card />
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeplaces;
