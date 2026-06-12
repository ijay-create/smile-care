import { motion } from "framer-motion";

import "../styles/doctors.css";


function DoctorCard({image,name,role}){

return(

<motion.div

className="doctor-card"

whileHover={{
y:-10
}}

transition={{
duration:.3
}}

>


<img
src={image}
alt={name}
/>


<div className="doctor-info">

<h3>
{name}
</h3>


<p>
{role}
</p>


</div>


</motion.div>

)

}


export default DoctorCard;