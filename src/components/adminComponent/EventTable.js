import React from "react";

const EventTable = (props) => {
  return (
    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
      <thead class="text-white">
        <tr class="bg-gray-300 text-gray-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th class="p-3 text-left">Id</th>
          <th class="p-3 text-left">Event Name</th>
          <th class="p-3 text-left">Event Organizator</th>
          <th class="p-3 text-left">Event Tags</th>
          <th class="p-3 text-left">Address</th>
          <th class="p-3 text-left">Description</th>
          <th class="p-3 text-left">Image</th>
          <th class="p-3 text-left">Update</th>
          <th class="p-3 text-left">Delete</th>
        </tr>
      </thead>
      <tbody class="flex-1 sm:flex-none">
        {props.events.map((event) => (
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
                {event.address}
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">
                {event.description}
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">
                <img
                  cloudName="starlabstitans"
                  className="w-12"
                  src={event.imageUrl}
                  alt="on Table"
                />
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">
                <button onClick={() => props.update(event._id)}>Update</button>
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">
                <button onClick={() => props.remove(event._id)}>Delete</button>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
