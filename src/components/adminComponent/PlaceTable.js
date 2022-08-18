


import React from "react";

const PlaceTable = (props) => {
  return (
    <div className="pl-4 py-4 overflow-auto rounded-lg hidden lg:block">
      <table className=" w-2/3">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Name
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Location
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Details
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Photo
            </th>
            <th className="w-24  p-3 text-sm font-semibold tracking-wide text-left">
              Edit
            </th>
            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr className="bg-white">
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
              {props.name}
            </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
              {props.location}
            </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
              {props.details}
            </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
              {props.photo}
            </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
              <button className="font-bold text-blue-500 hover:underline">
                {props.edit}
              </button>
            </td>
            <td className="p-3 text-sm text-gray-700 ">
              <button className="font-bold text-red-500 hover:underline">
                {props.delete}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden w-3/4 pl-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-700">{props.name}</div>
          <div className="text-sm text-gray-700">{props.location}</div>
          <div className="text-sm text-gray-700">{props.details}</div>
          <div className="text-sm text-gray-700">{props.photo}</div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="font-bold text-blue-500 hover:underline">{props.edit}</div>
            <div className="font-bold text-red-500 hover:underline">{props.delete}</div>
          {/* <div className="text-sm text-gray-700">name</div>
          <div className="text-sm text-gray-700">location</div>
          <div className="text-sm text-gray-700">details</div>
          <div className="text-sm text-gray-700">photo</div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="font-bold text-blue-500 hover:underline">edit</div>
            <div className="font-bold text-red-500 hover:underline">delete</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceTable;
