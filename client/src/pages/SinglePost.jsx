import React from 'react'
import Jorina from '../img/Jorina.png'
import Delete from '../img/delete.png'
import Edit from '../img/edit.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

 const 
SinglePost = () => {
  return (
    <div className="single">
    <div className="content">
      <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <div className="user">
         <img
          src= {Jorina} 
          alt=""
        />
        <div className="info">
        <span>Jorina</span>
          <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={'/WritePost?edit=2'}>
            <img src={Edit} alt="" />
            </Link> 
            <img src={Delete} alt="" />
            </div>
        </div>
        <h1> Lorem ipsum dolor sit amet consectetur.</h1>
        <p> 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur veritatis error sed numquam reprehenderit assumenda, saepe deleniti sequi aliquid vel? Ex omnis amet ipsam iste deleniti? Eaque, tempore iure?
          <br /> 
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi et fuga placeat esse harum assumenda molestias tempore, ratione officia mollitia, impedit illum quae laboriosam debitis! Praesentium, consequatur? Ipsam, saepe atque.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
   <Menu />
  </div>
  )
}

export default SinglePost