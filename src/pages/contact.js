// 🔒 Disable caching ONLY for this page
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

// ✅ App Router metadata (replaces next/head)
export const metadata = {
  title: "Contact Us - Genez Learnings LLP",
  description:
    "Get in touch with Genez Learnings LLP for course inquiries and career guidance.",
};

import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Contact() {
  return (
    <>
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
                        href="https://www.instagram.com/genez_learnings"
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

              {/* Right Column (Google Form) */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Build skills. Build confidence.
                </h2>

                <p className="text-gray-600 mb-6">
                  Fill out our contact form to register for a course. We'll get
                  back to you as soon as possible.
                </p>

                <a
                  href="https://forms.gle/BCmGqSvCuFh1N7TP7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-[#7b2979] hover:bg-[#641f62] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Start Your Learning Journey!
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* Telegram Banner */}
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
