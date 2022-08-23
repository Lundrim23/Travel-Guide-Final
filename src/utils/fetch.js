import axios from "axios";

const api = axios.create({
    baseURL: REACT_APP_BASE_URL
})

export const remove = (id) => {
    const url = process.env.REACT_APP_DELETE_FILE;

    axios
      .delete(url + id)
      .then((res) => {
        const myalldata = events.filter((item) => item._id !== id);
        setEvents(myalldata);
      })
      .catch((err) => console.error(err));
  }