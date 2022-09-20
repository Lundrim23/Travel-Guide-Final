import { useState } from "react"
import TextField from "./TextField"
import { useDispatch, useSelector } from "react-redux"
 import { useNavigate, useParams } from "react-router-dom"

 import { editUser } from "../redux/features/users/profileSlice"


const UserProfileSettings = () => {

  
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, email } = existingUser;
  const [values, setValues] = useState({
    name,
    email
 });

 const handleEditUser = () => {
   setValues({ name: '', email: '' });
   dispatch(editUser({
     id: params.id,
     name: values.name,
     email: values.email,
     password: values.password
   }));
   navigate('/');
 }


  return (
    <div>


      <div class="bg-violet-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mt-40 mb-40 ml-20 mr-20">
        <div>
          <h1 className='font-bold text-slate-500 pb-12 text-2xl text-center'>Edit your profile in the form below</h1>
        </div>
        <div class="-mx-3 md:flex ">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <TextField
              label="UserName"
              inputProps={{ type: 'text', placeholder: 'UserName..' }}
            />
          </div>

          <div class="md:w-1/2 px-3">
            <TextField
              label="Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              inputProps={{ type: 'text', placeholder: 'Name..' }}
            />
          </div>
        </div>


        <TextField
          label="Email"
          inputProps={{ type: 'text', placeholder: 'Email' }}
          value={values.email}
         onChange={(e) => setValues({ ...values, email: e.target.value })}
        />

        <TextField
          label="Password"
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Password' }}
        />

        <TextField
          label="Location"
          inputProps={{ type: 'text', placeholder: 'Location' }}
        />


        <div className='pt-12 pb-8 flex flex-wrap justify-center'>
          <button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            Cancel
          </button>
          <button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full ml-4"
           onClick={handleEditUser}
          >
            Save Changes
          </button>
        </div>

      </div>


    </div>
  )
}

export default UserProfileSettings