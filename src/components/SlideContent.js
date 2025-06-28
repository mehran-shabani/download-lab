// SlideContent.js
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const SlideContent = ({ slide, color }) => {
  const getThemeColors = () => {
    if (color.includes('blue')) {
      return {
        primary: '#1976D2',
        secondary: '#2196F3',
        light: '#E3F2FD',
        gradient: 'linear-gradient(135deg, #2196F3, #1976D2)'
      };
    } else {
      return {
        primary: '#388E3C',
        secondary: '#4CAF50',
        light: '#E8F5E8',
        gradient: 'linear-gradient(135deg, #4CAF50, #388E3C)'
      };
    }
  };

  const theme = getThemeColors();

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '3rem'
    },
    imageContainer: {
      maxWidth: '400px',
      margin: '0 auto 2rem',
      position: 'relative'
    },
    imageWrapper: {
      background: `linear-gradient(135deg, ${theme.light}, #f8f9fa)`,
      borderRadius: '1.5rem',
      padding: '1rem',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: `2px solid ${theme.light}`
    },
    image: {
      aspectRatio: '4/3',
      background: 'white',
      borderRadius: '1rem',
      overflow: 'hidden',
      border: `2px solid ${theme.light}`,
      position: 'relative'
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    highlight: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${theme.secondary}, transparent)`
    },
    textContainer: {
      maxWidth: '600px',
      margin: '0 auto'
    },
    textBox: {
      background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
      padding: 'clamp(1.5rem, 4vw, 2rem)',
      borderRadius: '1.25rem',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.8)'
    },
    title: {
      fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
      fontWeight: 'bold',
      color: theme.primary,
      marginBottom: '1rem',
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    },
    content: {
      color: '#555',
      lineHeight: 1.7,
      fontSize: 'clamp(1rem, 3vw, 1.125rem)',
      marginBottom: '1.5rem',
      textAlign: 'right',
      direction: 'rtl'
    },
    actionSection: {
      marginTop: '2rem',
      padding: '1.5rem',
      background: theme.gradient,
      borderRadius: '1.25rem',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
    },
    actionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)'
    },
    actionTitle: {
      color: 'white',
      fontSize: 'clamp(1.125rem, 3.5vw, 1.25rem)',
      marginBottom: '1rem',
      fontWeight: 'bold',
      position: 'relative',
      zIndex: 5,
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
    },
    actionLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      background: 'white',
      color: theme.primary,
      padding: '1rem 1.5rem',
      borderRadius: '1rem',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: 'clamp(1rem, 3vw, 1.125rem)',
      transition: 'all 0.4s ease',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      zIndex: 5
    }
  };

  return (
      <motion.div
          style={styles.container}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div style={styles.imageContainer}>
          <motion.div
              style={styles.imageWrapper}
              whileHover={{
                y: -12,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.18)',
                borderColor: theme.secondary
              }}
          >
            <div style={styles.image}>
              <img
                  src={slide.image}
                  alt={slide.title}
                  style={styles.img}
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f3f4f6"/><text x="200" y="150" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%236b7280">${slide.title}</text></svg>`;
                  }}
              />
              <div style={styles.highlight}></div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div style={styles.textContainer}>
          <div style={styles.textBox}>
            <h3 style={styles.title}>{slide.title}</h3>
            <p style={styles.content}>{slide.content}</p>

            {/* Action Button */}
            {slide.hasButton && (
                <motion.div
                    style={styles.actionSection}
                    whileHover={{ scale: 1.02 }}
                >
                  <div style={styles.actionBg}></div>
                  <h4 style={styles.actionTitle}>
                    🌟 {color.includes('green') ? 'آماده دانلود اپلیکیشن هلسا!' : 'ورود به وب اپلیکیشن هلسا'}
                  </h4>
                  <motion.a
                      href={slide.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.actionLink}
                      whileHover={{
                        y: -3,
                        background: '#f8f9fa',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                        color: theme.secondary
                      }}
                      whileTap={{ scale: 0.98 }}
                  >
                    <Download style={{width: '1.25rem', height: '1.25rem'}} />
                    {slide.buttonText}
                  </motion.a>
                </motion.div>
            )}
          </div>
        </div>
      </motion.div>
  );
};

export default SlideContent;