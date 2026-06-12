import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ServiceCard from "./ServiceCard";

import whitening from "../assets/services/whitening.jpg";
import implant from "../assets/services/implant.jpg";
import orthodontics from "../assets/services/orthodontics.jpg";
import rootCanal from "../assets/services/root-canal.jpg";

import "../styles/service-card.css";


gsap.registerPlugin(ScrollTrigger);


function ServicesSection(){

const sectionRef = useRef();


useEffect(()=>{


gsap.fromTo(

sectionRef.current.querySelectorAll(".service-card"),

{
y:80,
opacity:0
},

{
y:0,
opacity:1,
duration:1,
stagger:.2,
scrollTrigger:{
trigger:sectionRef.current,
start:"top 75%"
}

}

)


},[]);



const services=[

{
image:whitening,
title:"Teeth Whitening",
description:"Professional whitening treatments for a brighter confident smile."
},

{
image:implant,
title:"Dental Implants",
description:"Natural looking replacement teeth using advanced techniques."
},

{
image:orthodontics,
title:"Orthodontics",
description:"Modern braces and alignment solutions for perfect smiles."
},

{
image:rootCanal,
title:"Root Canal Treatment",
description:"Pain-free procedures that protect and restore your teeth."
}

];


return(

<section 
className="services-section"
ref={sectionRef}
>


<div className="section-heading">

<h2>
Our Dental Services
</h2>

<p>
Complete dental solutions delivered by experienced professionals.
</p>

</div>


<div className="services-grid">

{
services.map((service,index)=>(

<ServiceCard
key={index}
{...service}
/>

))
}


</div>


</section>

)

}

export default ServicesSection;