import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { addProduct } from '../store/actions/productActions';
import { useEffect } from "react";
import { fetchProduct } from '../store/actions/productActions';
export default function Products() {
    const state=useSelector(state=>state.product) //product from store.js
    const dispatch=useDispatch();
      useEffect(()=>{
      dispatch(fetchProduct())
    },[])
  return (
    <> 
    <h1>Products</h1>
    <button onClick={()=>dispatch(addProduct({id:2,title:"product2"}))}>Add Product2</button> 
    {
        state.map((product)=>(<h2 key={product.id}>{product.title}</h2>))
    }
    </>
  )
}

