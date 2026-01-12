import { useState } from "react";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CourseCard from "../../components/coursecard";
import CourseBanner from "../../components/coursebanner";
import { courses } from "../data/courses";
import Link from "next/link";


export default function Courses() {
  const [activeTab, setActiveTab] = useState("All Programs");
  const tabs = ["All Programs", "Online", "Offline", "Short", "Self Paced"];

  return (
    <>
      <Head>
        <title>Our Courses - Genez Learnings</title>
        <meta
          name="description"
          content="Explore Clinical Data Management, Clinical Research, and SAS Programming courses designed for your career growth."
        />
      </Head>

      <Header />

      <main className="min-h-screen">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-[#7b2979] to-[#9d3a9b] text-white text-center py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Courses</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Industry-focused programs to accelerate your Life Science career.
            </p>
          </div>
        </section>

        {/* Banner */}
        <div className="w-full -mt-4">
          <CourseBanner />
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab
                      ? "border-[#7b2979] text-[#7b2979]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Course List */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {activeTab === "All Programs"
                  ? "All Available Programs"
                  : `${activeTab} Courses`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeTab === "All Programs" || activeTab === "Online" ? (
                  courses.map((course, idx) => (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      description={course.description}
                      duration={course.duration}
                      slug={course.slug}
                      price={course.price}
                      idx={idx}
                    />
                  ))
                ) : (
                  <div className="col-span-2 text-center py-10">
                    <p className="text-gray-500">
                      {activeTab === "Offline" 
                        ? "Offline courses coming soon. Check back later!"
                        : activeTab === "Short"
                        ? "Short courses will be available soon."
                        : "Self-paced courses are under development."}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-800 mb-6">
                Ready to start your learning journey?
              </p>
              <Link href="/contact" className="bg-[#7b2979] hover:bg-[#9d3a9b] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
                  Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
