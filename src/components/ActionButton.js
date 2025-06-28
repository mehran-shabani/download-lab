// ActionButton.js
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
  const styles = {
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 'clamp(20px, 5vw, 30px) clamp(25px, 6vw, 40px)',
      border: 'none',
      borderRadius: 'clamp(12px, 3vw, 20px)',
      color: 'white',
      fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
      fontWeight: 'bold',
      cursor: 'pointer',
      minWidth: 'clamp(180px, 40vw, 220px)',
      position: 'relative',
      overflow: 'hidden',
      flex: 1,
      maxWidth: '280px',
      background: color,
      boxShadow: '0 10px 30px ' + hoverColor + ', 0 0 0 1px rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    },
    icon: {
      width: 'clamp(35px, 8vw, 50px)',
      height: 'clamp(35px, 8vw, 50px)',
      marginBottom: 'clamp(10px, 3vw, 15px)',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      transition: 'all 0.3s ease'
    },
    title: {
      fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
      marginBottom: 'clamp(5px, 2vw, 8px)',
      fontWeight: 700,
      lineHeight: 1.2
    },
    description: {
      fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
      opacity: 0.9,
      fontWeight: 'normal',
      lineHeight: 1.4,
      textAlign: 'center'
    },
    shine: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
      transform: 'translateX(-100%)',
      transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
  };

  return (
      <motion.button
          onClick={onClick}
          style={styles.button}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)'
          }}
          whileTap={{ scale: 0.98 }}
      >
        <div style={styles.icon}>
          <Icon style={{width: 'clamp(18px, 5vw, 24px)', height: 'clamp(18px, 5vw, 24px)'}} />
        </div>
        <div style={styles.title}>{title}</div>
        <div style={styles.description}>{description}</div>
        <div style={styles.shine}></div>
      </motion.button>
  );
};

export default ActionButton;