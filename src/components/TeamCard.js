import React from "react";
import PropTypes from "prop-types";

function TeamCard(props) {
  return (
    <div className="min-w-[200px] bg-white m-2.5 p-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-200 dark:border-gray-200">
      <div className="flex flex-col items-center py-5">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={props.img}
          alt={props.name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-700">{props.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {props.title}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {props.email}
        </span>
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
};

export default TeamCard;
