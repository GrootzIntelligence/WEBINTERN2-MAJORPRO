import React from 'react';
import { motion } from 'framer-motion';

function Body_ContactUs() {
  return (
    <motion.div
      className="contact-container flex flex-col items-center justify-center h-full p-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="contact-content text-center">
        <h1 className="text-white text-6xl font-bold mb-10">Contact Us</h1>
        <div className="contact-details flex flex-col md:flex-col gap-4 md:gap-8 justify-center items-start">
        <div className="contact-item flex items-center gap-2 text-white">
          <i className="fas fa-phone-alt text-2xl" style={{ color: '#5070fd' }}></i>
          <span>+91 9999999999</span>
        </div>
        <div className="contact-item flex items-center gap-2 text-white">
          <i className="fas fa-envelope text-2xl" style={{ color: '#5070fd' }}></i>
          <span>grootzintelligence@gmail.com</span>
        </div>
        <div className="contact-item flex items-center gap-2 text-white">
          <i className="fas fa-map-marker-alt text-2xl" style={{ color: '#5070fd' }}></i>
          <span>Ghaziabad, Uttar Pradesh, India</span>
        </div>
      </div>
      
      </div>
    </motion.div>
  );
}

export default Body_ContactUs;
