import React from 'react';
import {  icons,userProfile } from '../data';
import '../CSS/Header.css';
import img1 from "../assets/image1.jpg"



const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="header-logo">
        <h1>{icons.logo} Healthcare.</h1>
      </div>
      <div className="header-search">
        <span className="search-icon">{icons.search}</span>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-actions">
        <button className="action-btn notification-btn">{icons.notification}</button>
        <div className="user-profile">
          <img src={img1} alt="Vishal Lodha" className="user-avatar" />
          <span>{userProfile.name}</span>
        </div>
        <button className="action-btn add-btn">{icons.add}</button>
      </div>
    </header>
  );
};

export default Header;
