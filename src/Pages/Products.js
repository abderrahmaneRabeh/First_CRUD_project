import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2'

export default function Products() {
  const [products,setProducts] = useState([]);

  const getProducts = () =>{
    fetch('http://localhost:9000/products')
    .then( (res) => res.json())
    .then( (data) => setProducts(data) )
  };

  function deleteProduct(product){
    Swal.fire({
      title:`are you sure to delete ' ${product.title} ?'`,
      showCancelButton:true
    }).then( (data) => {
      data.isConfirmed && (
        fetch(`http://localhost:9000/products/${product.id}`,{
          method:'DELETE'
        }).then( (res) => res.json()).then( (data) => getProducts())
      )
    } )

  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <>
      <h1 className="text-center m-2">Products</h1>
      <div className='container py-4'>
      <Link to='Add' className='btn btn-success m-3'>Add new Product</Link>
        <table className="table table-hover mt-4">
          <thead>
            <tr className='table-active'>
              <th className='text-center'>ID</th>
              <th className='text-center'>Title</th>
              <th className='text-center'>Price</th>
              <th className='text-center'>Description</th>
              <th className='text-center'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map( (product) => {
                return (
                  <tr key={product.id}>
                    <th className='text-center'>{product.id}</th>
                    <td className='text-center w-25'>{product.title}</td>
                    <td className='text-center'>{product.price}</td>
                    <td className='text-center w-25'>{product.description.slice(0,70)}...</td>
                    <td className='text-center'>
                      <Link to={`View/${product.id}`} className="btn btn-info mx-1">View</Link>
                      <Link to={`Edit/${product.id}`} className="btn btn-primary mx-1">Edit</Link>
                      <button className="btn btn-danger mx-1" onClick={()=>{deleteProduct(product)}}>Delete</button>
                    </td>
                  </tr>
                );
              } )
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
