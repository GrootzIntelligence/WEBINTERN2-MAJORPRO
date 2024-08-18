import { motion } from 'framer-motion';

export default function Card({ title, description, image }) {
  return (
    <motion.div
      className="flex w-full h-full flex-wrap-reverse"
      initial={{ opacity: 0, y: 100, scale: 0.9, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div 
        className="flex-1 p-4 min-w-72"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-bold mb-2 underline underline-offset-8">{title}</h2>
        <p className="text-lg">
          {description}
        </p>
      </motion.div>

      <motion.div 
        className="flex-1 p-4 min-w-72"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      >
        <img src={image} alt="About Us" className="w-full h-auto object-cover" />
      </motion.div>
    </motion.div>
  );
}
