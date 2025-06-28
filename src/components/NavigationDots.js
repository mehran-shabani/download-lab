// NavigationDots.js
import React from 'react';
import { motion } from 'framer-motion';

const NavigationDots = ({ slides, slideIndex, goToSlide, color }) => {
  const dotColor = color.includes('blue') ? '#2196F3' : '#4CAF50';
  const dotActiveColor = color.includes('blue') ? '#1976D2' : '#388E3C';

  const styles = {
    container: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'center'
    },
    dot: {
      width: '1rem',
      height: '1rem',
      borderRadius: '50%',
      background: '#e0e0e0',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    },
    activeDot: {
      background: `linear-gradient(135deg, ${dotColor}, ${dotActiveColor})`,
      transform: 'scale(1.3)',
      boxShadow: `0 4px 15px ${color.includes('blue') ? 'rgba(33, 150, 243, 0.4)' : 'rgba(76, 175, 80, 0.4)'}`
    }
  };

  return (
      <div style={styles.container}>
        {slides.map((_, index) => (
            <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                style={index === slideIndex ? {...styles.dot, ...styles.activeDot} : styles.dot}
                whileHover={{
                  scale: index === slideIndex ? 1.25 : 1.15,
                  background: index === slideIndex ?
                      `linear-gradient(135deg, ${dotColor}, ${dotActiveColor})` :
                      '#bdbdbd'
                }}
                whileTap={{ scale: 0.9 }}
            />
        ))}
      </div>
  );
};

export default NavigationDots;