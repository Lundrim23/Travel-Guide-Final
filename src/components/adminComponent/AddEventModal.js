import React from "react";

const AddEventModal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      classNameName="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div classNameName="bg-white p-2 rounded w-1/3 mx-auto px-20">
        <h1 classNameName="text-3xl text-gray-700 py-6">Create an event</h1>
        <hr classNameName="-mx-20" />
        <div classNameName="py-8">
          <div classNameName="flex mb-4">
            <span classNameName="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
              1
            </span>
            <span classNameName="font-bold text-gray-700">Event Organizer</span>
          </div>

          <div classNameName="flex ">
            <div classNameName="w-1/2 px-1">
              <label className="text-gray-600 font-light ">Event name</label>
              <input
                type="text"
                placeholder="Enter your Event name here"
                className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>

            <div classNameName="w-1/2 px-1">
              <label className="text-gray-600 font-light ">Event Organizator</label>
              <input
                type="text"
                placeholder="Enter your Event Organizator name here"
                className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          <div classNameName="w-2/3 px-1 flec-col">
            <label className="text-gray-600 font-light ">Event Tags</label>
            <input
              type="text"
              placeholder="Enter your Event tags here"
              className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        <hr classNameName="-mx-20" />

        <div classNameName="py-8">
          <div classNameName="flex mb-4">
            <span classNameName="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
              2
            </span>
            <span classNameName="font-bold text-gray-700">Event Location</span>
          </div>

          <div classNameName="flex ">
            <div classNameName="w-1/2 px-1">
              <div className="flex items-center mb-4 mt-3">
                <input
                  type="radio"
                  id="radio-example-1"
                  name="radio"
                  className="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2"
                />
                <label for="radio-example-1" className="text-gray-600">
                  Venue
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="radio-example-2"
                  name="radio"
                  className="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2"
                />
                <label for="radio-example-2" className="text-gray-600">
                  Online
                </label>
              </div>
            </div>

            <div classNameName="w-1/2 px-1">
              <label className="text-gray-600 font-light ">Event Address</label>
              <input
                type="text"
                placeholder="Enter your Event Address here"
                className="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
          </div>
        </div>

        <hr classNameName="-mx-20" />

        <div classNameName="py-8">
          <div classNameName="flex mb-4">
            <span classNameName="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">
              3
            </span>
            <span classNameName="font-bold text-gray-700">Event Details</span>
          </div>

          <div classNameName="flex ">
            <div classNameName="w-1/2 px-1">
              <label className="text-gray-600 ">Starts at</label>

              <input
                type="date"
                className="w-1/2 mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
              <input type="time" classNameName=" border rounded-lg" />
            </div>

            <div classNameName="w-1/2 px-1">
              <label className="text-gray-600">Ends at</label>
              <input
                type="date"
                className="w-3/6 mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
              <input type="time" classNameName="border rounded-lg" />
            </div>
          </div>

          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200">
            <div className="py-2 px-4 bg-white rounded-t-lg">
              <label for="comment" className="sr-only">
                Event Description
              </label>
              <textarea
                id="comment"
                rows="4"
                className="px-0 w-full  text-gray-700 border-0 focus:ring-0 "
                placeholder="Write a short decription about your event..."
                required
              ></textarea>
            </div>
            <div className="flex justify-between items-center py-2 px-3 border-t"></div>
          </div>

          <label className="text-gray-600 font-light ">Add Event Photos</label>
          <input
            type="file"
            className="w-full text-gray-700 px-3 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Save Event
        </button>
      </div>
    </div>
  );
};

export default AddEventModal;
