import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById, updateEvents } from "../../../utils/fetch";
import { Upload } from "../../AllSvgs";

export default function EditEvent() {
  const [input, setInput] = useState({
    eventName: "",
    eventOrganizator: "",
    eventTags: "",
    address: "",
    description: "",
    imageUrl: "",
  });

  const navigate = useNavigate();
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
          <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mb-5 rounded-lg dark:bg-neutral-700 transition shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <form action="">
              <div className="flex items-center mb-5">
                <label
                  for="countrypopulation"
                  className="inline-block w-16 text-left mr-8 font-bold text-gray-600 dark:text-gray-200"
                >
                  Name
                </label>
                <input
                  onChange={(e) => handleEdit(e)}
                  value={input.eventName}
                  name="eventName"
                  type="text"
                  id="name"
                  className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 border-gray-400 dark:bg-neutral-600 dark:text-gray-50 rounded-md focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>

              <div className="flex items-center mb-5">
                <label
                  for="countrypopulation"
                  className="inline-block w-16 mr-8 text-right font-bold text-gray-600 dark:text-gray-200"
                >
                  Organizator
                </label>
                <input
                  value={input.eventOrganizator}
                  onChange={(e) => handleEdit(e)}
                  name="eventOrganizator"
                  type="text"
                  id="countrycapital"
                  className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 border-gray-400 dark:bg-neutral-600 dark:text-gray-50 rounded-md focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>

              <div class="flex items-center mb-5">
                <label
                  for="countrypopulation"
                  className="inline-block w-16 mr-8 text-left font-bold text-gray-600 dark:text-gray-200"
                >
                  Tags
                </label>
                <input
                  type="text"
                  id="countrypopulation"
                  value={input.eventTags}
                  onChange={(e) => handleEdit(e)}
                  name="eventTags"
                  className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 dark:bg-neutral-600 dark:text-gray-50 rounded-md border-gray-400 focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>

              <div class="flex items-center mb-5">
                <label
                  for="countrypopulation"
                  className="inline-block w-16 mr-8 text-left font-bold text-gray-600 dark:text-gray-200"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="countrypopulation"
                  value={input.address}
                  onChange={(e) => handleEdit(e)}
                  name="address"
                  className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 dark:bg-neutral-600 dark:text-gray-50 rounded-md border-gray-400 focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>

              <div class="flex items-center mb-5">
                <label
                  for="countrypopulation"
                  className="inline-block w-16 mr-8 text-left font-bold text-gray-600 dark:text-gray-200"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="countrypopulation"
                  value={input.description}
                  onChange={(e) => handleEdit(e)}
                  name="description"
                  className="flex-1 py-2 pl-2 border-b-2 bg-gray-100 dark:bg-neutral-600 dark:text-gray-50 rounded-md border-gray-400 focus:border-teal-400 text-gray-600 placeholder-gray-400 outline-none"
                />
              </div>

              <div class="flex items-center mb-5">
                <label
                  for="countrypopulation"
                  className="inline-block w-16 mr-8 text-left font-bold text-gray-600 dark:text-gray-200"
                >
                  Photo
                </label>
                <div className="flex items-center">
                  <img
                    src={input.imageUrl}
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
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <div className="mr-2">
                  <button
                    onClick={() => navigate("/admin/events")}
                    className="py-3 px-8 bg-red-400 rounded-lg text-white font-bold"
                  >
                    Cancel
                  </button>
                </div>

                <div className="text-right">
                  <button
                    onClick={() => update(input._id)}
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
