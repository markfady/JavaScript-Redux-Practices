import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, fetchData } from '../slices/productsSlice';

export default function Products() {
   
    const state=useSelector((state)=>state.product);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchData())
    },[])
    return (
    <> 
    <h1>current Products</h1>
    <button onClick={()=>dispatch(addProduct({id:50,title:'product2'}))}>Add Product</button>
    {
    state.map((product,index)=>(<h2 key={index}>{product.title}</h2>))
    }
    </>
)
}
