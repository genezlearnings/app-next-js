import React from 'react';
import { motion } from 'framer-motion';

const CourseHero = ({ title, description, duration, price, image }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#7b2979] to-[#9d3a9b] text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-6 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {description}
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <motion.div 
                className="bg-white rounded-lg p-4 text-center flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold text-gray-800">{duration}</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-lg p-4 text-center flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-sm text-gray-600">Course Fee</p>
                <p className="font-semibold text-gray-800">{price}</p>
              </motion.div>
            </div>
            <motion.button
              className="bg-white text-[#7b2979] hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Enroll Now
            </motion.button>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={image || "/course-placeholder.jpg"}
                alt={title}
                className="w-full h-auto rounded-xl shadow-2xl border-4 border-white/20"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default CourseHero;
