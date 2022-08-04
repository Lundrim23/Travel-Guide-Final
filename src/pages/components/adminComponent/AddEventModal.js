import React from "react";

const AddEventModal = ({visible, onClose}) => {

    const handleOnClose = (e) => {
        if(e.target.id === 'container') onClose();
    };

    if(!visible) return null;

    return(
        <div id='container' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded w-2/6 h-96 ">
        <h1 className="font-semibold text-center text-xl text-gray-700">
            Add an Event
        </h1>
        {/* <p className="text-center text-gray-700 mb-5">event name</p> */}

        <div className="flex flex-col w-52 ">
          <input
            
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Event Name"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Event Place"
          />
                    <input
            type="date"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Event Date"
          />
                    <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Event Duration"
          />
        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Publish
          </button>
        </div>
      </div>
        </div>
    )
}

export default AddEventModal;