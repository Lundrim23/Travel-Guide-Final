import React from "react";

const GridComponent = (props) => {
    return(
        <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm w-80">
        <div>
          <h1 className="text-sm text-gray-400 ">{props.name}</h1>
          <div className="flex items-center pt-1">
            <h1 className="text-3xl font-medium text-gray-600 ">{props.count}</h1>
          </div>
        </div>
        <div className="text-gray-500">
          {/* <Views /> */}
          {props.svg}
        </div>
      </div>
    )
}

export default GridComponent;