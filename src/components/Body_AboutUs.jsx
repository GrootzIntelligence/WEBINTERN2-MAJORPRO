import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Card2 from './Card2';

function Body_AboutUs() {
  return (
    <motion.div
      className="flex flex-col items-center p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-black text-4xl font-bold mb-4">
        IT services
      </h1>
      <Card
        title="Tailored services"
        description="We create extensive android applications or websites that are tailored to your needs while keeping in mind the current competitive environment of corporate industry that demands something different. Whatever you desire for comes in handy with the work of Grootz team that works for your satisfaction and happiness."
        image={"img1.jpg"}
      />
      <Card2
        title="Consumer friendly"
        description="We work towards creating our final product user friendly, employing UI/UX. Being well aware of the fact that a customer’s comfortability determines the amount of success or downfall of a business, we make sure to put in every effort to satisfy the potential market."
        image={"img1.jpg"}
      />
      <Card
        title="Targeted marketing"
        description="We not only create but can also market your brand name or web application using targeted marketing strategies that aim to create a link between you and your customers, establishing trust and connection building goodwill."
        image={"img1.jpg"}
      />
    </motion.div>
  );
}

export default Body_AboutUs;
