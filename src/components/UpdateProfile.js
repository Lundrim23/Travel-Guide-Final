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
          setUser(res.data);
        });
      };
  
      editUserById();
    }, [id]);


// populate state me data
    const handleEdit = (e) => {
      const { username, value } = e.target;
  
      setInput((prevInput) => {
        return {
          ...prevInput,
          [username]: value,
        };
      });
    };

    // update
  
    const update = async (id) => {
        const updateUser = {
          username:user.username,
          email:user.email,
          password:user.password
          
        };
    
        try {
          updateUser(id, article);
          
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      };
    
     
    
  return (
    
    <UserProfileSettings
    handleEdit={handleEdit}
    input={input}
    update={update}
     />
  )
}

