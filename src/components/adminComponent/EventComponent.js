import React, { useEffect, useState } from "react";
import axios from "axios";
import EventTable from "./EventTable";
import AddEvent from "./AddEvent";

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
    fetchEvents();
  }, []);

  const [image, setImage] = useState("");

  //this one populates state with data
  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });

    setImage(event.target.files[0]);
  }

  //this one saves data to db throught be
  const handleClick = async (event, id, async) => {
    const url = process.env.REACT_APP_SAVE_DATA;

    event.preventDefault();

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "jipopo2x");

    const res = await axios.post(
      process.env.REACT_APP_CLOUDINARY_UPLOAD,
      formData
    );
    const imageUrle = res.data.secure_url;
    console.log("this is image url " + imageUrle);

    //setImage(imageUrle.data);

    const newEvent = {
      eventName: input.eventName,
      eventOrganizator: input.eventOrganizator,
      eventTags: input.eventTags,
      location: input.location,
      address: input.address,
      description: input.description,
      imageUrl: imageUrle,
    };

    axios.post(url, newEvent);
  };

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
      imageUrl: input.imageUrl,
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

  return (
    <>
      <AddEvent
        handleChange={handleChange}
        input={input}
        handleClick={handleClick}
      />
      <hr />
      <EventTable events={events} update={update} remove={remove} />
    </>
  );
};

export default EventComponent;
