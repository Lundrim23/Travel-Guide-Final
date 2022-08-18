import React from "react";
import PropTypes from "prop-types";

const Card = () => {
  return (
    <div className="mb-40">
      <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <a href="#" className="w-full block h-full">
          <img
            alt="blog photo"
            src="https://geoguessr.com/seterra/images/system/pristina.jpg"
            className="max-h-40 w-full object-cover"
          />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium">Read more</p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {props.countryName}
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              {props.contentName}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  countryName: PropTypes.string,
  contentName: PropTypes.string,
};

export default Card;
