
import React from "react";


const EventTitle = (props) => {
  return (
    <div>
          <div>
              <div class="title m">
              <p class="text-center text-4xl font-bold text-gray-700 pt-20 mb-4">{props.TitleEvent}</p>
      <p class=" text-center text-2xl font-light text-gray-700">
                      All article are verified by 2 experts and valdiate by the CTO
                  </p>
              </div>
          </div>
         
      </div>
  );
};

export default EventTitle;