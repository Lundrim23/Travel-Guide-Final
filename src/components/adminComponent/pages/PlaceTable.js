import React, { useEffect, useState } from "react";
import { SortIcon, Delete } from "../../AllSvgs";
import { Link, Outlet } from "react-router-dom";
import {
  addPlace,
  deletePlace,
  getPlaces,
  updatePlacee,
} from "../../../utils/fetch";

function PlaceTable() {
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
    <div className="flex-auto w-10/12 px-5 dark:bg-neutral-800 transition delay-500">
      <Link to="/admin/newplace">
        <button className="w-40 border-none p-1 mb-4 bg-teal-400 rounded-md cursor-pointer text-white">
          Create Place
        </button>
      </Link>

      <Outlet />
      <div class="overflow-x-auto relative sm:rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 transition dark:text-gray-400">
            <tr>
              <th
                onClick={() => sort("placeName")}
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Place Name
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => sort("placeLocation")}
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Place Location
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => sort("placeDetails")}
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Place Details
                  <SortIcon />
                </div>
              </th>
              <th
                onClick={() => sort("terrain")}
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                <div class="flex items-center">
                  Place Terrain
                  <SortIcon />
                </div>
              </th>
              <th
                scope="col"
                class="py-3 px-6 cursor-pointer dark:text-gray-50"
              >
                Place Photo
              </th>
              <th scope="col" class="py-3 px-6 dark:text-gray-50">
                <span>Edit</span>
              </th>
              <th scope="col" class="py-3 px-6 dark:text-gray-50">
                <span>Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="dark:bg-neutral-900 transition dark:divide-neutral-700 dark:text-gray-50">
            {displayPlaces.map((place) => (
              <>
                <tr class="bg-white border-b dark:bg-neutral-600 transition dark:border-none">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {place.placeName}
                  </th>
                  <td class="py-4 px-6">{place.placeLocation}</td>
                  <td class="py-4 px-6">{place.placeDetails}</td>
                  <td class="py-4 px-6">{place.terrain}</td>
                  <td class="py-4 px-6">
                    {" "}
                    <img
                      className="w-12"
                      src={place.placePhoto}
                      alt="On table"
                    />
                  </td>
                  <td class="py-4 px-6 text-left">
                    <Link to={`editplace/${place._id}`}>
                      <button className="font-medium text-blue-600 dark:text-blue-500 dark:bg-gray-700 px-2 py-1 rounded-full hover:underline">
                        Edit
                      </button>
                    </Link>
                  </td>

                  <td class="py-4 px-6 text-left">
                    <button
                      onClick={() => removePlace(place._id)}
                      className="font-medium text-red-500 dark:text-red-500 hover:underline"
                    >
                      <Delete />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlaceTable;
