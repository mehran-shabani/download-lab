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

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <FloatingElements />

      <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
        <motion.div
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl border border-white/20"
          variants={itemVariants}
        >
          {/* Header gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 rounded-t-3xl" />

          {/* Logo */}
          <Logo />

          {/* Title */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            اپلیکیشن هلسا
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="text-gray-600 text-lg md:text-xl text-center mb-8 leading-relaxed relative"
            variants={itemVariants}
          >
            <p>راهنمای نصب و استفاده از اپلیکیشن هلسا</p>
            <p className="text-base md:text-lg">دکتر حسین شبانی - پزشک آنلاین</p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full" />
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={itemVariants}
          >
            <ActionButton
              onClick={() => handlePageChange('android')}
              icon={Smartphone}
              title="اپلیکیشن اندروید"
              description="راهنمای نصب روی Android"
              color="from-green-500 to-green-600"
              hoverColor="from-green-400 to-green-500"
            />

            <ActionButton
              onClick={() => handlePageChange('web')}
              icon={Globe}
              title="وب اپلیکیشن"
              description="راهنمای استفاده آنلاین"
              color="from-blue-500 to-blue-600"
              hoverColor="from-blue-400 to-blue-500"
            />
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-10 pt-8 border-t border-gray-200 text-center text-gray-600 relative"
            variants={itemVariants}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-4">
              <Heart className="w-6 h-6 text-red-500 animate-pulse" fill="currentColor" />
            </div>
            <p className="text-sm leading-relaxed">
              خدمات پزشکی آنلاین ۲۴ ساعته<br />
              آباده، اقلید، صغاد، بهمن
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;