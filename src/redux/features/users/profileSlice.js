import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const profileSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    }
  }
});

export const { editUser } = profileSlice.actions;
export default profileSlice.reducer;