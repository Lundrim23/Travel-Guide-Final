import React from "react";
import PropTypes from "prop-types";
import {FaThumbsUp, FaThumbsDown, FaHeart } from "react-icons/fa";
const EventCard = (props) => {
  return (
    <div>
      <div className="mx-auto flex w-96 flex-col bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-10 mr-10 mt-20">
        <img
          className="aspect-video w-96 rounded-t-2xl object-cover object-center"
          src="https://www.newsdelivers.com/wp-content/uploads/2022/06/Sunny-Hill-Festival-however-held-in-Prishtina.jpg"
          alt="throwing error without alt"
        />
        <div className="p-4">
          <small className="text-pink-500 text-xs">{props.EventPlace}</small>
          <h1 className="text-2xl font-medium text-slate-600 pb-2">
            {props.EventName}
          </h1>

          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
            {props.EventText}
          </p>

          {/* icons */}
           <div className="pt-6 flex flex-wrap ml- ">
           <FaHeart color="#f43f5e" class ="mr-2" icon="FaHeart"/>
           <p className="text-gray-400 text-sm">
           : 777 Likes
           </p>
          <button className=" ml-52 hover:bg-slate-100  hover:ring hover:ring-rose-400 hover:p-1" >
          <FaThumbsUp color="#f43f5e" icon="fa-solid FaThumbsUp" className=""  />
          </button> 
          <button className="ml-3 hover:bg-slate-100 hover:ring hover:ring-violet-300 hover:p-1">
          <FaThumbsDown color="#818cf8"icon="FaThumbsDown" className=""/>
          </button>
          
          <div className="flex flex-wrap ">
         
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  EventPlace: PropTypes.string,
  EventName: PropTypes.string,
  EventText: PropTypes.string,
};

export default EventCard;
