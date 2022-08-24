import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/events",
});

export const apii = axios.create({
    baseURL: "http://localhost:5000/api/places"
})

// const axiosClient = axios.create({
//     baseURL: "http://localhost:5000/api/events"
// });

export const cloudinaryApi = axios.create({
    baseURL: "https://api.cloudinary.com/v1_1/starlabstitans/image/upload"
});

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



