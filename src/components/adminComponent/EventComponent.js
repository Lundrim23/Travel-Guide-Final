import React, { useEffect, useState } from "react";
import axios from "axios";

const EventComponent = () => {
  const [input, setInput] = useState({
    eventName: "",
    eventOrganizator: "",
    eventTags: "",
    location: "",
    address: "",
    description: "",
  });

  //this one displays event on the table
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  //this one populates state with data
  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  //this one saves data to db throught be
  function handleClick(event, id) {
    const url = process.env.REACT_APP_SAVE_DATA;

    event.preventDefault();

    const newEvent = {
      eventName: input.eventName,
      eventOrganizator: input.eventOrganizator,
      eventTags: input.eventTags,
      location: input.location,
      address: input.address,
      description: input.description,
    };

    axios.post(url, newEvent);
  }

  const fetchEvents = () => {
    const url = process.env.REACT_APP_GET_ALL_EVENTS;

    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //this one updates an event
  function update(id) {
    const url = process.env.REACT_APP_UPDATE_FILE;

    const article = {
      eventName: input.eventName,
      eventOrganizator: input.eventOrganizator,
      eventTags: input.eventTags,
      location: input.location,
      address: input.address,
      description: input.description,
    };

    axios.patch(url + id, article);
  }

  // this one deletes an event
  function remove(id) {
    const url = process.env.REACT_APP_DELETE_FILE;

    axios
      .delete(url + id)
      .then((res) => {
        const myalldata = events.filter((item) => item._id !== id);
        setEvents(myalldata);
      })
      .catch((err) => console.error(err));
  }

  //radio button venue value
  const handleVenueChange = () => {
    setInput({
      ...input,
      location: "Venue",
    });
  };
  //radio button online value
  const handleOnlineChange = () => {
    setInput({
      ...input,
      location: "Online",
    });
  };

  return (
    <>
      <div>
        <form>
          <div
          // id="container"

          //className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
          >
            <div className="bg-white p-2 rounded w-1/3 ml-14 px-20">
              <h1 className="text-3xl text-gray-700 py-6">Create an event</h1>
              <hr className="-mx-20" />
              <div className="py-8">
                <div className="flex mb-4">
                  <span className="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
                    1
                  </span>
                  <span className="font-bold text-gray-700">
                    Event Organizer
                  </span>
                </div>

                <div className="flex ">
                  <div className="w-1/2 px-1">
                    <label class="text-gray-600 font-light ">Event name</label>
                    <input
                      type="text"
                      placeholder="Enter your Event name here"
                      class="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                      onChange={handleChange}
                      name="eventName"
                      value={input.eventName}
                    />
                  </div>

                  <div className="w-1/2 px-1">
                    <label class="text-gray-600 font-light ">
                      Event Organizator
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Event Organizator name here"
                      class="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                      onChange={handleChange}
                      name="eventOrganizator"
                      value={input.eventOrganizator}
                    />
                  </div>
                </div>

                <div className="w-2/3 px-1 flec-col">
                  <label class="text-gray-600 font-light ">Event Tags</label>
                  <input
                    type="text"
                    placeholder="Enter your Event tags here"
                    class="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                    onChange={handleChange}
                    name="eventTags"
                    value={input.eventTags}
                  />
                </div>
              </div>

              <hr className="-mx-20" />

              <div className="py-8">
                <div className="flex mb-4">
                  <span className="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
                    2
                  </span>
                  <span className="font-bold text-gray-700">
                    Event Location
                  </span>
                </div>

                <div className="flex ">
                  <div className="w-1/2 px-1">
                    <div class="flex items-center mb-4 mt-3">
                      <input
                        type="radio"
                        id="radio-example-1"
                        name="radio"
                        class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2"
                        onChange={(e) => {
                          handleChange(e);
                          handleVenueChange();
                        }}
                        value={input.radio}
                      />
                      <label for="radio-example-1" class="text-gray-600">
                        Venue
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        type="radio"
                        id="radio-example-2"
                        name="radio"
                        class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2"
                        onChange={(e) => {
                          handleChange(e);
                          handleOnlineChange();
                        }}
                        value={input.radio}
                      />
                      <label for="radio-example-2" class="text-gray-600">
                        Online
                      </label>
                    </div>
                  </div>

                  <div className="w-1/2 px-1">
                    <label class="text-gray-600 font-light ">
                      Event Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Event Address here"
                      class="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                      onChange={handleChange}
                      name="address"
                      value={input.address}
                    />
                  </div>
                </div>
              </div>

              <hr className="-mx-20" />

              <div className="py-8">
                <div className="flex mb-4">
                  <span className="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
                    3
                  </span>
                  <span className="font-bold text-gray-700">Event Details</span>
                </div>

                <div className="flex ">
                  <div className="w-1/2 px-1">
                    <label class="text-gray-600 ">Starts at</label>

                    <input
                      type="date"
                      class="w-1/2 mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                    />
                    <input type="time" className=" border rounded-lg" />
                  </div>

                  <div className="w-1/2 px-1">
                    <label class="text-gray-600">Ends at</label>
                    <input
                      type="date"
                      class="w-3/6 mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                    />
                    <input type="time" className="border rounded-lg" />
                  </div>
                </div>

                <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200">
                  <div class="py-2 px-4 bg-white rounded-t-lg">
                    <label for="comment" class="sr-only">
                      Event Description
                    </label>
                    <textarea
                      id="comment"
                      rows="4"
                      class="px-0 w-full  text-gray-700 border-0 focus:ring-0 "
                      placeholder="Write a short decription about your event..."
                      onChange={handleChange}
                      name="description"
                      value={input.description}
                      required
                    ></textarea>
                  </div>
                  <div class="flex justify-between items-center py-2 px-3 border-t"></div>
                </div>

                <label class="text-gray-600 font-light ">
                  Add Event Photos
                </label>
                <input
                  type="file"
                  class="w-full text-gray-700 px-3 py-2 border rounded"
                />
              </div>

              <button
                onClick={handleClick}
                type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Save Event
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <hr />
        <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead class="text-white">
            <tr class="bg-gray-300 text-gray-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="p-3 text-left">Id</th>
              <th class="p-3 text-left">Event Name</th>
              <th class="p-3 text-left">Event Organizator</th>
              <th class="p-3 text-left">Event Tags</th>
              <th class="p-3 text-left">Location</th>
              <th class="p-3 text-left">Address</th>
              <th class="p-3 text-left">Description</th>
              <th class="p-3 text-left">Update</th>
              <th class="p-3 text-left">Delete</th>
            </tr>
          </thead>
          <tbody class="flex-1 sm:flex-none">
            {events.map((event) => (
              <>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {event._id}
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {event.eventName}
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    {event.eventOrganizator}
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {event.eventTags}
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {event.location}
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {event.address}
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    {event.description}
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    <button onClick={() => update(event._id)}>Update</button>
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    <button onClick={() => remove(event._id)}>Delete</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventComponent;
