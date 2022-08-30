import React from "react";
import { SortIcon } from "../AllSvgs";

const EventTable = (props) => {
  return (
    <div>
      <div className="pl-4 py-4 overflow-auto rounded-lg hidden lg:block">
        <table className=" w-2/3">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Id</th>
              <th onClick={() => props.sort("eventName")} className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer">
                <div className="flex">
                  Event Name <SortIcon className="ml-2" />
                </div>
              </th>
              <th
                onClick={() => props.sort("eventOrganizator")}
                className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer"
              >
                <div className="flex">
                  Event Organizator <SortIcon />
                </div>
              </th>
              <th onClick={() => props.sort("eventTags")} className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer ">
                <div className="flex">
                  Event Tags <SortIcon />
                </div>
              </th>
              <th onClick={() => props.sort("address")} className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer">
                <div className="flex">
                  Address <SortIcon />
                </div>
              </th>
              <th
                onClick={() => props.sort("description")}
                className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer"
              >
                <div className="flex">
                  Description <SortIcon />
                </div>
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Image</th>
              <th className="w-24  p-3 text-sm font-semibold tracking-wide text-left">Update</th>
              <th className="w-24  p-3 text-sm font-semibold tracking-wide text-left">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {props.events.map((event) => (
              <>
                <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap" >
                    {event._id}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {event.eventName}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {event.eventOrganizator}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {event.eventTags}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {event.address}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {event.description}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <img
                      cloudName="starlabstitans"
                      className="w-12"
                      src={event.imageUrl}
                      alt="on Table"
                    />
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    <button className="font-bold text-blue-500 hover:underline" onClick={() => props.update(event._id)}>
                      Edit
                    </button>
                  </td>
                  <td className="p-3 text-sm text-gray-700 ">
                    <button className="font-bold text-red-500 hover:underline" onClick={() => props.remove(event._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden w-3/4 pl-4">
      {props.events.map((event) => (
          <>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-sm text-gray-700">{event.eventName}</div>
              <div className="text-sm text-gray-700">{event.eventOrganizator}</div>
              <div className="text-sm text-gray-700">{event.eventTags}</div>
              <div className="text-sm text-gray-700">{event.address}</div>
              <div className="text-sm text-gray-700">{event.description}</div>
              <div className="text-sm text-gray-700">                    
                <img 
                    className="w-4"
                      src={event.imageUrl}
                      alt="On table"
                    /></div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="font-bold text-blue-500 hover:underline">
                <button  onClick={() => props.update(event._id)}>
                      Edit
                    </button>
                </div>
                <div className="font-bold text-red-500 hover:underline">
                <button  onClick={() => props.remove(event._id)}>
                      Delete
                    </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

    </div>
  );
};

export default EventTable;
