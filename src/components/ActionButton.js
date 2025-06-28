import React from 'react';
import { motion } from 'framer-motion';

const ActionButton = ({ 
  onClick, 
  icon: Icon, 
  title, 
  description, 
  color, 
  hoverColor 
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`group relative bg-gradient-to-r ${color} text-white px-8 py-6 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl`}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <div className="text-xl font-bold mb-1">{title}</div>
        <div className="text-sm opacity-90">{description}</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </motion.button>
  );
};

export default ActionButton;