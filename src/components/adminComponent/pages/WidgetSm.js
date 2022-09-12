import React from "react";
import { Visible } from "../../AllSvgs";

export default function WidgetSm() {
  return (
    <div className="flex-auto w-2/12 p-7 mr-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <span className="text-2xl font-bold">New Join Members</span>
      <ul className="m-0 p-0 list-none  ">
        <li className="flex items-center content-between my-5 mx-0">
          <img
            src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"
            alt="about profile"
            className="w-10 rounded-full object-cover"
          />


        <div className="flex flex-col">
          <span className="font-bold">Admin</span>
          <span className="font-light">Username</span>
        </div>

        <button className="flex bg-gray-100 border-none rounded-xl py-2 px-3 justify-evenly">
          <Visible />
          Display
        </button>
        </li>
      </ul>
    </div>
  );
}
