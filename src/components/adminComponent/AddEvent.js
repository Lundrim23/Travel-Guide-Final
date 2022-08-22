import React from "react";

const AddEvent = (props) => {
    return(
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
                      onChange={props.handleChange}
                      name="eventName"
                      value={props.input.eventName}
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
                      onChange={props.handleChange}
                      name="eventOrganizator"
                      value={props.input.eventOrganizator}
                    />
                  </div>
                </div>

                <div className="w-2/3 px-1 flec-col">
                  <label class="text-gray-600 font-light ">Event Tags</label>
                  <input
                    type="text"
                    placeholder="Enter your Event tags here"
                    class="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                    onChange={props.handleChange}
                    name="eventTags"
                    value={props.input.eventTags}
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
                  <div className="w-2/3 px-1">
                    <div class="flex items-center mb-4 mt-3">
                    <div className="w-1/2 px-1">
                    <label class="text-gray-600 font-light ">
                      Event Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Event Address here"
                      class="w-full mt-2 mb-6 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                      onChange={props.handleChange}
                      name="address"
                      value={props.input.address}
                    />
                  </div>
                    </div>
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
                      onChange={props.handleChange}
                      name="description"
                      value={props.input.description}
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
                  name='image'
                  onChange={props.handleChange}
                  class="w-full text-gray-700 px-3 py-2 border rounded"
                />
                <input className='file-path validate' type='text' />
              </div>

              <button
                onClick={props.handleClick}
                type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Save Event
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}

export default AddEvent;