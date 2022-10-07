import React from "react";
// import TextField from "./TextField"




function UserProfileSettings (props) {
  return (
    <div>
      <div class="bg-violet-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mt-40 mb-40 ml-20 mr-20">
        <div>
          <h1 className='font-bold text-slate-500 pb-12 text-2xl text-center'>Edit your profile in the form below</h1>
        </div>
        <div class="-mx-3 md:flex ">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">

            <input
            onChange={(e) => props.handleEdit(e)}
            
    
            value={props?.input?.username}
            name="username"
            type="text">
              
            </input>


            <input
            onChange={(e) => props.handleEdit(e)}
    
            value={props?.input?.email}
            name="email"
            type="text">
              
            </input>
            
            {/* <TextField
              label="UserName"
              inputProps={{ type: 'text', placeholder: 'UserName..' }}
              onChange={(e) => props.handleEdit(e)}
              value={props.input.username}
            />
          </div>

          {/* <div class="md:w-1/2 px-3">
            <TextField
              label="Name"
              inputProps={{ type: 'text', placeholder: 'Name..' }}
          
            />
          </div> */}
        </div>


        {/* <TextField
          label="Email"
          inputProps={{ type: 'text', placeholder: 'Email' }}
         
         value={props.input.email}
         onChange={(e) => props.handleEdit(e)}
        /> */}
{/*  */}
        {/* <TextField
          label="Password"
          value={props.user.password}
          onChange={(e) => props.handleEdit(e)}
          inputProps={{ type: 'text', placeholder: 'Password' }}
        />

        <TextField
          label="Location"
          inputProps={{ type: 'text', placeholder: 'Location' }} */}
        {/* /> */} */


        <div className='pt-12 pb-8 flex flex-wrap justify-center'>
          {/* <button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
           onClick={() => ("/")}>
            Cancel
          </button> */}

          <button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full ml-4"
          onClick={() => props.update(props?.input?.id)} 
          
          >
            Save Changes
          </button>
        </div>

      </div>
</div>

    </div>
  )
}

export default UserProfileSettings;