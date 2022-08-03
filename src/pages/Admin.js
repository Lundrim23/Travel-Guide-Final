import React, { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <div>
        <Link to="/"></Link>
      </div>



        <div className="flex flex-row ">
        <button class="relative z-30 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

            <div className="flex flex-col bg-gray-100 justify-between h-screen w-64  z-20 fixed top-0 -left-full lg:left-0 h-screen w-9/12 lg:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">

            
                <div className="flex items-center justify-between text-gray-600 text-3xl px-5 py-8 ">
                    <b>Starlabs</b>
                </div>

                <div className="flex flex-col flex-auto left-[-300px]">
                    <div className="p-2 hover:bg-gray-300  hover:text-cyan-600  cursor-pointer">
                        <div className="flex flex-row space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>

                            <h4 className="font-bold text-gray hover:text-cyan-600">
                                Dashboard
                            </h4>
                        </div>
                    </div>

                    <div className="p-2 hover:bg-gray-300  hover:text-cyan-600  cursor-pointer">
                        <div className="flex flex-row space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                            <h4 className="font-bold text-gray hover:text-cyan-600">
                                Admin
                            </h4>
                        </div>
                    </div>

                    <div className="p-2 hover:bg-gray-300  hover:text-cyan-600  cursor-pointer">
                        <div className="flex flex-row space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                            <h4 className="font-bold text-gray hover:text-cyan-600">
                                Password
                            </h4>
                        </div>
                    </div>

                </div>

                    <div className="flex flex-col">
                    
                        <button className="rounded-full bg-gray-400 py-2 text-chite text-lg mb-2">Logout</button>
                    </div>
            </div>
        </div>

      
    </>
  );
}

export default Admin;
