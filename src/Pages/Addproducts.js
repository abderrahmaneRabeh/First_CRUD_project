import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Addproducts() {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const navigate = useNavigate()

  const formSubmit = (e) =>{
    e.preventDefault();

    axios.post("http://localhost:9000/products",{
        title:title,
        price:price,
        description:description,
        image:img
    }).then( (data) => navigate('../Products') )


    // fetch('http://localhost:9000/products',{
    //   method:"POST",
    //   body:JSON.stringify({
    //     title:title,
    //     price:price,
    //     description:description
    //   })
    // })
    // .then( (res) => res.json() )
    // .then( (data) => console.log(data) )
  }

  return (
    <>
      <h1 className="text-center m-2">Add product</h1>
      <div className="conteneur m-5 " >
      <form className="shadow-sm p-3 mb-5 bg-white rounded" onSubmit={formSubmit}>
            <div className="form-outline m-3">
              <input type="text"  className="form-control" onChange={(e)=>setTitle(e.target.value)}/>
              <label className="form-label"  >
                Title
              </label>
            </div>
        <div className="form-outline m-3 ">
          <input type="text"  className="form-control" onChange={(e)=>setPrice(e.target.value)} />
          <label className="form-label" >
            Price
          </label>
        </div>
        <div className="form-outline m-3">
          <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)}/>
          <label className="form-label"  >
            Description
          </label>
        </div>
        <div className="form-outline m-3">
          <input type="text" className="form-control" onChange={(e)=>setImg(e.target.value)}/>
          <label className="form-label"  >
            Image source
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Add Product
        </button>
      </form>
      </div>
    </>
  );
}
