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

  return (
    <motion.div
      className={`min-h-screen bg-gradient-to-br ${color} relative overflow-hidden`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto p-4 relative z-10">
        {/* Header */}
        <motion.div
          className="bg-white/95 backdrop-blur-xl rounded-t-3xl p-6 relative overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-pulse" />
          
          <button
            onClick={() => setCurrentPage('home')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">بازگشت</span>
          </button>

          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Icon className="w-8 h-8 text-white" />
              <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                {title}
              </h1>
            </div>
            <p className="text-white/90 text-lg">{subtitle}</p>
          </div>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          className="bg-white/95 backdrop-blur-xl rounded-b-3xl p-6 md:p-8 shadow-2xl relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Slide Counter */}
          <div className="absolute top-6 left-6 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold border border-blue-200">
            {slideIndex + 1} از {slides.length}
          </div>

          {/* Slides */}
          <AnimatePresence mode="wait">
            <SlideContent 
              key={slideIndex} 
              slide={slides[slideIndex]} 
              color={color}
            />
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 px-4">
            <motion.button
              onClick={prevSlide}
              disabled={slideIndex === 0}
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: slideIndex === 0 ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
              قبلی
            </motion.button>

            <NavigationDots 
              slides={slides}
              slideIndex={slideIndex}
              goToSlide={goToSlide}
            />

            <motion.button
              onClick={nextSlide}
              disabled={slideIndex === slides.length - 1}
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: slideIndex === slides.length - 1 ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              بعدی
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SliderPage;