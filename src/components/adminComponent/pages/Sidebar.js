import React from "react";
import { Link } from "react-router-dom";
import {
  Homedashboard,
  CountryIcon,
  PlaceIcon,
  EventIcon,
  UserIcon,
  AddNew,
} from "../../AllSvgs";

function Sidebar() {
  return (
    <div className="flex-auto w-2/12 sticky rounded-lg top-12 h-screen shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:bg-neutral-700 transition delay-100">
      <div className="p-5">
        <div className="mb-2">
          <h3 className="text-2xl">Dashboard</h3>

          <ul className="list-none p-1">
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <Homedashboard />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                <Link to="/admin">Home</Link>
              </h1>
            </li>
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <EventIcon />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                <Link to="/admin/events">Events</Link>
              </h1>
            </li>
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <PlaceIcon />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                <Link to="/admin/places">Places</Link>
              </h1>
            </li>
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <CountryIcon />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                <Link to="/admin/countries">Countries</Link>
              </h1>
            </li>
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <UserIcon />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                <Link to="/admin/users">Users</Link>
              </h1>
            </li>
            <h3 className="text-2xl">Add new</h3>
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <AddNew />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                <Link to="/admin/newevent">Add New Event</Link>
              </h1>
            </li>
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <AddNew />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                <Link to="/admin/newplace">Add New Place</Link>
              </h1>
            </li>
            <li className="flex cursor-pointer p-1 items-center hover:bg-gray-300  hover:text-cyan-600  dark:hover:bg-neutral-800">
              <AddNew />
              <h1 className="pl-2 hover:text-cyan-600 dark:text-gray-50 transition delay-400 dark:hover:text-cyan-600">
                <Link to="/admin/newcountry">Add New Country</Link>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
