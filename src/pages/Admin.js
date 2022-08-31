import React from "react";
import { Link, Outlet } from "react-router-dom";

import AdminSidebar from "../components/adminComponent/AdminSidebar.js";
import GridComponent from "../components/adminComponent/GridComponent.js";
import useDarkMode from "../components/adminComponent/UseDarkMode.js";

import {
  Views,
  RegisteredUsers,
  Messages,
  LightIcon,
  DarkIcon,
} from "../components/AllSvgs.js";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../redux/features/users/userSlice.js";

function Admin() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const amount = useSelector((state) => state.users.amount);

  //this one gets the todays date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [colorTheme, setColorTheme] = useDarkMode();
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
            <div className="flex flex-col bg-gray-100 pl-5 dark:bg-neutral-800 transition delay-100">
              <h4 className="font-bold text-gray-500 p-1 dark:text-gray-50 transition delay-200">Dashboard</h4>
              <p className="text-gray-500 p-1 dark:text-gray-50 transition delay-500">{date}</p>

              <div onClick={() => setColorTheme(colorTheme)}>
                {colorTheme === "light" ? (
                  <button className="cursor-pointer">
                    <DarkIcon />
                  </button>
                ) : (
                  <button className="cursor-pointer">
                    <LightIcon />
                  </button>
                )}
              </div>
            </div>

            <div className="min-h-screen bg-gray-200 dark:bg-neutral-900 transition delay-100">
              <div className="mt-8 grid gap-10 lg:grid-cols-3 sm-grid-cols md p-4 w-4/5">
                {/* grid starts here */}
                <GridComponent
                  name={"Daily Views"}
                  count={"100"}
                  svg={<Views />}
                />
                <GridComponent
                  name={"Registered Users"}
                  count={amount}
                  svg={<RegisteredUsers />}
                />
                <GridComponent
                  name={"Messages"}
                  count={"100"}
                  svg={<Messages />}
                />
              </div>

              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
