import { React, useState, useEffect } from "react";
import { updateUser, getOneUser } from "../utils/services/users.service";
import { useParams } from "react-router-dom";
import UserProfileSettings from './UserProfileSettings'

export default function UpdateProfile() {
    const [user, setUser] = useState({
        username:"",
        email:"",
        password:""
    });
    const { id } = useParams();
    useEffect(() => {
      const editUserById = () => {
        getOneUser(id).then(function (res) {
          console.log("data deri qitu", res.data)
          console.log( props.input.username)
          setUser(res.data);
        });
      };
  
      editUserById();
    }, [id]);

// populate state me data
    const handleEdit = (e) => {
      const { name , value } = e.target;{
        
      }
  
      setInput((prevInput) => {
        return {
          ...prevInput,
          [name]: value,
        };
      });
    };
    // update
    const updateUser = async (id) => {
        const updateUser = {
          username:user.username,
          email:user.email,
          password:user.password
        };
        try {
          updateUser(id, updateUser);
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      };
  return (
    
    <UserProfileSettings
    handleEdit={handleEdit}
    input={user}
    update={updateUser}
     />
      
  )
}

