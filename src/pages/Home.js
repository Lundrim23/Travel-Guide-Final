import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero"

function Home() {
  return (
    <div>
<<<<<<< HEAD
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
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
            <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="#" class="w-full block h-full">
                    <img alt="blog photo" src="https://geoguessr.com/seterra/images/system/pristina.jpg" class="max-h-40 w-full object-cover"/>
                    <div class="bg-white dark:bg-gray-800 w-full p-4">
                        <p class="text-indigo-500 text-md font-medium">
                           Read more
                        </p>
                        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                            Kosova
                        </p>
                        <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                            Work at home, remote, is the new age of the job, every person can work at home....
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="block relative">
                                <img alt="profil" src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="#" class="w-full block h-full">
                    <img alt="blog photo" src="data:image/jpeg;base64,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" class="max-h-40 w-full object-cover"/>
                    <div class="bg-white dark:bg-gray-800 w-full p-4">
                        <p class="text-indigo-500 text-md font-medium">
                            Read more
                        </p>
                        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                            Albania
                        </p>
                        <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="block relative">
                                <img alt="profil" src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="#" class="w-full block h-full">
                    <img alt="blog photo" src="https://www.state.gov/wp-content/uploads/2019/04/North-Macedonia-2560x1100.png" class="max-h-40 w-full object-cover"/>
                    <div class="bg-white dark:bg-gray-800 w-full p-4">
                        <p class="text-indigo-500 text-md font-medium">
                            Read more
                        </p>
                        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                            Macedonia
                        </p>
                        <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="block relative">
                                <img alt="profil" src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="#" class="w-full block h-full">
                    <img alt="blog photo" src="data:image/jpeg;base64,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" class="max-h-40 w-full object-cover"/>
                    <div class="bg-white dark:bg-gray-800 w-full p-4">
                        <p class="text-indigo-500 text-md font-medium">
                        </p>
                        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                          Read more
                        </p>
                        <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="block relative">
                                <img alt="profil" src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
          
        
        </div>
    </div>

    </div>
 
=======
      <Hero/>
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
>>>>>>> 9ed98cb3b93d67bc31415bf6d7e0ac5ccfb40679
    </div>
   


  );
}

export default Home;
