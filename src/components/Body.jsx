import Body_Welcome from "./Body_Welcome";
import Body_AboutUs from './Body_AboutUs';
import Body_ContactUs from "./Body_ContactUs";

import Waves from 'vanta/dist/vanta.waves.min'
import React, { useState, useEffect, useRef } from 'react'


function Body() {
    const [vantaEffect1, setVantaEffect1] = useState(null);
    const [vantaEffect2, setVantaEffect2] = useState(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    useEffect(() => {
      if (!vantaEffect1 && ref1.current) {
        setVantaEffect1(
          Waves({
            el: ref1.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x10101,
            shininess: 62.00,
            waveHeight: 23.50,
            waveSpeed: 0.85,
            zoom: 0.94
        }     
        ))
      }
      if (!vantaEffect2 && ref2.current) {
        setVantaEffect2(Waves({
          el: ref2.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x10101,
          shininess: 62.00,
          waveHeight: 23.50,
          waveSpeed: 0.85,
          zoom: 0.94
}       
        ))
      }
  
      return () => {
        // if (vantaEffect1) vantaEffect1.destroy()
        // if (vantaEffect2) vantaEffect2.destroy()
      }
    }, [vantaEffect1, vantaEffect2])



  return (
    <div className="flex flex-col">
      <div className="w-screen h-screen flex flex-col" ref={ref1}>
        <Body_Welcome />
      </div>
      <div className="w-screen flex flex-col bg-white">
        <Body_AboutUs />
      </div>
      <div className="w-screen h-screen flex flex-col " ref={ref2}>
        <Body_ContactUs />
      </div>
    </div>
  );
}

export default Body;

