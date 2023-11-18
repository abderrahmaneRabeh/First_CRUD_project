import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidebare() {
  return (
    <>
      <ul className="nav nav-pills flex-column mb-auto text-white ">
        <li>
          <Link to="Products" className="nav-link  my-2 text-white text-center ">
            All Products
          </Link>
        </li>
        <hr />
        <li>
          <Link to="About" className="nav-link my-2  text-white text-center">
           About us
          </Link>
        </li>
      </ul>
    </>
  );
}
