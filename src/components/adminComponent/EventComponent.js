import React, { useEffect, useState } from "react";
import axios from "axios";
import EventTable from "./EventTable";
import AddEvent from "./AddEvent";
import { api, fetchEvents, getUser } from "../../utils/fetch";

const EventComponent = () => {
  const [input, setInput] = useState({
    eventName: "",
    eventOrganizator: "",
    eventTags: "",
    address: "",
    description: "",
    imageUrl: "",
  });

  //this one displays event on the table
  const [events, setEvents] = useState([]);


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        //this method gets data from db and populates state with data
        const response = await api.get("/get");
        setEvents(response.data);
        
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

  //this method uploads photo in cloudinary
  const [photoUpload, setPhotoUpload] = useState("");
  const uploadPhoto = async (event) => {
    const files = event.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "jipopo2x");

    const res = await axios.post(
      process.env.REACT_APP_CLOUDINARY_UPLOAD,
      formData
    );
    const imageUrle = res.data.secure_url;
    setPhotoUpload(imageUrle);
  };

  //this one saves data to db throught be
  const handleClick = async (event, id) => {
    event.preventDefault();

    const newEvent = {
      eventName: input.eventName,
      eventOrganizator: input.eventOrganizator,
      eventTags: input.eventTags,
      location: input.location,
      address: input.address,
      description: input.description,
      imageUrl: photoUpload,
    };
       
    try{
      const response = await api.post('/', newEvent)
      const allEvents = [...events, response.data];
    setEvents(allEvents);

    } catch (err){
      console.log(`Error: ${err.message}`);
    }
  };


  //this one updates an event
  const update = async (id) => {
    const article = {
      eventName: input.eventName,
      eventOrganizator: input.eventOrganizator,
      eventTags: input.eventTags,
      location: input.location,
      address: input.address,
      description: input.description,
      imageUrl: photoUpload,
    };

    try{
      const response = await api.patch(`update/${id}`, article)
      setEvents(events.map(event => event.id === id ? {...response.data} : event ));
    } catch (err){
      console.log(`Error: ${err.message}`);
    }
  }

  // this one deletes an event
  const remove = async(id) => {
    try{
      await api.delete(`/delete/${id}`);
      const myalldata = events.filter((item) => item._id !== id);
      setEvents(myalldata);
    } catch (err){
      console.log(`Error: ${err.message}`);
    }

  }

  return (
    <>
      <AddEvent
        handleChange={handleChange}
        handleClick={handleClick}
        uploadPhoto={uploadPhoto}
        input={input}
      />
      <hr />
      <EventTable events={events} update={update} remove={remove} />
    </>
  );
};

export default EventComponent;
