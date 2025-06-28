import React from 'react';
import { motion } from 'framer-motion';
import { floatingAnimation } from '../utils/animations';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/8 rounded-full"
        animate={{ 
          ...floatingAnimation, 
          transition: { 
            ...floatingAnimation.transition, 
            delay: 1 
          } 
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-white/6 rounded-full"
        animate={{ 
          ...floatingAnimation, 
          transition: { 
            ...floatingAnimation.transition, 
            delay: 2 
          } 
        }}
      />
    </div>
  );
};

export default FloatingElements;