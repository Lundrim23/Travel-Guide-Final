import React from "react";
import { ArrowDown, ArrowUp } from "../../AllSvgs";

export default function FeaturedInfo() {
  return (
    <div className="w-full flex justify-between ">
      <div className="flex-1 my-0 mx-5 p-7 rounded-xl cursor-pointer dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="text-xl dark:text-gray-50">Users</span>
        <div className="flex mx-0 my-3 items-center">
          <span className="flex text-3xl font-bold dark:text-gray-200 transition">
            111
          </span>
          <span className="flex items-center ml-4 dark:text-gray-300 transition">
            -111 <ArrowDown />
          </span>
        </div>
        <span className="text-sm text-gray-400 dark:text-gray-300 transition">
          Compared to last month
        </span>
      </div>

      <div className="flex-1 my-0 mx-5 p-7 rounded-xl cursor-pointer dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="text-xl dark:text-gray-50">This</span>
        <div className="flex mx-0 my-3 items-center">
          <span className="flex text-3xl font-bold dark:text-gray-200 transition">
            444
          </span>
          <span className="flex items-center ml-4 dark:text-gray-300 transition">
            -444 <ArrowUp />
          </span>
        </div>
        <span className="text-sm text-gray-400 dark:text-gray-300 transition">
          Compared to last month
        </span>
      </div>

      <div className="flex-1 my-0 mx-5 p-7 rounded-xl cursor-pointer dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="text-xl dark:text-gray-50">Month</span>
        <div className="flex mx-0 my-3 items-center">
          <span className="flex text-3xl font-bold dark:text-gray-200 transition">
            222
          </span>
          <span className="flex items-center ml-4 dark:text-gray-300 transition">
            -222 <ArrowUp />
          </span>
        </div>
        <span className="text-sm text-gray-400 dark:text-gray-300 transition">
          Compared to last month
        </span>
      </div>
    </div>
  );
}
