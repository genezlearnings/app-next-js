import Head from "next/head";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import CourseTemplate from "../../utils/courseTemplate";

const AdvancedCDM = () => {
  const courseData = {
    title: "Clinical Data Management – Beginner to Advanced Mastery Program",
    description:
      "Deep dive into advanced CDM topics including CDISC standards, data migration, and complex database design.",
    duration: "3 Months",
    price: "₹6,499",
    image: "/cdm-title.png",
    overview:
      "This course provides advanced knowledge of clinical data management — from database setup and CDISC implementation to data validation and regulatory compliance. Ideal for professionals looking to step up in the clinical research industry.",
    highlights: [
      "Master CDISC (SDTM, ADaM, CDASH) Implementation",
      "Hands-on experience with EDC tools and CDMS platforms",
      "Learn risk-based monitoring and data migration",
      "Industry mentor support and career guidance",
    ],
    syllabus: [
      {
        title: "Role and Overview of Data Management in Clinical Trials",
        description:
          "Understanding how data collection, processing, and quality assurance support clinical research integrity.",
      },
      {
        title: "Data Collection Tools and CRF Design",
        description:
          "Development and utilization of case report forms for systematic data entry.",
      },
      {
        title: "Electronic Data Capture (EDC) Systems",
        description:
          "Technologies that collect clinical data digitally to improve accuracy and efficiency.",
      },
      {
        title: "Data Entry Standards and Double Data Entry",
        description:
          "Best practices for minimizing errors and validating entered data.",
      },
      {
        title: "Data Validation and Edit Checks",
        description:
          "Techniques to identify and resolve inconsistencies or anomalies in data sets.",
      },
      {
        title: "Query Management and Data Cleaning",
        description:
          "Processes for addressing discrepancies through communication with trial sites.",
      },
      {
        title: "Database Design and Relational Databases",
        description:
          "Structuring clinical data repositories for secure, accessible storage.",
      },
      {
        title: "Coding with MedDRA and WHO-DD",
        description:
          "Standardizing adverse event and medical condition descriptions using established dictionaries.",
      },
      {
        title: "Data Lock, Freeze, and Archival Processes",
        description:
          "Finalizing and preserving clinical trial data for analysis and regulatory review.",
      },
      {
        title: "Preparation of Data Management Plans (DMP)",
        description:
          "Documenting procedures for managing data throughout a clinical study.",
      },
      {
        title: "Quality Assurance and Risk-Based Monitoring",
        description:
          "Ensuring data integrity via planned audits and focused oversight.",
      },
      {
        title: "Regulatory Compliance and Audit Trails",
        description:
          "Maintaining records of data changes to support transparency and inspection readiness.",
      },
      {
        title: "Data Integration and Transfer",
        description:
          "Combining and moving data securely between systems and stakeholders.",
      },
      {
        title: "Reporting, Data Summaries, and Listings",
        description:
          "Generating standardized reports used for decision-making and submissions.",
      },
      {
        title: "Hands-on Practice with Industry Software",
        description:
          "Practical application using commonly employed clinical data management systems.",
      },
    ],
    careerOpportunities: [
      {
        role: "Clinical Data Manager",
        description:
          "Oversee data lifecycle from collection to submission in clinical trials.",
        salary: "₹6–15 LPA",
      },
      {
        role: "CDM Programmer",
        description:
          "Build and maintain clinical databases with CDISC compliance.",
        salary: "₹5–12 LPA",
      },
      {
        role: "Clinical Research Associate",
        description:
          "Monitor trial data and ensure regulatory adherence across sites.",
        salary: "₹4–10 LPA",
      },
    ],
    eligibility: [
      "Bachelor’s degree in Life Sciences, Pharmacy, Medicine, or related field",
      "Basic understanding of clinical research and data principles",
      "Interest in pharmaceutical or CRO roles",
    ],
    certification:
      "Certificate in Advanced Clinical Data Management from Genez Learnings LLP. Recognized by industry professionals and validated for employment in CROs and pharma organizations.",
    ctaDescription:
      "Upgrade your career in CDM — gain expertise with real-world tools and industry mentors.",
    testimonials: [
      {
        name: "Priya S",
        gender: "female",
        feedback:
          "The Advanced CDM course gave me hands-on exposure to EDC tools and data validation — I secured a job within weeks!",
      },
      {
        name: "Sharma",
        gender: "male",
        feedback:
          "Perfect blend of theory and practice. The instructor's real-world examples made complex topics easy to grasp.",
      },
      {
        name: "Dr. Anjali",
        gender: "female",
        feedback:
          "An excellent experience. The course helped me move into a data management role at a leading CRO.",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Advanced Clinical Data Management - Genez Learnings</title>
        <meta
          name="description"
          content="Deep dive into advanced CDM topics including CDISC standards, data migration, and complex database design."
        />
      </Head>
      <Header />
      <main className="min-h-screen">
        <CourseTemplate courseData={courseData} />
      </main>
    </>
  );
};

export default AdvancedCDM;
