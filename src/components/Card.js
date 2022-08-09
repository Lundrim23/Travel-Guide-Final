import React from 'react'

const Card = (props) => {
  return (
    <div class="mb-40">
    <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
    <a href="#" class="w-full block h-full">
        <img alt="blog photo" src="https://geoguessr.com/seterra/images/system/pristina.jpg" class="max-h-40 w-full object-cover"/>
        <div class="bg-white dark:bg-gray-800 w-full p-4">
            <p class="text-indigo-500 text-md font-medium">
               Read more
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
               {props.countryName}
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
               {props.contentName}
            </p>
            <div class="flex items-center mt-4">
                <a href="#" class="block relative">
                    <img alt="profil" src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
                <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">
                        {props.userName}
                    </p>
                    <p class="text-gray-400 dark:text-gray-300">
                        {props.dateName}
                    </p>
                </div>
            </div>
        </div>
        
    </a>
</div>
</div>

  )
}

export default Card