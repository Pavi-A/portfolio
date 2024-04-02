// Header.js

import React from 'react';
import image from './profile-pic.jpeg'; // Import your profile picture

function Header() {
  return (
    <header>
      <div className="profile-info">
        <img src={image} alt="Profile" className="profile-pic" />
        <div className="profile-details">
          <h1>Pavithra A</h1>
          <h2> Web Developer</h2>
          <p>Karaikudi, Tamil Nadu</p>
          <p>pavialagar03@gmail.com</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
