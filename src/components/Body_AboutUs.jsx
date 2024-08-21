import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import content from './aboutContent.json';

// Lazy load the Card and Card2 components
const Card = lazy(() => import('./Card'));
const Card2 = lazy(() => import('./Card2'));

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
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </motion.div>
  );
}

export default Body_AboutUs;
