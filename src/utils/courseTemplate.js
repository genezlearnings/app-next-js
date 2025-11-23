import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "../../components/footer";
import CourseHero from "../../components/course-hero";
import CTA from "../../components/CTA";
import TestimonialCard from "../../components/TestimonialCard";

const CourseTemplate = ({ courseData }) => {
  const {
    title,
    description,
    overview,
    duration,
    price,
    image,
    highlights,
    syllabus,
    careerOpportunities,
    eligibility,
    certification,
    testimonials = [],
    ctaDescription,
  } = courseData;

  return (
    <div className="bg-white text-gray-800">
      {/* SEO Setup */}
      <Head>
        <title>{title} Course - Genez Learnings LLP</title>
        <meta
          name="description"
          content={overview ? overview.substring(0, 160) : description}
        />
      </Head>

      {/* Hero Section */}
      <CourseHero
        title={title}
        description={description}
        duration={duration}
        price={price}
        image={image}
      />

   {/* Overview & Highlights */}
<section className="py-20 px-6 md:px-16 bg-gray-50">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-5xl mx-auto text-center"
  >
    <h2 className="text-3xl font-bold mb-6 text-[#7b2979]">
      Course Overview
    </h2>

    <p className="text-lg leading-relaxed text-gray-700 mb-12 max-w-3xl mx-auto">
      {overview}
    </p>

    {highlights?.length > 0 && (
      <>
        <h3 className="text-2xl font-semibold mb-6 text-[#7b2979]">
          Key Highlights
        </h3>

        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside max-w-3xl mx-auto text-left pl-4">
          {highlights.map((item, i) => (
            <li key={i} className="text-gray-700 text-lg leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </>
    )}
  </motion.div>
</section>


      {/* Syllabus Section */}
      {syllabus?.length > 0 && (
        <section className="py-16 px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-[#7b2979]">
              Course Syllabus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {syllabus.map((topic, i) => (
                <div
                  key={i}
                  className="p-5 border rounded-xl shadow-sm bg-white hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-300 hover:scale-105 cursor-pointer"
                >
                  <h4 className="font-semibold text-lg mb-1 text-[#7b2979] hover:text-purple-600 transition-colors duration-300">
                    {topic.title}
                  </h4>
                  <p className="text-gray-600 hover:text-gray-700 transition-colors duration-300">{topic.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Career Opportunities */}
      {careerOpportunities?.length > 0 && (
        <section className="py-16 px-6 md:px-16 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-[#7b2979]">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {careerOpportunities.map((job, i) => (
                <div
                  key={i}
                  className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-lg text-[#7b2979]">
                    {job.role}
                  </h4>
                  <p className="text-gray-600 mt-2">{job.description}</p>
                  <p className="text-green-600 mt-2 font-medium">
                    Average Salary: {job.salary}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Eligibility & Certification */}
      <section className="py-16 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
        >
          {eligibility?.length > 0 && (
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#7b2979]">
                  Eligibility
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {eligibility.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Success GIF */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/success.gif"
                alt="Success"
                className="w-40 h-40 object-contain"
              />
            </div>
          )}

          {certification && (
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#7b2979]">
                  Certification
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {certification}
                </p>
              </div>

              {/* Certificate GIF */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/certificate.gif"
                alt="Certification"
                className="w-40 h-40 object-contain"
              />
            </div>
          )}
        </motion.div>
      </section>

      {/* Testimonials */}
      {testimonials?.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#7b2979]">
              What Our Students Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <TestimonialCard
                  key={i}
                  name={t.name}
                  feedback={t.feedback}
                  gender={t.gender}
                  idx={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call To Action */}
      <CTA
        title={`Start Your ${title} Journey Today`}
        description={
          ctaDescription ||
          `Join our ${title} program and take the first step toward a successful career in life sciences and clinical research.`
        }
        buttonText="Enroll Now"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default CourseTemplate;
