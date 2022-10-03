import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:5000");

function Chat() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
    setMessageList((list) => [...list, { display: "left", message: message }]);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [
        ...list,
        { display: "right", message: data.message },
      ]);
    });
  }, [socket]);

  return (
    <body class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
      <div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="flex flex-col">
            <h1 className="mt-10">Message:</h1>
            {messageList.map((messageContent) => {
              if (messageContent.display === "left") {
                return <h1 className="m-0">{messageContent.message}</h1>;
              } else {
                return <h1 className="m-5">{messageContent.message}</h1>;
              }
            })}
          </div>
        </div>

        <div class="bg-gray-300 p-4 flex flex-row justify-between">
          <input
            className="flex items-center  h-10 w-3/4 rounded px-3 text-sm"
            placeholder="Room Number..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button
            className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={joinRoom}
          >
            Join Room
          </button>
        </div>
        <div class="bg-gray-300 p-4 flex flex-row justify-between">
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
          >
            Send message
          </button>
        </div>
      </div>
    </body>
  );
}

export default Chat;
