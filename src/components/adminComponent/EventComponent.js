import React, { useEffect, useState } from "react";
import AddEvent from "../adminComponent/AddEvent";
import axios from "axios";
import {Image} from 'cloudinary-react'

const EventComponent = () => {
  const [input, setInput] = useState({
    eventName: "",
    eventOrganizator: "",
    eventTags: "",
    location: "",
    address: ""
  });

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
    event.preventDefault();

    const newEvent = {
      eventName: input.eventName,
      eventOrganizator: input.eventOrganizator,
      eventTags: input.eventTags,
      location: input.location,
      address: input.address,
    };

    axios.post("http://localhost:5000/api/events/", newEvent);
  }

  //this one displays event on the table
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios
      .get("http://localhost:5000/api/events/get")
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
    const url = "http://localhost:5000/api/events/update/";

    const article = {
      eventName: input.eventName,
      eventOrganizator: input.eventOrganizator,
      eventTags: input.eventTags,
    };

    axios.patch(url + id, article);
  }

  //this one deletes an event
  function remove(id) {
    const url = "http://localhost:5000/api/events/delete/";

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
      location:"Venue"
    })
  }
//radio button online value
  const handleOnlineChange = () => {
    setInput({
      ...input,
      location:"Online"
    })
  }

  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "jipopo2x")

    axios.post('https://api.cloudinary.com/v1_1/starlabstitans/image/upload', formData).then((response) =>{
      console.log(response);
    })
  };

  return (
    <>
      {/* Popup starts here */}
      <div>
        <AddEvent />
      </div>
      <div>
        <form>
          <input
            onChange={handleChange}
            name="eventName"
            value={input.eventName}
            placeholder="name"
          ></input>
          <input
            onChange={handleChange}
            name="eventOrganizator"
            value={input.eventOrganizator}
            placeholder="Event organizator"
          ></input>
          <input
            onChange={handleChange}
            name="eventTags"
            value={input.eventTags}
            placeholder="Event Tags"
          ></input>
          <input
          onChange={e => {handleChange(e); handleVenueChange()}}
            type="radio"
            id="radio-example-1"
            name="radio"
            value={input.radio}
            //onChange={handleVenueChange}
          />
          <label for="radio-example-1" class="text-gray-600">
            Venue
          </label>
          <input
          onChange={e => {handleChange(e); handleOnlineChange()}}
            type="radio"
            id="radio-example-2"
            name="radio"
            value={input.radio}
            //onChange={handleOnlineChange}
          />
          <label for="radio-example-2" class="text-gray-600">
            Online
          </label>
          <input
            onChange={handleChange}
            name="address"
            value={input.address}
            placeholder="Event Address"
          ></input>
          <button onClick={handleClick}>Add Event</button>
        </form>
        <hr />

        <input 
        type="file" 
        onChange={(event) => {
          setImageSelected(event.target.files[0])}}>
        </input>
        <button onClick={uploadImage()} >Upload Image</button>

        <Image cloudName="starlabstitans" className="w-12"
          publicId="https://res.cloudinary.com/starlabstitans/image/upload/v1660307502/mih6dncv2fspwsuqql2w.png"
        />

        <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead class="text-white">
            <tr class="bg-gray-300 text-gray-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="p-3 text-left">Id</th>
              <th class="p-3 text-left">Event Name</th>
              <th class="p-3 text-left">Event Organizator</th>
              <th class="p-3 text-left">Event Tags</th>
              <th class="p-3 text-left">Location</th>
              <th class="p-3 text-left">Address</th>
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
