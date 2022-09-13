import React from "react";
import { Delete, SortIcon } from "../../AllSvgs";

export default function UserList() {
  return (
    <div className="flex-auto w-10/12 px-5">
      <div class="overflow-x-auto relative sm:rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Id
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Name
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Email
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Role
                  <SortIcon />
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <span class="">Block</span>
              </th>
              <th scope="col" class="py-3 px-6">
                <span class="">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td class="py-4 px-6">Name</td>
              <td class="py-4 px-6">Email</td>
              <td class="py-4 px-6">Role</td>
              <td class="py-4 px-6 text-left">
                <button className="font-medium text-white bg-green-500 px-2 py-1 rounded-full dark:text-blue-500 hover:underline">
                  Block
                </button>
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
    </div>
  );
}
