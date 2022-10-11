import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PlaceFilters(props) {
  const notify = () => {
    toast.success("Showing All Places", { autoClose: 1500 });
  };

  const notify2 = () => {
    toast.success("Showing All Mountains", { autoClose: 1500 });
  };

  const notify3 = () => {
    toast.success("Showing All Cities", { autoClose: 1500 });
  };

  const notify4 = () => {
    toast.success("Showing All Lakes", { autoClose: 1500 });
  };
  const notify5 = () => {
    toast.success("Showing All Beaches", { autoClose: 1500 });
  };
  const notify6 = () => {
    toast.success("Showing All Parks", { autoClose: 1500 });
  };
  const notify7 = () => {
    toast.success("Showing All Cultural Heritages", { autoClose: 1500 });
  };
  const notify8 = () => {
    toast.success("Showing All Rivers", { autoClose: 1500 });
  };
  const notify9 = () => {
    toast.success("Showing All Waterfalls", { autoClose: 1500 });
  };

  return (
    <>
      <div
        onClick={() => {
          props.vlera(null);
          notify();
        }}
        className="container w-[150px] m-4 p-2 text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>All Places</p>
        </p>
      </div>
      <div
        onClick={() => {
          props.vlera("Mountain");
          notify2();
        }}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Mountains</p>
        </p>
      </div>

      <div
        onClick={() => {
          props.vlera("City");
          notify3();
        }}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Cities</p>
        </p>
      </div>

      <div
        onClick={() => {
          props.vlera("Lake");
          notify4();
        }}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Lakes</p>
        </p>
      </div>

      <div
        onClick={() => {
          props.vlera("Beach");
          notify5();
        }}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Beaches</p>
        </p>
      </div>

      <div
        onClick={() => {
          props.vlera("Park");
          notify6();
        }}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Parks</p>
        </p>
      </div>
      <div
        onClick={() => {
          props.vlera("Cultural Heritage");
          notify7();
        }}
        className="container w-[150px] m-4 p-2 h-14 text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="font-semibold mt-1">
          <p>Cultural Heritage</p>
        </p>
      </div>
      <div
        onClick={() => {
          props.vlera("Rivers");
          notify8();
        }}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Rivers</p>
        </p>
      </div>

      <div
        onClick={() => {
          props.vlera("Waterfall");
          notify9();
        }}
        className="container w-[150px] m-4 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-2xl">
          <p>Waterfalls</p>
        </p>
      </div>
      <ToastContainer />
    </>
  );
}

export default PlaceFilters;
