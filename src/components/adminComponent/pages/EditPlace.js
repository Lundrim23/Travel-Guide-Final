import { React, useState, useEffect } from "react";
import { updatePlacee, getPlaceById } from "../../../utils/fetch";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EditPlaceForm from "./EditPlaceForm";

function EditPlace() {
  const [place, setPlace] = useState({
    placeName: "",
    placeLocation: "",
    placeDetails: "",
    terrain: "",
    placePhoto: "",
  });

  const { id } = useParams();

  const notify = () => {
    toast.success("Place Updated Successfuly");
  };

  useEffect(() => {
    const editPlaceById = () => {
      getPlaceById(id).then(function (res) {
        setPlace(res.data);
      });
    };

    editPlaceById();
  }, [id]);

  // const [uplphoto, setUplphoto] = useState("");
  //this method uploads photo in cloudinary
  // const imageUpload = async (event) => {
  // const files = event.target.files;
  // const data = new FormData();
  // data.append("file", files[0]);
  // data.append("upload_preset", "jipopo2x");
  // const res = await uploadCloudinary(data);
  // setUplphoto(res.data.secure_url);
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
        // console.log(this.responseText);
        // var response = JSON.parse(xhr.responseText);
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var url = response.secure_url; //get the url
          // var json = { location: url }; //set it in the format tinyMCE wants it
          // success(json.location);
          console.log(url);
          // setUplphoto(url);
          setPlace((prevInput) => {
            return {
              ...prevInput,
              placePhoto: url,
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

  //this method updates an event
  const update = async (id) => {
    const updatePlace = {
      placeName: place.placeName,
      placeLocation: place.placeLocation,
      placeDetails: place.placeDetails,
      placePhoto: place.placePhoto,
      terrain: place.terrain,
    };

    try {
      updatePlacee(id, updatePlace);
      notify();
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const provo = (event) => {
    setPlace((prevInput) => {
      return {
        ...prevInput,
        terrain: event.target.value,
      };
    });
  };

  //this method populates state with data
  function handleEdit(event) {
    const { name, value } = event.target;

    setPlace((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  return (
    <>
      {place && (
        <>
          <EditPlaceForm
            place={place}
            handleEdit={handleEdit}
            provo={provo}
            processFile={processFile}
            update={update}
          />
        </>
      )}
    </>
  );
}

export default EditPlace;
