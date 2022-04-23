import React, {useEffect} from 'react'
import gsap, {Power3} from 'gsap'

export default function Projects(){

  useEffect(()=>{
    // let tl = gsap.timeline();
    // tl.fromTo(".projects--header", {
    //   opacity: 0,
    //   y: -400
    // },{
    //   keyframes: {
    //     y: [-400, -450, -450, -450, 0],
    //     opacity: [0, 1, 1, 1, 1, 1]
    //   },
    //   delay: 4,
    //   duration: 2,
    //   ease: Power3.easeIn
    // })
  },[])

  return(
    <>
      <h1 className='projects--header'>My Projects</h1>
      <hr />
      <div className='projects--container'>

      </div>
    </>
  )
}