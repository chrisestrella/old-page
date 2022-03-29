import React from 'react'
import me from '../img/me.png'

export default function Header(){

  return(
    <header>
      <img src={me} alt="" />
      <div className="header--container">
        <h1 className='intro'>Hey, I'm Chris, a Software Engineer!</h1>
        <h3 className='school'>CompSci Major @ University of Washington</h3>
        <p className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          molestiae deleniti minima impedit voluptatum commodi, dolorem temporibus
          vero harum dolor aperiam, nemo odit! Quas alias rerum ratione consequuntur
          a incidunt.
        </p>
      </div>
    </header>
  )
}