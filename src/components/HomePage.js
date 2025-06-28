// HomePage.js
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Heart } from 'lucide-react';
import Logo from './Logo';
import FloatingElements from './FloatingElements';
import ActionButton from './ActionButton';
import { containerVariants, itemVariants } from '../utils/animations';

const HomePage = ({ setCurrentPage, setSlideIndex }) => {
  const handlePageChange = (page) => {
    setSlideIndex(0);
    setCurrentPage(page);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    },
    content: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1.5rem',
      padding: '3rem 2rem',
      textAlign: 'center',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      maxWidth: '600px',
      width: '100%',
      position: 'relative',
      zIndex: 10
    },
    headerLine: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: 'linear-gradient(90deg, #667eea, #764ba2, #4CAF50, #2196F3)',
      borderRadius: '1.5rem 1.5rem 0 0'
    },
    title: {
      fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 'clamp(15px, 4vw, 20px)',
      background: 'linear-gradient(135deg, #333, #555)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: 1.2
    },
    subtitle: {
      color: '#666',
      marginBottom: 'clamp(25px, 6vw, 45px)',
      fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
      lineHeight: 1.6,
      position: 'relative'
    },
    subtitleLine: {
      content: '""',
      position: 'absolute',
      bottom: 'clamp(-10px, -3vw, -15px)',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'clamp(40px, 10vw, 60px)',
      height: '3px',
      background: 'linear-gradient(90deg, transparent, #667eea, transparent)',
      borderRadius: '2px'
    },
    buttonsContainer: {
      display: 'flex',
      gap: 'clamp(15px, 4vw, 25px)',
      justifyContent: 'center',
      flexWrap: 'wrap',
      perspective: '1000px'
    },
    footer: {
      marginTop: 'clamp(25px, 6vw, 40px)',
      color: '#666',
      fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      paddingTop: 'clamp(15px, 4vw, 25px)',
      position: 'relative',
      lineHeight: 1.5
    },
    footerHeart: {
      position: 'absolute',
      top: 'clamp(-8px, -2vw, -10px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'white',
      padding: '0 clamp(8px, 2vw, 10px)',
      fontSize: 'clamp(16px, 4vw, 20px)'
    }
  };

  return (
      <motion.div
          style={styles.container}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
      >
        <FloatingElements />

        <motion.div
            style={styles.content}
            variants={itemVariants}
        >
          <div style={styles.headerLine}></div>

          <Logo />

          <motion.h1
              style={styles.title}
              variants={itemVariants}
          >
            اپلیکیشن هلسا
          </motion.h1>

          <motion.div
              style={styles.subtitle}
              variants={itemVariants}
          >
            <p>راهنمای نصب و استفاده از اپلیکیشن هلسا</p>
            <p style={{fontSize: 'clamp(0.9rem, 3vw, 1.1rem)'}}>دکتر حسین شبانی - پزشک آنلاین</p>
            <div style={styles.subtitleLine}></div>
          </motion.div>

          <motion.div
              style={styles.buttonsContainer}
              variants={itemVariants}
          >
            <ActionButton
                onClick={() => handlePageChange('android')}
                icon={Smartphone}
                title="اپلیکیشن اندروید"
                description="راهنمای نصب روی Android"
                color="linear-gradient(135deg, #4CAF50, #45a049)"
                hoverColor="rgba(76, 175, 80, 0.4)"
            />

            <ActionButton
                onClick={() => handlePageChange('web')}
                icon={Globe}
                title="وب اپلیکیشن"
                description="راهنمای استفاده آنلاین"
                color="linear-gradient(135deg, #2196F3, #1976D2)"
                hoverColor="rgba(33, 150, 243, 0.4)"
            />
          </motion.div>

          <motion.div
              style={styles.footer}
              variants={itemVariants}
          >
            <div style={styles.footerHeart}>
              <Heart style={{width: '1.5rem', height: '1.5rem', color: '#ef4444', fill: 'currentColor'}} />
            </div>
            <p>
              خدمات پزشکی آنلاین ۲۴ ساعته<br />
              آباده، اقلید، صغاد، بهمن
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
  );
};

export default HomePage;