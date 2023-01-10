export const ADD_PRODUCT="ADD_PRODUCT";
export const GET_PRODUCT="GET_PRODUCT";



export const addProduct=(product)=>{
    return{
        type:ADD_PRODUCT,
        payload:product
    }
}

export const getProduct=(product)=>{
    return{
        type:GET_PRODUCT,
        payload:product
    }
}
export const fetchProduct=()=>{  //we use redux thunk for this action cause it returns function not object
    return async(dispatch)=>{
        const data= await fetch('https://fakestoreapi.com/products');
        const result=await data.json()
        dispatch(getProduct(result));
    }
}
