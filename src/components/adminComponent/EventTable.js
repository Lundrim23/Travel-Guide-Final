import React from "react";
import { SortIcon } from "../AllSvgs";

const EventTable = (props) => {
  return (
    <div>
      <div className="pl-4 py-4 overflow-auto rounded-lg hidden lg:block">
        <table className=" w-2/3">
          <thead className="bg-gray-50 border-b-2 border-gray-200 dark:bg-neutral-700 transition dark:border-none delay-600">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-50 transition">
                Id
              </th>
              <th
                onClick={() => props.sort("eventName")}
                className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer dark:text-gray-50 transition delay-"
              >
                <div className="flex">
                  Event Name <SortIcon className="ml-2" />
                </div>
              </th>
              <th
                onClick={() => props.sort("eventOrganizator")}
                className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer dark:text-gray-50 transition delay-"
              >
                <div className="flex">
                  Event Organizator <SortIcon />
                </div>
              </th>
              <th
                onClick={() => props.sort("eventTags")}
                className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer dark:text-gray-50 transition delay- "
              >
                <div className="flex">
                  Event Tags <SortIcon />
                </div>
              </th>
              <th
                onClick={() => props.sort("address")}
                className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer dark:text-gray-50 transition delay-"
              >
                <div className="flex">
                  Address <SortIcon />
                </div>
              </th>
              <th
                onClick={() => props.sort("description")}
                className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer dark:text-gray-50 transition delay-"
              >
                <div className="flex">
                  Description <SortIcon />
                </div>
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-50 transition delay-">
                Image
              </th>
              <th className="w-24  p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-50 transition delay-">
                Update
              </th>
              <th className="w-24  p-3 text-sm font-semibold tracking-wide text-left dark:text-gray-50 transition delay-">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:bg-neutral-900 transition dark:divide-neutral-700">
            {props.events.map((event) => (
              <>
                <tr className="bg-white dark:bg-neutral-600 transition">
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 transition whitespace-nowrap">
                    {event._id}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 transition whitespace-nowrap">
                    {event.eventName}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 transition whitespace-nowrap">
                    {event.eventOrganizator}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 transition whitespace-nowrap">
                    {event.eventTags}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 transition whitespace-nowrap">
                    {event.address}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 transition whitespace-nowrap">
                    {event.description}
                  </td>
                  <td className="p-3 text-sm text-gray-700 dark:text-gray-50 transition whitespace-nowrap">
                    <img
                      cloudName="starlabstitans"
                      className="w-12"
                      src={event.imageUrl}
                      alt="on Table"
                    />
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap ">
                    <button
                      className="font-bold text-blue-500 dark:text-teal-500 hover:underline"
                      onClick={() => props.update(event._id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="p-3 text-sm">
                    <button
                      className="font-bold text-red-500 dark:text-red-600 hover:underline"
                      onClick={() => props.remove(event._id)}
                    >
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
            <div className="bg-white p-4 rounded-lg shadow dark:bg-neutral-600 transition">
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {event.eventName}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {event.eventOrganizator}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {event.eventTags}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {event.address}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                {event.description}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-50 transition">
                <img className="w-4" src={event.imageUrl} alt="On table" />
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="font-bold text-blue-500 hover:underline dark:text-teal-500">
                  <button onClick={() => props.update(event._id)}>Edit</button>
                </div>
                <div className="font-bold text-red-500 hover:underline dark:text-red-600">
                  <button onClick={() => props.remove(event._id)}>
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
