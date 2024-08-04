import React from 'react';

function Body_ContactUs() {
  return (
    <div className="contact-container flex flex-col items-center justify-center h-full p-4">
      <div className="contact-content text-center">
        <h1 className="text-white text-6xl font-bold mb-10">Contact Us</h1>
        <div className="contact-details flex flex-col md:flex-column gap-4 md:gap-8 justify-center items-start">
          <div className="contact-item flex items-center gap-2 text-white">
            <i className="fas fa-phone-alt text-green-300 text-2xl"></i>
            <span>+91 9999999999</span>
          </div>
          <div className="contact-item flex items-center gap-2 text-white">
            <i className="fas fa-envelope text-green-300 text-2xl"></i>
            <span>grootzintelligence@gmail.com</span>
          </div>
          <div className="contact-item flex items-center gap-2 text-white">
            <i className="fas fa-map-marker-alt text-green-300 text-2xl"></i>
            <span>Ghaziabad, Uttar Pradesh , India</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body_ContactUs;
