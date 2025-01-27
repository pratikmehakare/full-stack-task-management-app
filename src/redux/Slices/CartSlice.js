import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
            // state means cart and action.payload means data come from Component
        },
        remove:(state,action) => {
            return state.filter((item) => item._id !== action.payload);
            // return only those who are not like action.payload
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;