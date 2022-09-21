import React from "react";
import PropTypes from "prop-types";

const PlacesCards = (props) => {
  return (
    <div>
      <div className="mx-auto flex w-96 flex-col bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-20 ">
        <img
          className="aspect-video w-96 rounded-t-2xl object-cover object-center"
          src="https://albaniamyway.com/wp-content/uploads/2020/08/ksamil-beach-saranda-albania.jpg"
        />
        <div className="p-4">
          <small className="text-emerald-800 text-xs">{props.PlacesLocation}</small>
          <h1 className="text-2xl font-medium text-gray-800 pb-2">
            {props.PlacesTitle}
          </h1>
          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
            {props.PlacesText}
          </p>
          <button
            type="button"
            title="more about"
            className="w-full order-first py-2 px-3 mt-2 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
          >
            <span className="block text-gray-600 font-semibold">Read more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlacesCards.propTypes = {
  PlacesLocation: PropTypes.string,
  PlacesTitle: PropTypes.string,
  PlacesText: PropTypes.string,
};

export default PlacesCards;
