import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-800 pt-6 pb-8 xl:pt-12">
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
          <ul className="text-lg  pb-8 flex flex-wrap justify-center">
            <li className="w-full md:w-full lg:w-1/3">
              <div className="text-center">
                <h2 className="text-indigo-400 dark:text-gray-200 text-md uppercase mb-4 font-medium">
                  Components
                </h2>
                <ul className="font-normal text-gray-400">
                  <li className="mb-4 hover:text-gray-800  ">
                  <Link
                   to="/"
                     >
                      Home
                    </Link>
                  </li>
                  <li className="mb-4 hover:text-gray-800  ">
                  <Link
                  to="/about"
               >
                  About
                </Link>
                  </li>
                  <li className="mb-4 hover:text-gray-800 ">
                  <Link
                  to="/contact"
               >
                  Contact us
                </Link>
                  </li>
                  <li className="mb-4 hover:text-gray-800 ">
                  <Link
                  to="/"
               >
                  Main info
                </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-full md:w-full lg:w-1/3" >
              <div className="text-center">
                <h2 className="text-indigo-400 dark:text-gray-200 text-md uppercase mb-4 font-medium ">
                  Components
                </h2>
                <ul className="font-normal">
                  <li className="mb-4  hover:text-gray-800 ">
                  <Link
                  to="/places"
                 >
                  Places
                </Link>

                  </li>
                  <li className="mb-4  hover:text-gray-800">
                  <Link
                  to="/events"
               >
                  Events
                </Link>
                  </li>
                  <li className="mb-4  hover:text-gray-800">
                  <Link
                  to="/api"
               >
                  Restaurants
                </Link>
                  </li>
                  <li className="mb-4  hover:text-gray-800">
                  <Link
                  to="/api"
               >
                  Hotels
                </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="text-indigo-400 dark:text-gray-200 text-md uppercase mb-4 font-medium">
                  Customization
                </h2>
                <ul className="font-normal">
                  <li className="mb-4 hover:text-gray-800">
                  <Link
                  to="/api"
               >
                  Near you
                </Link>
                  </li>
                  <li className="mb-4 hover:text-gray-800">
                  <Link
                  to="/reviews"
               >
                  Reviews
                </Link>
                  </li>
                  <li className="mb-4 hover:text-gray-800 ">
                  <Link
                  to="/search"
               >
                  Search
                </Link>
                  </li>
                  <li className="mb-4 hover:text-gray-800 ">
                  <Link
                   to="/"
                     >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
            <a href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
              </svg>
            </a>
       
            <a href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </a>
      
          </div>
          <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            @ Copyright
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
