import React from "react";
import { Link, Outlet } from "react-router-dom";
import Topbar from "../components/adminComponent/topbar/Topbar";
import Sidebar from "../components/adminComponent/sidebar/Sidebar";
import Home from "../components/adminComponent/pages/Home";

function Newadmin() {
  return (
    <>
      <div>
        <Link to="/"></Link>
      </div>

      <Topbar />

      <div className="flex mt-2">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default Newadmin;
