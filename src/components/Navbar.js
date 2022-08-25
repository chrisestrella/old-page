import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../img/logo.png'

export default function Navbar(){

  return (
    <nav>
      <div className="Nav--content">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="drop">
        <div className="dropmenu--button">
          <div className="dblock"></div>
          <div className="dblock"></div>
          <div className="dblock"></div>
        </div>
      </div>
      <Outlet/>
    </nav>
  )
}

// eslint-disable-next-line
{/* <div className="Nav--content">
          <h2 >Home</h2>
          <h2 >About</h2>
          <h2 >Contact</h2>
          <img src={logo} alt="Logo" />
        </div>
        <hr /> */}