import React from "react";
import PropTypes from "prop-types";

const AdminSidebarElements = (props) => {
  return (
    <div className="p-2 hover:bg-gray-300  hover:text-cyan-600  cursor-pointer">
      <div className="flex flex-row space-x-3">
        {props.icon}
        <h4 className="font-bold text-gray hover:text-cyan-600">
          {props.name}
        </h4>
      </div>
    </div>
  );
};

AdminSidebarElements.propTypes = {
  name: PropTypes.string,
};

export default AdminSidebarElements;
