import React from "react";
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">Lama Social</div>
            <div className="links"> 
            <Link className="link">
            <h6>ABOUT</h6>
          </Link>
          <Link className="link">
            <h6>SPORT</h6>
          </Link>
          <Link className="link">
            <h6>CODE</h6>
          </Link>
          <Link className="link">
            <h6>FOOD</h6>
          </Link>
          <Link className="link">
            <h6>DESIGN</h6>
          </Link>
      
          <span className="write">
            <Link className="link" to="/WritePost">
              Write
            </Link>
          </span>
          
          </div>
        </div>      
    </div>
  )
}

export default Navbar