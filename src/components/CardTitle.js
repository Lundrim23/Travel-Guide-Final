import React from "react";

const CardTitle = (props) => {
  return (
    <div>
      <div className="mt-40">
        <div className="title m">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-4">
            {props.title}
          </h2>

          <p className=" text-center text-2xl font-light text-gray-400">
            {props.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTitle;
