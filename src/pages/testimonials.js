import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../../components/header";
import Footer from "../../components/footer";
import TestimonialCard from "../../components/TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nandhakumar R",
      role: "Biotechnology graduate",
      company: "KAHE",
      feedback:
        "I liked most about the internship was the opportunity to apply what I learned in a real-world setting. It helped me grow both professionally and personally.",
      gender: "male",
    },
    {
      name: "Prithvi R",
      role: "Junior CDM Analyst",
      company: "IQVIA",
      feedback:
        "Expert mentors and practical training made all the difference in my career transition from IT to Life Sciences. The hands-on experience with EDC systems was particularly helpful.",
      gender: "male",
    },
    {
      name: "Rubhasri P R",
      role: "Biotechnology graduate",
      company: "KAHE",
      feedback:
        "I learned about the clinical trial with depth and the branches involved and the persons involved in the trial.This internship is helped to gather more knowledge about the clinical trial.",
      gender: "female",
    },
    {
      name: "Vikram S",
      role: "Clinical Data Manager",
      company: "Syneos Health",
      feedback:
        "The certification from Genez Learnings gave me the confidence and credentials to apply for senior CDM roles. The industry-relevant curriculum and case studies were exceptional.",
      gender: "male",
    },
    {
      name: "Keerthana V",
      role: "Clinical Data Coordinator",
      company: "Clario",
      feedback:
        "As a fresh graduate, this internship gave me the practical skills that my degree couldn't. The mentorship and real-world projects were instrumental in securing my first job at a top CRO.",
      gender: "female",
    },
    {
      name: "Arjun M",
      role: "Medical Coder",
      company: "Access Healthcare",
      feedback:
        "The hands-on projects and real-world case studies prepared me perfectly for my current role. The instructors were industry experts who provided valuable insights and career guidance.",
      gender: "male",
    },
  ];

  return (
    <>
      <Head>
        <title>Testimonials - Genez Learnings LLP</title>
        <meta
          name="description"
          content="Read success stories from our students who transformed their careers with Genez Learnings."
        />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#7b2979] to-[#9d3a9b] text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hear From Our Students
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Don't just take our word for it. Here's what our students have said about their experience at Genez Learnings.
              </p>
              <div className="w-24 h-1.5 bg-white/30 rounded-full mx-auto"></div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                See how our students transformed their careers
              </p>
            </motion.div>

            {/* Cards with stagger effect */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
            >
              {testimonials.map((testimonial, idx) => (
                <TestimonialCard key={idx} {...testimonial} idx={idx} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-20 mb-16 text-center bg-gray-50 py-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Ready to start your journey?
          </h3>
          <a
            href="/courses"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#7b2979] to-[#9d3a9b] text-white font-medium rounded-lg hover:opacity-90 transition-all transform hover:-translate-y-0.5"
          >
            Explore Our Courses
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
