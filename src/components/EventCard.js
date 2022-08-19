import React from "react";
import PropTypes from "prop-types";

const EventCard = (props) => {
  return (
    <div>
      <div class="mx-auto flex w-96 flex-col bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-10 mr-10 mt-20">
        <img
          class="aspect-video w-96 rounded-t-2xl object-cover object-center"
          src="https://www.newsdelivers.com/wp-content/uploads/2022/06/Sunny-Hill-Festival-however-held-in-Prishtina.jpg"
        />
        <div class="p-4">
          <small class="text-pink-500 text-xs">{props.EventPlace}</small>
          <h1 class="text-2xl font-medium text-slate-600 pb-2">
            {props.EventName}
          </h1>
          <p class="text-sm tracking-tight font-light text-slate-400 leading-6">
            {props.EventText}
          </p>
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
