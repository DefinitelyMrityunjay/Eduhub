export interface TrainingDomain {
  title: string;
  description: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export const trainingPlacementData = {
  title: 'Training & Placement',
  tagline: 'Transforming Students into Industry-Ready Professionals',
  intro: [
    "In today's competitive job market, a degree alone is often not enough to secure a rewarding career. Employers are looking for candidates who possess practical skills, industry exposure, problem-solving abilities, and the confidence to contribute from day one. Our Training & Placement Program is designed to bridge the gap between academic education and real-world industry requirements.",
    'At our institute, we focus on developing future-ready professionals through comprehensive technical training, hands-on project experience, industry mentorship, and dedicated placement support. Whether you are a student, recent graduate, or working professional looking to upgrade your skills, our programs provide the knowledge, experience, and career guidance needed to achieve your professional goals.',
  ],

  whyMatters: {
    heading: 'Why Training & Placement Matters',
    description:
      'Many students complete their education with strong theoretical knowledge but limited practical experience. This often creates a gap between what companies expect and what candidates can deliver. Our Training & Placement Program addresses this challenge by helping students:',
    points: [
      'Develop industry-relevant technical skills',
      'Gain practical experience through live projects',
      'Build a professional portfolio',
      'Improve communication and interview skills',
      'Understand real workplace expectations',
      'Increase employability and career opportunities',
      'Prepare for internships, placements, and full-time jobs',
    ],
    closing: 'The objective is not just to provide training but to prepare students for long-term career success.',
  },

  domainsIntro:
    'Our training programs are carefully designed after analyzing current industry trends, hiring requirements, and emerging technologies. The curriculum focuses on practical learning rather than outdated theoretical concepts. Students can choose from a variety of high-demand technology domains, including:',
  domains: [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description:
        'Learn how intelligent systems are built using modern machine learning techniques, neural networks, data processing, and AI tools. Students work on real-world AI applications and predictive models.',
    },
    {
      title: 'Data Science & Analytics',
      description:
        'Master data analysis, visualization, statistics, SQL, Python, Power BI, and machine learning techniques used by leading organizations worldwide.',
    },
    {
      title: 'Full Stack Web Development',
      description:
        'Develop complete web applications using modern frontend and backend technologies, databases, APIs, deployment tools, and cloud platforms.',
    },
    {
      title: 'Cyber Security & Ethical Hacking',
      description:
        'Understand cybersecurity principles, vulnerability assessment, penetration testing, network security, and ethical hacking methodologies.',
    },
    {
      title: 'Cloud Computing & DevOps',
      description:
        'Learn industry-standard cloud platforms, deployment pipelines, containerization, automation tools, and infrastructure management techniques.',
    },
    {
      title: 'Mobile Application Development',
      description:
        'Build Android and iOS applications using modern frameworks and deployment practices used by professional development teams.',
    },
    {
      title: 'Programming & Software Engineering',
      description:
        'Develop strong foundations in Python, JavaScript, Data Structures & Algorithms, Object-Oriented Programming, and software development best practices.',
    },
  ] satisfies TrainingDomain[],

  projects: {
    heading: 'Learn Through Real Projects',
    intro:
      'One of the biggest challenges students face during placements is the lack of practical experience. Recruiters often ask: "What projects have you worked on?" Our training programs emphasize project-based learning, ensuring students gain real-world experience while learning.',
    types: [
      'Web applications',
      'Machine learning projects',
      'Data analysis solutions',
      'Mobile applications',
      'Cloud deployment projects',
      'Cybersecurity labs',
      'Automation tools',
      'Industry case studies',
    ],
    outcomesHeading: 'These projects help students:',
    outcomes: [
      'Apply theoretical concepts',
      'Build problem-solving abilities',
      'Understand industry workflows',
      'Create a strong portfolio',
      'Demonstrate skills during interviews',
    ],
    closing:
      'By the end of the training, students possess practical work that can be showcased to recruiters and hiring managers.',
  },

  placementPrepIntro:
    'Technical skills alone are not enough to secure a job. Students must also be prepared for the complete recruitment process. Our placement preparation framework includes:',
  placementPrep: [
    {
      title: 'Resume Development',
      description: 'Learn how to create professional resumes that effectively highlight skills, projects, certifications, and achievements.',
    },
    {
      title: 'LinkedIn & Professional Branding',
      description: 'Build a strong online presence and professional profile that attracts recruiters and hiring managers.',
    },
    {
      title: 'Aptitude Preparation',
      description: 'Strengthen logical reasoning, quantitative aptitude, analytical thinking, and problem-solving capabilities required during placement drives.',
    },
    {
      title: 'Coding Interview Preparation',
      description: 'Practice coding questions, algorithmic problem solving, and technical assessments frequently used by companies.',
    },
    {
      title: 'Technical Interview Training',
      description: 'Prepare for role-specific technical interviews through structured sessions and mock interview experiences.',
    },
    {
      title: 'HR Interview Preparation',
      description: 'Develop confidence in communication, personality assessment, behavioral interviews, and professional interactions.',
    },
    {
      title: 'Career Guidance & Mentorship',
      description: 'Receive guidance from experienced mentors who help students understand career paths, industry expectations, and growth opportunities.',
    },
  ] satisfies TrainingDomain[],

  placementAssistance: {
    heading: 'Dedicated Placement Assistance',
    intro:
      'Our commitment does not end when the training program is completed. We actively assist students in securing internships and job opportunities through dedicated placement support services. Placement assistance includes:',
    points: [
      'Internship opportunities',
      'Job referrals',
      'Hiring partner connections',
      'Placement drives',
      'Career counseling sessions',
      'Interview scheduling support',
      'Professional networking guidance',
    ],
    closing:
      'Our placement team continuously works to connect trained candidates with suitable career opportunities in the IT industry.',
  },

  benefitsHeading: 'Benefits of Joining Our Training & Placement Program',
  benefits: [
    {
      title: 'Live Interactive Learning',
      description: 'Unlike self-paced recorded content, students learn through live instructor-led sessions where they can interact, ask questions, and receive immediate feedback.',
    },
    {
      title: 'Industry Expert Trainers',
      description: 'Learn directly from professionals who actively work in the technology industry and bring real-world insights into every session.',
    },
    {
      title: 'Updated Curriculum',
      description: 'Course content is regularly updated to match changing industry requirements and technological advancements.',
    },
    {
      title: 'Practical Skill Development',
      description: 'Focus on building actual skills rather than simply completing theoretical coursework.',
    },
    {
      title: 'Professional Certification',
      description: 'Receive a training certificate upon successful completion of the program, validating your learning and project experience.',
    },
    {
      title: 'Flexible Learning Modes',
      description: 'Students can choose between online and offline learning modes based on their convenience and schedule.',
    },
    {
      title: 'Affordable Learning Options',
      description: 'Flexible payment options and EMI facilities make quality education accessible to a wider range of learners.',
    },
  ] satisfies BenefitItem[],

  journeyHeading: 'Our Training & Placement Journey',
  journey: [
    {
      step: '1',
      title: 'Career Consultation',
      description: 'Students meet with our counselors to discuss career goals, interests, and suitable learning paths.',
    },
    {
      step: '2',
      title: 'Enrollment & Orientation',
      description: 'A structured onboarding process helps students understand the program, curriculum, and expected outcomes.',
    },
    {
      step: '3',
      title: 'Live Technical Training',
      description: 'Students attend expert-led sessions and gain in-depth knowledge of their chosen technology domain.',
    },
    {
      step: '4',
      title: 'Project Development',
      description: 'Practical assignments and industry-level projects help reinforce learning through real implementation.',
    },
    {
      step: '5',
      title: 'Career Preparation',
      description: 'Dedicated placement preparation sessions ensure students are ready for recruitment processes.',
    },
    {
      step: '6',
      title: 'Placement Assistance',
      description: 'Students receive ongoing support to pursue internships, interviews, and job opportunities.',
    },
    {
      step: '7',
      title: 'Career Growth',
      description: 'Even after placement, students become part of a growing professional community that supports continuous learning and networking.',
    },
  ] satisfies JourneyStep[],

  closing: {
    heading: 'Your Journey Towards a Successful Career Starts Here',
    paragraphs: [
      'Success in the technology industry requires more than just academic qualifications. It demands practical skills, professional confidence, industry exposure, and the ability to solve real-world problems.',
      'Our Training & Placement Program is designed to help students build all of these qualities through structured learning, hands-on experience, mentorship, and career support.',
      'Whether your goal is to become a Software Developer, Data Scientist, AI Engineer, Cyber Security Specialist, Cloud Engineer, Mobile App Developer, or Technology Consultant, we provide the training and placement support needed to help you achieve it.',
    ],
    cta: 'Learn. Build. Grow. Get Placed. Take the first step toward a rewarding and successful career with our comprehensive Training & Placement Program.',
  },
};
