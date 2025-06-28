// Logo.js
import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants, logoFloat } from '../utils/animations';

const Logo = () => {
  const styles = {
    container: {
      width: 'clamp(80px, 20vw, 130px)',
      height: 'clamp(80px, 20vw, 130px)',
      background: 'white',
      borderRadius: '50%',
      margin: '0 auto clamp(20px, 5vw, 35px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 15px 35px rgba(76, 175, 80, 0.4), 0 0 0 3px rgba(76, 175, 80, 0.2), inset 0 -5px 10px rgba(0, 0, 0, 0.05)',
      position: 'relative',
      border: '2px solid rgba(76, 175, 80, 0.3)',
      padding: '10px',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      borderRadius: '50%',
      position: 'relative',
      zIndex: 2,
      filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.1))'
    },
    fallback: {
      display: 'none',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#4CAF50',
      fontSize: 'clamp(2rem, 8vw, 3rem)',
      fontWeight: 'bold'
    },
    highlight: {
      position: 'absolute',
      top: '15%',
      left: '15%',
      width: '25%',
      height: '25%',
      background: 'rgba(76, 175, 80, 0.1)',
      borderRadius: '50%',
      filter: 'blur(8px)'
    }
  };

  return (
      <motion.div
          style={styles.container}
          variants={itemVariants}
          animate={logoFloat}
      >
        <img
            src="images/logo/logo.png"
            alt="لوگو هلسا"
            style={styles.image}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
        />
        <div style={styles.fallback}>H</div>
        <div style={styles.highlight}></div>
      </motion.div>
  );
};

export default Logo;