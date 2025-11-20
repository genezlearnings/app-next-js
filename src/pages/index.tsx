import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import Features from "../../components/Features";
import Accreditations from "../../components/Accreditations";
import CourseCard from "../../components/coursecard";
import TestimonialCard from "../../components/TestimonialCard";
import FAQ from "../../components/FAQ";
import CTA from "../../components/CTA";
import { motion } from "framer-motion";
import { getFeaturedCourses } from "../data/courses";
import Link from "next/link";

export default function Home() {
  const featuredCourses = getFeaturedCourses();

  const testimonials = [
    {
      name: "Priya S",
      role: "Clinical Data Associate",
      company: "Parexel",
      feedback:
        "The CDM internship helped me land my first job in the pharma industry. Highly recommended!",
      gender: "female",
    },
    {
      name: "Dharshan M",
      role: "Clinical Research Coordinator",
      company: "IQVIA",
      feedback:
        "Expert mentors and practical training made all the difference in my career transition.",
      gender: "male",
    },
    {
      name: "Anjali",
      role: "Medical Coder",
      company: "Access HealthCare",
      feedback:
        "Flexible learning schedule allowed me to upskill while working full-time.",
      gender: "female",
    },
  ];

  return (
    <>
      <Head>
        <title>Genez Learnings LLP - Clinical Data Management Training</title>
        <meta
          name="description"
          content="Boost your Life Science career with Clinical Data Management skills through Genez Learnings LLP online internships."
        />
      </Head>

      <Header />

      <main className="bg-gray-50">
        <Hero />
        {/* Courses Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[#7b2979] mb-4">
                Popular Courses with Live Classes + Placement Support
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base">
                Choose from our industry-focused programs designed to accelerate
                your career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {featuredCourses.map((course, idx) => course ? (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  duration={course.duration}
                  slug={course.slug}
                  price={course.price}
                  idx={idx}
                />
              ) : null)}
            </div>

            <div className="text-center mt-10">
              <Link href="/courses">
                <a className="inline-flex items-center text-[#7b2979] font-semibold hover:underline">
                  View All Courses
                  <svg
                    className="ml-2 w-5 h-5"
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
                </a>
              </Link>
            </div>
          </div>
        </section>
        <Features />
        <Stats />

        <Accreditations />

        {/* Breaking Language Barriers Section */}
        <section className="py-12 md:py-16 bg-white relative z-10 overflow-hidden">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image side with animation */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src="/language-gz.png"
                alt="Breaking language barriers at Genez Learnings"
                width={400}
                height={280}
                className="w-full max-w-xs md:max-w-sm object-contain"
                priority
              />
            </motion.div>

            {/* Text side with animation */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#7b2979]/10 text-[#7b2979] mb-2">
                🌍 Breaking Language Barriers
              </span>
              <h2 className="text-2xl font-bold text-[#7b2979] mb-3">
                Learning That Speaks Your Language
              </h2>

              <p className="text-base text-gray-700 leading-relaxed mb-3">
                At <strong>Genez Learnings LLP</strong>, we believe language
                should empower—not limit—your learning journey.
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-3">
                Our sessions are conducted in clear, easy-to-follow English to
                ensure every learner understands concepts effortlessly.
              </p>

              <p className="text-base text-gray-700 leading-relaxed mb-3">
                For better engagement, we also support discussions and doubt
                clarification in native languages like{" "}
                <strong>Tamil</strong>, <strong>Hindi</strong>, and others.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                We create an inclusive environment where every learner feels
                confident, comfortable, and truly connected throughout their
                learning experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[#7b2979] mb-4">
                Success Stories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Hear from professionals who transformed their careers with Genez
                Learnings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <TestimonialCard key={idx} {...testimonial} idx={idx} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/testimonials">
                <a className="inline-flex items-center text-[#7b2979] font-semibold hover:underline">
                  Read More Stories
                  <svg
                    className="ml-2 w-5 h-5"
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
                </a>
              </Link>
            </div>
          </div>
        </section>

        <FAQ />


        {/* Telegram Banner Section */}
        <section className="py-14 bg-white"> {/* Increased outer padding */}
          <div className="container mx-auto px-6"> {/* Slightly wider padding */}
            <a
              href="https://t.me/+MgRS0Bg9z7BkYjQ9"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Image
                src="/tele-banner.svg"
                alt="Join Genez Careers on Telegram"
                width={1000}
                height={220}
                className="w-full max-w-4xl mx-auto rounded-xl shadow-lg cursor-pointer hover:opacity-90 transition"
                priority
                quality={100}
                unoptimized
                style={{ imageRendering: 'crisp-edges' }}
              />
            </a>
          </div>
        </section>

        <CTA />

      </main>

      <Footer />
    </>
  );
}
