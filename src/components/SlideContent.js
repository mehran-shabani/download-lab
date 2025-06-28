import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const SlideContent = ({ slide, color }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="w-full max-w-md mx-auto mb-8 relative group">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
          <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden border-2 border-gray-200 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f3f4f6"/><text x="200" y="150" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" fill="%236b7280">${slide.title}</text></svg>`;
              }}
            />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {slide.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
            {slide.content}
          </p>

          {/* Action Button */}
          {slide.hasButton && (
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h4 className="text-white font-bold text-lg md:text-xl mb-4">
                  🌟 {color.includes('green') ? 'آماده دانلود اپلیکیشن هلسا!' : 'ورود به وب اپلیکیشن هلسا'}
                </h4>
                <motion.a
                  href={slide.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {slide.buttonText}
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SlideContent;