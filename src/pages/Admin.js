import React, { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <>
      <div>
        <Link to="/"></Link>
      </div>

      <div className="flex flex-row">
        <button class="relative z-30 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="flex flex-col bg-gray-100 justify-between h-screen w-64  z-20 fixed top-0 -left-full lg:left-0 h-screen w-9/12 lg:w-72 shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
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

          <div className="flex flex-col">
            <button className="rounded-full bg-gray-400 py-2 text-chite text-lg mb-2">
              Logout
            </button>
          </div>
        </div>
        {/* end of sidebar -1 */}
      </div>

      <div className="flex-auto lg:pl-72">
        <div className="flex flex-col">
          <div className="flex flex-col bg-gray-100">
            <div className="flex flex-row space-x-3">
              <h4 className="font-bold text-gray-500 p-1">Dashboard</h4>
            </div>

            <p className="text-gray-500 p-1">{date}</p>
          </div>

          <div className="min-h-screen bg-gray-200">
            <div className="mt-8 grid gap-10 lg:grid-cols-3 sm-grid-cols p-4">
              {/* grid here */}
              <div class="flex items-center justify-between p-5 bg-white rounded shadow-sm w-80">
                <div>
                  <h1 class="text-sm text-gray-400 ">Daily Views</h1>
                  <div class="flex items-center pt-1">
                    <h1 class="text-3xl font-medium text-gray-600 ">100</h1>
                  </div>
                </div>
                <div class="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLin
                      ecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between p-5 bg-white rounded shadow-sm w-80">
                <div>
                  <h1 class="text-sm text-gray-400 ">Registered Users</h1>
                  <div class="flex items-center pt-1">
                    <h1 class="text-3xl font-medium text-gray-600 ">100</h1>
                  </div>
                </div>
                <div class="text-gray-500">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between p-5 bg-white rounded shadow-sm w-80">
                <div>
                  <h1 class="text-sm text-gray-400 ">Messages</h1>
                  <div class="flex items-center pt-1">
                    <h1 class="text-3xl font-medium text-gray-600 ">100</h1>
                  </div>
                </div>
                <div class="text-gray-500">
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
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
              </div>

              
            </div>
            {/* grid ends here */}

            {/* table starts here */}
            <h1 className="p-5 font-bold text-gray-600">
                Users
            </h1>
            <div className=" rounded-lg shadow hidden md:block w-4/5">
                <table className="w-full ml-5">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className="w-6 p-3 text-sm font-semibold tracking-wide text-left">Id</th>
                            <th className="w-6 p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                            <th className="w-6 p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                            <th className="w-6 p-3 text-sm font-semibold tracking-wide text-left">Password</th>
                            <th className="w-6 p-3 text-sm font-semibold tracking-wide text-left">Role</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr className="bg-white">
                            <td className="p-3 whitespace-nowrap text-sm text-gray-700"><a href="#" className="font-bold text-blue-500 hover:underline">1</a></td>
                            <td className="p-3 whitespace-nowrap text-sm text-gray-700">asd</td>
                            <td className="p-3 whitespace-nowrap text-sm text-gray-700">asd@asd.com</td>
                            <td className="p-3 whitespace-nowrap text-sm text-gray-700">asd</td>
                            <td className="p-3 whitespace-nowrap text-sm text-gray-700"><span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">admin</span></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" className="p-3 font-bold text-blue-500 hover:underline">Id</a>
                            </div>
                            <div  className="p-3 whitespace-nowrap text-sm text-gray-700">Name</div>
                            <div className="p-3 whitespace-nowrap text-sm text-gray-700">Email</div>
                            <div className="p-3 whitespace-nowrap text-sm text-gray-700">Password</div>
                            <div className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 w-14">Role</div>
                        </div>
                    </div>
                </div>

            {/* table ends here */}


          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
