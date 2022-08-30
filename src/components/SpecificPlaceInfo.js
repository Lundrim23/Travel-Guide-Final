// import { FaHandHoldingWater } from "react-icons/fa";
// import { RiTempHotLine } from "react-icons/ri";
import Map from "../assets/img/map.png";

const SpecificPlaceInfo = (props) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{props.title1}</h2>
          <p className="py-4">{props.paragraph1}</p>
          <br />
          <p>{props.paragraph2}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <div>
              <h3 className="font-bold text-gray-800 py-2">{props.title2}</h3>
              <p className="py-1">{props.description1}</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <div>
              <h3 className="font-bold text-gray-800 py-2">{props.title3}</h3>
              <p className="py-1">{props.description2}</p>
            </div>
          </div>
        </div>
      </div>

        {/* <div className="border rounded-md text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2 rounded-md">
            BOOK NOW AND SAVE
          </p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Sarande</option>
              <option>Vlore</option>
              <option>Tirane</option>
              <option>Durres</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <button className="w-full bg-[#5651e5] text-white rounded-md p-2 my-4">
            BOOK NOW
          </button>
        </form> */}
        
        <img src = {Map} alt="map" className="w-full mx-auto my-auto sm:w-1/2"/>
    </div>
  );
};

export default SpecificPlaceInfo;
