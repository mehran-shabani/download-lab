import React from 'react';
import { motion } from 'framer-motion';

const NavigationDots = ({ slides, slideIndex, goToSlide }) => {
  return (
    <div className="flex gap-3">
      {slides.map((_, index) => (
        <motion.button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            index === slideIndex
              ? 'bg-blue-500 scale-125 shadow-lg'
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          whileHover={{ scale: index === slideIndex ? 1.25 : 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  );
};

export default NavigationDots;