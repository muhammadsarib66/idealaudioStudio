// import Loader from "./components/Loader"
import Navbar from "./components/Navbar";
import Hero from "./Screens/Hero";
import AboutUs from "./Screens/AboutUs";
import Services from "./Screens/Services";
import { useEffect, useState } from "react";
import Projects from "./Screens/Projects";

// function App() {
//   const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);
//   const handleWhatsAppClick = () => {
//     const whatsappNumber = "+923103102166";
//     const whatsappLink = `https://wa.me/${whatsappNumber}`;
//     window.open(whatsappLink, "_blank");
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollThreshold = 200;
//       if (window.scrollY > scrollThreshold) {
//         setShowWhatsAppButton(true);
//       } else {
//         setShowWhatsAppButton(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       {/* <Loader /> */}
//       <AboutUs />
//       <Services />
//       <Projects />
//       {showWhatsAppButton && (
//         <div
//           onClick={handleWhatsAppClick}
//           className="bg-green-600 rounded-full animate-bounce w-12 md:w-16 h-12 md:h-16 cursor-pointer flex items-center justify-center fixed bottom-10 right-7 md:right-14"
//         >
//           <i className="text-2xl md:text-5xl text-white fa-brands fa-whatsapp"></i>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

import React from 'react'

const App = () => {
  return (
    <div>Hello Contact to Mr Sarib for Website update</div>
  )
}

export default App
