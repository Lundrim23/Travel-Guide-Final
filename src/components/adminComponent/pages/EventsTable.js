import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SortIcon, Delete } from "../../AllSvgs";

export default function EventsTable() {
  return (
    <div className="flex-auto w-10/12 px-5">
      <div class="overflow-x-auto relative sm:rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                  Event Name
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Event Organizator
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Event Tags
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Event Address
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Event Description
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                  Event Image
              </th>
              <th scope="col" class="py-3 px-6">
                <span>Edit</span>
              </th>
              <th scope="col" class="py-3 px-6">
                <span >Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                EventName
              </th>
              <td class="py-4 px-6">Event Organizator</td>
              <td class="py-4 px-6">Event Tags</td>
              <td class="py-4 px-6">Event Address</td>
              <td class="py-4 px-6">Event Description</td>
              <td class="py-4 px-6">Event Image</td>
              <td class="py-4 px-6 text-left">
                <Link to='editevent'>
                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </button>
                </Link>
              </td>

              <td class="py-4 px-6 text-left">
                <button className="font-medium text-red-500 dark:text-blue-500 hover:underline">
                    <Delete />
                </button>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  );
}
