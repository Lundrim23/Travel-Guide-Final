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

  console.log("place", place);

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
            }
          })
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

  // const [valuee, setValuee] = useState("");
  const provo = (event) => {
    // setValuee(event.target.value);
  setPlace((prevInput) => {
    return {
      ...prevInput,
      terrain: event.target.value,
    }
  })
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
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              <h1>Edit Place</h1>
            </div>
            <div className="flex mt-5">
              <div className="flex-auto w-2/12 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-3xl object-cover"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXc3Nz////t7e37+/ve3t7l5eXh4eH4+Pjm5uby8vL19fXv7+/p6ena2tpwjZMDAAAEq0lEQVR4nO2d0XajMAxEARswhv7/765JmjYNIYnlAUas7p597xzJ8kg2TlUZhmEYhmEYhmEYhmEYhmEYhmEYhmEYhgp8+nda/EzopqP/jm1JITxxDL85v0LDMAzDMAzjHd38f2qGIcZhbKa27c7lErshhFhfcMOYFIak8EwSx7p39SOuH5pwjkh2/ULdnc7YtNpVdi/0fRMnzSL9e4Ezg958HT5TeNGoU+SnAhOjPok+NB+HcMa1ujS2MUfdlUmRxE6gr9aUqY1InyKJo1SgFoldkCvUsRY/8DEv0GDjZFXmRs/vb9oigWkp0kssC2HNn6cfmu0XsPvw0iRNBG6F07KhzyVyB/FlU3+KIJavQ/aVCFiHcyN1tIwXiF33PQ1zELO63jWoaw2g0KQ0Za41CIHcaYpRSFxNEZtFouetpiCFxAsRpLCeaNMUpZC31KAUEvfBIIXExRSlkLeYlreH7Aohro1aIcR5UyuEdE+plvIqLBnp61BYNtP/gXfHrzymmPK6tsoXz7xnHLHCktPDX3re3gIzbKsjb6EBLUTiUloBDp9q6lJaQfZ8R31vsQUo7GPDe54P6i3qyCoRZEtr3gMoyH5/gbXYgNrD/0EhrW+DKRxOvw5p77hDfHfNvOdDfHcisiYpbF5KbL1BWz7rXpF6J9CchnWvSHjIwJS30FSgcSL1FAOSpsQj75SmCFtDu99fAGz6tKb0CmDTj6E7WsUrAMM24v3+QnGakicpoJoO3ElalZ+STuRJWrwSR/oQVr7ta6FIF93A7Nhu+C4IMzVqeXHBe6E9HdW8t+CF17/4i8wvIntK3TU9Imr2icczS0T7Prtd+4Oki6K3a38RpKmqJBWlKXfjuyS7x1CWpIIg0p7GrJE7WFQXwuwgqgthlXvWpsmx3chK016TY7uRVU2Jv3VaJ0sh9W29NbIUUk/y1zi/wqxKc36FKtdhVgOlspbmjRR5z+7XyRJI/hn+E77a7C7fBSWjxAuyDy8USZSek6p4zmxGfnFISQtVcDOK++mWb74muUAVL7ZVRQIVRNGXXzdhtqhfvoF8cdE3HefP+3SoO8KzSMJnsAPuW4QrXNkKSs8HXMNyJtyCvsN/AsEYNVUXdHr+JQXyUIGSh62zOW4A0I1brL5nuCMaZD9tm52P7Fxa/bRHdj7Q77cipXeeyhna7X/M0IcDondHv22XfEhyLtjuoazjkvORbX68BfBGMBA3oqvOJr6zjBg8bkkW9u1b4VBVB/HC80ZgBuW4dwQ2AHGiw7A/vMCVRhH08tOGFM4f+QWWGgDyFL1ScqBDXWR+KMhT0IfLmyO/9KciR+uCIGoJoTyINK3EW6TW5ui/OwPZVBX0VOcuyPZEPUkqtacK7MwvkjTVU0lnJBNj1HM6+yCppjoc2w3J8b+mQpMQfCDNO7p4Sv5C1NAZ3pO/I+oqpZKjKV2lVHKKqsmzzeQrJB0Cr5KvUNd2KHGm51cIvMG1C6ZwiTLTZgqfoGWSeMMUmkJ+8hUqaw8Fru30CiHPdO6JKTSF/GRPMUwhHaZwiSlk4/wK8x/sM4VsZJ9bqKul+Scz51c4OF28+WKoXRKmRhfhiYgf/gHZ+1ogqTKAlQAAAABJRU5ErkJggg=="
                    alt="userimg"
                  />
                  <div className="flex flex-col ml-5">
                    <span className="font-semibold">placeName</span>
                    <span className="font-light">placeLocation</span>
                  </div>
                </div>

                <div className="mt-5">
                  <span className="font-semibold text-gray-400">
                    Event details
                  </span>
                  <div className="flex items-center mx-0 my-5">
                    <UserIcon />
                    <span className="font-light ml-2">placeDetails</span>
                  </div>
                  <div className="flex items-center mx-0 my-5">
                    <UserIcon />
                    <span className="font-light ml-2">terrain</span>
                  </div>
                </div>
              </div>

              <div className="flex-auto w-10/12 p-5 ml-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <span className="text-2xl font-semibold">Edit</span>
                <form className="flex content-between mt-5">
                  <div>
                    <div className="flex flex-col mt-2">
                      <label className="mb-1 text-sm">Place Name</label>
                      <input
                        type="text"
                        placeholder="place Name"
                        className="border-none w-64"
                        onChange={(e) => handleEdit(e)}
                        value={place.placeName}
                        name="placeName"
                      />
                    </div>
                    <div>
                      <label className="mb-1 text-sm">Place Location</label>
                      <input
                        type="text"
                        placeholder="place location"
                        className="border-none w-64"
                        value={place.placeLocation}
                        onChange={(e) => handleEdit(e)}
                        name="placeLocation"
                      />
                    </div>
                    <div>
                      <label className="mb-1 text-sm">Place Details</label>
                      <input
                        type="text"
                        placeholder="place details"
                        className="border-none w-64"
                        value={place.placeDetails}
                        onChange={(e) => handleEdit(e)}
                        name="placeDetails"
                      />
                    </div>
                    <div>
                      <label className="mb-1 text-sm">Place Terrain</label>
                      <select
                        className="bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-neutral-800 transition dark:border-neutral-900 dark:text-gray-50 dark:focus:border-teal-500"
                        value={place.terrain}
                        onChange={provo}
                      >
                        <option>--Choose--</option>
                        <option value="Beach">Beach</option>
                        <option value="City">City</option>
                        <option value="Cultural Heritage">
                          Cultural Heritage
                        </option>
                        <option value="Lake">Lake</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Park">Park</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Waterfall">Waterfall</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col content-between">
                    <div className="flex items-center">
                      <img
                        src={place.placePhoto}
                        alt="userupdate"
                        className="w-24 h-24 rounded-xl object-cover mr-5"
                      />
                      <label htmlFor="file">
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
                    <button
                      onClick={() => update(place._id)}
                      className="border-none rounded-md cursor-pointer bg-slate-500 text-white font-semibold"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EditPlace;
