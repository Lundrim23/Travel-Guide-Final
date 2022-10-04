import { createSlice } from "@reduxjs/toolkit";

export const userMessageSlice = createSlice({
  name: "userMessages",
  initialState: {
    userMessages: [],
  },
  reducers: {
    addMessageSuccess: (state, action) => {
      if (
        state.userMessages.length === 0 ||
        !state.userMessages.some(
          (message) => message.room === action.payload.room
        )
      ) {
        state.userMessages = [
          ...state.userMessages,
          {
            room: action.payload.room,
            message: [
              {
                message: action.payload.message,
                sent: action.payload.sent,
              },
            ],
          },
        ];
      } else {
        state.userMessages = state.userMessages.map((message) => {
          if (message.room === action.payload.room) {
            message.message.push({
              message: action.payload.message,
              sent: action.payload.sent,
            });
          }
          return message;
        });

        // state.userMessages.map((message) => {
        // if (message.room === action.payload.room) {
        //   message.message = [
        //     ...message.message,
        //     {
        //       message: action.payload.message,
        //       sent: action.payload.sent,
        //     },
        //   ];

        //   return message;
        // }
        // })
      }
    },
  },
});

export default userMessageSlice.reducer;

const { addMessageSuccess } = userMessageSlice.actions;

export const addMessage = (message) => (dispatch) => {
  console.log(message);
  dispatch(addMessageSuccess(message));
};
