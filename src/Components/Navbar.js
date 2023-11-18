import { Link } from "react-router-dom";
export default function Navbar(){
    return (
      <>
        
          <header className=" bg-dark ">
          <div className="container">
          <div className='d-flex justify-content-end py-2'>
          <ul className="nav nav-pills">
              <li className="nav-item px-2 ">
                <Link to="/" className="nav-link text-white fs-4">
                  home
                </Link>
              </li>
            </ul>
          </div>  
            
          </div>
          </header>
      </>
    );
}