import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'

function ProductsDetails() {
   // const api_url= "https://fakestoreapi.com/products"
    const [product, setProduct]=useState({})
    const params = useParams()
    console.log(params)
    //`blog/${id}`
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
    //fetch(`blog/${id}`)
    .then((res) => res.json())
    .then((product) => setProduct(product))
 
  },[])
    return (
    <div>
      <h1>Products Details-{product.title} {params.productId}</h1>
      <Product product={product} showButton={false}/>
    </div>
  )
}

export default ProductsDetails
