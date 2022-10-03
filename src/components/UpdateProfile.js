import React from 'react'

import UserProfileSettings from './UserProfileSettings'

export default function UpdateProfile() {
    const [input, setInput] = useState({
        username:"",
        email:"",
        password:""
    });



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
        const article = {
        
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

