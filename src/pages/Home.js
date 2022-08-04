import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero"
import Card from "../components/Card";

function Home() {
  return (
    <div>
    <div className="container mx-auto px-4 flex flex-row gap-2 my-10">
      <h1>Home</h1>

      <Link
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        to="/about"
      >
        About
      </Link>
      <Link
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        to="/events"
      >
        Events
      </Link>
      <Link
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        to="/register"
      >
        Register
      </Link>
      <Link
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        to="/places"
      >
        Places
      </Link>

    </div>
    <div>

    <div>
        <div class="title">
          <h2 class="text-center text-4xl font-bold text-gray-800 mb-4">Places to visit</h2>
            
            <p class=" text-center text-2xl font-light text-gray-400">
                All article are verified by 2 experts and valdiate by the CTO
            </p>
        </div>
        </div>
      <div class="text-center mx-4 " >
<div class="w-full bg-white p-12">
 
        </div>
        {/*  */}
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
            
          <Card countryName="Kosova" contentName="Work at home, remote, is the new age of the job, every  person can work at home...." userName="Elantra Jashari" dateName="20 mars 2029 - 6 min read"/>
          <Card countryName="Albania" contentName="Work at home, remote, is the new age of the job, every  person can work at home...." userName="Elantra Jashari" dateName="20 mars 2029 - 6 min read"/>
          <Card countryName="Macedonia" contentName="Work at home, remote, is the new age of the job, every  person can work at home...." userName="Elantra Jashari" dateName="20 mars 2029 - 6 min read"/>
          <Card countryName="Montenegro" contentName="Work at home, remote, is the new age of the job, every  person can work at home...." userName="Elantra Jashari" dateName="20 mars 2029 - 6 min read"/>

        
        </div>
    </div>

    </div>
 
    </div>
   


  );
}

export default Home;
