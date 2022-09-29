import React from 'react'

import {Link} from 'react-router-dom'


const UserProfile= () => {

  return (
    <div >
   
<div className="relative max-w-md mx-auto lg:max-w-screen-xl md:max-w-2xl mt-6 min-w-0 break-words bg-stone-100 w-full mb-6 shadow-lg rounded-xl mt-40 mb-40">
    <div className="px-6">
        <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
                <div className="relative">
                    <img src="https://e7.pngegg.com/pngimages/122/453/png-clipart-computer-icons-user-profile-avatar-female-profile-heroes-head.png" 
                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                </div>
            </div>
            <div className="w-full text-center mt-20">
                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">10</span>
                        <span className="text-sm text-slate-400">Likes</span>
                    </div>
                    <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">3</span>
                        <span className="text-sm text-slate-400">Reviews</span>
                    </div>

                  
                </div>
            </div>
        </div>
        <div class="text-center mt-2"> 
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Name</h3>
            <p class="text-s text-slate-700 font-bold leading-normal mb-1">email</p>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
            </div>

            

        </div>
        <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4">
                    <p class="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>
                <Link to="/UserProfileSettings">   <button href="" class="px-8 py-2 bg-indigo-400 outline-none border border-indigo-100 rounded text-white font-medium active:scale-95 hover:bg-indigo-600 hover:text-white focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 
                    disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200">Edit Profile</button>
              </Link>
                </div>
            </div>
        </div>

        <div>
    <p>
        Reviews by this user 
    </p>
    <p>Likes</p>
</div>
    </div>
</div>






  
</div>
    
  )
}

export default UserProfile