import React from "react";

function PlacesCard(props) {
  return (
    <div className="w-80  mx-3 hover:opacity-75 " key={props.id}>
      <img className="w-full h-[300px]" src={props.img} alt={props.name} />
      <h1 className="text-2xl pt-2 px-2 hover:underline cursor-pointer">
        {props.name}
      </h1>
      <h3 className="max-w-fit p-2 truncate">{props.title}</h3>
    </div>
  );
}

export default PlacesCard;
