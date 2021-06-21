import React from 'react';
import logoLibrary from "../images/Logo-LibraryApp.png"

function Header() {

  return (

    <header>
        <div>
          <img src={logoLibrary} alt="logo-library"></img>
          <h1>Library App</h1>
        </div>
        <menu>
          <ul>
            <li>My Libraries</li>
            <div className="divisor"></div>
            <li>Categories</li>
            <div className="divisor"></div>
            <li>My Purchases</li>
          </ul>
        </menu>
    </header>
  )
}

export default Header;