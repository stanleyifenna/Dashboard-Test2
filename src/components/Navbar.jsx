import React from 'react';
import { FiBell } from "react-icons/fi";
import avatar from "../assests/avatarImage.jpg";


export default function Navbar() {
    return (
        <div className="navbar">
          <div className="title">
              <h2>Dashboard</h2>
              <span>Detailed information about your store</span>
          </div>  
          <div className="container">
              <div className="search">
                  <input type="text" placeholder="Search ..." />
              </div>
              <div className='profile'>
                  <FiBell className="bell" />
                  <div className="image">
                      <img src={avatar} alt="" />
                  </div>
                  <div className="profile__name">
                      <h4>Smith John</h4>
                      <h6>Admin</h6>
                  </div>
                  <FiBell />
              </div>
          </div> 
        </div>
    )
}
