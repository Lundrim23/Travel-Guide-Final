import React from "react";

const PlaceTable = (props) => {
  return (
    <div>
      <div className="pl-4 py-4 overflow-auto rounded-lg hidden lg:block">
        <table className=" w-2/3">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Location
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Details
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Photo
              </th>
              <th className="w-24  p-3 text-sm font-semibold tracking-wide text-left">
                Edit
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {props.displayPlaces.map((place) => (
              <>
                <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    {place.placeName}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    {place.placeLocation}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    {place.placeDetails}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    <img 
                    className="w-12"
                      src={place.placePhoto}
                      alt="On table"
                    />
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    <button
                      onClick={() => props.update(place._id) }
                      className="font-bold text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="p-3 text-sm text-gray-700 ">
                    <button
                      onClick={() => props.remove(place._id)}
                      className="font-bold text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden w-3/4 pl-4">
        {props.displayPlaces.map((place) => (
          <>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-sm text-gray-700">{place.placeName}</div>
              <div className="text-sm text-gray-700">{place.placeLocation}</div>
              <div className="text-sm text-gray-700">{place.placeDetails}</div>
              <div className="text-sm text-gray-700">{place.placePhoto}</div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="font-bold text-blue-500 hover:underline">
                  Edit
                </div>
                <div className="font-bold text-red-500 hover:underline">
                  Delete
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PlaceTable;
