import React from "react";
import PropTypes from "prop-types";

const AdminSidebarElements = (props) => {
  return (
    <div className="p-2 hover:bg-gray-300  hover:text-cyan-600  cursor-pointer dark:hover:bg-neutral-800">
      <div className="flex flex-row space-x-3 dark:text-gray-50 transition delay-400  ">
        {props.icon}
        <h4 className="font-bold text-gray hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
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
