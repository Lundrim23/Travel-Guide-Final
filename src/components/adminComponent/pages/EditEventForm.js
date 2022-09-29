import React from "react";
import { Upload } from "../../AllSvgs";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function EditEventForm(props) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mb-5 rounded-lg dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <form action="">
        <div className="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 text-left mr-8 font-bold text-gray-600 dark:text-gray-200"
          >
            Name
          </label>
          <input
            onChange={(e) => props.handleEdit(e)}
            value={props.input.eventName}
            name="eventName"
            type="text"
            id="name"
            className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 border-gray-400 dark:bg-neutral-600 dark:text-gray-50 rounded-md focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div className="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-8 text-right font-bold text-gray-600 dark:text-gray-200"
          >
            Organizator
          </label>
          <input
            value={props.input.eventOrganizator}
            onChange={(e) => props.handleEdit(e)}
            name="eventOrganizator"
            type="text"
            id="countrycapital"
            className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 border-gray-400 dark:bg-neutral-600 dark:text-gray-50 rounded-md focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-8 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Tags
          </label>
          <input
            type="text"
            id="countrypopulation"
            value={props.input.eventTags}
            onChange={(e) => props.handleEdit(e)}
            name="eventTags"
            className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 dark:bg-neutral-600 dark:text-gray-50 rounded-md border-gray-400 focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-8 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Address
          </label>
          <input
            type="text"
            id="countrypopulation"
            value={props.input.address}
            onChange={(e) => props.handleEdit(e)}
            name="address"
            className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 dark:bg-neutral-600 dark:text-gray-50 rounded-md border-gray-400 focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-6 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Terrain
          </label>
          <select
            className="bg-gray-100 border ml-2 border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-neutral-600 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
            value={props.input.type}
            onChange={props.provo}
          >
                <option>--Choose Event Type--</option>
                <option value="Beach Event">Beach Event</option>
                <option value="Festival">Festival</option>
                <option value="Art and Movie Culture">Art and Movie Culture</option>
                <option value="Food and Culture Events">Food and Culture Events</option>
          </select>
        </div>

        <div class="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-8 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Description
          </label>
          <input
            type="text"
            id="countrypopulation"
            value={props.input.description}
            onChange={(e) => props.handleEdit(e)}
            name="description"
            className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 dark:bg-neutral-600 dark:text-gray-50 rounded-md border-gray-400 focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="countrypopulation"
            className="inline-block w-16 mr-8 text-left font-bold text-gray-600 dark:text-gray-200"
          >
            Photo
          </label>
          <div className="flex items-center">
            <img
              src={props.input.imageUrl}
              alt="userupdate"
              className="w-24 h-24 rounded-xl object-cover mr-5"
            />
            <label htmlFor="file" className="cursor-pointer">
              <Upload />
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={props.processFile}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <div className="mr-2">
            <button
              onClick={() => navigate("/admin/events")}
              className="py-3 px-8 bg-red-400 rounded-lg text-white font-bold"
            >
              Cancel
            </button>
          </div>

          <div className="text-right">
            <button
              onClick={() => props.update(props.input._id)}
              className="py-3 px-8 bg-teal-400 rounded-lg text-white font-bold"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default EditEventForm;
