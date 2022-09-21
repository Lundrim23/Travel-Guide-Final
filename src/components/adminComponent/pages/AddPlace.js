import React, { useEffect, useState } from "react";
import { Upload } from "../../AllSvgs";
import { addPlace, getPlaces } from "../../../utils/fetch";

export default function AddPlace() {
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

  return (
    <div className=" flex flex-auto w-10/12 px-5 dark:bg-neutral-800 transition delay-500 ">
      <div class="flex w-full lg:w-6/12  bg-white space-y-8 dark:bg-neutral-800 transition delay-500 ">
        <div class="w-full px-8 md:px-32 lg:px-24 ">
          <form class="bg-white dark:bg-neutral-700 transition rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <h1 class="text-gray-800 dark:text-gray-50 font-bold text-2xl mb-1">
              Hello Admin!
            </h1>
            <p class="text-sm font-normal text-gray-600 dark:text-gray-400 mb-8">
              Add a place
            </p>
            {/* <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl"> */}
            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                type="text"
                id="placename"
                required
                class="bg-gray-100 dark:bg-neutral-800 dark:text-gray-50 dark:border-neutral-600 dark:focus:border-neutral-400 focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
                onChange={handleChange}
                name="placeName"
                value={place.placeName}
              />
              <label
                for="placename"
                class="dark:text-gray-50 transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Place Name
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                type="text"
                id="placelocation"
                required
                class="bg-gray-100 dark:bg-neutral-800 dark:text-gray-50 dark:border-neutral-600 dark:focus:border-neutral-400 focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
                onChange={handleChange}
                name="placeLocation"
                value={place.placeLocation}
              />
              <label
                for="placelocation"
                class="dark:text-gray-50 transform transition-all absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Place Location
              </label>
            </div>
            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <textarea
                onChange={handleChange}
                name="placeDetails"
                value={place.placeDetails}
                type="text"
                id="placedetails"
                required
                rows="4"
                class="bg-gray-100 dark:bg-neutral-800 dark:border-neutral-600 dark:text-gray-50 focus:border-emerald-300 w-full px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              ></textarea>
              <label
                for="placedetails"
                class="transform transition-all dark:text-gray-50 absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                place details
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <select
                value={valuee}
                onChange={provo}
                className="bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-neutral-400"
              >
                <option>--Choose Place Terrain--</option>
                <option value="Beach">Beach</option>
                <option value="City">City</option>
                <option value="Cultural Heritage">Cultural Heritage</option>
                <option value="Lake">Lake</option>
                <option value="Mountain">Mountain</option>
                <option value="Park">Park</option>
                <option value="Rivers">Rivers</option>
                <option value="Waterfall">Waterfall</option>
              </select>
            </div>
            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <label className="pl-3 cursor-pointer flex" htmlFor="file">
                <Upload />
                <span className="ml-2 dark:text-gray-50 ">Upload a photo</span>
              </label>
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={processFile}
              />
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              class="block w-full bg-teal-400 mt-5 py-2 rounded-2xl hover:bg-teal-600 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
