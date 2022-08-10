import React from "react";
import CountryCard from "../components/CountryCard";
import contries from "../Data/contries.data";

function createCountryCard(contries) {
  return (
    <CountryCard key={contries.id} img={contries.flag} name={contries.name} />
  );
}
function Places() {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl text-center my-3">My next trip will be in...</h1>
      <div className="flex justify-between">
        {contries.map(createCountryCard)}
      </div>
    </div>
  );
}

export default Places;
