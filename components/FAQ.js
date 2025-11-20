import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Genez Learnings LLP?",
      answer:
        "Genez Learnings LLP is an edtech learning platform dedicated to training life science students and professionals in Clinical Research, Clinical Data Management (CDM), SAS Programming, and Medical Coding with an industry-oriented approach.",
    },
    {
      question: "Who can enroll in these courses?",
      answer:
        "Students and graduates from Life Sciences, Pharmacy, Biotechnology, Microbiology, Biochemistry, Nursing, Allied Health Sciences, and working professionals interested in healthcare & pharma careers can enroll.",
    },
    {
      question: "Are the courses online or offline?",
      answer:
        "All training programs are currently conducted online with live interactive classes and support materials.",
    },
    {
      question: "What courses do you offer?",
      answer:
        "We offer: Clinical Research, Clinical Data Management (CDM), SAS Programming, and Medical Coding.",
    },
    {
      question: "Will I receive a certificate after completing the course?",
      answer:
        "Yes, upon successful completion, students receive a Course Completion Certificate from Genez Learnings LLP.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "No prior experience is required. Our courses start from basic level and progress to advanced concepts.",
    },
    {
      question: "Will I get placement support?",
      answer:
        "Yes. We provide resume building, interview preparation, LinkedIn profile optimization, job guidance, and industry references where applicable.",
    },
    {
      question: "What tools and skills will I learn?",
      answer:
        "CR/CDM: EDC systems, CRF design, query management, clinical research process, regulatory guidelines. SAS: Base SAS programming, data handling, analytics, reporting. Medical Coding: ICD-10-CM, CPT, HCPCS coding standards.",
    },
    {
      question: "In which language are the classes taught?",
      answer:
        "Classes are conducted in English, with support in Tamil for better understanding if needed.",
    },
    {
      question: "What is the course duration?",
      answer:
        "Each course has different duration options. Please check the Courses section for the latest schedule and structure.",
    },
    {
      question: "Do you offer flexible class timings?",
      answer:
        "Yes, evening and weekend batches are available for students and working professionals.",
    },
    {
      question: "How do I enroll?",
      answer:
        "Click Enroll Now on the website or reach us via WhatsApp, Instagram, or Email.",
    },
    {
      question: "Do you offer hands-on learning?",
      answer:
        "Yes, we include real-time examples, assignments, case studies, and project-based learning to ensure practical understanding.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#7b2979] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. Find everything you need to know about our programs.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-lg font-semibold pr-8 ${openIndex === idx ? "text-[#7b2979]" : "text-gray-900"
                      }`}
                  >
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-[#7b2979]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link href="/contact">
          <a
            className="inline-flex items-center justify-center rounded-lg bg-[#7b2979] text-white px-8 py-3 font-semibold hover:bg-[#6a2268] transition-colors"
          >
            Contact Us
          </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
