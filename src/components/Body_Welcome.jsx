import React from 'react';
import { motion } from 'framer-motion';

function Body_Welcome() {
  return (
    <motion.div
      className="flex items-center justify-center h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
    <h1 className="text-5xl sm:text-8xl text-center font-bold" style={{ color: '#5070fd' }}>
        <h1 className="text-white text-center text-bold">
          Welcome <br />
          to <br />
        </h1>
        Grootz Intelligence
      </h1>
    </motion.div>
  );
}

export default Body_Welcome;
