import React, { useEffect, useState } from 'react'
import Product from './Product'
import { json } from 'react-router-dom'
function ProductList() {
const[products, setProducts]=useState([])
//const api_url ="https://fakestoreapi.com/products"
const getProducts=()=>{
  fetch(`https://fakestoreapi.com/products`)
  .then((res)=>res.json())
  .then((data)=>setProducts(data))
}
const [categories, setCategories]=useState([])
const getCategories=()=>{
  fetch(`https://fakestoreapi.com/products/categories`)
            .then(res=>res.json())
            .then((data)=>setCategories(data))
          }
         // const [  ]
const getProductInCategorie=(catName)=>{
   console.log(catName)
  fetch(`https://fakestoreapi.com/products/category/${catName}`)
            .then(res=>res.json())
            .then(data=>setProducts(data))
}
    useEffect(()=>{
      getProducts()  
      getCategories()
      getProductInCategorie()
        },[]);
  return (
    <>
        <h1 className='text-center p-3'>ours Products</h1>
        <button
          className='btn btn-info' onClick={()=>{getProducts()}}
                    >
                      All
                    </button>
        {categories.map((cat)=>{
              return(
                <button
                    key={cat} className='btn btn-info'
                    onClick={()=>{getProductInCategorie(cat)}}
                    >
                      {cat}
                    </button>
        )})
        }
            <div className='container'>
            
            <div className='row'>
                {products.map((product)=>{
                    return(
                  <div className='col-3' key={product.id}>
                  <Product product={product} showButton={true}/>
                  </div>
                    )
                })}
                </div>
                
</div>

</>        
  )
}

export default ProductList
