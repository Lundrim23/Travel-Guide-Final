import React from "react";
import { Upload } from "../../AllSvgs";
import { useState } from "react";
import { addEvents } from "../../../utils/fetch";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function AddEvent() {
  // const location = useLocation();

  // React.useEffect(() => {
  //   console.log("Location from new user ", location)
  // }, [])

  const [input, setInput] = useState({
    eventName: "",
    eventOrganizator: "",
    eventTags: "",
    address: "",
    description: "",
    imageUrl: "",
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

  const navigate = useNavigate();

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
      // setTimeout(() => {
      //   addEvents(newEvent).then(navigate('/admin/events'))
      // }, 2200);
      addEvents(newEvent);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className=" flex flex-auto w-10/12 px-5 dark:bg-neutral-800 transition delay-500 ">
      <div class="flex w-full lg:w-6/12  bg-white space-y-8 dark:bg-neutral-800 transition delay-500 ">
        <div class="w-full px-8 md:px-32 lg:px-24">
          <form class="bg-white dark:bg-neutral-700 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <h1 class="text-gray-800 dark:text-gray-50 font-bold text-2xl mb-1">
              Hello Admin!
            </h1>
            <p class="text-sm font-normal text-gray-600 dark:text-gray-400 mb-8">
              Add an event
            </p>
            {/* <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl"> */}
            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                onChange={handleChange}
                name="eventName"
                value={input.eventName}
                type="text"
                id="eventname"
                required
                class=" bg-gray-100 dark:bg-neutral-800 dark:border-neutral-600 dark:text-gray-50 focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="eventname"
                class="transform transition-all dark:text-gray-50 absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                event name
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                onChange={handleChange}
                name="eventOrganizator"
                value={input.eventOrganizator}
                type="text"
                id="eventorganizator"
                required
                class="bg-gray-100 dark:bg-neutral-800 dark:border-neutral-600 dark:text-gray-50 focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="eventorganizator"
                class="transform transition-all dark:text-gray-50 absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                event organizator
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                onChange={handleChange}
                name="eventTags"
                value={input.eventTags}
                type="text"
                id="eventtags"
                required
                class="bg-gray-100 dark:bg-neutral-800 dark:border-neutral-600 dark:text-gray-50 focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="eventtags"
                class="transform transition-all dark:text-gray-50 absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                event tags
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <input
                onChange={handleChange}
                name="address"
                value={input.address}
                type="text"
                id="eventaddress"
                required
                class="bg-gray-100 dark:bg-neutral-800 dark:border-neutral-600 dark:text-gray-50 focus:border-emerald-300 w-full h-10 px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              />
              <label
                for="eventaddress"
                class="transform transition-all dark:text-gray-50 absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                event address
              </label>
            </div>

            <div class="flex items-center mb-8 py-2 px-3 rounded-2xl relative group">
              <textarea
                onChange={handleChange}
                name="description"
                value={input.description}
                type="text"
                id="eventdescription"
                required
                rows="4"
                class="bg-gray-100 dark:bg-neutral-800 dark:border-neutral-600 dark:text-gray-50 focus:border-emerald-300 w-full px-4 text-sm peer bg-transparent border-2 rounded-lg outline-none"
              ></textarea>
              <label
                for="eventdescription"
                class="transform transition-all dark:text-gray-50 absolute top-0 left-4 h-full flex items-center pl-3 text-sm text-gray-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                event description
              </label>
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
              onClick={handleClick}
              type="submit"
              class="block w-full bg-teal-400 mt-5 py-2 rounded-2xl hover:bg-teal-600 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* <div>
        <div class="h-screen flex bg-gradient-to-r from-cyan-500 to-blue-500">
          <div
            class="hidden lg:flex w-full lg:w-4/12 login_img_section justify-around items-center">
            <div
              class="bg-black opacity-20 inset-0 z-0"
            ></div>
            <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 class="text-white font-bold text-4xl font-sans">
                Simple App
              </h1>
              <p class="text-white mt-1">The simplest app to use</p>
              <div class="flex justify-center lg:justify-start mt-6">
                <a
                  href="#"
                  class="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* 
      <h1>Add New Event</h1>


      <form className="">

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border ">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border relative">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border relative">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border relative">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <div className=" mt-2 mr-5">
          <div className="m-0 p-0 box-border relative">
            <div class="w-56 relative group">
              <input
                type="text"
                id="username"
                required
                class="w-full h-10 px-4 text-sm peer bg-transparent border-2 border-emerald-600 rounded-lg outline-none"
              />
              <label
                for="username"
                class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >
                Username
              </label>
            </div>
          </div>
        </div>

        <button className="border-none bg-slate-400 text-white ">Create</button>
      </form> */}
    </div>
  );
}
