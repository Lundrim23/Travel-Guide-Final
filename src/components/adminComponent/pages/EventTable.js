import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SortIcon, Delete } from "../../AllSvgs";

function EventTable(props) {
  return (
    <div className="flex-auto w-10/12 px-5 dark:bg-neutral-800 transition delay-500">
      <Link to="/admin/newevent">
        <button className="w-40 border-none p-1 mb-4 bg-teal-400 rounded-md cursor-pointer text-white">
          Create Event
        </button>
      </Link>
      <Outlet />
      <div class="overflow-x-auto relative sm:rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 transition dark:text-gray-400">
            <tr className="dark:text-gray-50 cursor-pointer">
              <th
                onClick={() => props.sort("eventName")}
                scope="col"
                class="py-3 px-6"
              >
                <div class="flex items-center">
                  Event Name
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => props.sort("eventOrganizator")}
                scope="col"
                class="py-3 px-6"
              >
                <div class="flex items-center">
                  Event Organizator
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => props.sort("eventTags")}
                scope="col"
                class="py-3 px-6"
              >
                <div class="flex items-center">
                  Event Tags
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => props.sort("address")}
                scope="col"
                class="py-3 px-6"
              >
                <div class="flex items-center">
                  Event Address
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => props.sort("description")}
                scope="col"
                class="py-3 px-6"
              >
                <div class="flex items-center">
                  Event Description
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6 cursor-auto">
                Event Image
              </th>
              <th scope="col" class="py-3 px-6 cursor-auto">
                <span>Edit</span>
              </th>
              <th scope="col" class="py-3 px-6 cursor-auto">
                <span>Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="dark:bg-neutral-900 transition dark:divide-neutral-700 dark:text-gray-50">
            {props.events.map((event) => (
              <>
                <tr class="bg-white border-b dark:bg-neutral-600 transition dark:border-none">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {event.eventName}
                  </th>
                  <td class="py-4 px-6">{event.eventOrganizator}</td>
                  <td class="py-4 px-6">{event.eventTags}</td>
                  <td class="py-4 px-6">{event.address}</td>
                  <td class="py-4 px-6">{event.description}</td>
                  <td class="py-4 px-6">
                    {" "}
                    <img
                      cloudName="starlabstitans"
                      className="w-12"
                      src={event.imageUrl}
                      alt="on Table"
                    />
                  </td>
                  <td class="py-4 px-6 text-left">
                    <Link to="editevent">
                      <button className="font-medium text-blue-600 dark:text-blue-500 dark:bg-gray-700 px-2 py-1 rounded-full hover:underline">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td class="py-4 px-6 text-left">
                    <button
                      onClick={() => props.remove(event._id)}
                      className="font-medium text-red-500 dark:text-red-500 hover:underline"
                    >
                      <Delete />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventTable;
