import Head from "next/head";
import Header from "../../../components/header";
import CourseTemplate from "../../utils/courseTemplate";

const ClinicalResearchInternship = () => {
  const courseData = {
    title: "CDM Internship & Hands-On EDC Training",
    description:
      "Gain real-world exposure to clinical research operations, data management, and regulatory documentation through this hands-on internship program.",
    duration: "30 Days / 45 Days",
    price: "₹3,499",
    image: "/intern-title.png",
    overview:
      "This internship offers a practical understanding of how clinical research is conducted in the industry. Students will experience various aspects of trial management, documentation, data handling, and regulatory compliance under expert mentorship. It bridges the gap between academic learning and industry expectations.",
    highlights: [
      "Industry-based practical assignments",
      "Exposure to Clinical Data Management tools",
      "Hands-on learning with trial documentation and CRFs",
      "Guided mentorship from experienced professionals",
      "Certificate and optional Letter of Recommendation (LOR)"
    ],
    syllabus: [
      {
        title: "Introduction to Clinical Research and GCP",
        description:
          "Understanding the fundamentals of clinical research, clinical trial structure, and ICH-GCP guidelines."
      },
      {
        title: "Clinical Trial Operations",
        description:
          "Learn about trial setup, site management, protocol adherence, and roles of CRA/CRC."
      },
      {
        title: "Ethics and Regulatory Framework",
        description:
          "Overview of ethical committees, informed consent process, and regulatory submissions."
      },
      {
        title: "Clinical Trial Documentation",
        description:
          "Detailed training on TMF, eTMF, Case Report Forms (CRFs), and essential documents."
      },
      {
        title: "Clinical Data Management",
        description:
          "Basics of data collection, data validation, query management, and database locking."
      },
      {
        title: "Safety Reporting and Pharmacovigilance",
        description:
          "Introduction to adverse event reporting and drug safety monitoring systems."
      },
      {
        title: "Industry Tools Overview",
        description:
          "Hands-on exposure to EDC tools and trial management systems used in the industry."
      },
      {
        title: "Mini Project / Case Study",
        description:
          "Work on a real-world project simulating clinical data management and trial workflows."
      },
      {
        title: "Assessment and Feedback",
        description:
          "Evaluate understanding through tasks, case reports, and mentor feedback."
      },
      {
        title: "Career Preparation & Resume Guidance",
        description:
          "Learn how to prepare for interviews, write strong resumes, and explore industry roles."
      }
    ],
    careerOpportunities: [
      {
        role: "Clinical Research Intern",
        description:
          "Assist research teams with documentation, data entry, and trial coordination tasks.",
        salary: "₹2–3 LPA (as entry-level)"
      },
      {
        role: "Clinical Data Management Intern",
        description:
          "Support data management activities including CRF tracking, validation, and quality checks.",
        salary: "₹2–4 LPA (as entry-level)"
      },
      {
        role: "Clinical Trial Assistant",
        description:
          "Work with project teams to support trial setup, monitoring, and administrative work.",
        salary: "₹2.5–5 LPA"
      },
      {
        role: "Regulatory Affairs Trainee",
        description:
          "Assist in preparing and submitting documents for regulatory review and approval.",
        salary: "₹3–6 LPA"
      }
    ],
    eligibility: [
      "Final-year or recent graduates in Life Sciences, Pharmacy, Nursing, or Biotechnology",
      "Basic knowledge of clinical research or biology preferred",
      "Good analytical and communication skills",
      "No prior work experience required"
    ],
    certification:
      "Participants will receive a recognized Internship Certificate from Genez Learnings LLP along with an optional Letter of Recommendation (LOR) based on performance.",
    ctaDescription:
      "Kickstart your clinical research career with hands-on exposure to real-world processes. Enroll today and gain the experience that employers value.",
    testimonials: [
      {
        name: "Sathya P.",
        feedback:
          "The internship gave me real exposure to how clinical trials operate. The mentors explained every concept clearly and practically."
      },
      {
        name: "Vignesh R.",
        feedback:
          "I learned more in 30 days here than in a full semester at college. The case study and documentation part were very helpful."
      },
      {
        name: "Lakshmi S.",
        feedback:
          "This internship helped me understand CDM and GCP deeply. I even got placed in a CRO soon after completing it!"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Clinical Research Internship - Genez Learnings</title>
        <meta
          name="description"
          content="Gain real-world exposure to clinical research operations, documentation, and data management through this hands-on internship program."
        />
      </Head>
      <Header />
      <main className="min-h-screen">
        <CourseTemplate courseData={courseData} />
      </main>
    </>
  );
};

export default ClinicalResearchInternship;
