import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import { addMessage } from "../../redux/features/users/userMessageSlice";

export default function MessageRoom(props) {
  const { messages, room, socket } = props;
  const [message, setMessage] = useState("");

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
    dispatch(addMessage({ message: message, room: room, sent: true }));
  };

  return (
    <div className="w-96 h-80 flex flex-col justify-between">
      {messages.map((message, index) => {
        return (
          <div class="col-start-6 col-end-13 p-3 rounded-lg">
            <div class="flex items-center justify-start flex-row-reverse">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-zinc-400 flex-shrink-0">
                B
              </div>
              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                <div key={index}>{message}</div>
              </div>
            </div>
          </div>
        );
      })}
      <form onSubmit={handleSubmit} className="flex flex-row justify-between ">
        <input
          className="flex items-center h-10 w-3/4 rounded px-3 text-sm "
          type="text"
          placeholder="Type your message…"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
          ref={inputRef}
        />
        <button
          onClick={sendMessage}
          className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          <SendOutlinedIcon sx={{ fontSize: 20 }} />
        </button>
      </form>
    </div>
  );
}
