import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

    export const fetchData=createAsyncThunk('productSlice/fetchData',async()=>{
        const res=await fetch("https://fakestoreapi.com/products/1");
        const data=await res.json();
        console.log(data)
        return data;
    })

export const productSlice=createSlice({
    initialState:[{id:51,title:'product1'}],
    name:'productSlice',
    reducers:{
        addProduct:(state,action)=>{
             state.push(action.payload) //using redux-toolkit we now can mutate the current state directly
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
        console.log("pending")      
            })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.push(action.payload)
        })
    },
})
export default productSlice.reducer;
export const {addProduct}=productSlice.actions;
