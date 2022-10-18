import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
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
    likes: "",
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
    <div>
      <div className="container px-5 py-36 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={input.imageUrl}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {input.eventName}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-gray-600">{input.eventOrganizator}</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <span className="text-gray-600">{input.address}</span>
              </span>
            </div>
            <p className="leading-relaxed">{input.description}</p>
            <div className=" mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <span className="text-gray-600">{input.eventTags}</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <span className="text-gray-600">{input.type}</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <FaHeart
                    color="#f43f5e"
                    className="mr-2 items-center"
                    icon="FaHeart"
                  />
                  <p className="text-gray-400 text-sm items-center">
                    : {input.likes.length} Likes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullPost;
