import React, {useEffect, useState} from "react";
import AddEvent from "../adminComponent/AddEvent";
import axios from "axios";

const EventComponent = () => {


  const [input, setInput] = useState({
    eventName: '',
    eventOrganizator: '',
    eventTags: ''
  }) 

  //this one populates state with data
  function handleChange(event) {
    const {name, value} = event.target;

    setInput(prevInput => {
      return{
        ...prevInput,
        [name]: value
      }
    })
  }

  //this one saves data to db throught be
  function handleClick(event, id) {
    event.preventDefault();

    const newEvent = {
      eventName: input.eventName,
      eventOrganizator: input.eventOrganizator,
      eventTags: input.eventTags
    }


    axios.post('http://localhost:5000/api/events/', newEvent)
    
    
    
  }


  //this one displays event on the table
  const [events, setEvents] = useState([]);


  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios
    .get('http://localhost:5000/api/events/get')
    .then((res) => {
      console.log(res);
      setEvents(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  //this one updates an event
  function update(id){
    const url = 'http://localhost:5000/api/events/update/'
    
    const article = {
      eventName: input.eventName,
      eventOrganizator: input.eventOrganizator,
      eventTags: input.eventTags
    }

    axios
    .patch(url+id, article)
  
  }


  //this one deletes an event
  function remove(id){
    const url = 'http://localhost:5000/api/events/delete/'

    axios
    .delete(url+id)
    .then(res => {
      const myalldata = events.filter(item => item._id !== id)
      setEvents(myalldata)
    }).catch(err => console.error(err))
  }

  return (
    <>
      {/* Popup starts here */}
      <div>
        <AddEvent />
      </div>
      <div>

<form>
  <input onChange={handleChange} name="eventName" value={input.eventName} placeholder="name"></input>
  <input onChange={handleChange} name="eventOrganizator" value={input.eventOrganizator} placeholder="Event organizator"></input>
  <input onChange={handleChange} name="eventTags" value={input.eventTags} placeholder="Event Tags"></input>
  <button onClick={handleClick}>Add Event</button>
</form>

  <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
    <thead class="text-white">
      <tr class="bg-gray-300 text-gray-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
        <th class="p-3 text-left">Id</th>
        <th class="p-3 text-left">Name</th>
        <th class="p-3 text-left">Email</th>
        <th class="p-3 text-left">Password</th>
        <th class="p-3 text-left" width="110px">Role</th>
        <th class="p-3 text-left">Delete</th>
        <th class="p-3 text-left">Update</th>
      </tr>
    </thead>
    <tbody class="flex-1 sm:flex-none">
      
      {events.map((event) => (
        <>
        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
        <td class="border-grey-light border hover:bg-gray-100 p-3">{event._id}</td>
        <td class="border-grey-light border hover:bg-gray-100 p-3">{event.eventName}</td>
        <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
          {event.eventOrganizator}
        </td>
        <td class="border-grey-light border hover:bg-gray-100 p-3">
          {event.eventTags}
        </td>
        <td class="border-grey-light border hover:bg-gray-100 p-3 text-yellow-800 hover:font-medium cursor-pointer">
          Admin
        </td>
        <td class="border-grey-light border hover:bg-gray-100 p-3" ><button onClick={() => remove(event._id)}>Delete</button></td>
        <td class="border-grey-light border hover:bg-gray-100 p-3" ><button onClick={() => update(event._id)}>Update</button></td>
        </tr>
        </>
      ))
    }
    </tbody>
  </table>
</div>
    </>
  );
};

export default EventComponent;
