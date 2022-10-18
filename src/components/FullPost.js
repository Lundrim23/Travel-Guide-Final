import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getEventById } from "../utils/fetch";

function FullPost(props) {
  const [input, setInput] = useState({
    eventName: "",
    eventOrganizator: "",
    eventTags: "",
    address: "",
    type: "",
    description: "",
    imageUrl: "",
  });

  const location = useLocation();

  useEffect(() => {
    const id = location.state.idpost;
    getEventById(id).then(function (res) {
      setInput(res.data);
      //console.log("res data", res.data);
    });
  }, []);

  return (
    <div className="bg-[#353b3f] pb-28">
      <span className="absolute bg-[#353b3f] top-16 w-full font-extrabold uppercase ">
      <h1 className="text-10xl text-[#3c4447] text-lfet">Events</h1>
        </span>
        <span className="absolute bg-[#353b3f] bottom-0 w-full font-extrabold uppercase ">
          <h1 className="text-10xl text-[#3c4447] text-right">Events</h1>
        </span>
      {/* card  edhe margin auto*/}
      <div className="relative h-96 w-7/12 m-52 bg-white shadow-2xl ">
        <div className="float-left relative left-7 -top-7 h-80 w-8/12 overflow-hidden ">
          <img
            src="https://blog.walls.io/wp-content/uploads/2017/02/ideas-for-making-event-more-social.jpg"
            alt="sdfsdf"
            className="absolute "
          />
        </div>

        <div className="float-left ml-12">
          <h1 className="pt-4 text-xl text-[#4b4b4b] w-72">Emri ipsum</h1>
          <div className="bg-[#9ecaff] h-7 w-28 rounded-3xl">
            <div>
              <img
                className="pt-1 ml-2 float-left h-6 w-5 rounded-lg"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
                alt="author logo"
              />
              <h2 className="text-left pt-1 text-xs text-white">Admin</h2>
            </div>
            <div>
              <p className="text-justify pt-2 text-tiny w-72 text-[#4b4b4b]">
                Qitu vjen description tani ladlkasjhdkl aksld jaskl jaskldj
                alkdj alkdj alkdj klasj kdl
              </p>
            </div>
          </div>
        </div>

        <div>
          <h5 className="absolute bottom-9 text-5xl ml-9 text-[#c3c3c3]">20</h5>
          <h6 className="absolute bottom-0 text-5xl ml-7 text-[#c3c3c3]">
            January
          </h6>

          <ul className="mr-96">
            <li className="absolute inline left-2/4 bottom-3.5 list-none">
              {/* far fa-eye fa-2x */}
              <i>icons</i>
              <i>icons</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FullPost;
