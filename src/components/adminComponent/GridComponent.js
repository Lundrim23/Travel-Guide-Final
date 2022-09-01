import React from "react";
import PropTypes from "prop-types";

const GridComponent = (props) => {
  return (
    <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm w-80 dark:bg-neutral-700 transition delay-300">
      <div>
        <h1 className="text-sm text-gray-400 dark:text-gray-50 transition">
          {props.name}
        </h1>
        <h1 className="text-sm text-gray-400">{props.name}</h1>
        <div className="flex items-center pt-1">
          <h1 className="text-3xl font-medium text-gray-600 dark:text-gray-100 transition delay-400">
            {props.count}
          </h1>
        </div>
      </div>
      <div className="text-gray-500">
        {/* <Views /> */}
        {props.svg}
      </div>
    </div>
  );
};

GridComponent.propTypes = {
  name: PropTypes.string,
  count: PropTypes.string,
};

export default GridComponent;
