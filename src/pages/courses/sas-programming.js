import Head from "next/head";
import Header from "../../../components/header";
import CourseTemplate from "../../utils/courseTemplate";

const SASProgramming = () => {
  const courseData = {
    title: "SAS Programming for Clinical Trials",
    description:
      "Learn SAS programming specifically for clinical trial data analysis and reporting.",
    duration: "10 Weeks",
    price: "₹6,499",
    image: "/sas-title.png",
    overview:
      "This comprehensive course teaches SAS programming with a specific focus on clinical trial applications. You'll learn to create analysis datasets, generate tables, listings, and figures (TLFs), implement CDISC standards, and develop programs for regulatory submissions. Perfect for those looking to become SAS programmers in the pharmaceutical industry.",
    highlights: [
      "SAS programming fundamentals and syntax",
      "Data manipulation using DATA steps and PROC steps",
      "SAS macros and advanced techniques",
      "CDISC SDTM dataset creation and validation",
      "ADaM dataset development for analysis",
      "TLFs generation and regulatory reporting",
    ],
    syllabus: [
      {
        title: "SAS Programming Environment and Navigation",
        description:
          "Introduction to the SAS software interface used for statistical programming.",
      },
      {
        title: "Importing, Cleaning, and Manipulating Data Sets",
        description:
          "Techniques to prepare raw clinical data for analysis.",
      },
      {
        title: "Descriptive and Inferential Statistical Procedures",
        description:
          "Methods to summarize data and infer conclusions from clinical trials.",
      },
      {
        title: "Data Visualization and Graph Generation",
        description:
          "Creating charts and plots to communicate findings effectively.",
      },
      {
        title: "Adverse Event and Efficacy Data Analysis",
        description:
          "Examining safety and effectiveness measures within clinical study data.",
      },
      {
        title: "Generation of Clinical Study Reports (CSR)",
        description:
          "Automating the production of reports for regulatory submission.",
      },
      {
        title: "Macro Programming and Code Reusability",
        description:
          "Enhancing SAS code efficiency through automation tools.",
      },
      {
        title: "Merging, Appending, and Transposing Data Sets",
        description:
          "Managing complex datasets through advanced data manipulation.",
      },
      {
        title: "Quality Control and Program Validation",
        description:
          "Ensuring accuracy and compliance of SAS programs.",
      },
      {
        title: "Creation of Data Listings, Tables, and Figures",
        description:
          "Developing standardized outputs for clinical documentation.",
      },
      {
        title: "Automation Techniques in SAS",
        description:
          "Reducing manual effort through scripting and batch processing.",
      },
      {
        title: "SDTM, ADaM Mapping, and CDISC Compliance",
        description:
          "Applying clinical data standards for regulatory submissions.",
      },
      {
        title: "Preparing Submission Packages for Regulatory Agencies",
        description:
          "Compiling data and reports to meet global regulatory requirements.",
      },
      {
        title: "Advanced Statistical Modeling",
        description:
          "Using sophisticated analyses to support clinical insights.",
      },
      {
        title: "Industry-Based Case Studies and Projects",
        description:
          "Hands-on practice with real-world clinical research data using SAS.",
      },
    ],
    careerOpportunities: [
      {
        role: "SAS Programmer",
        description:
          "Develop and maintain clinical trial datasets and outputs for analysis and reporting.",
        salary: "₹5–10 LPA",
      },
      {
        role: "Clinical SAS Programmer",
        description:
          "Work with clinical research teams to analyze and validate clinical data using SAS.",
        salary: "₹6–12 LPA",
      },
      {
        role: "Statistical Programmer",
        description:
          "Collaborate with biostatisticians to perform data analysis and generate reports.",
        salary: "₹6–14 LPA",
      },
      {
        role: "CDISC Programmer",
        description:
          "Implement SDTM and ADaM datasets compliant with FDA and EMA standards.",
        salary: "₹7–15 LPA",
      },
      {
        role: "Biostatistical Programmer",
        description:
          "Perform statistical analysis, reporting, and data validation for clinical studies.",
        salary: "₹6–13 LPA",
      },
    ],
    eligibility: [
      "Graduates in Life Sciences, Statistics, Pharmacy, or Computer Science",
      "Basic understanding of clinical research concepts (recommended)",
      "Fundamental programming or logical thinking skills",
      "No prior SAS experience required — we start from basics",
    ],
    certification:
      "Upon successful completion, students will receive a Certificate in SAS Programming for Clinical Trials from Genez Learnings LLP. The course prepares learners for roles in pharma, CROs, and biotech industries.",
    ctaDescription:
      "Master SAS programming for clinical trials and unlock high-demand roles in the pharmaceutical and healthcare analytics industries.",
    testimonials: [
      {
        name: "Ravi S",
        gender: "male",
        feedback:
          "This course helped me understand SAS from scratch. The real-world examples and CDISC modules were game changers!",
      },
      {
        name: "Divya P",
        gender: "female",
        feedback:
          "The SAS programming course was well-structured and industry-relevant. I secured an internship at a CRO after completion!",
      },
      {
        name: "Karan M",
        gender: "male",
        feedback:
          "Loved the practical assignments — the ADaM and TLF sessions were especially useful for my current role.",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>SAS Programming for Clinical Trials - Genez Learnings</title>
        <meta
          name="description"
          content="Learn SAS programming specifically for clinical trial data analysis and reporting."
        />
      </Head>
      <Header />
      <main className="min-h-screen">
        <CourseTemplate courseData={courseData} />
      </main>
    </>
  );
};

export default SASProgramming;
