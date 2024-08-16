import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';

const VantaComponent = () => {
  return (
    <motion.div
      className="w-screen overflow-x-hidden flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='flex flex-col object-contain'>
        <Navbar />
        <Body />
        <Footer />
      </div>
    </motion.div>
  );
};

export default VantaComponent;
