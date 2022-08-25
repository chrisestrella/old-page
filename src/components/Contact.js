import React, {useEffect, useRef} from 'react'
import { Link, Outlet } from 'react-router-dom';
import gsap, {Power3} from 'gsap'

import mail from '../img/contact/mail.png'
import linkedin from '../img/contact/linkedin.png'
import github from '../img/contact/github.png'
import hand from '../img/contact/hand.png'

export default function Contact(){

  return(
    <div id='contact'>

      <img src={hand} alt="" />

      <div className="contacts">

        <h2>
          Lets keep in touch!
        </h2>

        <div className="contact-link">
          <a href="">
            <img src={mail} alt="" />
            <h3>chrisce206@gmail.com</h3>
          </a>
        </div>

        <div className="contact-link">
          <a href="">
            <img src={linkedin} alt="" />
            <h3>LinkedIn</h3>
          </a>
        </div>

        <div className="contact-link">
          <a href="https://github.com/chrisestrella">
            <img src={github} alt="" />
            <h3>GitHub</h3>
          </a>
        </div>

      </div>
    </div>
  )
}