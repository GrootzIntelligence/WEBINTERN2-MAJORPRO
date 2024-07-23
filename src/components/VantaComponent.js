import React, { useState, useEffect, useRef } from 'react'
import RINGS from 'vanta/dist/vanta.rings.min'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(RINGS({
        el: myRef.current
      }))
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
      <div ref={myRef} className='w-screen h-full overflow-x-hidden flex flex-col'>
        {/* <div className='flex flex-row'> */}
          {/* <Sidenav/> */}
          <div className='flex flex-col object-contain'>
            <Navbar/>
            <Body/>
            <Footer/>
          {/* </div> */}
        </div>
      </div>
      )
}

export default VantaComponent;