import React from "react";
import { ArrowDown, ArrowUp } from "../../AllSvgs";

export default function FeaturedInfo() {
  return (
    <div className="w-full flex justify-between">
      <div className="flex-1 my-0 mx-5 p-7 rounded-xl cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="text-xl">Revenue</span>
        <div className="flex mx-0 my-3 items-center">
          <span className="flex text-3xl font-bold">111</span>
          <span className="flex items-center ml-4">
            -111 <ArrowDown />
          </span>
        </div>
        <span className="text-sm text-gray-400">Compared to last month</span>
      </div>

      <div className="flex-1 my-0 mx-5 p-7 rounded-xl cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="text-xl">Saes</span>
        <div className="flex mx-0 my-3 items-center">
          <span className="flex text-3xl font-bold">444</span>
          <span className="flex items-center ml-4">
            -444 <ArrowUp />
          </span>
        </div>
        <span className="text-sm text-gray-400">Compared to last month</span>
      </div>

      <div className="flex-1 my-0 mx-5 p-7 rounded-xl cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <span className="text-xl">Costs</span>
        <div className="flex mx-0 my-3 items-center">
          <span className="flex text-3xl font-bold">222</span>
          <span className="flex items-center ml-4">
            -222 <ArrowUp />
          </span>
        </div>
        <span className="text-sm text-gray-400">Compared to last month</span>
      </div>
    </div>
  );
}
