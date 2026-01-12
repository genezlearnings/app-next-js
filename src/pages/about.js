import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Head>
        <title>About Us - Genez Learnings LLP</title>
        <meta
          name="description"
          content="Genez Learnings LLP empowers Life Science students and professionals with practical, career-focused training in Clinical Research, Clinical Data Management, and more."
        />
        <meta
          name="keywords"
          content="Genez Learnings, Clinical Data Management, Clinical Research, Life Science Internship, Medical Coding, SAS, EdTech, Online Training"
        />
        <meta property="og:title" content="About Genez Learnings LLP" />
        <meta
          property="og:description"
          content="Empowering Life Science professionals through practical, career-oriented training and internships."
        />
        <meta property="og:image" content="/genez-thumbnail.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[#7b2979] to-[#9d3a9b] text-white text-center overflow-hidden">
          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              About Genez Learnings LLP
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Bridging the gap between academia and industry through practical,
              career-ready training in Life Sciences.
            </p>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="py-14 bg-white">
          <div className="container mx-auto max-w-4xl px-4 space-y-16">
            {/* Who We Are */}
            <motion.div
              className="rounded-xl p-6"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-semibold mb-3 text-[#7b2979]">
                Who We Are
              </h2>
              <p className="text-gray-700 text-base mb-4 leading-relaxed">
                <strong>Genez Learnings LLP</strong> is a modern EdTech
                initiative focused on bridging the gap between academia and the
                life science industry. We empower students with{" "}
                <strong>industry-ready skills</strong> in{" "}
                <strong>
                  Clinical Research, Clinical Data Management (CDM), SAS, and
                  Medical Coding
                </strong>
                .
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Founded with a mission to empower young professionals, Genez
                Learnings LLP has trained hundreds of students across Tamil Nadu
                through interactive <strong>online internship programs</strong>,
                helping them gain real-world exposure and build career
                confidence in the pharmaceutical and healthcare sectors.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="rounded-xl p-6 flex flex-col md:flex-row items-center gap-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vision.gif"
                alt="Illustration representing our vision"
                loading="lazy"
                className="w-20 flex-shrink-0"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-[#7b2979]">
                  Our Vision
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  To become India’s leading{" "}
                  <strong>life science upskilling and internship platform</strong>,
                  empowering graduates with hands-on knowledge and transforming
                  them into future-ready professionals.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="rounded-xl p-6 flex flex-col md:flex-row items-center gap-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mission.gif"
                alt="Illustration representing our mission"
                loading="lazy"
                className="w-20 flex-shrink-0"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-[#7b2979]">
                  Our Mission
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-base space-y-3 leading-relaxed">
                  <li>
                    Make <strong>clinical research education accessible and
                      affordable</strong> for students from all backgrounds.
                  </li>
                  <li>
                    Provide <strong>internship-based learning experiences</strong>{" "}
                    that simulate real industry workflows.
                  </li>
                  <li>
                    Equip learners with{" "}
                    <strong>skills, certifications, and confidence</strong> to
                    launch successful global careers.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              className="w-full py-12 lg:py-16 relative flex flex-col lg:flex-row items-center gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2 z-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#7b2979] mb-6">
                  Why Choose Genez Learnings?
                </h2>
                <ul className="text-gray-700 text-base space-y-3">
                  <li>• Live interactive sessions with industry experts</li>
                  <li>• Internship-based training with real-world case studies</li>
                  <li>• Flexible online learning designed for all learners</li>
                  <li>
                    • Recognized certificates with optional{" "}
                    <strong className="text-[#7b2979]">
                      Letter of Recommendation (LOR)
                    </strong>
                  </li>
                  <li>• Career guidance & mentorship from professionals</li>
                </ul>
              </div>

              <div className="lg:w-1/2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/why-choose.png"
                  alt="Students learning with Genez Learnings"
                  loading="lazy"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                />
              </div>
            </motion.div>

            {/* Our Impact */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-3 text-[#7b2979]">
                Our Impact
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Since our inception, Genez Learnings LLP has trained and
                mentored <strong>200+ students</strong> through structured
                internship programs in Clinical Data Management. Our goal is to
                scale this impact to <strong>thousands of learners across India</strong>,
                creating a strong talent pipeline for the life sciences industry.
              </p>
            </motion.div>

            {/* The Future Ahead */}
            <motion.div
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-3 text-[#7b2979]">
                The Future Ahead
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                We are continuously expanding our offerings to include advanced
                certifications, AI-driven learning tools, and a dedicated{" "}
                <strong>e-learning platform</strong> for life science and
                entrepreneurship education. Our dream is to make{" "}
                <strong>Genez Learnings LLP</strong> a{" "}
                <strong>unicorn edtech brand</strong> that transforms how life
                science education is delivered and experienced.
              </p>
            </motion.div>

            {/* Join Banner */}
            <div className="w-full py-10">
              <div className="relative max-w-4xl mx-auto">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/join-banner.svg"
                  alt="Join our community"
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 sm:pb-6">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#7b2979] text-white font-semibold py-1.5 px-3 sm:py-2 sm:px-4 md:py-2 md:px-6 text-xs sm:text-sm md:text-base shadow-md hover:bg-[#9d3a9b] hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Enroll Now
                  </Link>
                </div>
              </div>
            </div>


            {/* Join Us */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-3 text-[#7b2979]">
                Join Us
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Be part of a community that believes in{" "}
                <strong>growth, learning, and innovation</strong>. Whether you
                are a student, working professional, or life science enthusiast —{" "}
                <strong>your success story begins here.</strong>
              </p>
              <div className="mt-6">
                <Link href="/courses" className="inline-flex items-center justify-center rounded-full bg-[#7b2979] text-white font-semibold py-2 px-6 transition-all duration-300 hover:bg-[#9d3a9b]">
                  Explore Courses
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
