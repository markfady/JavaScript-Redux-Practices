import React from 'react'
import { useSelector } from 'react-redux'

export default function Products() {
    const state=useSelector(state=>state.product) //product from store.js
  return (
    <> 
    <h1>Products</h1>
    <div>{state}</div>
    </>
  )
}

