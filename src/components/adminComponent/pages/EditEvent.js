import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEventById, updateEvents } from "../../../utils/fetch";
import EditEventForm from "./EditEventForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditEvent() {
  const [input, setInput] = useState({
    eventName: "",
    eventOrganizator: "",
    eventTags: "",
    address: "",
    description: "",
    imageUrl: "",
  });

  const notify = () => {
    toast.success("Event Updated Successfuly");
  };

  const { id } = useParams();

  useEffect(() => {
    const editEventById = () => {
      getEventById(id).then(function (res) {
        setInput(res.data);
      });
    };
    editEventById();
  }, [id]);

  //this method uploads photo in cloudinary
  // const [photoUpload, setPhotoUpload] = useState("");
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
          // setInput.imageUrl(url);
          // setPhotoUpload(url);
          setInput((prevInput) => {
            return {
              ...prevInput,
              imageUrl: url,
            };
          });
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

  //this one updates an event
  const update = async (id) => {
    const article = {
      eventName: input.eventName,
      eventOrganizator: input.eventOrganizator,
      eventTags: input.eventTags,
      location: input.location,
      address: input.address,
      description: input.description,
      imageUrl: input.imageUrl,
    };

    try {
      updateEvents(id, article);
      notify();
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleEdit = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  return (
    <>
      {input && (
        <>
          <EditEventForm
            handleEdit={handleEdit}
            input={input}
            processFile={processFile}
            update={update}
          />
        </>
      )}
    </>
  );
}
