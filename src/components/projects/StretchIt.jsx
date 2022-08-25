import React, {useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom';
import gsap, {Power3} from 'gsap'
import logo from '../../img/stretchitlogo.png'


export default function StretchIt(){




  return(
    <div className="project algo-sort">
      <div className="project-banner">
        <img src={logo} alt="" />
      </div>
      <div className="project-content">
            <a
              href="https://devpost.com/software/stretchit-preventing-computer-usage-injuries"
              target="_blank"
            >
              <h3>
                StretchIt
              </h3>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              veritatis molestiae, dolore impedit quas nisi voluptatem hic
              dolores iure omnis sit libero unde dolorem voluptatibus?
            </p>
        </div>
    </div>
  )
}