import axios from "axios";

export const getPlaces = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.post("http://localhost:5000/api/tripadvisor/restaurants", {
      type: type,
      sw: sw,
      ne: ne,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
