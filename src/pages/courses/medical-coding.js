import Head from "next/head";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import CourseTemplate from "../../utils/courseTemplate";

const MedicalCodingCourse = () => {
  const courseData = {
    title: "Medical Coding Professional Certification Course",
    description:
      "Master the art of medical coding and prepare for a rewarding career in healthcare documentation and billing.",
    duration: "3 Months",
    price: "₹6,499",
    image: "/mc-title.png",
    overview:
      "Medical coding is the process of translating healthcare diagnoses, procedures, medical services, and equipment into standardized codes used for billing, claims, and record-keeping. This comprehensive course prepares students for certification exams and jobs in hospitals, insurance companies, and health technology firms.",
    highlights: [
      "Industry-recognized certification preparation",
      "Hands-on coding practice with real-world cases",
      "Expert trainers with industry experience",
      "Placement assistance upon completion",
    ],
    syllabus: [
      {
        title: "Anatomy & Physiology for Coding Context",
        description:
          "Understanding human body systems and functions essential for accurate coding of diseases and treatments.",
      },
      {
        title: "Medical Terminology and Abbreviations",
        description:
          "The universal language of healthcare used to describe the body, its conditions, and medical procedures clearly and consistently.",
      },
      {
        title: "International Classification of Diseases (ICD-10-CM)",
        description:
          "A coding system for diagnosis classification enabling standardized documentation of diseases worldwide.",
      },
      {
        title: "Current Procedural Terminology (CPT) Coding",
        description:
          "A set of codes describing medical, surgical, and diagnostic services provided by healthcare professionals.",
      },
      {
        title: "Healthcare Common Procedure Coding System (HCPCS)",
        description:
          "A coding system mainly for billing Medicare and Medicaid services, including medical equipment and supplies.",
      },
      {
        title: "Pathology, Procedures & Their Corresponding Codes",
        description:
          "Coding practices for diseases, lab reports, and medical interventions in various care settings.",
      },
      {
        title: "Coding for Outpatient and Inpatient Services",
        description:
          "Specialized coding techniques for hospital stays and ambulatory care scenarios.",
      },
      {
        title: "Medical Billing and Insurance Claims Process",
        description:
          "The workflow from coding documentation to submitting claims for healthcare provider reimbursement.",
      },
      {
        title: "Revenue Cycle Management in Healthcare",
        description:
          "Managing the financial processes from patient intake through final payment collection.",
      },
      {
        title: "Electronic Health Records (EHR)",
        description:
          "Using digital patient records for accurate coding, billing, and clinical decision-making.",
      },
      {
        title: "Denial Management and Appeals Process",
        description:
          "Handling claim rejections and pursuing appeal strategies to secure payments.",
      },
      {
        title: "HIPAA, Data Security, and Patient Privacy",
        description:
          "Legal frameworks safeguarding patient information during coding and billing activities.",
      },
      {
        title: "Auditing & Compliance in Coding",
        description:
          "Ensuring coding accuracy to meet regulatory standards and avoid fraud penalties.",
      },
      {
        title: "Legal and Ethical Considerations",
        description:
          "Understanding coder responsibilities and professional ethics in healthcare documentation.",
      },
      {
        title: "Practical Case Studies and Mock Tests",
        description:
          "Applying coding knowledge in simulated real-world scenarios for skill reinforcement.",
      },
    ],
    careerOpportunities: [
      {
        role: "Medical Coder",
        description:
          "Code patient records for healthcare and insurance companies.",
        salary: "₹3–5 LPA",
      },
      {
        role: "Medical Coding Manager/Auditor",
        description:
          "Manage coding teams or ensure data accuracy and compliance.",
        salary: "₹5–12 LPA",
      },
      {
        role: "Billing Analyst/Reimbursement Specialist",
        description:
          "Handle claims, billing errors, and ensure timely payments.",
        salary: "₹4–7.5 LPA",
      },
      {
        role: "Remote & Freelance Coder",
        description:
          "Flexible work arrangements available for certified coders.",
        salary: "Varies based on projects",
      },
    ],
    eligibility: [
      "Graduates from life sciences, allied health, or similar backgrounds",
      "Basic computer literacy",
      "Strong attention to detail",
      "Good command of English",
    ],
    certification:
      "Upon successful completion, students will be prepared to take global certifications like CPC (AAPC) and CCS-A (AHIMA), significantly boosting international job prospects.",
    ctaDescription:
      "Enroll now to secure your spot in our upcoming batch and take the first step towards a rewarding career in healthcare documentation.",
  testimonials: [
  {
    name: "Priya S",
    feedback:
      "The Medical Coding course at Genez Learnings transformed my career. The instructors were knowledgeable and the hands-on training was exceptional.",
    gender: "female",
  },
  {
    name: "Karthick K",
    feedback:
      "The course material was comprehensive and well-structured. The placement assistance helped me secure a job within a month of completion.",
    gender: "male",
  },
  {
    name: "Ananya M",
    feedback:
      "The faculty's industry experience made all the difference. I felt fully prepared for the certification exam after this course.",
    gender: "female",
  },
],

  };

  return (
    <>
      <Head>
        <title>Medical Coding - Genez Learnings</title>
        <meta
          name="description"
          content="Master the art of medical coding and prepare for a rewarding career in healthcare documentation and billing."
        />
      </Head>
      <Header />
      <main className="min-h-screen">
        <CourseTemplate courseData={courseData} />
      </main>
    </>
  );
};

export default MedicalCodingCourse;
