import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialCard({ name, role, company, feedback, gender, idx }) {
  const iconSrc = gender === "female" ? "/test-icon-f.png" : "/test-icon-m.png";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.6, type: "spring" }}
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: "0px 15px 35px rgba(123, 41, 121, 0.35)",
      }}
      className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 transition-all cursor-pointer flex items-center space-x-4"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex-shrink-0"
      >
        <Image
          src={iconSrc}
          alt={name}
          width={200}
          height={200}
          className="object-cover w-full h-full"
          quality={95}
          priority
        />
      </motion.div>

      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 text-lg tracking-wide">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-gray-500 mb-2">{company}</p>
        <p className="text-gray-700 text-sm leading-relaxed">{feedback}</p>
      </div>
    </motion.div>
  );
}
