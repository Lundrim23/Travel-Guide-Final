import React from "react";
import { Upload } from "../../AllSvgs";

export default function AddEvent() {
  return (
    <div className=" flex flex-auto w-10/12 px-5 ">
      <div class="flex w-full lg:w-6/12  bg-white space-y-8 ">
        <div class="w-full px-8 md:px-32 lg:px-24 ">
          <form class="bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Admin!</h1>
            <p class="text-sm font-normal text-gray-600 mb-8">Add an event</p>
            {/* <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl"> */}
            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                type="text"
                id="eventname"
                required
                class=" focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="eventname"
                class="transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                event name
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                type="text"
                id="eventorganizator"
                required
                class="focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="eventorganizator"
                class="transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                event organizator
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                type="text"
                id="eventtags"
                required
                class="focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="eventtags"
                class="transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                event tags
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                type="text"
                id="eventaddress"
                required
                class="focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="eventaddress"
                class="transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                event address
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <textarea
                type="text"
                id="eventdescription"
                required
                rows="4" 
                class="focus:border-emerald-300 w-full px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              ></textarea>
              <label
                for="eventdescription"
                class="transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                event description
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
            <label className="pl-3 cursor-pointer flex" htmlFor="file"><Upload /><span className="ml-2">Upload a photo</span></label>
                <input 
                  type="file"
                  id="file"
                  className="hidden"
                />
            </div>



            <button
              type="submit"
              class="block w-full bg-teal-400 mt-5 py-2 rounded-2xl hover:bg-teal-600 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* <div>
        <div class="h-screen flex bg-gradient-to-r from-cyan-500 to-blue-500">
          <div
            class="hidden lg:flex w-full lg:w-4/12 login_img_section justify-around items-center">
            <div
              class="bg-black opacity-20 inset-0 z-0"
            ></div>
            <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 class="text-white font-bold text-4xl font-sans">
                Simple App
              </h1>
              <p class="text-white mt-1">The simplest app to use</p>
              <div class="flex justify-center lg:justify-start mt-6">
                <a
                  href="#"
                  class="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* 
      <h1>Add New Event</h1>


      <form className="">

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border ">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border relative">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border relative">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border relative">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border relative">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <button className="border-none bg-slate-400 text-white ">Create</button>
      </form> */}
    </div>
  );
}
