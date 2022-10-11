import React, { useEffect, useState } from "react";
import { addPlace, getPlaces } from "../../../utils/fetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddPlaceForm from "./AddPlaceForm";

export default function AddPlace() {
  const [place, setPlace] = useState({
    placeName: "",
    placeLocation: "",
    placeDetails: "",
    terrain: "",
    placePhoto: "",
  });

  const [displayPlaces, setDisplayPlaces] = useState([]);

  const notify = () => {
    toast.success("Place Added Successfuly");
  };

  useEffect(() => {
    //this method gets all places
    const fetchPlaces = async () => {
      try {
        getPlaces().then(function (response) {
          setDisplayPlaces(response.data);
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
    fetchPlaces();
  }, []);

  //this method populates state with data
  function handleChange(event) {
    const { name, value } = event.target;

    setPlace((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

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

  const [valuee, setValuee] = useState("");
  const provo = (event) => {
    setValuee(event.target.value);
  };

  const [country, setCountry] = useState('');
  const addcountry = (event) => {
    setCountry(event.target.value);
  }

  //Submit method to submit all data in db ("creates a new place")
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPlace = {
      placeName: place.placeName,
      placeLocation: country,
      placeDetails: place.placeDetails,
      terrain: valuee,
      placePhoto: place.placePhoto,
    };

    try {
      notify();
      addPlace(newPlace).then((response) => {
        setDisplayPlaces([...displayPlaces, response.data]);
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <AddPlaceForm
      handleChange={handleChange}
      place={place}
      valuee={valuee}
      provo={provo}
      country={country}
      addcountry={addcountry}
      processFile={processFile}
      handleSubmit={handleSubmit}
    />
  );
}
