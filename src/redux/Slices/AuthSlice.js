import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name: "auth",
    initialState: {
      token: null, 
    },
    reducers: {
      setToken: (state, action) => {
        state.token = action.payload; // Update the token state
      },
      clearToken: (state) => {
        state.token = null; // Clear the token state
      },
    },
  });
  
  export const { setToken, clearToken } = AuthSlice.actions;
  export default AuthSlice.reducer;