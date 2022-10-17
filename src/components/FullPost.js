import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { getEventById } from "../utils/fetch";

function FullPost(props) {
  const [input, setInput] = useState({
    eventName: "",
    eventOrganizator: "",
    eventTags: "",
    address: "",
    type: "",
    description: "",
    imageUrl: "",
  });

  const location = useLocation();

  useEffect(() => {
    const id = location.state.idpost;
    getEventById(id).then(function (res) {
      setInput(res.data);
      //console.log("res data", res.data);
    });
  }, []);

  console.log("a po vjen najsen qitu ", location.state.idpost);

  const override = {
    display: "block",
    margin: "20% auto",
  };

  return (
    <div>
      <h1>Hello {location.state.idpost}</h1>
    </div>
  );
}

export default FullPost;
