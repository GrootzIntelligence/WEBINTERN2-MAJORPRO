import React, { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'

const VantaComponent = (props) => {

  return (    
      <div className='w-screen overflow-x-hidden flex flex-col'>
          <div className='flex flex-col object-contain'>
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
      </div>
      )
}

export default VantaComponent;