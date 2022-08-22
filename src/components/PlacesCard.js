import React from "react";
import PropTypes from "prop-types";

function PlacesCard(props) {
  return (
    <div
      className="w-80 mx-3 hover:opacity-75 my-5 rounded-2xl shadow-xl shadow-slate-300/60"
      key={props.id}
    >
      <img
        className="w-full h-[300px] object-cover rounded-t-2xl "
        src={props.img}
        alt={props.name}
      />
      <h1 className="text-2xl pt-2 px-2 hover:underline cursor-pointer">
        {props.name}
      </h1>
      <h3 className="max-w-fit p-2 truncate">{props.title}</h3>
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
