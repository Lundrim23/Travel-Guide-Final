import React from "react";
import PropTypes from "prop-types";

function PlacesCard(props) {
  return (
    <div
      className="w-80 mx-3 my-5 rounded-2xl shadow-xl shadow-slate-300/60"
      key={props.id}
    >
      <img
        className="w-full h-[300px]  hover:opacity-75 object-cover rounded-t-2xl "
        src={props.img}
        alt={props.name}
      />
      <h1 className="text-2xl pt-2 px-2">{props.name}</h1>
      <h3 className="max-w-fit p-2 text-md tracking-tight font-light text-slate-400 leading-6 text-ellipsis overflow-hidden">
        {props.title}
      </h3>
      <button
        type="button"
        title="more about"
        class="w-full order-first py-2 px-3 ml-2 mb-2 text-center rounded-xl bg-gray-200 transition hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
      >
        <span class="block text-gray-600 font-semibold">Read more</span>
      </button>
    </div>
  );
}

PlacesCard.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default PlacesCard;
