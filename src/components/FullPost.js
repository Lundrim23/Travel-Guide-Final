import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { getEventById } from '../utils/fetch';

function FullPost() {

    // const [input, setInput] = useState({
    //     eventName: "",
    //     eventOrganizator: "",
    //     eventTags: "",
    //     address: "",
    //     type: "",
    //     description: "",
    //     imageUrl: "",
    //   });

    //  const { id } = useParams();

    //  console.log("id ", id);

    // useEffect(() => {
    //     const editEventById = () => {
    //       getEventById(id).then(function (res) {
    //         setInput(res.data);
    //       });
    //     };
    //     editEventById();
    //   }, [id]);

    //   console.log("inputi ", input);

    const { fullpost } = useParams();

    console.log("Fullpost", useParams());


  return (
    <div>
    <h1>Hello</h1>
    {/* <h1>{state.post_id}</h1> */}
    </div>
  )
}

export default FullPost
