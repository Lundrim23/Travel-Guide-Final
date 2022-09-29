import React from 'react'

import UserProfileSettings from './UserProfileSettings'

export default function UpdateProfile() {
    const [input, setInput] = useState({
        username:"",
        email:"",
        password:""
    });

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
    
      const handleEdit = (e) => {
        const { username, value } = e.target;
    
        setInput((prevInput) => {
          return {
            ...prevInput,
            [username]: value,
          };
        });
      };
    
  return (
    
    <UserProfileSettings
    handleEdit={handleEdit}
    input={input}
    update={update}
     />
  )
}

