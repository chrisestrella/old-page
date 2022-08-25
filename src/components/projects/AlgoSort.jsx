import React, {useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom';
import gsap, {Power3} from 'gsap'


export default function AlgoSort(){

  function makeAlgoBar(id){
    // const order = [5,2,1,3,0,9,6,4,7,8]
    return (
      <g key={id}>
        <rect
          id={`algo-${id}`}
          className="algo-bar"
          height={`${Math.pow(id+.1, 2.05)+5}%`}
          y="0"
          x={`${1.5+10*id}%`}
        />
      </g>
    )
  }

  let AlgoBars = [];
  for (let i = 0; i < 10; i++) {
    AlgoBars[i] = makeAlgoBar(i);
  }

  return(
    <div className="project algo-sort">
          <div className="project-banner algo-banner">
            <svg width="80%" height="41vh" id="algo-bar-container">
              {AlgoBars}
              Sorry, your browser does not support inline SVG.
            </svg>
          </div>
          <div className="project-content">
            <Link to="/algo-sort" target="_blank">
              <h3>
                Sorting Algorithm Visualizer
              </h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              veritatis molestiae, dolore impedit quas nisi voluptatem hic
              dolores iure omnis sit libero unde dolorem voluptatibus?
            </p>
        </div>
        <Outlet/>
      </div>
  )
}