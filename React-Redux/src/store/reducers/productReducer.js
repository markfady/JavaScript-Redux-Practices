import { ADD_PRODUCT , GET_PRODUCT } from "../actions/productActions"

export const productReducer=(state=[],action)=>{

    switch(action.type){
        case ADD_PRODUCT:
            return [...state,action.payload];
        case GET_PRODUCT:
            return [...action.payload]; //Create new array and retun in it the data came from api then show it using map in Products.js
        default:
            return [state];
    }
}