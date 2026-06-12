import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import heroImage from "../assets/hero-dental.jpg";

import "../styles/hero.css";


function Hero(){

  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);


  useEffect(()=>{

    const tl = gsap.timeline();


    tl.fromTo(
      titleRef.current,
      {
        y:80,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        duration:1,
        ease:"power4.out"
      }
    )


    .fromTo(
      textRef.current,
      {
        y:40,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        duration:.8
      },
      "-=0.5"
    )


    .fromTo(
      buttonsRef.current,
      {
        y:30,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        duration:.7
      },
      "-=0.4"
    );


    gsap.to(imageRef.current,{
      scale:1.1,
      duration:12,
      ease:"none"
    });


  },[]);



return(

<section className="hero">


<img
ref={imageRef}
src={heroImage}
alt="Dental clinic"
className="hero-image"
/>


<div className="hero-overlay"></div>


<div className="hero-content">


<h1 ref={titleRef}>
Your Smile,
<br/>
Our Passion
</h1>


<p ref={textRef}>
Premium dental care using modern technology
to create confident and healthy smiles.
</p>


<div ref={buttonsRef} className="hero-buttons">


<Link to="/booking" className="primary-btn">
Book Appointment
</Link>


<Link to="/services" className="secondary-btn">
Explore Services
</Link>


</div>


</div>


</section>

)

}


export default Hero;