import React from "react";
import { Link, Outlet } from "react-router-dom";

// import Home from "../components/adminComponent/pages/Home";
import Topbar from "../components/adminComponent/pages/Topbar";
import Sidebar from "../components/adminComponent/pages/Sidebar";

function Newadmin() {
  return (
    <div className="dark:bg-neutral-800">
      <div>
        <Link to="/"></Link>
      </div>

      <Topbar />

      <div className="flex mt-2">
        <Sidebar />
        {/* <Home /> */}
        <Outlet />
      </div>

      {/* <Outlet /> */}
    </div>
  );
}

export default Newadmin;
