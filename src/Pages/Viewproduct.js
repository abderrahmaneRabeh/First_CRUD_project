import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

export default function Viewproduct() {
  const [product,setProduct] = useState([]);
  let param = useParams();
  let product_id =param.viewId;

  useEffect(()=>{
    fetch(`http://localhost:9000/products/${product_id}`)
    .then( (res) => res.json())
    .then( (data) => setProduct(data) )
  },[])


  return (
    <>
      <h1 className="text-center m-2">View product</h1>
      <div className='container mt-5'>
        <div className="mb-4 shadow-lg p-3 mb-5 bg-white rounded">
          <img className=" card-img" src={product.image} alt="..." />
          <div className="card-body p-3 text-center">
            <h4 className=" text-muted">{product.price} $</h4>
            <h2 className="">{product.title}</h2>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
