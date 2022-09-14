import React from "react";
import { NotificationIcon, Settings, DarkIcon, LightIcon } from "../../AllSvgs";
import useDarkMode from "../UseDarkMode";

function Topbar() {

    //this one gets the todays date
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

  const [colorTheme, setColorTheme] = useDarkMode();
  return (
    <div className="w-full h-12 sticky top-0">
      <div className="h-full px-5 flex items-center justify-between">
        <div>
          <div className="text-sm text-blue-400 cursor-pointer">
            Starlabs-Titans
          </div>
        </div>

        <div className="flex items-center">
        <p className="text-gray-500 p-1 dark:text-gray-50 transition delay-500 mr-2">
                    {date}
                  </p>
          <div
            className="flex justify-between relative mr-2"
            onClick={() => setColorTheme(colorTheme)}
          >
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
          <div className="relative cursor-pointer mr-2">
            <NotificationIcon />
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
