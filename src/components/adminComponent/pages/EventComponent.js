import React, { useEffect, useState } from "react";
import EventTable from "./EventTable";
import {
  addEvents,
  deleteEvent,
  getEvents,
  like,
  unlike,
  updateEvents,
} from "../../../utils/fetch";

export default function EventComponent() {
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
        getEvents().then(function (response) {
          setEvents(response.data);
        });
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
  // const uploadPhoto = async (event) => {
  //   const files = event.target.files;
  //   const formData = new FormData();
  //   formData.append("file", files[0]);
  //   formData.append("upload_preset", "jipopo2x");

  //   const res = await uploadCloudinary(formData);
  //   console.log(res);
  //   const imageUrle = res.data.secure_url;
  //   setPhotoUpload(imageUrle);
  // };
  const processFile = async (e) => {
    var file = e.target.files[0];

    // Set your cloud name and unsigned upload preset here:
    var YOUR_CLOUD_NAME = "starlabstitans";
    var YOUR_UNSIGNED_UPLOAD_PRESET = "jipopo2x";

    var POST_URL = "https://api.cloudinary.com/v1_1/starlabstitans/auto/upload";

    var XUniqueUploadId = +new Date();

    processFile();

    function processFile(e) {
      var size = file.size;
      var sliceSize = 20000000000000000000;
      var start = 0;

      setTimeout(loop, 3);

      function loop() {
        var end = start + sliceSize;

        if (end > size) {
          end = size;
        }
        var s = slice(file, start, end);
        send(s, start, end - 1, size);
        if (end < size) {
          start += sliceSize;
          setTimeout(loop, 3);
        }
      }
    }

    function send(piece, start, end, size) {
      console.log("start ", start);
      console.log("end", end);

      var formdata = new FormData();
      console.log(XUniqueUploadId);

      formdata.append("file", piece);
      formdata.append("cloud_name", YOUR_CLOUD_NAME);
      formdata.append("upload_preset", YOUR_UNSIGNED_UPLOAD_PRESET);
      // formdata.append("public_id", "myChunkedFile2");

      var xhr = new XMLHttpRequest();
      xhr.open("POST", POST_URL, false);
      xhr.setRequestHeader("X-Unique-Upload-Id", XUniqueUploadId);
      xhr.setRequestHeader(
        "Content-Range",
        "bytes " + start + "-" + end + "/" + size
      );

      xhr.onload = function () {
        // do something to response
        // console.log(this.responseText);
        // var response = JSON.parse(xhr.responseText);
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var url = response.secure_url; //get the url
          // var json = { location: url }; //set it in the format tinyMCE wants it
          // success(json.location);
          console.log(url);
          setPhotoUpload(url);
        }
      };

      xhr.send(formdata);
    }

    function slice(file, start, end) {
      var slice = file.mozSlice
        ? file.mozSlice
        : file.webkitSlice
        ? file.webkitSlice
        : file.slice
        ? file.slice
        : noop;

      return slice.bind(file)(start, end);
    }

    function noop() {}
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

    try {
      addEvents(newEvent).then((response) => {
        setEvents([...events, response.data]);
      });
    } catch (err) {
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

    try {
      updateEvents(id, article).then((response) => {
        setEvents(
          events.map((event) =>
            event.id === id ? { ...response.data } : event
          )
        );
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // this one deletes an event
  const remove = async (id) => {
    try {
      deleteEvent(id);
      const myalldata = events.filter((item) => item._id !== id);
      setEvents(myalldata);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method sorts by name
  const [order, setOrder] = useState("ASC");
  const sort = (col) => {
    if (order === "ASC") {
      const sorted = [...events].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setEvents(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...events].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setEvents(sorted);
      setOrder("ASC");
    }
  };

  //this method likes an event
  const likeEvent = async (id) => {
    try {
      // like(id).then((response) => {
      //   setEvents([...events, response.data]);
      // });

      like(id).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //this method unlikes an event
  const unlikeEvenet = (id) => {
    try {
      unlike(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <EventTable
    //   events={events}
    //   update={update}
    //   remove={remove}
    //   sort={sort}
    //   like={likeEvent}
    //   unlike={unlikeEvenet}
    // />
    <h1>Hello from eventcomponent</h1>
  );
}
