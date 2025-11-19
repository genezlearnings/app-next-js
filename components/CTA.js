import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-14 bg-gradient-to-br from-[#7b2979] via-[#9d3a9b] to-[#7b2979] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>

          <p className="text-sm md:text-base text-white/90 mb-6 max-w-2xl mx-auto">
            Join hundreds of professionals who have successfully transitioned into clinical data management roles with our expert-led training programs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-lg bg-white text-[#7b2979] px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                View All Courses
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Schedule Free Consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
