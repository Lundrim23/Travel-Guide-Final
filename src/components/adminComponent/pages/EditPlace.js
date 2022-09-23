import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePlacee, getPlaceById } from "../../../utils/fetch";
import { UserIcon, Upload } from "../../AllSvgs";

function EditPlace() {
  const [place, setPlace] = useState({
    placeName: "",
    placeLocation: "",
    placeDetails: "",
    terrain: "",
    placePhoto: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const editPlaceById = () => {
      getPlaceById(id).then(function (res) {
        setPlace(res.data);
      });
    };

    editPlaceById();
  }, [id]);

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
          <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mb-5 rounded-lg dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <form action="">
              <div className="flex items-center mb-5">
                <label
                  for="countrypopulation"
                  className="inline-block w-16 mr-6 text-left font-bold text-gray-600 dark:text-gray-200"
                >
                  Name
                </label>
                <input
                  value={place.placeName}
                  onChange={(e) => handleEdit(e)}
                  type="text"
                  id="name"
                  name="placeName"
                  className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 border-gray-400 dark:bg-neutral-600 dark:text-gray-50 rounded-md focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>

              <div className="flex items-center mb-5">
                <label
                  for="countrypopulation"
                  className="inline-block w-16 mr-6 text-left font-bold text-gray-600 dark:text-gray-200"
                >
                  Location
                </label>
                <input
                  value={place.placeLocation}
                  onChange={(e) => handleEdit(e)}
                  name="placeLocation"
                  type="text"
                  id="countrycapital"
                  className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 border-gray-400 dark:bg-neutral-600 dark:text-gray-50 rounded-md focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>

              <div class="flex items-center mb-5">
                <label
                  for="countrypopulation"
                  className="inline-block w-16 mr-6 text-left font-bold text-gray-600 dark:text-gray-200"
                >
                  Details
                </label>
                <input
                  type="text"
                  id="countrypopulation"
                  value={place.placeDetails}
                  onChange={(e) => handleEdit(e)}
                  name="placeDetails"
                  className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 dark:bg-neutral-600 dark:text-gray-50 rounded-md border-gray-400 focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>

              <div class="flex items-center mb-5">
                <label
                  for="countrypopulation"
                  className="inline-block w-16 mr-6 text-left font-bold text-gray-600 dark:text-gray-200"
                >
                  Terrain
                </label>
                <select
                  className="bg-gray-100 border ml-2 border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-neutral-600 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
                  value={place.terrain}
                  onChange={provo}
                >
                  <option>--Choose--</option>
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

              <div class="flex items-center mb-5">
                <label
                  for="countrypopulation"
                  className="inline-block w-16 mr-6 text-left font-bold text-gray-600 dark:text-gray-200"
                >
                  Photo
                </label>
                <div className="flex items-center">
                  <img
                    src={place.placePhoto}
                    alt="userupdate"
                    className="w-24 h-24 rounded-xl object-cover mr-5"
                  />
                  <label htmlFor="file" className="cursor-pointer">
                    <Upload />
                  </label>
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={processFile}
                    name="placePhoto"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <div className="mr-2">
                  <button
                    onClick={() => navigate("/admin/places")}
                    className="py-3 px-8 bg-red-400 rounded-lg text-white font-bold"
                  >
                    Cancel
                  </button>
                </div>

                <div className="text-right">
                  <button
                    onClick={() => update(place._id)}
                    className="py-3 px-8 bg-teal-400 rounded-lg text-white font-bold"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default EditPlace;
