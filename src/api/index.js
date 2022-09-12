import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        "X-RapidAPI-Key": "b9721dd086msh6ce01894c11e8c2p149d43jsndf19ec695daa",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPlaces = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.post("http://localhost:5000/api/tripadvisor/restaurants", {
      sw: sw,
      ne: ne,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
