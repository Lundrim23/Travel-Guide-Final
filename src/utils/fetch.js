import axios from "axios";

 const api = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL
  baseURL: "http://localhost:5000/api"
});

export const cloudinaryApi = axios.create({
  // baseURL: process.env.REACT_APP_CLOUDINARY_UPLOAD,
  baseURL: "https://api.cloudinary.com/v1_1/starlabstitans/image/upload"
});

export const reviews = axios.create({
  baseURL: "http://localhost:5000/api/reviews",
});
//photo upload cloudinary
export function uploadCloudinary(data) {
  return cloudinaryApi.post("/", data);
}

//event module api calls
export function getEvents() {
  return api.get("/events/get");
}

export function addEvents(data) {
  return api.post("/events/", data);
}

export function updateEvents(id, data) {
  return api.patch("/events/update/" + id, data);
}

export function deleteEvent(id) {
  return api.delete("/events/delete/" + id);
}

export function getEventById(id){
  return api.get('/events/get/' + id);
}

export function like(id) {
  return api.put("/events/like/"+id)
}
export function unlike(id) {
  return api.put("/events/unlike/"+id)
}

//place module api calls
export function getPlaces() {
  return api.get("/places/get");
}

export function addPlace(data) {
  return api.post("/places/", data);
}

export function updatePlacee(id, data) {
  return api.patch("/places/edit/" + id, data);
}

export function deletePlace(id) {
  return api.delete("/places/delete/" + id);
}

export function getPlaceById(id){
  return api.get('/places/get/' + id)
}

//country module api calls
export function getCountries() {
  return api.get("/countries/get");
}

export function addCountry(data) {
  return api.post("/countries/", data);
}

export function updateCountryy(id, data) {
  return api.patch("/countries/edit/" + id, data);
}

export function deleteCountryy(id) {
  return api.delete("/countries/delete/" + id);
}

export function getCoutrybyId(id){
  return api.get("/countries/get/" + id);
}

// review module

export function getReview() {
  return api.get("/reviews/get");
}

export function addReview(data) {
  return api.post("/reviews/", data);
}

export function updateReview(id, data) {
  return api.patch("/reviews/update/" + id, data);
}

export function deleteReview(id) {
  return api.delete("/reviews/delete/" + id);
}
