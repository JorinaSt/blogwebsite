import React from "react";
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
              <Link to ="/">
              <img src={Logo} alt=""/>
              </Link>
            </div>
            <div className="links"> 
            <Link className="link" to="/?cat=about">
            <h6>HOME</h6>
          </Link>
          <Link className="link" to="/?cat=sport">
            <h6>SPORT</h6>
          </Link>
          <Link className="link" to="/?cat=code">
            <h6>CODE</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>

          <span>Jorina</span>
          <span>Logout</span>
          <Link className="link" to="/login">
              Login
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