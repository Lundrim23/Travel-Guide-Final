import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addMessage } from "../../redux/features/users/userMessageSlice";

export default function MessageRoom(props) {
  const { messages, room, socket } = props;
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
    dispatch(addMessage({ message: message, room: room, sent: true }));
  };

  return (
    <div>
      {messages.map((message, index) => {
        return <p key={index}>{message}</p>;
      })}
      <input
        className="flex items-center h-10 w-3/4 rounded px-3 text-sm"
        type="text"
        placeholder="Type your message…"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        onKeyPress={(e) => {
          e.key === "Enter" && sendMessage();
        }}
      />
      <button
        onClick={sendMessage}
        className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      ></button>
    </div>
  );
}
