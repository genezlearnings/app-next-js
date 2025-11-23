import Head from "next/head";
import Header from "../../../components/header";
import CourseTemplate from "../../utils/courseTemplate";

const ClinicalResearchBasics = () => {
  const courseData = {
    title: "Complete Clinical Research Professional Program",
    description: "Learn the fundamentals of clinical research, including GCP guidelines, protocol understanding, ICH-GCP, and regulatory requirements.",
    duration: " 1 Month",
    price: "₹3,999",
    image: "/cr-title.png",
    overview: "This course provides a comprehensive introduction to clinical research, covering essential concepts, guidelines, and regulations. Students will gain foundational knowledge of clinical trial processes, ethical considerations, and the roles and responsibilities of clinical research professionals.",
    highlights: [
      "Comprehensive coverage of ICH-GCP guidelines",
      "Understanding of clinical trial phases and designs",
      "Hands-on experience with case report forms (CRFs)",
      "Industry-relevant curriculum developed by experts"
    ],
    syllabus: [
      {
        title: "Introduction to Clinical Trials (Phases I–IV)",
        description:
          "Overview of the drug development process, including safety and efficacy evaluations in progressive trial phases.",
      },
      {
        title: "Study Designs: Randomized, Double-Blind, Multi-center, etc.",
        description:
          "Key methodologies used to minimize bias and enhance reliability in clinical research.",
      },
      {
        title: "Protocol Development and Documentation",
        description:
          "Creating detailed plans governing trial execution, ensuring consistency and compliance.",
      },
      {
        title: "Regulatory Affairs: ICH-GCP, FDA, EMA Guidelines",
        description:
          "Rules and standards that safeguard trial quality and participant safety worldwide.",
      },
      {
        title: "Informed Consent and Ethical Conduct",
        description:
          "Obtaining voluntary agreement from participants based on comprehensive study understanding.",
      },
      {
        title: "Subject Recruitment and Retention",
        description:
          "Strategies to enroll and maintain participant involvement throughout the study.",
      },
      {
        title: "Trial Site Management and Coordination",
        description:
          "Operational oversight ensuring trials follow protocol and regulatory requirements.",
      },
      {
        title: "Adverse Event Reporting and Pharmacovigilance",
        description:
          "Monitoring and communicating side effects or risks during and after clinical trials.",
      },
      {
        title: "Clinical Study Monitoring and Auditing",
        description:
          "Systematic reviews to verify data integrity and adherence to protocols.",
      },
      {
        title: "Clinical Data Management Integration",
        description:
          "Coordinating research data collection, storage, and analysis for accuracy and compliance.",
      },
      {
        title: "Project Management in Clinical Research",
        description:
          "Planning and directing resources to ensure successful trial completion.",
      },
      {
        title: "Biostatistics and Data Interpretation",
        description:
          "Applying statistical methods to analyze trial results and draw valid conclusions.",
      },
      {
        title: "Medical and Scientific Writing",
        description:
          "Producing documentation such as study reports, journal articles, and regulatory submissions.",
      },
      {
        title: "Communication and Team Collaboration",
        description:
          "Facilitating effective interaction among stakeholders for project success.",
      },
      {
        title: "Case Studies and Research Projects",
        description:
          "Hands-on experience analyzing real or simulated clinical trial scenarios.",
      },
    ],
    careerOpportunities: [
      {
        role: "Clinical Research Coordinator",
        description: "Coordinate and manage the daily operations of clinical trials.",
        salary: "₹3–6 LPA"
      },
      {
        role: "Clinical Research Associate",
        description: "Monitor clinical trials and ensure compliance with protocols and regulations.",
        salary: "₹4–9 LPA"
      },
      {
        role: "Clinical Trial Assistant",
        description: "Support clinical trial operations and administrative tasks.",
        salary: "₹2.5–5 LPA"
      },
      {
        role: "Regulatory Affairs Associate",
        description: "Prepare and submit regulatory documents and ensure compliance.",
        salary: "₹3.5–7 LPA"
      }
    ],
    eligibility: [
      "Bachelor's degree in Life Sciences, Pharmacy, Nursing, or related fields",
      "Basic understanding of biology and medical terminology",
      "Good communication and organizational skills",
      "No prior experience in clinical research required"
    ],
    certification: "Upon successful completion, students will receive a certificate in Clinical Research Basics and be prepared for entry-level positions in the clinical research industry.",
    ctaDescription: "Start your journey in the growing field of clinical research. Enroll now to gain the foundational knowledge and skills needed for a successful career.",
    testimonials: [
      {
        name: "Neha R",
        gender: "female",
        feedback: "The course provided a solid foundation in clinical research concepts. The instructors were knowledgeable and supportive throughout the program."
      },
      {
        name: "Amit K",
        gender: "male",
        feedback: "Excellent introduction to clinical research. The practical examples and case studies made complex concepts easy to understand."
      },
      {
        name: "Priya M",
        gender: "female",
        feedback: "The course structure was well-organized, and the hands-on training was invaluable. I felt confident applying for clinical research positions after completion."
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Clinical Research Basics - Genez Learnings</title>
        <meta
          name="description"
          content="Learn the fundamentals of clinical research, including GCP guidelines, protocol understanding, ICH-GCP, and regulatory requirements."
        />
      </Head>
      <Header />
      <main className="min-h-screen">
        <CourseTemplate courseData={courseData} />
      </main>
    </>
  );
};

export default ClinicalResearchBasics;
