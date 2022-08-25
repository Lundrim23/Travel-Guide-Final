import React from "react";
import { Link } from "react-router-dom";
import AdminSidebarElements from "./AdminSidebarElements.js";

import {
  HiddenMenuIcon,
  DashboardIcon,
  AdminIcon,
  EventIcon,
  PlaceIcon,
  CountryIcon,
} from "../AllSvgs.js";

const AdminSidebar = () => {
  return (
    <div className="flex flex-row ">
      <button className=" pl-3 relative z-30 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition">
        <HiddenMenuIcon className="place-items-center" />
      </button>

      <div className="flex flex-col bg-gray-100 justify-between   z-20 fixed top-0 -left-full lg:left-0 h-screen w-9/12 lg:w-72 shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex items-center justify-between text-gray-600 text-3xl px-5 py-8 ">
          <b>Starlabs</b>
        </div>

        <div className="flex flex-col flex-auto left-[-300px]">
          <AdminSidebarElements
            name={<Link to="/admin">Dashboard</Link>}
            icon={<DashboardIcon />}
          />

          <AdminSidebarElements
            name={<Link to="/admin/event">Events</Link>}
            icon={<EventIcon />}
          />

          <AdminSidebarElements
            name={<Link to="/admin/places">Places</Link>}
            icon={<PlaceIcon />}
          />

          <AdminSidebarElements
            name={<Link to="/admin/country">Country</Link>}
            icon={<CountryIcon />}
          />

          <AdminSidebarElements
            name={<Link to="/admin/users">Users</Link>}
            icon={<AdminIcon />}
          />
        </div>

        <div className="flex flex-col">
          <button className="rounded-full bg-gray-400 py-2 text-chite text-lg mb-2">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
