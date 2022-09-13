import React from "react";
import { UserIcon, Upload } from "../../AllSvgs";

export default function EditEvent() {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between">
        <h1>Edit Event</h1>
        <button className="w-20 border-none p-1 bg-teal-400 rounded-md cursor-pointer text-white">
          Create
        </button>
      </div>

      {/* user container */}
      <div className="flex mt-5">
        {/* usershow */}
        <div className="flex-auto w-2/12 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          {/* usershowtop */}
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-3xl object-cover"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXc3Nz////t7e37+/ve3t7l5eXh4eH4+Pjm5uby8vL19fXv7+/p6ena2tpwjZMDAAAEq0lEQVR4nO2d0XajMAxEARswhv7/765JmjYNIYnlAUas7p597xzJ8kg2TlUZhmEYhmEYhmEYhmEYhmEYhmEYhmEYhgp8+nda/EzopqP/jm1JITxxDL85v0LDMAzDMAzjHd38f2qGIcZhbKa27c7lErshhFhfcMOYFIak8EwSx7p39SOuH5pwjkh2/ULdnc7YtNpVdi/0fRMnzSL9e4Ezg958HT5TeNGoU+SnAhOjPok+NB+HcMa1ujS2MUfdlUmRxE6gr9aUqY1InyKJo1SgFoldkCvUsRY/8DEv0GDjZFXmRs/vb9oigWkp0kssC2HNn6cfmu0XsPvw0iRNBG6F07KhzyVyB/FlU3+KIJavQ/aVCFiHcyN1tIwXiF33PQ1zELO63jWoaw2g0KQ0Za41CIHcaYpRSFxNEZtFouetpiCFxAsRpLCeaNMUpZC31KAUEvfBIIXExRSlkLeYlreH7Aohro1aIcR5UyuEdE+plvIqLBnp61BYNtP/gXfHrzymmPK6tsoXz7xnHLHCktPDX3re3gIzbKsjb6EBLUTiUloBDp9q6lJaQfZ8R31vsQUo7GPDe54P6i3qyCoRZEtr3gMoyH5/gbXYgNrD/0EhrW+DKRxOvw5p77hDfHfNvOdDfHcisiYpbF5KbL1BWz7rXpF6J9CchnWvSHjIwJS30FSgcSL1FAOSpsQj75SmCFtDu99fAGz6tKb0CmDTj6E7WsUrAMM24v3+QnGakicpoJoO3ElalZ+STuRJWrwSR/oQVr7ta6FIF93A7Nhu+C4IMzVqeXHBe6E9HdW8t+CF17/4i8wvIntK3TU9Imr2icczS0T7Prtd+4Oki6K3a38RpKmqJBWlKXfjuyS7x1CWpIIg0p7GrJE7WFQXwuwgqgthlXvWpsmx3chK016TY7uRVU2Jv3VaJ0sh9W29NbIUUk/y1zi/wqxKc36FKtdhVgOlspbmjRR5z+7XyRJI/hn+E77a7C7fBSWjxAuyDy8USZSek6p4zmxGfnFISQtVcDOK++mWb74muUAVL7ZVRQIVRNGXXzdhtqhfvoF8cdE3HefP+3SoO8KzSMJnsAPuW4QrXNkKSs8HXMNyJtyCvsN/AsEYNVUXdHr+JQXyUIGSh62zOW4A0I1brL5nuCMaZD9tm52P7Fxa/bRHdj7Q77cipXeeyhna7X/M0IcDondHv22XfEhyLtjuoazjkvORbX68BfBGMBA3oqvOJr6zjBg8bkkW9u1b4VBVB/HC80ZgBuW4dwQ2AHGiw7A/vMCVRhH08tOGFM4f+QWWGgDyFL1ScqBDXWR+KMhT0IfLmyO/9KciR+uCIGoJoTyINK3EW6TW5ui/OwPZVBX0VOcuyPZEPUkqtacK7MwvkjTVU0lnJBNj1HM6+yCppjoc2w3J8b+mQpMQfCDNO7p4Sv5C1NAZ3pO/I+oqpZKjKV2lVHKKqsmzzeQrJB0Cr5KvUNd2KHGm51cIvMG1C6ZwiTLTZgqfoGWSeMMUmkJ+8hUqaw8Fru30CiHPdO6JKTSF/GRPMUwhHaZwiSlk4/wK8x/sM4VsZJ9bqKul+Scz51c4OF28+WKoXRKmRhfhiYgf/gHZ+1ogqTKAlQAAAABJRU5ErkJggg=="
              alt="userimg"
            />
            {/* usershowtoptitle */}
            <div className="flex flex-col ml-5">
              <span className="font-semibold">Eventname</span>
              <span className="font-light">eventorganizator</span>
            </div>
          </div>

          {/* usershowbottom */}
          <div className="mt-5">
            <span className="font-semibold text-gray-400">Event details</span>
            <div className="flex items-center mx-0 my-5">
              <UserIcon />
              <span className="font-light ml-2">eventtags</span>
            </div>
            <div className="flex items-center mx-0 my-5">
              <UserIcon />
              <span className="font-light ml-2">eventaddress</span>
            </div>
            <div className="flex items-center mx-0 my-5">
              <UserIcon />
              <span className="font-light ml-2">eventdescription</span>
            </div>
          </div>
        </div>

        {/* userupdate */}
        <div className="flex-auto w-10/12 p-5 ml-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          {/* userupdatetitle */}
          <span className="text-2xl font-semibold">Edit</span>

          {/* userupdateforum */}
          <form className="flex content-between mt-5">
            {/* upserupdateleft */}
            <div>
              {/* userupdateitem */}
              <div className="flex flex-col mt-2">
                <label className="mb-1 text-sm">Event Name</label>
                <input
                  type="text"
                  placeholder="evetname"
                  className="border-none w-64"
                ></input>
              </div>

              {/* userupdateitem */}
              <div>
                <label className="mb-1 text-sm">eventorganizator</label>
                <input
                  type="text"
                  placeholder="eventorganizator"
                  className="border-none w-64"
                ></input>
              </div>

              {/* userupdateitem */}
              <div>
                <label className="mb-1 text-sm">Event details</label>
                <input
                  type="text"
                  placeholder="Event details"
                  className="border-none w-64"
                ></input>
              </div>

              {/* userupdateitem */}
              <div>
                <label className="mb-1 text-sm">eventtags</label>
                <input
                  type="text"
                  placeholder="eventtags"
                  className="border-none w-64"
                ></input>
              </div>

              {/* userupdateitem */}
              <div>
                <label className="mb-1 text-sm">eventaddress</label>
                <input
                  type="text"
                  placeholder="eventaddress"
                  className="border-none w-64"
                ></input>
              </div>
            </div>

            {/* userupdateitem */}
            <div>
              <label className="mb-1 text-sm">eventdescription</label>
              <input
                type="text"
                placeholder="eventdescription"
                className="border-none w-64"
              ></input>
            </div>

            {/* upserupdateright */}
            <div className="flex flex-col content-between">
              {/* userupdateupload */}
              <div className="flex items-center">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXc3Nz////t7e37+/ve3t7l5eXh4eH4+Pjm5uby8vL19fXv7+/p6ena2tpwjZMDAAAEq0lEQVR4nO2d0XajMAxEARswhv7/765JmjYNIYnlAUas7p597xzJ8kg2TlUZhmEYhmEYhmEYhmEYhmEYhmEYhmEYhgp8+nda/EzopqP/jm1JITxxDL85v0LDMAzDMAzjHd38f2qGIcZhbKa27c7lErshhFhfcMOYFIak8EwSx7p39SOuH5pwjkh2/ULdnc7YtNpVdi/0fRMnzSL9e4Ezg958HT5TeNGoU+SnAhOjPok+NB+HcMa1ujS2MUfdlUmRxE6gr9aUqY1InyKJo1SgFoldkCvUsRY/8DEv0GDjZFXmRs/vb9oigWkp0kssC2HNn6cfmu0XsPvw0iRNBG6F07KhzyVyB/FlU3+KIJavQ/aVCFiHcyN1tIwXiF33PQ1zELO63jWoaw2g0KQ0Za41CIHcaYpRSFxNEZtFouetpiCFxAsRpLCeaNMUpZC31KAUEvfBIIXExRSlkLeYlreH7Aohro1aIcR5UyuEdE+plvIqLBnp61BYNtP/gXfHrzymmPK6tsoXz7xnHLHCktPDX3re3gIzbKsjb6EBLUTiUloBDp9q6lJaQfZ8R31vsQUo7GPDe54P6i3qyCoRZEtr3gMoyH5/gbXYgNrD/0EhrW+DKRxOvw5p77hDfHfNvOdDfHcisiYpbF5KbL1BWz7rXpF6J9CchnWvSHjIwJS30FSgcSL1FAOSpsQj75SmCFtDu99fAGz6tKb0CmDTj6E7WsUrAMM24v3+QnGakicpoJoO3ElalZ+STuRJWrwSR/oQVr7ta6FIF93A7Nhu+C4IMzVqeXHBe6E9HdW8t+CF17/4i8wvIntK3TU9Imr2icczS0T7Prtd+4Oki6K3a38RpKmqJBWlKXfjuyS7x1CWpIIg0p7GrJE7WFQXwuwgqgthlXvWpsmx3chK016TY7uRVU2Jv3VaJ0sh9W29NbIUUk/y1zi/wqxKc36FKtdhVgOlspbmjRR5z+7XyRJI/hn+E77a7C7fBSWjxAuyDy8USZSek6p4zmxGfnFISQtVcDOK++mWb74muUAVL7ZVRQIVRNGXXzdhtqhfvoF8cdE3HefP+3SoO8KzSMJnsAPuW4QrXNkKSs8HXMNyJtyCvsN/AsEYNVUXdHr+JQXyUIGSh62zOW4A0I1brL5nuCMaZD9tm52P7Fxa/bRHdj7Q77cipXeeyhna7X/M0IcDondHv22XfEhyLtjuoazjkvORbX68BfBGMBA3oqvOJr6zjBg8bkkW9u1b4VBVB/HC80ZgBuW4dwQ2AHGiw7A/vMCVRhH08tOGFM4f+QWWGgDyFL1ScqBDXWR+KMhT0IfLmyO/9KciR+uCIGoJoTyINK3EW6TW5ui/OwPZVBX0VOcuyPZEPUkqtacK7MwvkjTVU0lnJBNj1HM6+yCppjoc2w3J8b+mQpMQfCDNO7p4Sv5C1NAZ3pO/I+oqpZKjKV2lVHKKqsmzzeQrJB0Cr5KvUNd2KHGm51cIvMG1C6ZwiTLTZgqfoGWSeMMUmkJ+8hUqaw8Fru30CiHPdO6JKTSF/GRPMUwhHaZwiSlk4/wK8x/sM4VsZJ9bqKul+Scz51c4OF28+WKoXRKmRhfhiYgf/gHZ+1ogqTKAlQAAAABJRU5ErkJggg=="
                  alt="userupdate"
                  className="w-24 h-24 rounded-xl object-cover mr-5"
                />
                <label htmlFor="file">
                  <Upload />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="border-none rounded-md cursor-pointer bg-slate-500 text-white font-semibold">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
