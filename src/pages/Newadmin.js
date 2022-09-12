import React from "react";
import { Link, Outlet } from "react-router-dom";
import Topbar from "../components/adminComponent/topbar/Topbar";
import Sidebar from "../components/adminComponent/sidebar/Sidebar";

function Newadmin() {
  return (
    <>
      <div>
        <Link to="/"></Link>
      </div>

      <Topbar />

      <div className="flex">
        <Sidebar />
        <div className="flex-auto w-10/12 ">
            Other pages
        </div>
      </div>
    </>
  );
}

export default Newadmin;
