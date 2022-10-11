import { useEffect, useState, useRef } from "react";
import { socket } from "../components/Navigation";

function Chat() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const room = localStorage.getItem("user_id");

  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
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
    <body className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
      <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
        <h1 className="p-3">Message Room</h1>
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="flex flex-col">
            <div className="flex flex-col flex-grow  justify-between ">
              {messageList.map((messageContent) => {
                if (messageContent.display === "left") {
                  return (
                    <div className="col-start-6 col-end-13 p-3 rounded-lg">
                      <div className="flex items-center justify-start flex-row-reverse">
                        <div className="flex place-self-start items-center justify-center h-10 w-10 rounded-full bg-zinc-400 flex-shrink-0">
                          B
                        </div>
                        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                          <div>{messageContent.message}</div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                      <div className="flex flex-row items-center ">
                        <div className="flex place-self-start items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                        </div>
                        <div className="max-w-sm relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                          <div>{messageContent.message}</div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          class="bg-gray-300 p-4 flex flex-row justify-between"
        >
          <input
            className="flex items-center h-10 w-3/4 rounded px-3 text-sm"
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
            Send message
          </button>
        </form>
      </div>
    </body>
  );
}

export default Chat;
