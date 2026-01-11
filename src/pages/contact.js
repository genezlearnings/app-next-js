import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState } from "react";

export default function Contact() {
  const courses = [
    "Clinical Data Management – Beginner to Advanced Mastery Program",
    "Complete Clinical Research Professional Program",
    "Medical Coding Professional Certification Course",
    "SAS Programming for Clinical Trials",
    "CDM Internship & Hands-On EDC Training",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState(null); // ✅ For showing success or error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectCourse = (course) => {
    setFormData({ ...formData, course });
    setDropdownOpen(false);
  };

  // ✅ Send data to backend email API
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.course || !formData.phone) {
      setStatus("error");
      return;
    }
    
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
      } else {
        console.error("Error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Genez Learnings LLP</title>
        <meta
          name="description"
          content="Get in touch with Genez Learnings LLP for course inquiries and career guidance."
        />
      </Head>

      <Header />
      <main className="min-h-screen relative">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-br from-[#7b2979] to-[#9d3a9b] text-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container max-w-5xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:genezlearnings@gmail.com"
                      className="text-[#7b2979] hover:underline"
                    >
                      genezlearnings@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+919994481981"
                      className="text-[#7b2979] hover:underline"
                    >
                      +91 99944 81981
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Follow Us
                    </h3>
                    <div className="flex gap-4 mt-2">
                      <a
                        href="https://www.instagram.com/genez_learnings?igsh=NncxaTk4c2tiZjNo"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#7b2979] hover:underline"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.linkedin.com/company/gene-z-learnings/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#7b2979] hover:underline"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* GIF */}
                <div className="mt-8 md:mt-12 -ml-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/contact-gif.gif"
                    alt="Contact Animation"
                    className="w-40 md:w-48 lg:w-56 h-auto opacity-95 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Right Column (Form) */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4 relative">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7b2979]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7b2979]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7b2979]"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Interested Course *
                    </label>
                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full cursor-pointer px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 flex justify-between items-center"
                    >
                      <span className={!formData.course ? "text-gray-400" : ""}>
                        {formData.course || "Select a course"}
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#7b2979] transform transition-transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {dropdownOpen && (
                      <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-auto">
                        {courses.map((course, index) => (
                          <li
                            key={index}
                            onClick={() => selectCourse(course)}
                            className={`px-4 py-2 cursor-pointer ${
                              formData.course === course
                                ? "bg-[#7b2979] text-white"
                                : "hover:bg-[#7b2979] hover:text-white text-gray-800"
                            }`}
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7b2979]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-[#7b2979] hover:bg-[#641f62] text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Begin Your Journey"}
                  </button>
                  

                  {/* ✅ Success or Error Message */}
                  {status === "success" && (
                    <p className="text-green-600 mt-2 text-center">
                      ✅ Your submission is received. Expect a response from us shortly.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 mt-2 text-center">
                      ❌ Failed to send message. Please try again later.
                    </p>
                  )}

                  
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Telegram Banner Section */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-6">
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
              />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
