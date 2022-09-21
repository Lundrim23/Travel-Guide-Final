import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SortIcon, Delete } from "../../AllSvgs";
import {
  addPlace,
  deletePlace,
  getPlaces,
  updatePlacee,
} from "../../../utils/fetch";
// import PlaceTable from "../PlaceTable";
import PlaceTable from "./PlaceTable";

export default function PlaceComponent() {
  const [place, setPlace] = useState({
    placeName: "",
    placeLocation: "",
    placeDetails: "",
    terrain: "",
    placePhoto: "",
  });

  const [displayPlaces, setDisplayPlaces] = useState([]);

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

  const [uplphoto, setUplphoto] = useState("");
  //this method uploads photo in cloudinary
  const imageUpload = async (event) => {
    // const files = event.target.files;
    // const data = new FormData();
    // data.append("file", files[0]);
    // data.append("upload_preset", "jipopo2x");
    // const res = await uploadCloudinary(data);
    // setUplphoto(res.data.secure_url);
  };
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
          setUplphoto(url);
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

  //Submit method to submit all data in db ("creates a new place")
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPlace = {
      placeName: place.placeName,
      placeLocation: place.placeLocation,
      placeDetails: place.placeDetails,
      terrain: valuee,
      placePhoto: uplphoto,
    };

    try {
      addPlace(newPlace).then((response) => {
        setDisplayPlaces([...displayPlaces, response.data]);
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method updates an event
  const updatePlace = async (id) => {
    const updatePlace = {
      placeName: place.placeName,
      placeLocation: place.placeLocation,
      placeDetails: place.placeDetails,
      placePhoto: uplphoto,
      terrain: place.terrain,
    };

    try {
      updatePlacee(id, updatePlace).then((response) => {
        setDisplayPlaces(
          displayPlaces.map((plac) =>
            plac.id === id ? { ...response.data } : displayPlaces
          )
        );
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method deletes a place
  const removePlace = async (id) => {
    try {
      deletePlace(id);
      const myAllData = displayPlaces.filter((place) => place._id !== id);
      setDisplayPlaces(myAllData);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //this method sorts by name
  const [order, setOrder] = useState("ASC");
  const sort = (col) => {
    if (order === "ASC") {
      const sorted = [...displayPlaces].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setDisplayPlaces(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...displayPlaces].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setDisplayPlaces(sorted);
      setOrder("ASC");
    }
  };

  return (
    // <PlaceTable
    //   displayPlaces={displayPlaces}
    //   remove={removePlace}
    //   update={updatePlace}
    //   sort={sort}
    // />
    <h1>Place component</h1>
  );
}
