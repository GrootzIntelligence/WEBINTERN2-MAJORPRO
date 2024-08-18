import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Card2 from './Card2';
import content from './aboutContent.json';

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
      {content.cards.map((card, index) => (
        index % 2 === 0 ? (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ) : (
          <Card2
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        )
      ))}
    </motion.div>
  );
}

export default Body_AboutUs;
