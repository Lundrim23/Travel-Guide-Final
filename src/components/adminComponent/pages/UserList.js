import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Delete, SortIcon } from "../../AllSvgs";
import io from "socket.io-client";

import ActionButton from "../../Chat/ActionButton";
import Popup from "../../Chat/PopUp";
import MessageRoom from "../../Chat/MessageRoom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import {
  updateUser,
  loadUsers,
  deleteUser,
  messageReceived,
} from "../../../redux/features/users/userSlice";

import { addMessage } from "../../../redux/features/users/userMessageSlice";

const socket = io.connect("http://localhost:5000");

export default function UserList() {
  const [messages, setMessages] = useState(null);
  const [room, setRoom] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  useEffect(() => {
    if (room) {
      socket.emit("join_room", room);
    }
  });

  useEffect(() => {
    socket.on("receive_message", (data) => {
      dispatch(messageReceived({ message: data }));
      dispatch(
        addMessage({ message: data.message, room: data.room, sent: false })
      );
    });
  }, [socket]);

  const openInPopup = (item, room) => {
    const msgs = item.filter((item) => item);
    setRoom(room);
    setMessages(msgs);
    setOpenPopup(true);
  };

  const users = useSelector((state) => state.users.users);
  const amount = useSelector((state) => state.users.amount);
  const userMessages = useSelector((state) => state.userMessages.userMessages);

  if (amount < 1) {
    return (
      <section>
        <h2 className="text-center text-3xl text-slate-400">
          We don't have any user to show!
        </h2>
      </section>
    );
  }

  return (
    <>
      <div className="flex-auto w-10/12 px-5 dark:bg-neutral-800 transition delay-500 ">
        <div className="overflow-x-auto relative sm:rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 transition dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 cursor-pointer dark:text-gray-50 "
                >
                  <div className="flex items-center ">
                    Id
                    <SortIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 cursor-pointer dark:text-gray-50 "
                >
                  <div className="flex items-center ">
                    Name
                    <SortIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 cursor-pointer dark:text-gray-50 "
                >
                  <div className="flex items-center ">
                    Email
                    <SortIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 cursor-pointer dark:text-gray-50 "
                >
                  <div className="flex items-center ">
                    Role
                    <SortIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 dark:text-gray-50 text-center"
                >
                  <span className="">Block</span>
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 dark:text-gray-50 text-center"
                >
                  <span className="">Delete</span>
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 dark:text-gray-50 text-center"
                >
                  <span className="">Message</span>
                </th>
              </tr>
            </thead>
            {users.map((user) => {
              socket.emit("join_room", `${user.id}`);

              return (
                <tbody
                  key={user.id}
                  className="dark:bg-neutral-900 transition dark:divide-neutral-700 dark:text-gray-50"
                >
                  <tr className="bg-white border-b dark:bg-neutral-600 transition dark:border-none">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.id}
                    </th>
                    <td className="py-4 px-6">{user.name}</td>
                    <td className="py-4 px-6">{user.email}</td>
                    <td className="py-4 px-6">{user.role}</td>
                    <td className="py-4 px-6 text-left text-center">
                      <button className="font-medium text-white bg-green-500 px-2 py-1 rounded-full dark:text-gray-50 hover:underline text-center">
                        Block
                      </button>
                    </td>
                    <td className="py-4 px-6 text-left text-center">
                      <button
                        onClick={() => dispatch(deleteUser({ id: user.id }))}
                        className="font-medium text-red-500 dark:text-red-500 hover:underline "
                      >
                        <Delete />
                      </button>
                    </td>
                    <td className="py-4 px-6 text-center">
                      {user.messaged ? (
                        <ActionButton
                          onClick={() => {
                            openInPopup(
                              userMessages.map((message) => {
                                if (message.room === `${user.id}`) {
                                  return message.message.map((item) => {
                                    return item.message;
                                  });
                                }
                              }),
                              `${user.id}`
                            );
                          }}
                        >
                          <EmailOutlinedIcon
                            sx={{ fontSize: 30 }}
                            color="primary"
                          />
                        </ActionButton>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      <Popup
        title="Message Room"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <MessageRoom messages={messages} room={room} socket={socket} />
      </Popup>
    </>
  );
}
