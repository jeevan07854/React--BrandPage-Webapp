import React from 'react'
import './Navigation.css'
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="wrappre">
 

 <div className="nav-left">
  <a href="#">
    <img src=".\src\img\logo-removebg-preview.png" alt="" />
  </a>
 </div>

 <div className="nav-middle">
  
   <ul>
    <li><a href="#">HOME</a></li>
    <li><a href="#">ABOUT US</a></li>
    <li><a href="#">PRODUCT</a></li>
    <li><a href="#">CONTACT</a></li>
   </ul>

 </div>

 <div className="nav-right">
  <button type="button">SIGN IN</button>

 </div>


        </div>
      </div>
    
    </>
  )
}

export default Navigation