import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="pt-12">
      <a href="/a" className="mx-auto">
        <img
          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
          src="https://pbs.twimg.com/media/FWwGvkwWIAALOB3?format=jpg&name=large"
          alt=""
        ></img>{" "}
      </a>

      <div className="text-center mt-6">
        <h1 className="text-gray-900 text-xl font-bold mb-1">Kosova</h1>

        <div className="text-gray-700 font-light mb-2">Prishtine, Kosova</div>
      </div>
    </div>
  );
};

export default Card;
