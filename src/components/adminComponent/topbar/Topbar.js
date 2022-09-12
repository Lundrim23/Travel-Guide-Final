import React from "react";
import { NotificationIcon, Settings } from "../../AllSvgs";

function Topbar() {
  return (
    //topbar
    <div className="w-full h-12 sticky top-0">
      {/* topbar wrapper */}
      <div className="h-full px-5 flex items-center justify-between">
        {/* top left */}
        <div>
          {/* logo */}
          <div className="text-sm text-blue-400 cursor-pointer">
            Starlabs-Titans
          </div>
        </div>

        {/* top right */}
        <div className="flex items-center">
          {/*top bar icon container */}
          <div className="relative cursor-pointer mr-2">
            <NotificationIcon />

            {/* top icon badge */}
            <span className="absolute -top-2 right-0 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm ">
              2
            </span>
          </div>

          <div className="relative cursor-pointer mr-2">
            <Settings />
          </div>

          <img
            src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
