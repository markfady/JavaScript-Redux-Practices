import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../slices/productsSlice';

export default function Products() {
    const state=useSelector((state)=>state.product);
    const dispatch=useDispatch();
    return (
    <> 
    <h1>current Products</h1>
    <button onClick={()=>dispatch(addProduct({id:2,title:'product2'}))}>Add Product</button>
    {
    state.map((product)=>(<h2 key={product.id}>{product.title}</h2>))
    }
    </>
)
}
