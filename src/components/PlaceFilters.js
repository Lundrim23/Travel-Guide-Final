import React from "react";

function PlaceFilters(props) {
  return (
    <>
      <div
        onClick={() => props.vlera(null)}
        className="container w-[150px] m-4 p-2 text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>All Places</p>
        </p>
      </div>
      <div
        onClick={() => props.vlera("Mountain")}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Mountains</p>
        </p>
      </div>

      <div
        onClick={() => props.vlera("City")}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Cities</p>
        </p>
      </div>

      <div
        onClick={() => props.vlera("Lake")}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Lakes</p>
        </p>
      </div>

      <div
        onClick={() => props.vlera("Beach")}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Beaches</p>
        </p>
      </div>

      <div
        onClick={() => props.vlera("Park")}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Parks</p>
        </p>
      </div>
      <div
        onClick={() => props.vlera("Cultural Heritage")}
        className="container w-[150px] m-4 p-2 h-14 text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="font-semibold mt-1">
          <p>Cultural Heritage</p>
        </p>
      </div>
      <div
        onClick={() => props.vlera("Rivers")}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Rivers</p>
        </p>
      </div>

      <div
        onClick={() => props.vlera("Waterfall")}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Waterfalls</p>
        </p>
      </div>
    </>
  );
}

export default PlaceFilters;
