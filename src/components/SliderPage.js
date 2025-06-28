// SliderPage.js
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import SlideContent from './SlideContent';
import NavigationDots from './NavigationDots';
import { pageVariants, pageTransition } from '../utils/animations';

const SliderPage = ({
                      slides,
                      color,
                      icon: Icon,
                      title,
                      subtitle,
                      slideIndex,
                      setSlideIndex,
                      setCurrentPage
                    }) => {
  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setSlideIndex(index);

  useEffect(() => {
    setSlideIndex(0);
  }, [setSlideIndex]);

  const getBackgroundColor = () => {
    if (color.includes('blue')) return 'linear-gradient(135deg, #1976D2, #0D47A1)';
    if (color.includes('green')) return 'linear-gradient(135deg, #388E3C, #1B5E20)';
    return 'linear-gradient(135deg, #667eea, #764ba2)';
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: getBackgroundColor(),
      position: 'relative',
      overflow: 'hidden'
    },
    pattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.08,
      backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
      backgroundSize: '20px 20px',
      zIndex: 1
    },
    content: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '1rem',
      position: 'relative',
      zIndex: 10
    },
    header: {
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(25px)',
      borderRadius: '1.5rem 1.5rem 0 0',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
    },
    shimmer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
      transform: 'translateX(-100%)',
      animation: 'shimmer 3s infinite'
    },
    backButton: {
      position: 'absolute',
      right: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'linear-gradient(135deg, #f44336, #d32f2f)',
      border: 'none',
      color: 'white',
      padding: '0.75rem 1rem',
      borderRadius: '0.75rem',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      zIndex: 10,
      boxShadow: '0 4px 15px rgba(244, 67, 54, 0.4)'
    },
    headerContent: {
      textAlign: 'center',
      position: 'relative',
      zIndex: 5
    },
    headerTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      marginBottom: '0.5rem'
    },
    headerTitleText: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      fontWeight: 'bold',
      color: color.includes('blue') ? '#1976D2' : '#388E3C',
      margin: 0,
      textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    },
    headerSubtitle: {
      color: '#666',
      fontSize: 'clamp(1rem, 3vw, 1.125rem)',
      margin: 0,
      fontWeight: '500'
    },
    sliderContent: {
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(25px)',
      borderRadius: '0 0 1.5rem 1.5rem',
      padding: 'clamp(1.5rem, 4vw, 2rem)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
      position: 'relative'
    },
    navigation: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '2rem',
      padding: '0 1rem',
      gap: '1rem'
    },
    navButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: color.includes('blue') ? 'linear-gradient(135deg, #2196F3, #1976D2)' : 'linear-gradient(135deg, #4CAF50, #388E3C)',
      color: 'white',
      border: 'none',
      padding: '0.875rem 1.5rem',
      borderRadius: '1rem',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 600,
      minWidth: '100px',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
    },
    navButtonDisabled: {
      background: 'linear-gradient(135deg, #e0e0e0, #bdbdbd)',
      cursor: 'not-allowed',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      color: '#9e9e9e'
    }
  };

  return (
      <motion.div
          style={styles.container}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
      >
        <div style={styles.pattern}></div>

        <div style={styles.content}>
          <motion.div
              style={styles.header}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
          >
            <div style={styles.shimmer}></div>

            <motion.button
                onClick={() => setCurrentPage('home')}
                style={styles.backButton}
                whileHover={{
                  background: 'linear-gradient(135deg, #d32f2f, #b71c1c)',
                  transform: 'translateY(-50%) scale(1.05)',
                  boxShadow: '0 6px 20px rgba(244, 67, 54, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft style={{width: '1rem', height: '1rem'}} />
              <span>بازگشت</span>
            </motion.button>

            <div style={styles.headerContent}>
              <div style={styles.headerTitle}>
                <Icon style={{
                  width: '2rem',
                  height: '2rem',
                  color: color.includes('blue') ? '#1976D2' : '#388E3C'
                }} />
                <h1 style={styles.headerTitleText}>{title}</h1>
              </div>
              <p style={styles.headerSubtitle}>{subtitle}</p>
            </div>
          </motion.div>

          <motion.div
              style={styles.sliderContent}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <SlideContent
                  key={slideIndex}
                  slide={slides[slideIndex]}
                  color={color}
              />
            </AnimatePresence>

            <div style={styles.navigation}>
              {/* دکمه بعدی (سمت راست در RTL) - فلش به سمت چپ */}
              <motion.button
                  onClick={nextSlide}
                  disabled={slideIndex === slides.length - 1}
                  style={slideIndex === slides.length - 1 ? {...styles.navButton, ...styles.navButtonDisabled} : styles.navButton}
                  whileHover={{
                    scale: slideIndex === slides.length - 1 ? 1 : 1.05,
                    boxShadow: slideIndex === slides.length - 1 ? '0 2px 8px rgba(0, 0, 0, 0.1)' : '0 8px 25px rgba(0, 0, 0, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft style={{width: '1.25rem', height: '1.25rem'}} />
                بعدی
              </motion.button>

              <NavigationDots
                  slides={slides}
                  slideIndex={slideIndex}
                  goToSlide={goToSlide}
                  color={color}
              />

              {/* دکمه قبلی (سمت چپ در RTL) - فلش به سمت راست */}
              <motion.button
                  onClick={prevSlide}
                  disabled={slideIndex === 0}
                  style={slideIndex === 0 ? {...styles.navButton, ...styles.navButtonDisabled} : styles.navButton}
                  whileHover={{
                    scale: slideIndex === 0 ? 1 : 1.05,
                    boxShadow: slideIndex === 0 ? '0 2px 8px rgba(0, 0, 0, 0.1)' : '0 8px 25px rgba(0, 0, 0, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
              >
                قبلی
                <ChevronRight style={{width: '1.25rem', height: '1.25rem'}} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
  );
};

export default SliderPage;