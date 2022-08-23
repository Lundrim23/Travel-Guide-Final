import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/events",
});

export const apii = axios.create({
    baseURL: "http://localhost:5000/api/places"
})

export const fetchEvents = async () => {
    const response = await api.get('/get');
    return response.data;
}

export function getUser(){
    return axios.get('http://localhost:5000/api/events/get/6304c2725ef19a219767e507')
}