import React from 'react'

function UserProfileSettings() {
  return (
    <div>


<div class="bg-violet-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mt-40 mb-40 ml-20 mr-20">
<div>
    <h1 className='font-bold text-slate-500 pb-12 text-2xl text-center'>Edit your profile in the form below</h1>
    </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Name...">
      </input>
   
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Lastname..">
      </input>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" for="grid-email">
        Email
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-email" type="email" placeholder="Email">
      </input>
      <p class="text-blue-600 text-xs italic">Please fill out this field.</p>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************">
      </input>
      <p class="text-blue-600 text-xs italic">Please fill out this field.</p>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-2">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" for="grid-city">
        Location..
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Location">
   </input>
    </div>
  
   
  </div>
  <div className='pt-12 pb-8 flex flex-wrap justify-center'>
  <button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
  Cancel
</button>
<button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full ml-4">
  Save Changes
</button>
  </div>
  
</div>


    </div>
  )
}

export default UserProfileSettings