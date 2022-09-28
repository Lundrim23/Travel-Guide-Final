import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SortIcon, Delete } from "../../AllSvgs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteEvent, getEvents } from "../../../utils/fetch";
// import { like, unlike } from "../../../utils/fetch";

function EventTable(props) {
  //this one displays event on the table
  const [events, setEvents] = useState([]);

  const notify = () => {
    toast.success("Event Deleted Successfuly");
  };

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

  // this one deletes an event
  const remove = async (id) => {
    try {
      deleteEvent(id);
      notify();
      const myalldata = events.filter((item) => item._id !== id);
      setEvents(myalldata);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method sorts by name
  const [order, setOrder] = useState("ASC");
  const sort = (col) => {
    if (order === "ASC") {
      const sorted = [...events].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setEvents(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...events].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setEvents(sorted);
      setOrder("ASC");
    }
  };

  //this method likes an event
  // const likeEvent = async (id) => {
  //   try {
  // like(id).then((response) => {
  //   setEvents([...events, response.data]);
  // });

  //     like(id).then((res) => {
  //       console.log(res);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //this method unlikes an event
  // const unlikeEvenet = (id) => {
  //   try {
  //     unlike(id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="flex-auto w-10/12 px-5 dark:bg-neutral-800 transition delay-500">
      <Link to="/admin/newevent">
        <button className="w-40 border-none p-1 mb-4 bg-teal-400 rounded-md cursor-pointer text-white">
          Create Event
        </button>
      </Link>

      <Outlet />
      <div className="overflow-x-auto relative sm:rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 transition dark:text-gray-400">
            <tr className="dark:text-gray-50 cursor-pointer">
              <th
                onClick={() => sort("eventName")}
                scope="col"
                className="py-3 px-6"
              >
                <div className="flex items-center">
                  Event Name
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => sort("eventOrganizator")}
                scope="col"
                className="py-3 px-6"
              >
                <div className="flex items-center">
                  Event Organizator
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => sort("eventTags")}
                scope="col"
                className="py-3 px-6"
              >
                <div className="flex items-center">
                  Event Tags
                  <SortIcon />
                </div>
              </th>
              <th onClick={() => sort("address")} scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Event Address
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => sort("description")}
                scope="col"
                className="py-3 px-6"
              >
                <div className="flex items-center">
                  Event Description
                  <SortIcon />
                </div>
              </th>
              <th scope="col" className="py-3 px-6 cursor-auto">
                Event Image
              </th>
              <th scope="col" className="py-3 px-6 cursor-auto">
                <span>Edit</span>
              </th>
              <th scope="col" className="py-3 px-6 cursor-auto">
                <span>Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="dark:bg-neutral-900 transition dark:divide-neutral-700 dark:text-gray-50">
            {events.map((event) => (
                <tr key={event._id} className="bg-white border-b dark:bg-neutral-600 transition dark:border-none">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {event.eventName}
                  </th>
                  <td className="py-4 px-6">{event.eventOrganizator}</td>
                  <td className="py-4 px-6">{event.eventTags}</td>
                  <td className="py-4 px-6">{event.address}</td>
                  <td className="py-4 px-6">{event.description}</td>
                  <td className="py-4 px-6">
                    {" "}
                    <img
                      className="w-12"
                      src={event.imageUrl}
                      alt="on Table"
                    />
                  </td>
                  <td className="py-4 px-6 text-left">
                    <Link to={`editevent/${event._id}`}>
                      <button className="font-medium text-blue-600 dark:text-blue-500 dark:bg-gray-700 px-2 py-1 rounded-full hover:underline">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-left">
                    <button
                      onClick={() => remove(event._id)}
                      className="font-medium text-red-500 dark:text-red-500 hover:underline"
                    >
                      <Delete />
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </div>
  );
}

export default EventTable;
