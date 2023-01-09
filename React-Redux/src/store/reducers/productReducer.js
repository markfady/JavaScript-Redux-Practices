import { ADD_PRODUCT , GET_PRODUCT } from "../actions/productActions"

export const productReducer=(state={id :1  ,title:"Product1"},action)=>{

    switch(action.type){
        case ADD_PRODUCT:
            return [...state,action.payload];
        case GET_PRODUCT:
            return [action.payload];
        default:
            return [state];
    }
}