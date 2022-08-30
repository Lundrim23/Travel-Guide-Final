import React from "react";

const AddEvent = (props) => {
  return (
    <div>
      <div className="lg:flex">
        <div className="bg-white lg:w-2/4 px-6 lg:ml-4 rounded-l-lg">
          <h1 className="text-3xl tex-gray-700 py-6 p-3 w-2/3 m-auto">
            Create an event
          </h1>
          <hr className="lg:mx-40" />
          <div className="py-8 p-3 w-2/3 m-auto">
            <div className="flex mb-4">
              <span className="flex justify-center border rounded-full w-6 h-6 mr-3 text-blue-700 border-blue-500">
                1
              </span>
              <span className="font-bold text-gray-700">Event Organizer</span>
            </div>

            <div className="lg:flex">
              <div className="w-full lg:w-1/2 px-1">
                <label className="text-gray-600 font-light ">Event name</label>
                <input
                  type="text"
                  placeholder="Enter your Event name here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-50"
                  onChange={props.handleChange}
                  name="eventName"
                  value={props.input.eventName}
                />
              </div>

              <div className="w-full lg:w-1/2 px-1">
                <label className="text-gray-600 font-light ">
                  Event Organizator
                </label>
                <input
                  type="text"
                  placeholder="Enter your Event Organizator name here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-50"
                  onChange={props.handleChange}
                  name="eventOrganizator"
                  value={props.input.eventOrganizator}
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-1">
              <label className="text-gray-600 font-light ">Event Tags</label>
              <input
                type="text"
                placeholder="Enter your Event tags here"
                className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-50"
                onChange={props.handleChange}
                name="eventTags"
                value={props.input.eventTags}
              />
            </div>
          </div>
          <hr className="-mx-20" />
          <div className="py-8 p-3 w-2/3 m-auto">
            <div className="flex mb-4">
              <span className="flex justify-center border rounded-full w-6 h-6 mr-3 text-blue-700 border-blue-500">
                2
              </span>
              <span className="font-bold text-gray-700">Event Location</span>
            </div>
            <div className="flex ">
              <div className="w-full lg:w-1/2 px-1">
                <label className="text-gray-600 font-light">
                  Event Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your Event Address here"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-50"
                  onChange={props.handleChange}
                  name="address"
                  value={props.input.address}
                />
              </div>
            </div>
          </div>
          <hr className="-mx-20" />
          <div className="py-8 p-3 w-2/3 m-auto">
            <div className="flex mb-4">
              <span className="flex justify-center border rounded-full w-6 h-6 mr-3 text-blue-700 border-blue-500">
                3
              </span>
              <span className="font-bold text-gray-700">Event Details</span>
            </div>

            <div className="flex">
              <div className="w-full px-1">
                <label for="comment" className="text-gray-600 font-light">
                  Event Description
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-50"
                  placeholder="Write a short decription about your event..."
                  onChange={props.handleChange}
                  name="description"
                  value={props.input.description}
                  required
                />
              </div>
            </div>

            <label className="text-gray-600 font-light ">Add Event Photo</label>
            <input
              type="file"
              name="image"
              onChange={props.uploadPhoto}
              className="w-full mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 bg-gray-50"
            />
            <input className="file-path validate" type="text" />

            <div>
              <button
                onClick={props.handleClick}
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Save Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
