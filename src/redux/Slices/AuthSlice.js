import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name: "auth",
    initialState: {
      token: null, 
    },
    reducers: {
      setToken: (state, action) => {
        state.token = action.payload;
      },
      clearToken: (state) => {
        state.token = null; 
        localStorage.clear();
      },
    },
  });
  
  export const { setToken, clearToken } = AuthSlice.actions;
  export default AuthSlice.reducer;