import React, { useEffect, useState } from "react";
import { getEvents } from "../../../utils/fetch";

export default function WidgetLg() {
  //this one displays event on the table
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        //this method gets data from db and populates state with data
        getEvents().then(function (response) {
          setEvents(response.data.reverse());
        });
      } catch (err) {
        if (err.response) {
          //not in the 200 respose range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="flex-auto w-8/12 p-7 dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
      <h3 className="text-2xl font-bold dark:text-gray-200 mb-4">
        Latest Events
      </h3>

      <table className="w-full border-spacing-48 ">
      <thead>
        <tr className="dark:text-gray-200">
          <th className="text-left">Event Name</th>
          <th className="text-left">Event Organizator</th>
          <th className="text-left">Event Tags</th>
          <th className="text-left">Event Address</th>
          <th className="text-left">Event Description</th>
          <th className="text-left">Event Image</th>
        </tr>
        </thead>
        <tbody>
        {events.slice(0, 2).map((event) => (
            <tr key={event._id} className="dark:text-gray-400">
              <td className="font-light">{event.eventName}</td>
              <td className="font-light">{event.eventOrganizator}</td>
              <td className="font-light">{event.eventTags}</td>
              <td className="font-light">{event.address}</td>
              <td className="font-light">{event.description}</td>
              <td className="flex items-center">
                <img
                  className="w-10 rounded-full object-cover mr-2"
                  src={event.imageUrl}
                  alt="user"
                />
                {/* <span>User</span> */}
              </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
