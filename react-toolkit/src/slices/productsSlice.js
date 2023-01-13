import { createSlice } from "@reduxjs/toolkit";

export const productSlice=createSlice({
    initialState:[{id:1,title:'product1'}],
    name:'productSlice',
    reducers:{
        addProduct:(state,action)=>{
             state.push(action.payload) //using redux-toolkit we now can mutate the current state directly
        }
    }
})
export default productSlice.reducer;
export const {addProduct}=productSlice.actions;
