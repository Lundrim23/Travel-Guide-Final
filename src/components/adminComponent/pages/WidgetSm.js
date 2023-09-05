import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { findUsers } from "../../../utils/fetch";
//import { Visible } from "../../AllSvgs";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        findUsers().then(function (res) {
          setUsers(res.data.reverse());
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex-auto w-2/12 p-7 mr-5 dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
      <span className="text-2xl font-bold dark:text-gray-200 transition">
        New Joined Members
      </span>

      {users.slice(0, 6).map((user) => (
        <ul key={user._id} className="m-0 p-0 list-none  ">
          <li className="flex items-center content-between my-5 mx-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
              alt="about profile"
              className="w-10 rounded-full object-cover mr-2 "
            />

            <div className="flex flex-col">
              <span className="font-bold dark:text-gray-200 transition">
                {user.username}
              </span>
              <span className="font-light dark:text-gray-200 transition">
                {user.email}
              </span>
            </div>

            {/* <button className="flex bg-gray-100 border-none rounded-xl py-2 px-3 justify-evenly">
              <Visible />
              Display
            </button> */}
          </li>
        </ul>
      ))}
    </div>
  );
}
