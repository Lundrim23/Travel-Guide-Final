import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div>
      <a href="/a" class="mx-auto">
        <img
          class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
          src="https://pbs.twimg.com/media/FWwGvkwWIAALOB3?format=jpg&name=large"
          alt=""
        ></img>{" "}
      </a>

      <div class="text-center mt-6">
        <h1 class="text-gray-900 text-xl font-bold mb-1">Kosova</h1>

        <div class="text-gray-700 font-light mb-2">Prishtine, Kosova</div>
      </div>
    </div>
  );
};

export default Card;
