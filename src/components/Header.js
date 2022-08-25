import React, { useRef, useEffect } from 'react'
import me from '../img/me.png'
import gsap, { Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    let head = useRef(null);
    let portrait = useRef(null);
    let hi = useRef(null);
    let school = useRef(null);
    let about = useRef(null);

    useEffect(() => {


        //opening animation
        const openingTimeline = gsap.timeline()
        openingTimeline.from(hi,{ rotationX: -90, y: -100, transformOrigin: "0% 0%", duration: 1, scale: .8, } )
        openingTimeline.fromTo( school,{ y: -20, opacity: 0 },{ opacity: 1, y: 0, transformOrigin: "0% 0%", duration: 2, ease: Power3.easeOut, delay:1.5 }, 1 )
        openingTimeline.fromTo( about, { y: -40, opacity: 0 }, { opacity: 1, y: 0, duration: 2, ease: Power3.easeOut, delay: 1.8 }, 1 )

        //creating scene for scroll
        // const  closingTimeline = gsap.timeline()
        // closingTimeline.add(

        const scrollTimeLine = gsap.timeline({
            immediateRender: false,
            scrollTrigger: {
                trigger: '#heads',
                start: "top top",
                end: "bottom 50%",
                scrub: .4,
                pin: true,
                markers: false
            }
        });
        scrollTimeLine.to(
            head,
            {
                // immediateRender: false,
                rotationX: -90,
                y: -50,
                transformOrigin: "50% 0%",
                scaleY:.8,
                scaleX: .95,
                // scale: .8,
                opacity: 0,
                ease: Power3.easeOut,
                duration: 4
            },
            0
        )
        scrollTimeLine.to(
            portrait,
            {
                scale: .4,
                opacity: 0,
                duration: 2,
                rotate: -75,
                x: -100,
                y: "-10vh",
                // ease: Power3.easeOut,
            },
            0
        )

    }, [])

    return (
        <header id="heads">
            <div
            className = "header-card"
            >
                <img src = { me } alt = "me" ref={(el) => portrait = el}/ >
                <div
                    className = "header--container"
                    ref = { (el) => head = el }
                >
                    <h1 className = 'intro typed' ref={(el) => hi = el}>Hey, I'm Chris!</h1>
                    <h3 className = 'school' ref={(el) => school=el}> Student @ The University of Washington </h3>
                    <p className = 'about' ref={(el) => about=el}>
                    My name is Christian Estrella!
                    I am in my second-year of college majoring in computer science.

                    </p>
                </div>
            </div>
        </header>
    )
}