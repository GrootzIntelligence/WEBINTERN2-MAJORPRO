import React, { useState, useEffect, useRef } from 'react'
import Net from 'vanta/dist/vanta.net.min'
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'

const VantaComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(Net({
        el: myRef.current,
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
      }))
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (    
    <div ref={myRef}>
      <div className='w-screen overflow-x-hidden flex flex-col'>
          <div className='flex flex-col object-contain'>
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
      </div>
    </div>
      )
}

export default VantaComponent;