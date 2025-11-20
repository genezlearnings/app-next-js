import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ title, description, duration, price, idx, slug }) {
  const getImagePath = (title) => {
    const t = title.toLowerCase();
    if (t.includes("clinical data") || t.includes("cdm")) return "/cdm-coursecard.png";
    if (t.includes("medical coding")) return "/mc-coursecard.png";
    if (t.includes("clinical research")) return "/cr-coursecard.png";
    if (t.includes("clinical data") && t.includes("internship")) return "/intern-coursecard.png";
    if (t.includes("sas")) return "/sas-coursecard.png";
    return "/default-coursecard.png";
  };

  const imagePath = getImagePath(title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{ duration: 0.3, delay: idx * 0.05 }}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#7b2979]/20 transition-all duration-300 flex flex-col h-full"
    >
      
      {/* Full Cover Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#7b2979] transition">
            {title}
          </h3>
          <p className="text-gray-700 text-sm mb-2 font-medium">
            Duration: {duration}
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>

        <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-100">
          {price && <div className="text-lg font-bold text-[#7b2979]">{price}</div>}
          <Link
            href={slug}
            className="text-[#7b2979] font-medium hover:underline inline-flex items-center"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
