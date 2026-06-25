export interface ServiceBenefit {
  title: string;
  points: string[];
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  icon: string;
  whyMatters: {
    heading: string;
    description: string;
    points: string[];
  };
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  whyChooseUs: string[];
  cta: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: 'career-counselling',
    title: 'Career Counselling',
    tagline: 'Shape Your Future with Expert Career Guidance',
    intro:
      'Choosing the right career is one of the most important decisions in life. With thousands of career options, rapidly changing industries, and increasing global opportunities, students often feel confused about which path to choose. Our Career Counselling Services are designed to help students identify their strengths, interests, skills, and aspirations so they can make informed decisions about their education and future careers.',
    icon: '🎯',
    whyMatters: {
      heading: 'Why Career Counselling Matters',
      description:
        'Many students choose courses and careers based on peer pressure, family expectations, or incomplete information. This often leads to dissatisfaction, poor academic performance, and career uncertainty later in life.',
      points: [
        'Understand their strengths and weaknesses',
        'Discover suitable career paths',
        'Make informed educational decisions',
        'Set realistic short-term and long-term goals',
        'Explore emerging industries and future careers',
        'Improve confidence and decision-making abilities',
        'Plan their academic and professional journey effectively',
      ],
    },
    benefits: [
      {
        title: 'Career Assessment & Profiling',
        points: [
          'Interests and passions',
          'Personality traits',
          'Aptitude and abilities',
          'Academic strengths',
          'Career preferences',
          'Learning styles',
          'Professional aspirations',
        ],
      },
      {
        title: 'Stream Selection Guidance',
        points: [
          'Science',
          'Commerce',
          'Humanities/Arts',
          'Vocational Programs',
          'Skill-Based Education',
        ],
      },
      {
        title: 'Course & College Selection',
        points: [
          'Identify suitable degree programs',
          'Compare universities and colleges',
          'Understand admission requirements',
          'Evaluate course curriculum',
          'Analyze career prospects',
          'Explore scholarship opportunities',
        ],
      },
      {
        title: 'Emerging Career Opportunities',
        points: [
          'Artificial Intelligence',
          'Data Science',
          'Machine Learning',
          'Cyber Security',
          'Cloud Computing',
          'Digital Marketing',
          'FinTech',
          'Renewable Energy',
          'Business Analytics',
        ],
      },
      {
        title: 'Resume Building & Profile Development',
        points: [
          'Resume Creation',
          'LinkedIn Profile Optimization',
          'Statement of Purpose (SOP) Guidance',
          'Portfolio Development',
          'Internship Planning',
          'Professional Branding',
        ],
      },
      {
        title: 'Interview Preparation & Soft Skills',
        points: [
          'Communication Skills',
          'Personal Interview Preparation',
          'Group Discussion Skills',
          'Presentation Skills',
          'Leadership Development',
          'Confidence Building',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Understanding You', description: 'We begin by understanding your interests, goals, academic background, and aspirations.' },
      { step: '02', title: 'Career Assessment', description: 'Scientific assessment tools help identify strengths, personality traits, and career suitability.' },
      { step: '03', title: 'Career Exploration', description: 'Students explore various career options and industry opportunities.' },
      { step: '04', title: 'Personalized Guidance', description: 'Our counsellors provide recommendations tailored specifically to individual goals.' },
      { step: '05', title: 'Action Plan Development', description: 'A step-by-step roadmap is created to achieve academic and career objectives.' },
      { step: '06', title: 'Continuous Support', description: 'Students receive ongoing support throughout their educational and professional journey.' },
    ],
    whyChooseUs: [
      'Experienced Career Counsellors',
      'Personalized One-on-One Guidance',
      'Scientific Career Assessments',
      'Global Education Expertise',
      'Industry-Oriented Recommendations',
      'Comprehensive Career Planning',
      'Higher Education & Study Abroad Support',
      'Long-Term Career Roadmap Development',
      'Student-Centric Approach',
      'End-to-End Guidance and Mentorship',
    ],
    cta: 'Book your career counselling session today and gain the clarity, confidence, and direction needed to achieve your academic and professional goals.',
  },
  {
    slug: 'university-selection',
    title: 'University Selection',
    tagline: 'Find the Right University for a Successful Future',
    intro:
      'Choosing the right university is one of the most important decisions in a student\'s academic journey. Our University Selection Assistance Service helps students identify universities that align with their academic profile, career goals, budget, preferred destination, and future aspirations. We provide personalized guidance to ensure that every student makes a confident and informed decision about their higher education.',
    icon: '🏛️',
    whyMatters: {
      heading: 'Why Choosing the Right University Matters',
      description:
        'A university is much more than a place to earn a degree. It plays a crucial role in shaping your future career, professional network, skills, and personal growth.',
      points: [
        'High-quality education',
        'Industry-relevant curriculum',
        'Better internship opportunities',
        'Strong research facilities',
        'Global exposure',
        'Career support services',
        'Networking opportunities',
        'Higher employability',
        'Better return on investment',
        'Pathways to international careers',
      ],
    },
    benefits: [
      {
        title: 'Personalized University Shortlisting',
        points: [
          'Academic performance',
          'Educational background',
          'Career goals',
          'Preferred country',
          'Budget and financial considerations',
          'Language proficiency scores',
          'Scholarship eligibility',
          'Future immigration plans',
        ],
      },
      {
        title: 'Course and Program Selection',
        points: [
          'Personal interests',
          'Academic strengths',
          'Industry demand',
          'Career objectives',
          'Future job prospects',
          'Research opportunities',
        ],
      },
      {
        title: 'University Comparison and Evaluation',
        points: [
          'Global rankings',
          'Academic reputation',
          'Faculty quality',
          'Research opportunities',
          'Industry partnerships',
          'Campus facilities',
          'Student satisfaction',
          'Internship opportunities',
          'Graduate employment outcomes',
        ],
      },
      {
        title: 'Scholarship-Based University Selection',
        points: [
          'Merit Scholarships',
          'Academic Excellence Scholarships',
          'Need-Based Financial Aid',
          'International Student Scholarships',
          'Government Scholarships',
          'Research Funding Opportunities',
          'Graduate Assistantships',
        ],
      },
      {
        title: 'Admission Probability Assessment',
        points: [
          'Dream Universities — highly competitive but achievable',
          'Target Universities — profile aligns well with requirements',
          'Safe Universities — strong chances with quality education',
        ],
      },
      {
        title: 'Budget Planning and Cost Analysis',
        points: [
          'Tuition Fees',
          'Living Expenses',
          'Accommodation Costs',
          'Health Insurance',
          'Transportation Expenses',
          'Visa Costs',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Student Profile Assessment', description: 'We evaluate academic records, interests, goals, and financial considerations.' },
      { step: '02', title: 'Career and Course Mapping', description: 'We identify programs aligned with long-term career aspirations.' },
      { step: '03', title: 'University Research and Shortlisting', description: 'Suitable universities are shortlisted based on profile compatibility.' },
      { step: '04', title: 'Comparative Analysis', description: 'Students receive detailed comparisons of shortlisted institutions.' },
      { step: '05', title: 'Application Strategy Development', description: 'A customized admission plan is created.' },
      { step: '06', title: 'Final University Selection', description: 'Students choose the most suitable institution with confidence.' },
    ],
    whyChooseUs: [
      'Personalized University Recommendations',
      'Global Education Expertise',
      'Country-Specific Guidance',
      'Scholarship Optimization Support',
      'Career-Oriented University Selection',
      'Comprehensive University Comparisons',
      'Transparent and Student-Focused Advice',
      'Strong Understanding of International Admissions',
      'End-to-End Application Support',
      'Long-Term Academic and Career Planning',
    ],
    cta: 'Let our experienced counsellors help you find the university that is the perfect fit for your ambitions, aspirations, and future success.',
  },
  {
    slug: 'visa-documentation',
    title: 'Visa Documentation',
    tagline: 'Complete Visa Documentation Support for a Hassle-Free Application Process',
    intro:
      'Obtaining a visa is one of the most critical steps in achieving your international education, travel, work, or immigration goals. Even a small mistake in documentation can lead to delays, additional scrutiny, or even visa refusal. Our Visa Documentation Assistance Services are designed to ensure that your application is complete, accurate, and fully compliant with the requirements of the respective embassy or consulate.',
    icon: '📋',
    whyMatters: {
      heading: 'Why Proper Visa Documentation is Important',
      description:
        'Visa officers carefully review every application to assess the applicant\'s eligibility, financial stability, academic intentions, travel plans, and compliance with immigration regulations.',
      points: [
        'Application delays',
        'Additional document requests',
        'Administrative processing',
        'Visa refusals',
        'Loss of admission opportunities',
        'Financial losses due to missed deadlines',
      ],
    },
    benefits: [
      {
        title: 'Comprehensive Document Checklist',
        points: [
          'Destination country',
          'Visa category',
          'Academic profile',
          'Employment status',
          'Financial background',
          'Family sponsorship details',
        ],
      },
      {
        title: 'Academic Document Verification',
        points: [
          'Academic Transcripts',
          'Mark Sheets',
          'Degree Certificates',
          'Provisional Certificates',
          'School Leaving Certificates',
          'Language Test Results',
        ],
      },
      {
        title: 'Financial Documentation Support',
        points: [
          'Bank Statements',
          'Education Loan Documents',
          'Fixed Deposit Certificates',
          'Income Tax Returns',
          'Salary Slips',
          'Sponsorship Affidavits',
          'Proof of Funds',
        ],
      },
      {
        title: 'SOP and Supporting Documents',
        points: [
          'Statement of Purpose',
          'Study Plans',
          'Career Objectives',
          'Academic Justifications',
          'Affidavits of Support',
          'Sponsorship Letters',
          'Consent Letters',
        ],
      },
      {
        title: 'Document Organization & Review',
        points: [
          'Arrange documents systematically',
          'Prepare digital copies',
          'Create document folders',
          'Label supporting evidence correctly',
          'Ensure consistency across all submissions',
        ],
      },
      {
        title: 'Pre-Submission Review',
        points: [
          'Document Completeness Check',
          'Consistency Verification',
          'Financial Assessment',
          'Application Accuracy Check',
          'Compliance Verification',
          'Embassy Requirement Review',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Initial Consultation', description: 'Understanding your visa requirements and eligibility.' },
      { step: '02', title: 'Personalized Document Checklist', description: 'Providing a complete list of required documents.' },
      { step: '03', title: 'Document Collection & Review', description: 'Checking all documents for accuracy and completeness.' },
      { step: '04', title: 'Financial & Supporting Document Assessment', description: 'Ensuring financial and supporting evidence meets visa requirements.' },
      { step: '05', title: 'Application Preparation', description: 'Assisting with forms, declarations, and supporting materials.' },
      { step: '06', title: 'Final Verification', description: 'Conducting a comprehensive quality review before submission.' },
    ],
    whyChooseUs: [
      'Experienced Visa Documentation Experts',
      'Country-Specific Documentation Guidance',
      'Personalized Document Checklists',
      'SOP and Study Plan Assistance',
      'Financial Documentation Support',
      'Error-Free Application Review',
      'High Attention to Detail',
      'End-to-End Documentation Assistance',
      'Timely and Professional Service',
      'Student-Centered Approach',
    ],
    cta: 'Let us simplify the visa documentation process and help you move one step closer to your international education, career, or immigration goals.',
  },
  {
    slug: 'student-visa',
    title: 'Student Visa',
    tagline: 'Turn Your Study Abroad Dream into Reality',
    intro:
      'Obtaining a student visa is one of the most important steps in your international education journey. Every country has its own visa requirements, eligibility criteria, documentation standards, and interview procedures. Our Student Visa Assistance Services are designed to help students navigate the visa process with confidence — from document preparation and application submission to interview preparation and post-visa guidance.',
    icon: '🎓',
    whyMatters: {
      heading: 'Why Student Visa Assistance is Important',
      description:
        'Student visa applications involve much more than simply submitting documents. Visa officers assess various factors and a professionally prepared application significantly improves the chances of a successful visa outcome.',
      points: [
        'Academic background',
        'Course selection',
        'University admission',
        'Financial capability',
        'Genuine study intentions',
        'Future career plans',
        'Immigration compliance',
      ],
    },
    benefits: [
      {
        title: 'Student Visa Eligibility Assessment',
        points: [
          'Academic qualifications',
          'Admission status',
          'Financial readiness',
          'English language proficiency',
          'Previous travel history',
          'Gap years or academic breaks',
          'Country-specific visa requirements',
        ],
      },
      {
        title: 'Complete Visa Documentation Support',
        points: [
          'Passport Documents',
          'Offer Letters & Admission Letters',
          'Academic Transcripts',
          'Language Test Results (IELTS, TOEFL, PTE, Duolingo)',
          'Financial Documents',
          'Sponsorship Documents',
          'Identity and Civil Documents',
        ],
      },
      {
        title: 'Country-Specific Student Visa Guidance',
        points: [
          'Canada Study Permit & GIC Guidance',
          'USA F-1 Visa & SEVIS Fee',
          'UK CAS Documentation',
          'Australia Genuine Student Requirement',
          'Germany Blocked Account Requirements',
          'Ireland, France, Italy, Switzerland, NZ, Poland, Denmark, Hungary, Latvia & Malta',
        ],
      },
      {
        title: 'Visa Interview Preparation',
        points: [
          'Mock Interviews',
          'Frequently Asked Questions',
          'Confidence Building',
          'Communication Skills Training',
          'Country-Specific Interview Guidance',
          'Visa Officer Expectation Preparation',
        ],
      },
      {
        title: 'Visa Refusal & Reapplication Support',
        points: [
          'Understand refusal reasons',
          'Identify weaknesses in previous applications',
          'Strengthen supporting documentation',
          'Develop a stronger reapplication strategy',
          'Improve interview performance',
        ],
      },
      {
        title: 'Pre-Departure Guidance',
        points: [
          'Travel Planning',
          'Accommodation Guidance',
          'Airport Procedures',
          'Cultural Orientation',
          'Banking Information',
          'Healthcare Information',
          'International Student Support',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Profile Assessment', description: 'Understanding your academic background, goals, and destination preferences.' },
      { step: '02', title: 'Documentation Planning', description: 'Creating a personalized checklist of required documents.' },
      { step: '03', title: 'Application Preparation', description: 'Preparing forms, financial evidence, SOPs, and supporting materials.' },
      { step: '04', title: 'Application Submission', description: 'Assisting with complete and accurate visa submission.' },
      { step: '05', title: 'Interview Preparation', description: 'Providing comprehensive coaching and mock interview sessions.' },
      { step: '06', title: 'Visa Approval & Pre-Departure Support', description: 'Helping students prepare for their international education journey.' },
    ],
    whyChooseUs: [
      'Experienced Student Visa Consultants',
      'Country-Specific Visa Expertise',
      'Comprehensive Documentation Support',
      'SOP & Study Plan Guidance',
      'Financial Documentation Assistance',
      'Mock Visa Interview Training',
      'High Visa Success Focus',
      'Personalized Student Support',
      'Transparent and Ethical Guidance',
      'End-to-End Visa Assistance',
    ],
    cta: 'Let our experienced team help you secure your student visa and take the next step toward achieving your academic and career aspirations abroad.',
  },
  {
    slug: 'sop-resume',
    title: 'SOP & Resume Preparation',
    tagline: 'Build a Powerful Profile That Opens Global Opportunities',
    intro:
      'A well-crafted Statement of Purpose (SOP) and professional Resume are among the most important components of any study abroad, scholarship, internship, or visa application. An exceptional SOP tells your story, highlights your ambitions, and demonstrates why you are the right candidate. Our SOP & Resume Preparation Services help students create compelling, personalized, and impactful application documents that stand out in a competitive global environment.',
    icon: '✍️',
    whyMatters: {
      heading: 'Why SOP and Resume Matter',
      description:
        'Universities and immigration authorities receive thousands of applications every year. Academic scores alone are often not enough to secure admission or scholarship opportunities.',
      points: [
        'Strengthen your university application',
        'Improve scholarship opportunities',
        'Demonstrate academic and career goals',
        'Showcase achievements and skills effectively',
        'Highlight leadership and extracurricular activities',
        'Support visa applications',
        'Differentiate you from other applicants',
        'Create a professional and positive first impression',
      ],
    },
    benefits: [
      {
        title: 'SOP Writing Support',
        points: [
          'Academic Background Presentation',
          'Career Goals and Future Vision',
          'University and Course Justification',
          'Personalized SOP Development',
          'SOP Review and Enhancement',
          'Grammar and Language Enhancement',
          'Professional Formatting',
        ],
      },
      {
        title: 'Academic Resume Development',
        points: [
          'Educational Background',
          'Academic Achievements',
          'Research Work',
          'Projects',
          'Technical Skills',
          'Certifications',
          'Awards and Recognition',
        ],
      },
      {
        title: 'Study Abroad Resume Preparation',
        points: [
          'Academic Excellence',
          'Research Experience',
          'Leadership Activities',
          'Volunteer Work',
          'Internships',
          'Extracurricular Achievements',
          'Community Involvement',
        ],
      },
      {
        title: 'Technical Resume Preparation',
        points: [
          'Programming Skills',
          'Technical Projects',
          'Research Experience',
          'Software Development Work',
          'Data Science Projects',
          'Engineering Achievements',
          'Certifications and Technical Competencies',
        ],
      },
      {
        title: 'LinkedIn Profile Optimization',
        points: [
          'LinkedIn Profile Creation',
          'Professional Headline Development',
          'Profile Summary Writing',
          'Skills Optimization',
          'Experience Presentation',
          'Networking Recommendations',
        ],
      },
      {
        title: 'Scholarship Application Support',
        points: [
          'Scholarship Essays',
          'Motivation Letters',
          'Personal Statements',
          'Achievement Descriptions',
          'Leadership Narratives',
          'Funding Statements',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Profile Assessment', description: 'We understand your academic background, achievements, goals, and aspirations.' },
      { step: '02', title: 'Information Collection', description: 'We gather details regarding education, projects, internships, achievements, leadership activities, and career goals.' },
      { step: '03', title: 'Draft Development', description: 'Our experts assist in creating structured and impactful content.' },
      { step: '04', title: 'Review & Refinement', description: 'Documents are carefully reviewed for clarity, professionalism, and effectiveness.' },
      { step: '05', title: 'Final Delivery', description: 'Students receive polished, professional documents ready for university, scholarship, visa, or job applications.' },
    ],
    whyChooseUs: [
      'Personalized SOP Development',
      'Professional Resume Preparation',
      'University-Specific Guidance',
      'Scholarship Application Support',
      'Industry-Oriented Resume Writing',
      'LinkedIn Profile Optimization',
      'Comprehensive Review & Editing',
      'Global Application Standards',
      'Attention to Detail',
      'Student-Focused Approach',
    ],
    cta: 'Let our experts help you create powerful, professional, and impactful SOPs and Resumes that showcase your potential and maximize your chances of success.',
  },
  {
    slug: 'spouse-visa',
    title: 'Spouse Visa',
    tagline: 'Reunite with Your Loved Ones Through a Smooth and Hassle-Free Visa Process',
    intro:
      'Living apart from your spouse can be emotionally challenging. Many countries provide spouse visa pathways that allow married partners to join their loved ones and build a life together abroad. Our Spouse Visa Assistance Services are designed to simplify the process and help couples navigate every stage of the application with confidence — from eligibility assessment and document preparation to application submission and follow-up support.',
    icon: '💑',
    whyMatters: {
      heading: 'Why Professional Spouse Visa Assistance Matters',
      description:
        'Spouse visa applications are carefully assessed by immigration authorities to verify the authenticity of the relationship and ensure compliance with immigration laws. Common reasons for delays or refusals include:',
      points: [
        'Incomplete documentation',
        'Insufficient financial evidence',
        'Incorrect application forms',
        'Lack of relationship proof',
        'Inconsistencies in information',
        'Failure to meet eligibility requirements',
      ],
    },
    benefits: [
      {
        title: 'Eligibility Assessment',
        points: [
          'Marital status',
          'Immigration status of the sponsoring spouse',
          'Country-specific requirements',
          'Financial eligibility',
          'Previous visa history',
          'Dependent family circumstances',
        ],
      },
      {
        title: 'Documentation Assistance',
        points: [
          'Marriage Certificates',
          'Passports & Identity Documents',
          'Financial Documents',
          'Employment Documents',
          'Accommodation Proof',
          'Relationship Evidence',
          'Sponsor Documentation',
        ],
      },
      {
        title: 'Relationship Evidence Preparation',
        points: [
          'Marriage Records',
          'Wedding Photographs',
          'Communication Records',
          'Joint Financial Documents',
          'Joint Property Records',
          'Travel History Together',
          'Supporting Affidavits',
        ],
      },
      {
        title: 'Country-Specific Guidance',
        points: [
          'Canada — Spousal Sponsorship & Open Work Permit',
          'United Kingdom — Family Visa Applications',
          'Australia — Partner Visa Eligibility',
          'United States — Immigrant & Non-Immigrant Spouse Visa',
          'Germany, Ireland, France, Italy, Switzerland, NZ, Poland, Denmark, Hungary, Latvia & Malta',
        ],
      },
      {
        title: 'Visa Interview Preparation',
        points: [
          'Mock Interviews',
          'Common Visa Questions',
          'Relationship Verification Questions',
          'Communication Training',
          'Confidence Building',
          'Country-Specific Interview Guidance',
        ],
      },
      {
        title: 'Application Review & Quality Check',
        points: [
          'Eligibility Verification',
          'Document Completeness',
          'Financial Assessment',
          'Relationship Evidence Review',
          'Consistency Checks',
          'Immigration Compliance Verification',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Initial Consultation', description: 'We assess your circumstances, eligibility, and visa options.' },
      { step: '02', title: 'Documentation Planning', description: 'A personalized checklist is prepared based on your destination country and immigration category.' },
      { step: '03', title: 'Document Collection & Review', description: 'All supporting documents are thoroughly reviewed and verified.' },
      { step: '04', title: 'Application Preparation', description: 'Forms, declarations, and supporting evidence are prepared.' },
      { step: '05', title: 'Submission Assistance', description: 'We guide you through the application submission process.' },
      { step: '06', title: 'Follow-Up Support', description: 'Ongoing assistance is provided until a final visa decision is received.' },
    ],
    whyChooseUs: [
      'Experienced Immigration Consultants',
      'Country-Specific Visa Expertise',
      'Comprehensive Documentation Support',
      'Relationship Evidence Guidance',
      'Financial Documentation Assistance',
      'Application Review & Verification',
      'Interview Preparation Support',
      'Transparent and Ethical Guidance',
      'Personalized Service',
      'End-to-End Visa Assistance',
    ],
    cta: 'Let our experienced team help you navigate the spouse visa process and bring your family together with confidence and peace of mind.',
  },
  {
    slug: 'visitor-visa',
    title: 'Visitor Visa',
    tagline: 'Explore the World with Confidence',
    intro:
      'Whether you are planning a vacation, visiting family and friends, attending a business meeting, participating in an event, or simply exploring a new country, obtaining the right visitor visa is an essential part of your travel journey. Our Visitor Visa Assistance Services simplify the entire process by providing professional guidance, accurate documentation support, and personalized assistance from start to finish.',
    icon: '✈️',
    whyMatters: {
      heading: 'Why Professional Visitor Visa Assistance Matters',
      description:
        'Visitor visa applications are carefully reviewed by immigration authorities. Incomplete applications or incorrect documentation may result in delays, additional document requests, or visa refusals.',
      points: [
        'Purpose of travel',
        'Financial stability',
        'Travel history',
        'Ties to home country',
        'Accommodation arrangements',
        'Return intentions',
        'Supporting documentation',
      ],
    },
    benefits: [
      {
        title: 'Complete Documentation Support',
        points: [
          'Passport Verification',
          'Identity Documents',
          'Financial Documents',
          'Employment Letters',
          'Invitation Letters',
          'Travel Itinerary',
          'Accommodation Proof',
        ],
      },
      {
        title: 'Visa Categories We Assist With',
        points: [
          'Tourist Visa — leisure travel and sightseeing',
          'Family Visit Visa — visiting family members abroad',
          'Friend Visit Visa — visiting friends overseas',
          'Business Visitor Visa — meetings, conferences, trade shows',
          'Event and Conference Visa — academic and professional events',
        ],
      },
      {
        title: 'Country-Specific Visitor Visa Assistance',
        points: [
          'Canada Visitor Visa',
          'United States B1/B2 Visa',
          'United Kingdom Standard Visitor Visa',
          'Australia Visitor Visa',
          'Europe Schengen Visa (France, Germany, Italy, Switzerland, Spain, Poland, Hungary, Denmark, Latvia, Malta)',
        ],
      },
      {
        title: 'Financial Documentation Guidance',
        points: [
          'Bank Statements',
          'Income Tax Returns',
          'Salary Slips',
          'Employment Verification Letters',
          'Business Financial Documents',
          'Sponsorship Documents',
          'Proof of Assets',
        ],
      },
      {
        title: 'Visitor Visa Interview Preparation',
        points: [
          'Mock Interviews',
          'Common Interview Questions',
          'Confidence Building',
          'Travel Purpose Explanation',
          'Financial Question Preparation',
          'Country-Specific Interview Guidance',
        ],
      },
      {
        title: 'Visa Refusal & Reapplication Support',
        points: [
          'Refusal Analysis',
          'Identifying Weaknesses',
          'Strengthening Documentation',
          'Correcting Application Errors',
          'Reapplication Strategy Development',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Initial Consultation', description: 'We understand your travel goals and visa requirements.' },
      { step: '02', title: 'Eligibility Assessment', description: 'Our consultants evaluate your profile and determine the best application approach.' },
      { step: '03', title: 'Documentation Preparation', description: 'All required documents are reviewed and organized.' },
      { step: '04', title: 'Application Assistance', description: 'Forms are completed accurately and supporting evidence is verified.' },
      { step: '05', title: 'Submission & Interview Preparation', description: 'We guide you through submission procedures and interview preparation if required.' },
      { step: '06', title: 'Ongoing Support', description: 'Our team remains available throughout the visa processing period.' },
    ],
    whyChooseUs: [
      'Experienced Visa Consultants',
      'Country-Specific Expertise',
      'Personalized Visa Guidance',
      'Comprehensive Documentation Support',
      'Financial Documentation Assistance',
      'Interview Preparation Services',
      'Application Accuracy Verification',
      'Transparent and Ethical Advice',
      'Timely Support and Communication',
      'End-to-End Visa Assistance',
    ],
    cta: 'Contact us today and let us help you secure your visitor visa and begin your international journey with ease.',
  },
  {
    slug: 'pr-immigration',
    title: 'PR & Immigration',
    tagline: 'Build a Better Future with Permanent Residency Opportunities Abroad',
    intro:
      'Permanent Residency (PR) provides individuals and families with the opportunity to live, work, study, and build a future in another country while enjoying many of the benefits available to citizens. Our PR Immigration Services are designed to simplify this journey by providing professional guidance and personalized support at every stage of the application process — whether your goal is Canada, Australia, New Zealand, Germany, Ireland, or other immigration-friendly destinations.',
    icon: '🌍',
    whyMatters: {
      heading: 'Why Choose Permanent Residency?',
      description:
        'Permanent Residency offers numerous benefits that can positively impact your future and that of your family.',
      points: [
        'Long-term residency rights',
        'Freedom to live and work in the country',
        'Access to public healthcare systems',
        'Opportunities for higher education',
        'Social security benefits',
        'Family sponsorship opportunities',
        'Better career prospects',
        'International work experience',
        'Pathways to citizenship',
        'Improved quality of life',
      ],
    },
    benefits: [
      {
        title: 'Immigration Eligibility Assessment',
        points: [
          'Age',
          'Educational qualifications',
          'Work experience',
          'Language proficiency',
          'Occupation category',
          'Family status',
          'Financial readiness',
          'Immigration history',
        ],
      },
      {
        title: 'Immigration Program Selection',
        points: [
          'Skilled Worker Programs',
          'Express Entry Programs',
          'Provincial Nominee Programs',
          'State Nomination Programs',
          'Family Sponsorship Programs',
          'Business Immigration Programs',
          'Graduate Immigration Routes',
        ],
      },
      {
        title: 'Popular PR Destinations',
        points: [
          'Canada — Express Entry, PNP, family sponsorship',
          'Australia — Skilled migration and state nomination',
          'New Zealand — Skilled migration and residency programs',
          'Germany — Strong economy, engineering & technology sectors',
          'Ireland and Europe — Long-term residency opportunities',
        ],
      },
      {
        title: 'Documentation Assistance',
        points: [
          'Educational Documents & Transcripts',
          'Employment Records & Reference Letters',
          'Identity Documents & Passport Documentation',
          'Police Clearance Certificates',
          'Civil Status Documents',
          'Financial Documents',
        ],
      },
      {
        title: 'Language Test Guidance',
        points: [
          'IELTS',
          'PTE',
          'TOEFL',
          'CELPIP',
          'Other Accepted Language Tests',
          'Score requirements and maximizing immigration points',
        ],
      },
      {
        title: 'PR for International Students',
        points: [
          'Post-Study Work Opportunities',
          'Graduate Immigration Programs',
          'Permanent Residency Pathways',
          'Skilled Employment Requirements',
          'Transition from Student Status to PR',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Initial Consultation', description: 'Understanding your immigration goals and evaluating your profile.' },
      { step: '02', title: 'Eligibility Assessment', description: 'Identifying suitable immigration pathways and opportunities.' },
      { step: '03', title: 'Documentation Planning', description: 'Preparing a complete checklist of required documents.' },
      { step: '04', title: 'Application Preparation', description: 'Compiling and reviewing all application materials.' },
      { step: '05', title: 'Application Submission', description: 'Guiding applicants through the submission process.' },
      { step: '06', title: 'Post-Submission Support', description: 'Providing assistance until a final decision is received.' },
    ],
    whyChooseUs: [
      'Experienced Immigration Consultants',
      'Personalized Immigration Strategies',
      'Comprehensive Eligibility Assessments',
      'Detailed Documentation Support',
      'Skilled Worker Immigration Expertise',
      'Family Immigration Assistance',
      'Transparent and Ethical Guidance',
      'End-to-End Application Support',
      'Up-to-Date Immigration Knowledge',
      'Commitment to Client Success',
    ],
    cta: 'Let our experienced immigration professionals guide you through every step of the PR process and help you build the future you envision abroad.',
  },
  {
    slug: 'onshore-services',
    title: 'Onshore Services',
    tagline: 'Supporting International Students Throughout Their Journey Abroad',
    intro:
      'Moving to a new country for education is an exciting opportunity, but it also comes with numerous challenges and responsibilities. Our Onshore Services are designed to provide continuous assistance to students after arrival, ensuring a smooth transition and helping them settle comfortably into their new academic and social environment. We remain committed to supporting students throughout their international education journey, not just until they receive their visa.',
    icon: '🏠',
    whyMatters: {
      heading: 'Why Onshore Support is Important',
      description:
        'Arriving in a foreign country can be overwhelming, especially for first-time international students. Students often face challenges related to:',
      points: [
        'Accommodation arrangements',
        'Airport arrival procedures',
        'Banking and financial setup',
        'Healthcare registration',
        'Transportation systems',
        'Local laws and regulations',
        'University enrollment procedures',
        'Cultural adjustment',
        'Employment opportunities',
        'Daily living requirements',
      ],
    },
    benefits: [
      {
        title: 'Arrival & Accommodation Support',
        points: [
          'Airport Pickup Assistance',
          'Arrival Planning',
          'Transportation Guidance',
          'Student Housing Options',
          'University Residences',
          'Shared Accommodation Guidance',
          'Lease Agreement Understanding',
        ],
      },
      {
        title: 'University Enrollment & Banking',
        points: [
          'Course Registration',
          'Enrollment Procedures',
          'Student ID Collection',
          'Orientation Programs',
          'Bank Selection',
          'Account Opening Procedures',
          'Digital Banking Setup',
        ],
      },
      {
        title: 'Health, SIM & Transportation',
        points: [
          'Health Insurance Requirements',
          'Medical Registration Procedures',
          'Healthcare Access Information',
          'Local SIM Card Guidance',
          'Mobile Plans Information',
          'Public Transport Systems',
          'Student Travel Cards',
        ],
      },
      {
        title: 'Cultural Orientation & Settlement',
        points: [
          'Local Customs and Etiquette',
          'Cultural Expectations',
          'Social Norms',
          'Community Resources',
          'Student Life Abroad',
          'Emergency Contacts',
        ],
      },
      {
        title: 'Part-Time Job & Career Development',
        points: [
          'Work Rights and Regulations',
          'Resume Preparation',
          'Job Search Strategies',
          'Interview Preparation',
          'Professional Networking',
          'LinkedIn Profile Development',
          'Internship Guidance',
        ],
      },
      {
        title: 'Post-Study Work Visa Guidance',
        points: [
          'Post-Study Work Permits',
          'Graduate Visa Programs',
          'Employment-Based Pathways',
          'Immigration Opportunities',
          'Long-Term Settlement Options',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Pre-Arrival Planning', description: 'We help students prepare before they travel.' },
      { step: '02', title: 'Arrival Assistance', description: 'Support during airport arrival and initial settlement.' },
      { step: '03', title: 'Accommodation & Registration', description: 'Guidance for housing and university enrollment.' },
      { step: '04', title: 'Essential Setup Support', description: 'Assistance with banking, healthcare, communication, and transportation.' },
      { step: '05', title: 'Academic & Career Guidance', description: 'Ongoing support throughout the student\'s educational journey.' },
      { step: '06', title: 'Future Planning', description: 'Guidance regarding employment opportunities, post-study work visas, and long-term career development.' },
    ],
    whyChooseUs: [
      'Dedicated Student Support Team',
      'Personalized Onshore Assistance',
      'Practical Settlement Guidance',
      'Accommodation Support',
      'Banking & Healthcare Guidance',
      'Career and Employment Support',
      'Post-Arrival Problem Solving',
      'Student-Centered Approach',
      'Ongoing Support Throughout Your Studies',
      'Commitment to Student Success',
    ],
    cta: 'Let us be your trusted partner before, during, and after your arrival abroad, helping you turn your educational goals into a successful international future.',
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  servicesData.find((s) => s.slug === slug);
