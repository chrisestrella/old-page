import React from 'react';
import logo from '../img/logo.png'

export default function Navbar(){

  return (
    <>
      <nav>
        <div className="Nav--content">
          <img src={logo} alt="Logo" />
        </div>
      </nav>
    </>
  )
}

{/* <div className="Nav--content">
          <h2 >Home</h2>
          <h2 >About</h2>
          <h2 >Contact</h2>
          <img src={logo} alt="Logo" />
        </div>
        <hr /> */}