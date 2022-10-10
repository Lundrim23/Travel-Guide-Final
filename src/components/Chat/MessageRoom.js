import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { addMessage } from "../../redux/features/users/userMessageSlice";

export default function MessageRoom(props) {
  const { messages, room, socket } = props;
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const flattenMessages = (members) => {
    let children = [];

    return members
      .map((m) => {
        if (m.children && m.children.length) {
          children = [...children, ...m.children];
        }
        return m;
      })
      .concat(children.length ? flattenMessages(children) : children);
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
    setMessageList((list) => [...list, { message: message, sent: true }]);
    dispatch(addMessage({ message: message, room: room, sent: true }));
  };

  useEffect(() => {
    setMessageList((list) => [...list, messages]);
  }, []);

  return (
    <div className="w-96 h-80 flex flex-col justify-between  ">
      {messageList.length > 0
        ? messageList.flat(Infinity).map((item) => {
            if (item.sent === true) {
              return (
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-zinc-400 flex-shrink-0">
                      B
                    </div>
                    <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                      <p>{item.message}</p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="col-start-1 col-end-8  p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex place-self-start items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <p>{item.message}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })
        : ""}
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
