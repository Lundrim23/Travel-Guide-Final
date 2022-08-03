import React, { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <div>
        <Link to="/"></Link>
      </div>

      <div class="h-screen flex items-end justify-end px-4 pb-6">
        <button class="relative z-30 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition">
          <span class="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-6 m-auto"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
              />
            </svg>
          </span>
        </button>

        {/* <div class="z-20 fixed top-0 -left-96 lg:left-0 h-screen w-9/12 lg:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200"> */}

        <div class="z-20 fixed top-0 -left-full lg:left-0 h-screen w-9/12 lg:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <nav role="navigation" class="p-6">
            <div className="flex items-center justify-between text-gray-600 text-3xl px-5 py-8 ">
              <b>Starlabs</b>
            </div>

            <div className="flex flex-col flex-auto left-[-300px]">
              <div className="p-2 hover:bg-gray-300  hover:text-cyan-600  cursor-pointer">
                <div className="flex flex-row space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>

                  <h4 className="font-bold text-gray hover:text-cyan-600">
                    Dashboard
                  </h4>
                </div>
              </div>

              <div className="p-2 hover:bg-gray-300  hover:text-cyan-600  cursor-pointer">
                <div className="flex flex-row space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <h4 className="font-bold text-gray hover:text-cyan-600">
                    Admin
                  </h4>
                </div>
              </div>

              <div className="p-2 hover:bg-gray-300  hover:text-cyan-600  cursor-pointer">
                <div className="flex flex-row space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                  <h4 className="font-bold text-gray hover:text-cyan-600">
                    Password
                  </h4>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex flex-col">
            <button className="rounded-full bg-gray-400 py-2 text-lg ">
              Logout
            </button>
          </div>
        </div>

        <div class="z-10 lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200"></div>
      </div>
    </>
  );
}

export default Admin;
