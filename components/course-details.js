import { motion } from 'framer-motion';

const CourseDetails = ({ overview, highlights, syllabus }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Overview Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#7b2979] mb-4">Course Overview</h2>
          <p className="text-gray-700 leading-relaxed">{overview}</p>
        </motion.div>

        {/* Highlights Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#7b2979] mb-4">Key Highlights</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-[#7b2979] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Syllabus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#7b2979] mb-6">Course Syllabus</h2>
          <div className="space-y-6">
            {syllabus.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="text-[#7b2979] mr-2">{index + 1}.</span>
                  {item.title}
                </h3>
                <p className="text-gray-600 pl-6">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseDetails;
