import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {


    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');

    const navigate = useNavigate()

    const [product,setProduct] = useState([]);
    let param = useParams();
    let product_id =param.editId;
    useEffect(()=>{
        fetch(`http://localhost:9000/products/${product_id}`)
        .then( (res) => res.json())
        .then( (data) => setProduct(data) )
      },[])

      const formSubmit = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:9000/products/${product_id}`,{
            title:title,
            price:price,
            description:description,
            image:img
        }).then( (data) => navigate('../Products') )
      }
  return (
    <>
    <h1 className="text-center m-2">Edit Product</h1>
    <div className="conteneur m-5 " >
      <form className="shadow-sm p-3 mb-5 bg-white rounded" onSubmit={formSubmit}>
            <div className="form-outline m-3">
              <input type="text"  className="form-control" onChange={(e)=>setTitle(e.target.value)} placeholder={product.title}/>
              <label className="form-label"  >
                Title
              </label>
            </div>
        <div className="form-outline m-3 ">
          <input type="text"  className="form-control" onChange={(e)=>setPrice(e.target.value)} placeholder={product.price}/>
          <label className="form-label" >
            Price
          </label>
        </div>
        <div className="form-outline m-3">
          <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} placeholder={product.description}/>
          <label className="form-label"  >
            Description
          </label>
        </div>
        <div className="form-outline m-3">
          <input type="text" className="form-control" onChange={(e)=>setImg(e.target.value)} placeholder={product.image}/>
          <label className="form-label"  >
            Image source
          </label>
        </div>
        <button type="submit" className="btn btn-success btn-block mb-4">
          edit Product
        </button>
      </form>
      </div>
    </>
    
  )
}
