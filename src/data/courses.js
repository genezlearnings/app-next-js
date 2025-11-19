export const courses = [
    {
    id: 'advanced-cdm',
    title: 'Clinical Data Management – Beginner to Advanced Mastery Program',
    description: 'Deep dive into advanced CDM topics including CDISC standards, data migration, and complex database design.',
    duration: '3 Months',
    price: '₹6,499',
    slug: '/courses/advanced-cdm',
    image: '/cdm-coursecard.png',
    bannerImage: '/cdm-banner.svg'
  },
  {
    id: 'clinical-research-basics',
    title: 'Complete Clinical Research Professional Program',
    description: 'Learn the fundamentals of clinical research, including GCP guidelines, protocol understanding, ICH-GCP, and regulatory requirements.',
    duration: '1.5 Months',
    price: '₹3,999',
    slug: '/courses/clinical-research-basics',
    image: '/cr-coursecard.png',
    bannerImage: '/cr-banner.png'
  },
  
  {
    id: 'medical-coding',
    title: 'Medical Coding Professional Certification Course',
    description: 'Master medical coding with ICD-10-CM, CPT, and HCPCS. Prepare for certification and launch your healthcare career.',
    duration: '3 Months',
    price: '₹6,499',
    slug: '/courses/medical-coding',
    image: '/mc-coursecard.png',
    bannerImage: '/cr-banner.png'
  },  
  {
    id: 'sas-programming',
    title: 'SAS Programming for Clinical Trials',
    description: 'Learn to analyze clinical trial data using SAS, covering SDTM, ADaM, and statistical reporting.',
    duration: '3 Months',
    price: '₹6,499',
    slug: '/courses/sas-programming',
    image: '/sas-coursecard.png',
    bannerImage: '/sas-banner.png'
  },

  {
    id: 'CDM Internship & Hands-On EDC Training',
    title: 'CDM Internship & Hands-On EDC Training',
    description: 'Hands-on internship to learn data management workflows, CRFs, edit checks, and EDC systems.',
    duration: '1 Month',
    price: '₹3,499',
    slug: '/courses/cdm-internship',
    image: '/intern-coursecard.png',
    bannerImage: '/cdm-banner.svg'
  },

  
];

export const getCourseById = (id) => {
  return courses.find(course => course.id === id);
};

export const getFeaturedCourses = () => {
  // Return the courses that should be featured on the home page
  return [
    getCourseById('clinical-research-basics'),
    getCourseById('advanced-cdm')
  ].filter(Boolean);
};
