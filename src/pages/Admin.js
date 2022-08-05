import React, { useState } from "react";
import { Link } from "react-router-dom";

import AdminTable from "./components/adminComponent/adminTable.js";
import AdminSidebar from "./components/adminComponent/AdminSidebar.js";
import GridComponent from "./components/adminComponent/GridComponent.js";

import { Views } from "./components/AllSvgs.js";
import { RegisteredUsers } from "./components/AllSvgs.js";
import { Messages } from "./components/AllSvgs.js";
import AddEvent from "./components/adminComponent/AddEvent.js";

function Admin() {

  //this one gets the todays date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <>
      <div>
        <Link to="/"></Link>
      </div>

      {/* start of sidebar */}
      <AdminSidebar />

      <div className="w-full">
        <div className="flex-auto lg:pl-72">
          <div className="flex flex-col">
            <div className="flex flex-col bg-gray-100 pl-5">
                <h4 className="font-bold text-gray-500 p-1">Dashboard</h4>
              <p className="text-gray-500 p-1">{date}</p>
            </div>

            <div className="min-h-screen bg-gray-200">
              <div className="mt-8 grid gap-10 lg:grid-cols-3 sm-grid-cols md p-4 w-4/5">
                {/* grid starts here */}
                <GridComponent
                  name={"Daily Views"}
                  count={"100"}
                  svg={<Views />}
                />
                <GridComponent
                  name={"Registered Users"}
                  count={"100"}
                  svg={<RegisteredUsers />}
                />
                <GridComponent
                  name={"Messages"}
                  count={"100"}
                  svg={<Messages />}
                />
              </div>

              {/* table starts here */}
              <h1 className="p-5 font-bold text-gray-600">Users</h1>
              <div className="container p-5 ">
                <AdminTable />
              </div>
              {/* table ends here */}
              

              {/* Popup starts here */}
              <div>
                <AddEvent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;