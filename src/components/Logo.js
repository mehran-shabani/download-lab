import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants, logoFloat } from '../utils/animations';

const Logo = () => {
  return (
    <motion.div
      className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full mx-auto mb-8 flex items-center justify-center border-4 border-green-200 shadow-lg relative overflow-hidden"
      variants={itemVariants}
      animate={logoFloat}
    >
      <img
        src="images/logo/logo.png"
        alt="لوگو هلسا"
        className="w-20 h-20 md:w-28 md:h-28 object-contain rounded-full"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="hidden w-full h-full items-center justify-center text-green-500 text-4xl md:text-5xl font-bold">
        H
      </div>
      <div className="absolute top-2 left-2 w-6 h-6 bg-white/30 rounded-full blur-sm" />
    </motion.div>
  );
};

export default Logo;