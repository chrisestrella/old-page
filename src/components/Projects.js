import React, {useEffect, useRef} from 'react'
import { Link, Outlet } from 'react-router-dom';
import gsap, {Power3} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import StretchIt from './projects/StretchIt';
import AlgoSort from './projects/AlgoSort'

gsap.registerPlugin(ScrollTrigger);

export default function Projects(){

  const title = useRef(null);
  // const


  return(
    <div id='projects'>
      <h1 className='projects-header'>My Projects</h1>
      <hr />
      <div className='projects-container'>
        <StretchIt />
        <AlgoSort />
      </div>
    </div>
  )
}