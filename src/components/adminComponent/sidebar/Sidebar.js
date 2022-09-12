import React from "react";
import {
  Homedashboard,
  CountryIcon,
  PlaceIcon,
  EventIcon,
  UserIcon,
} from "../../AllSvgs";

function Sidebar() {
  return (
    // sidebar
    <div className="flex-auto w-2/12 sticky bg-gray-100 top-12 h-screen">
      {/* sidebar wrapper */}
      <div className="p-5">
        {/* sidebar menu */}
        <div className="mb-2">
          {/* sidebar title */}
          <h3 className="text-2xl">Dashboard</h3>

          {/* sidebarlist */}
          <ul className="list-none p-1">
            {/* sidebarlistitem */}
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <Homedashboard />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                Home
              </h1>
            </li>
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <EventIcon />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                Event
              </h1>
            </li>
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <PlaceIcon />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                Place
              </h1>
            </li>
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <CountryIcon />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                Country
              </h1>
            </li>
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <UserIcon />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                Users
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
