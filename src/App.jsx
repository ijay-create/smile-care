import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { initSmoothScroll } from "./animations/lenis";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

import "./styles/global.css";


function AnimatedRoutes() {

const location = useLocation();

return (
<AnimatePresence mode="wait">

<Routes location={location} key={location.pathname}>

<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/doctors" element={<Doctors />} />
<Route path="/booking" element={<Booking />} />
<Route path="/contact" element={<Contact />} />

</Routes>

</AnimatePresence>
);

}


function App() {

useEffect(() => {
initSmoothScroll();
}, []);


return (
<BrowserRouter>

<Navbar />

<AnimatedRoutes />

<Footer />

<WhatsAppFloat />

</BrowserRouter>
);
}

export default App;