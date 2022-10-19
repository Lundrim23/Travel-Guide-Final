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
    <div className="mx-auto flex flex-row md:flex-wrap lg:flex-wrap md:gap-1 lg:gap-1">
      <div
        onClick={() => {
          props.vlera(null);
          notify();
        }}
        className="container place-self-center w-fit mx-2 p-2 text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-[#051622] hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-lg">
          <p>All Places</p>
        </p>
      </div>
      <div
        onClick={() => {
          props.vlera("Mountain");
          notify2();
        }}
        className="container place-self-center w-fit mx-2 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-lg">
          <p>Mountains</p>
        </p>
      </div>

      <div
        onClick={() => {
          props.vlera("City");
          notify3();
        }}
        className="container place-self-center w-fit mx-2 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-lg">
          <p>Cities</p>
        </p>
      </div>

      <div
        onClick={() => {
          props.vlera("Lake");
          notify4();
        }}
        className="container place-self-center w-fit mx-2 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-lg">
          <p>Lakes</p>
        </p>
      </div>

      <div
        onClick={() => {
          props.vlera("Beach");
          notify5();
        }}
        className="container place-self-center w-fit mx-2 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-lg">
          <p>Beaches</p>
        </p>
      </div>

      <div
        onClick={() => {
          props.vlera("Park");
          notify6();
        }}
        className="container place-self-center w-fit mx-2 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-lg">
          <p>Parks</p>
        </p>
      </div>
      <div
        onClick={() => {
          props.vlera("Cultural Heritage");
          notify7();
        }}
        className="container place-self-center w-fit mx-2 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-lg">
          <p>Cultural Heritage</p>
        </p>
      </div>
      <div
        onClick={() => {
          props.vlera("Rivers");
          notify8();
        }}
        className="container place-self-center w-fit mx-2 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-lg">
          <p>Rivers</p>
        </p>
      </div>

      <div
        onClick={() => {
          props.vlera("Waterfall");
          notify9();
        }}
        className="container place-self-center w-fit mx-2 p-2  text-center  rounded-[10px] border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-0 max-w-md"
      >
        <p className="text-lg">
          <p>Waterfalls</p>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PlaceFilters;
