import React from "react";
import Prevalla from "../assets/kosovo-img/prevalla-natyra-kosova.jpg";

function BestPlacesInKosovo() {
  return (
    <section className="max-w-7xl my-auto mx-auto pt-8 px-4 sm:mx-auto sm:px-6 lg:px-8 flex flex-wrap sm:flex-row justify-center items-center sm:py-5">
      <div className="max-w-sm mx-10 sm:py-5">
        <h1 className="text-4xl text-gray-800 font-bold md:text-5xl py-2">
          BEST PLACES IN <span className="text-emerald-700">Kosovo</span>
        </h1>
        <h3 className="text-gray-500">Get started today!</h3>
        <p className="text-lg leading-normal py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt
          reiciendis et veritatis non perferendis eos neque, nemo illum
          perspiciatis!
        </p>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Read More
        </button>
      </div>
      <div className="max-w-md flex flex-wrap py-5">
        <img src={Prevalla} alt="Kosovo" className="rounded-xl" />
      </div>
      <h1 className="text-3xl text-center py-5 font-medium">
        Some of the best places to visit!
      </h1>
    </section>
  );
}

export default BestPlacesInKosovo;
