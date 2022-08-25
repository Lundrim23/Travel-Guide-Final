import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/events",
});

export const place = axios.create({
    baseURL: "http://localhost:5000/api/places"
})

export const cloudinaryApi = axios.create({
    baseURL: "https://api.cloudinary.com/v1_1/starlabstitans/image/upload"
});

export const reviews = axios.create({
  baseURL: "http://localhost:5000/api/reviews"
})
//event module api calls
export function uploadCloudinary(data){
    return cloudinaryApi.post('/', data);
}

  export function getEvents(){
    return api.get('/get');
  }

  export function addEvents(data){
    return api.post('/', data);
  }

  export function updateEvents(id, data){
    return api.patch('/update/'+id, data);
  }

  export function deleteEvent(id){
    return api.delete('/delete/'+id);
  }


//place module api calls
  export function getPlaces(){
    return place.get('/get');
  }

  export function addPlace(data){
    return place.post('/', data);
  }

  export function updatePlacee(id, data){
    return place.patch('/edit/'+id, data);
  }

  export function deletePlace (id){
    return place.delete('/delete/'+id);
  }

  // review module

 export function getReview(){
    return api.get('/get');
  }

  export function addReview(data){
    return api.post('/', data);
  }

  export function updateReview(id, data){
    return api.patch('/update/'+id, data);
  }

  export function deleteReview (id){
    return api.delete('/delete/'+id);
  }