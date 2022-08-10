import React from "react";

function CountryCard(props) {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-[300px] h-[200px]"
          src={props.img}
          alt={props.name}
        />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          {props.name}
        </h5>
      </div>
    </div>
  );
}

export default CountryCard;
