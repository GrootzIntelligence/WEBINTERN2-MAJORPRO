import Body_Welcome from "./Body_Welcome";
import Body_AboutUs from './Body_AboutUs';
import Body_ContactUs from "./Body_ContactUs";

import Net from 'vanta/dist/vanta.net.min'
import React, { useState, useEffect, useRef } from 'react'


function Body() {
    const [vantaEffect1, setVantaEffect1] = useState(null);
    const [vantaEffect2, setVantaEffect2] = useState(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    useEffect(() => {
      if (!vantaEffect1 && ref1.current) {
        setVantaEffect1(Net({
          el: ref1.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3fffa2,
          backgroundColor: 0x10101,
          points: 20.00,
          maxDistance: 23.00,
          spacing: 18.00
        }     
        ))
      }
      if (!vantaEffect2 && ref2.current) {
        setVantaEffect2(Net({
          el: ref2.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3fffa2,
          backgroundColor: 0x10101,
          points: 20.00,
          maxDistance: 23.00,
          spacing: 18.00
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

