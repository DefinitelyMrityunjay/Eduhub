export interface CourseField {
  field: string;
  courses: string[];
}

export interface TuitionRow {
  program: string;
  fee: string;
}

export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  heroImage: string;
  tagline: string;
  description: string;
  tuition: string;
  workRights: string;
  postStudyVisa: string;
  whyStudy: { title: string; points: string[] }[];
  universities: string[];
  courses: CourseField[];
  tuitionTable: TuitionRow[];
  scholarships: string[];
  livingCost: { monthly: string; items: { label: string; cost: string }[] };
  intakes: string[];
}

export const countriesData: CountryData[] = [
  {
    slug: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop',
    tagline: 'World-Class Education, Multicultural Society & Clear Pathway to Permanent Residency',
    description: 'Canada is one of the most popular study destinations for international students, offering world-class education, excellent career opportunities, and an exceptional quality of life. With globally recognized degrees, a multicultural society, and strong post-study immigration pathways, Canada is the top choice for students seeking both academic excellence and long-term career growth.',
    tuition: 'CAD 19K–27K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'PGWP – up to 3 Years',
    whyStudy: [
      {
        title: 'Academic Excellence',
        points: ['Globally recognized degrees and qualifications', 'High-ranking universities and colleges', 'Industry-focused and research-driven curriculum', 'State-of-the-art laboratories and technology'],
      },
      {
        title: 'Career & Immigration',
        points: ['Post-Graduation Work Permit (PGWP) up to 3 years', 'Canadian Experience Class (CEC)', 'Express Entry & Provincial Nominee Programs', 'High demand for skilled international graduates'],
      },
      {
        title: 'Student-Friendly Environment',
        points: ['Ranked among the world\'s safest nations', 'Multicultural society — students from 200+ countries', 'Large Indian communities across major provinces', 'Excellent student support services'],
      },
      {
        title: 'Financial Benefits',
        points: ['Competitive tuition compared to USA & UK', 'Wide range of scholarships and financial aid', 'Merit-based and government-funded scholarships', 'Flexible education loan options'],
      },
    ],
    universities: ['McGill University', 'University of Guelph', 'Ontario Tech University', 'Lakehead University', 'Laurentian University', 'University of Regina', 'York University', 'University Canada West', 'Brock University', 'University of Windsor', 'University of Toronto', 'University of British Columbia', 'McMaster University', 'University of Alberta', 'Dalhousie University'],
    courses: [
      { field: 'Business & Management', courses: ['Business Administration', 'MBA', 'Finance', 'Marketing', 'International Business'] },
      { field: 'Computer Science & IT', courses: ['Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Software Engineering', 'Cloud Computing'] },
      { field: 'Engineering', courses: ['Mechanical Engineering', 'Civil Engineering', 'Computer Engineering', 'Electrical Engineering', 'Chemical Engineering'] },
      { field: 'Health Sciences', courses: ['Nursing', 'Public Health', 'Biotechnology', 'Healthcare Management'] },
      { field: 'Hospitality & Tourism', courses: ['Hotel Management', 'Tourism Management', 'Event Management'] },
    ],
    tuitionTable: [
      { program: 'Diploma Programs', fee: 'CAD 13,000 – 19,000/yr' },
      { program: "Bachelor's Degree", fee: 'CAD 19,000 – 27,000/yr' },
      { program: "Master's Degree", fee: 'CAD 22,000 – 34,000/yr' },
      { program: 'PhD Programs', fee: 'CAD 9,000 – 20,000/yr' },
    ],
    scholarships: ['Canada Graduate Scholarships', 'Vanier Canada Graduate Scholarships – CAD $50,000', 'Ontario Graduate Scholarship', 'University-Specific Merit Scholarships', 'International Student Entrance Scholarships'],
    livingCost: {
      monthly: 'CAD 1,200 – 2,500',
      items: [{ label: 'Accommodation', cost: 'CAD 600 – 1,500' }, { label: 'Food & Groceries', cost: 'CAD 250 – 400' }, { label: 'Transportation', cost: 'CAD 80 – 150' }, { label: 'Health Insurance', cost: 'CAD 50 – 100' }, { label: 'Internet & Mobile', cost: 'CAD 30 – 60' }],
    },
    intakes: ['September (Primary — Max Course Availability)', 'January (Popular Alternative Intake)', 'May (Selected Institutions)'],
  },
  {
    slug: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop',
    tagline: "The World's Most Popular Destination for Unmatched Academic Excellence & Global Career Opportunities",
    description: 'The United States is the world\'s most popular destination for international students, attracting over a million students annually. Home to many of the world\'s top-ranked universities, global corporations, and research institutions, the USA provides students with the skills, knowledge, and international exposure needed to succeed in today\'s competitive world.',
    tuition: 'USD 20K–60K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'OPT – up to 3 Years (STEM)',
    whyStudy: [
      {
        title: 'Academic Excellence',
        points: ['Home to many of the world\'s Top 100 universities', 'Flexible education system with customizable majors', 'Advanced research facilities and laboratories', 'Access to world-renowned professors and researchers'],
      },
      {
        title: 'Career Advantages',
        points: ['Optional Practical Training (OPT) after graduation', 'STEM OPT Extension up to 3 years', 'Internship opportunities with global companies', 'Access to the world\'s largest economy'],
      },
      {
        title: 'Research & Innovation',
        points: ['Global leader in scientific research', 'Home to major technological breakthroughs', 'Significant research funding opportunities', 'Strong university-industry collaboration'],
      },
      {
        title: 'Student Experience',
        points: ['Diverse and multicultural environment', 'Students from over 200 countries', 'Vibrant campus life and student organizations', 'Modern infrastructure and technology'],
      },
    ],
    universities: ['Harvard University', 'Yale University', 'Princeton University', 'Columbia University', 'Cornell University', 'University of Pennsylvania', 'Massachusetts Institute of Technology', 'Stanford University', 'University of California, Berkeley', 'California Institute of Technology', 'University of Chicago', 'University of Michigan'],
    courses: [
      { field: 'Computer Science & Technology', courses: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Cybersecurity', 'Software Engineering'] },
      { field: 'Business & Management', courses: ['MBA', 'Finance', 'Marketing', 'Business Analytics', 'Entrepreneurship'] },
      { field: 'Engineering', courses: ['Mechanical Engineering', 'Aerospace Engineering', 'Computer Engineering', 'Biomedical Engineering', 'Electrical Engineering'] },
      { field: 'Health Sciences', courses: ['Medicine', 'Nursing', 'Public Health', 'Biotechnology', 'Healthcare Administration'] },
      { field: 'Emerging Fields', courses: ['Robotics', 'Quantum Computing', 'FinTech', 'Neuroscience', 'Renewable Energy'] },
    ],
    tuitionTable: [
      { program: 'Community College', fee: 'USD 8,000 – 20,000/yr' },
      { program: "Bachelor's Degree", fee: 'USD 20,000 – 60,000/yr' },
      { program: "Master's Degree", fee: 'USD 25,000 – 70,000/yr' },
      { program: 'MBA Programs', fee: 'USD 35,000 – 100,000+/yr' },
      { program: 'PhD Programs', fee: 'Often Fully Funded' },
    ],
    scholarships: ['Merit-Based Scholarships (Academic Excellence)', 'Need-Based Financial Aid', 'Research Assistantships', 'Teaching Assistantships', 'Athletic Scholarships'],
    livingCost: {
      monthly: 'USD 1,300 – 4,000',
      items: [{ label: 'Accommodation', cost: 'USD 700 – 2,000' }, { label: 'Food & Groceries', cost: 'USD 250 – 600' }, { label: 'Transportation', cost: 'USD 80 – 300' }, { label: 'Health Insurance', cost: 'USD 100 – 300' }, { label: 'Internet & Mobile', cost: 'USD 50 – 100' }],
    },
    intakes: ['Fall – August/September (Primary Intake)', 'Spring – January (Second Largest)', 'Summer – May (Limited Programs)'],
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop',
    tagline: 'Centuries of Academic Heritage, Globally Respected Degrees & Unrivalled Career Prospects',
    description: 'The United Kingdom is one of the world\'s most prestigious education destinations, renowned for its centuries-old academic excellence, globally respected universities, and strong career prospects. From historic campuses and world-leading research facilities to vibrant multicultural cities and excellent post-study work opportunities, studying in the UK can be a life-changing experience.',
    tuition: '£12K–£30K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'Graduate Route – 2 Years (PhD: 3 Years)',
    whyStudy: [
      {
        title: 'Academic Excellence',
        points: ["Home to the world's oldest and most prestigious universities", "Shorter course durations — Bachelor's in 3 years, Master's in 1 year", 'Research-intensive learning environment', 'Access to world-class faculty and facilities'],
      },
      {
        title: 'Post-Study Work',
        points: ['Graduate Route Visa — stay and work for 2–3 years', 'Strong international employer recognition', 'Excellent internship and placement opportunities', 'High graduate employability rates'],
      },
      {
        title: 'Multicultural Environment',
        points: ['Students from over 180 countries', 'Diverse and inclusive society', 'Rich cultural and historical heritage', 'International networking opportunities'],
      },
      {
        title: 'Quality of Life',
        points: ['Safe and welcoming environment', 'Excellent public transportation', 'High-quality healthcare services', 'Easy travel access across Europe'],
      },
    ],
    universities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'University College London (UCL)', 'London School of Economics (LSE)', "King's College London", 'University of Edinburgh', 'University of Manchester', 'University of Bristol', 'University of Warwick'],
    courses: [
      { field: 'Business & Management', courses: ['MBA', 'International Business', 'Finance', 'Marketing', 'Business Analytics'] },
      { field: 'Computer Science & Technology', courses: ['Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Software Engineering', 'Machine Learning'] },
      { field: 'Engineering', courses: ['Mechanical Engineering', 'Aerospace Engineering', 'Civil Engineering', 'Automotive Engineering', 'Electrical Engineering'] },
      { field: 'Law & Social Sciences', courses: ['Law (LLB)', 'International Relations', 'Political Science', 'Economics', 'Psychology'] },
      { field: 'Healthcare & Medicine', courses: ['Medicine', 'Nursing', 'Public Health', 'Pharmacy', 'Healthcare Management'] },
    ],
    tuitionTable: [
      { program: 'Foundation Programs', fee: '£10,000 – £18,000/yr' },
      { program: "Bachelor's Degree", fee: '£12,000 – £30,000/yr' },
      { program: "Master's Degree", fee: '£14,000 – £40,000/yr' },
      { program: 'MBA Programs', fee: '£20,000 – £60,000+/yr' },
      { program: 'PhD Programs', fee: '£15,000 – £30,000/yr' },
    ],
    scholarships: ['Chevening Scholarships — Fully Funded (Future Leaders)', 'Commonwealth Scholarships — Commonwealth Country Students', 'GREAT Scholarships — Multiple Universities', 'University Merit Scholarships'],
    livingCost: {
      monthly: '£900 – £2,500',
      items: [{ label: 'Accommodation', cost: '£500 – 1,500' }, { label: 'Food & Groceries', cost: '£150 – 400' }, { label: 'Transportation', cost: '£50 – 200' }, { label: 'Utilities', cost: '£80 – 200' }, { label: 'Internet & Mobile', cost: '£30 – 60' }],
    },
    intakes: ['September (Primary — Maximum Availability)', 'January (Popular Alternative)', 'May (Limited Programs)'],
  },
  {
    slug: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1600&auto=format&fit=crop',
    tagline: 'World-Class Universities, Stunning Lifestyle & a Direct Pathway to Post-Study Work Rights',
    description: 'Australia is one of the world\'s most preferred destinations for international students, known for its high-quality education system, globally recognized qualifications, excellent quality of life, and strong career opportunities. With world-class universities, innovative teaching methods, and a multicultural society, Australia offers students the perfect environment to learn, grow, and succeed.',
    tuition: 'AUD 20K–45K/yr',
    workRights: '48 hrs/fortnight',
    postStudyVisa: 'Temporary Graduate Visa (Subclass 485) – 2 to 4 Years',
    whyStudy: [
      {
        title: 'Academic Excellence',
        points: ['Home to several globally ranked Group of Eight (Go8) universities', 'Internationally recognized degrees and qualifications', 'Practical and industry-focused learning', 'Advanced research facilities and laboratories'],
      },
      {
        title: 'Career Opportunities',
        points: ['Temporary Graduate Visa allowing post-study work rights', 'Strong employment market across multiple industries', 'Internship and industry placement programs', 'Pathways to permanent residency in selected occupations'],
      },
      {
        title: 'Student-Friendly Environment',
        points: ['Safe, welcoming, and multicultural society', 'Students from over 190 countries', 'Excellent student support services', 'High quality of life and modern infrastructure'],
      },
      {
        title: 'Research & Innovation',
        points: ['Global leader in research and development', 'Strong university-industry partnerships', 'Excellent STEM research opportunities', 'Significant government investment in innovation'],
      },
    ],
    universities: ['University of Melbourne', 'University of Sydney', 'Australian National University (ANU)', 'University of Queensland', 'Monash University', 'University of New South Wales (UNSW)', 'University of Adelaide', 'University of Western Australia', 'Queensland University of Technology', 'RMIT University', 'Deakin University', 'Macquarie University'],
    courses: [
      { field: 'IT & Computer Science', courses: ['Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Software Engineering', 'Cloud Computing'] },
      { field: 'Business & Management', courses: ['MBA', 'Finance', 'Marketing', 'Business Analytics', 'International Business'] },
      { field: 'Engineering', courses: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Mining Engineering', 'Software Engineering'] },
      { field: 'Healthcare & Nursing', courses: ['Nursing', 'Public Health', 'Healthcare Management', 'Physiotherapy', 'Medical Sciences'] },
      { field: 'Emerging Fields', courses: ['Renewable Energy', 'Environmental Science', 'Agribusiness', 'Robotics', 'Construction Management'] },
    ],
    tuitionTable: [
      { program: 'Diploma Programs', fee: 'AUD 10,000 – 25,000/yr' },
      { program: "Bachelor's Degree", fee: 'AUD 20,000 – 45,000/yr' },
      { program: "Master's Degree", fee: 'AUD 22,000 – 50,000/yr' },
      { program: 'MBA Programs', fee: 'AUD 35,000 – 80,000/yr' },
      { program: 'PhD Programs', fee: 'AUD 18,000 – 42,000/yr' },
    ],
    scholarships: ['Australia Awards Scholarships — Fully Funded (Government)', 'Destination Australia Program — Regional Australia', 'University Merit Scholarships', "Research Scholarships for Master's & PhD"],
    livingCost: {
      monthly: 'AUD 1,400 – 3,500',
      items: [{ label: 'Accommodation', cost: 'AUD 700 – 2,000' }, { label: 'Food & Groceries', cost: 'AUD 300 – 800' }, { label: 'Transportation', cost: 'AUD 100 – 250' }, { label: 'Utilities', cost: 'AUD 100 – 250' }, { label: 'Internet & Mobile', cost: 'AUD 50 – 100' }],
    },
    intakes: ['February (Primary — Largest Intake)', 'July (Second Major Intake)', 'November (Selected Programs)'],
  },
  {
    slug: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop',
    tagline: "Europe's Economic Powerhouse Offering Tuition-Free Education & World-Leading Engineering Programs",
    description: 'Germany is one of the most attractive study destinations for international students, renowned for its world-class education system, cutting-edge research, strong economy, and exceptional career opportunities. Many public universities offer low or no tuition fees, making Germany one of the best-value study destinations in the world.',
    tuition: '€0 – €1,500/yr (Public Universities)',
    workRights: '120 full days/yr',
    postStudyVisa: '18 Months Job Seeker Permit',
    whyStudy: [
      {
        title: 'Affordable Education',
        points: ['Low or no tuition fees at many public universities', 'Only semester administrative fees apply', 'Excellent return on investment (ROI)', 'Lower costs vs USA, UK, and Australia'],
      },
      {
        title: 'Career Opportunities',
        points: ["Europe's largest economy and job market", 'Home to BMW, Mercedes-Benz, Siemens, SAP, Bosch', '18-month post-study residence permit to find work', 'Strong demand for engineering and tech graduates'],
      },
      {
        title: 'Research Excellence',
        points: ['World-leading engineering and technology programs', 'Advanced research facilities and innovation centers', 'Wide range of English-taught programs', 'Strong industry-academia collaboration'],
      },
      {
        title: 'Quality of Life',
        points: ['Safe and student-friendly environment', 'Excellent public transportation', 'Central location in Europe for easy travel', 'Rich history, culture, and innovation'],
      },
    ],
    universities: ['Technical University of Munich', 'Ludwig Maximilian University of Munich', 'Heidelberg University', 'RWTH Aachen University', 'Karlsruhe Institute of Technology', 'Humboldt University of Berlin', 'Free University of Berlin', 'Technical University of Berlin', 'University of Freiburg', 'University of Stuttgart'],
    courses: [
      { field: 'Engineering', courses: ['Mechanical Engineering', 'Automotive Engineering', 'Aerospace Engineering', 'Civil Engineering', 'Mechatronics'] },
      { field: 'Computer Science & IT', courses: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Robotics', 'Cybersecurity'] },
      { field: 'Business & Management', courses: ['MBA', 'Finance', 'International Business', 'Supply Chain Management', 'Business Analytics'] },
      { field: 'Science & Research', courses: ['Physics', 'Biotechnology', 'Chemistry', 'Mathematics', 'Environmental Science'] },
      { field: 'Emerging Fields', courses: ['Quantum Computing', 'Autonomous Systems', 'Renewable Energy', 'Industry 4.0', 'FinTech'] },
    ],
    tuitionTable: [
      { program: "Bachelor's (Public)", fee: '€0 – €1,500/yr' },
      { program: "Master's (Public)", fee: '€0 – €1,500/yr' },
      { program: "Bachelor's (Private)", fee: '€8,000 – €20,000/yr' },
      { program: "Master's (Private)", fee: '€10,000 – €30,000/yr' },
      { program: 'PhD Programs', fee: 'Usually Free (Public)' },
    ],
    scholarships: ["DAAD Scholarship — Germany's Largest Scholarship Provider", 'Deutschlandstipendium — Merit-Based Program', 'University-Specific Scholarships', "Research Funding for Master's & PhD"],
    livingCost: {
      monthly: '€800 – €1,500',
      items: [{ label: 'Accommodation', cost: '€300 – 800' }, { label: 'Food & Groceries', cost: '€150 – 300' }, { label: 'Health Insurance', cost: '€120 – 150' }, { label: 'Transportation', cost: '€30 – 80' }, { label: 'Internet & Mobile', cost: '€30 – 50' }],
    },
    intakes: ['Winter – October (Primary Intake, Largest Availability)', 'Summer – April (Selected Programs)'],
  },
  {
    slug: 'france',
    name: 'France',
    flag: '🇫🇷',
    heroImage: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=1600&auto=format&fit=crop',
    tagline: 'Prestigious Education, Rich Culture & a Gateway to European Career Opportunities',
    description: "France is one of the world's most prestigious study destinations, known for its rich academic heritage, globally recognized universities, affordable education, and strong career opportunities. As the world's seventh-largest economy and a global leader in business, luxury, fashion, engineering, and technology, France offers students an exceptional environment to learn, innovate, and grow.",
    tuition: '€170 – €4,000/yr (Public Universities)',
    workRights: '20 hrs/week',
    postStudyVisa: 'Temporary Residence for Employment',
    whyStudy: [
      {
        title: 'Affordable Education',
        points: ['Government-supported public universities with low fees', 'Significantly lower than USA, UK, and Australia', 'Numerous scholarships and grants available', 'Excellent return on investment'],
      },
      {
        title: 'Career Opportunities',
        points: ["Home to L'Oréal, Airbus, Capgemini, Louis Vuitton, Renault", 'Access to the European job market', 'Internship opportunities integrated into many programs', 'Post-study work opportunities for international graduates'],
      },
      {
        title: 'Academic Heritage',
        points: ['Home to globally recognized Grandes Écoles', 'Strong emphasis on research, innovation, and practical learning', 'Wide range of English-taught programs', 'Globally renowned business and management schools'],
      },
      {
        title: 'Quality of Life',
        points: ['Rich culture, history, and art', 'World-famous cuisine and lifestyle', 'Excellent public transportation', 'Easy travel throughout Europe'],
      },
    ],
    universities: ['Sorbonne University', 'Université Paris-Saclay', 'École Polytechnique', 'HEC Paris', 'ESSEC Business School', 'ESCP Business School', 'Sciences Po', 'Grenoble INP', 'INSA Lyon', 'Université de Lyon'],
    courses: [
      { field: 'Business & Management', courses: ['MBA', 'International Business', 'Finance', 'Marketing', 'Luxury Brand Management'] },
      { field: 'Engineering & Technology', courses: ['Mechanical Engineering', 'Aerospace Engineering', 'Artificial Intelligence', 'Data Science', 'Robotics'] },
      { field: 'Fashion & Luxury', courses: ['Fashion Design', 'Luxury Brand Management', 'Fashion Marketing', 'Luxury Business'] },
      { field: 'Hospitality & Tourism', courses: ['Hotel Management', 'Tourism Management', 'Culinary Arts', 'Event Management'] },
      { field: 'Arts & Design', courses: ['Architecture', 'Graphic Design', 'Fine Arts', 'Interior Design'] },
    ],
    tuitionTable: [
      { program: "Public Bachelor's", fee: '€170 – €4,000/yr' },
      { program: "Public Master's", fee: '€250 – €5,000/yr' },
      { program: 'Private Universities', fee: '€5,000 – €20,000+/yr' },
      { program: 'Business Schools', fee: '€8,000 – €30,000+/yr' },
      { program: 'MBA Programs', fee: '€15,000 – €50,000+/yr' },
    ],
    scholarships: ["Eiffel Excellence Scholarship — Fully Funded (Master's & PhD)", 'Charpak Scholarship — For Indian Students', 'Erasmus+ — European Funding Program', 'University Merit Scholarships'],
    livingCost: {
      monthly: '€700 – €1,800',
      items: [{ label: 'Accommodation', cost: '€300 – 1,000' }, { label: 'Food & Groceries', cost: '€200 – 400' }, { label: 'Transportation', cost: '€30 – 80' }, { label: 'Health Insurance', cost: '€30 – 80' }, { label: 'Internet & Mobile', cost: '€20 – 50' }],
    },
    intakes: ['September (Primary Intake — Maximum Availability)', 'January (Selected Universities & Business Schools)'],
  },
  {
    slug: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    heroImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1600&auto=format&fit=crop',
    tagline: 'Globally Recognized Qualifications, Stunning Landscapes & Outstanding Quality of Life',
    description: "New Zealand is one of the world's most sought-after study destinations, offering internationally recognized education, a safe and welcoming environment, excellent career opportunities, and an exceptional quality of life. Consistently ranked among the safest and most peaceful countries in the world, New Zealand provides students with the perfect balance between academic excellence and personal growth.",
    tuition: 'NZD 22K–40K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'Post-Study Open Work Visa',
    whyStudy: [
      {
        title: 'Academic Excellence',
        points: ["Universities ranked among the world's best institutions", 'Practical and industry-focused education', 'Research-led learning environment', 'Small class sizes and personalized attention'],
      },
      {
        title: 'Career & Immigration',
        points: ['Post-study work visa opportunities', 'Strong employment prospects for graduates', 'Growing demand for skilled professionals', 'Pathways to long-term residency'],
      },
      {
        title: 'Safe Environment',
        points: ["Consistently ranked one of the world's safest countries", 'Friendly and multicultural society', 'Excellent healthcare system', 'Strong international student support'],
      },
      {
        title: 'Quality of Life',
        points: ['Spectacular natural beauty', 'Adventure and outdoor lifestyle', 'Balanced work-life culture', 'Modern, peaceful, student-friendly cities'],
      },
    ],
    universities: ['University of Auckland', 'University of Otago', 'Victoria University of Wellington', 'University of Canterbury', 'Massey University', 'University of Waikato', 'Lincoln University', 'Auckland University of Technology (AUT)'],
    courses: [
      { field: 'IT & Computer Science', courses: ['Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Software Engineering', 'Cloud Computing'] },
      { field: 'Business & Management', courses: ['MBA', 'Finance', 'Marketing', 'Business Analytics', 'International Business'] },
      { field: 'Engineering', courses: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Environmental Engineering'] },
      { field: 'Healthcare & Nursing', courses: ['Nursing', 'Public Health', 'Healthcare Management', 'Medical Sciences'] },
      { field: 'Agriculture & Environment', courses: ['Agricultural Science', 'Agribusiness', 'Environmental Management', 'Sustainability Studies'] },
    ],
    tuitionTable: [
      { program: 'Diploma Programs', fee: 'NZD 12,000 – 25,000/yr' },
      { program: "Bachelor's Degree", fee: 'NZD 22,000 – 40,000/yr' },
      { program: "Master's Degree", fee: 'NZD 26,000 – 50,000/yr' },
      { program: 'MBA Programs', fee: 'NZD 30,000 – 65,000/yr' },
      { program: 'PhD Programs', fee: 'NZD 6,000 – 12,000/yr' },
    ],
    scholarships: ['New Zealand Scholarships — Government Funded', "Manaaki New Zealand Scholarships — Prestigious International", 'University Merit Scholarships', "Research Scholarships for Master's & PhD"],
    livingCost: {
      monthly: 'NZD 1,300 – 3,300',
      items: [{ label: 'Accommodation', cost: 'NZD 600 – 1,500' }, { label: 'Food & Groceries', cost: 'NZD 300 – 700' }, { label: 'Transportation', cost: 'NZD 100 – 250' }, { label: 'Utilities', cost: 'NZD 100 – 250' }, { label: 'Internet & Mobile', cost: 'NZD 50 – 100' }],
    },
    intakes: ['February (Primary — Maximum Availability)', 'July (Second Major Intake)', 'November (Selected Institutions)'],
  },
  {
    slug: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    heroImage: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=1600&auto=format&fit=crop',
    tagline: "The Silicon Valley of Europe — Home to Google, Meta, Microsoft, Apple & LinkedIn",
    description: 'Ireland has rapidly become one of the most popular study destinations for international students, offering world-class education, globally recognized qualifications, excellent career opportunities, and a welcoming environment. Known as the "Silicon Valley of Europe," Ireland is home to the European headquarters of many global technology, pharmaceutical, and financial companies.',
    tuition: '€10K–€25K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'Third Level Graduate Programme – up to 2 Years',
    whyStudy: [
      {
        title: 'Technology Hub',
        points: ['European HQ of Google, Meta, Microsoft, Apple, LinkedIn', 'Intel, Pfizer, and major pharmaceutical companies', 'Excellent internship and employment opportunities', "One of Europe's fastest-growing tech sectors"],
      },
      {
        title: 'Career Opportunities',
        points: ['Third Level Graduate Programme — stay up to 2 years', 'Access to the European job market', 'Excellent graduate employability rates', 'Thriving technology, finance, and pharma sectors'],
      },
      {
        title: 'Academic Excellence',
        points: ["Universities ranked among the world's leading institutions", 'Research-intensive education system', 'Cutting-edge research facilities', 'English-speaking country — no language barriers'],
      },
      {
        title: 'Safe & Welcoming',
        points: ['English-speaking country with no language barriers', 'Friendly and multicultural society', 'Safe and student-friendly cities', 'Growing Indian student community'],
      },
    ],
    universities: ['Trinity College Dublin', 'University College Dublin', 'University of Galway', 'University College Cork', 'Dublin City University', 'University of Limerick', 'Maynooth University', 'Technological University Dublin'],
    courses: [
      { field: 'Computer Science & Technology', courses: ['Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Software Engineering', 'Cloud Computing'] },
      { field: 'Business & Finance', courses: ['MBA', 'Finance', 'Business Analytics', 'Marketing', 'International Business'] },
      { field: 'Engineering', courses: ['Mechanical Engineering', 'Civil Engineering', 'Biomedical Engineering', 'Electrical Engineering'] },
      { field: 'Healthcare & Life Sciences', courses: ['Biotechnology', 'Pharmaceutical Sciences', 'Public Health', 'Healthcare Management'] },
      { field: 'Emerging Fields', courses: ['FinTech', 'Robotics', 'Machine Learning', 'Renewable Energy', 'Digital Transformation'] },
    ],
    tuitionTable: [
      { program: "Bachelor's Degree", fee: '€10,000 – €25,000/yr' },
      { program: "Master's Degree", fee: '€12,000 – €35,000/yr' },
      { program: 'MBA Programs', fee: '€20,000 – €40,000+/yr' },
      { program: 'PhD Programs', fee: '€8,000 – €20,000/yr' },
    ],
    scholarships: ['Government of Ireland Scholarships — International Students', 'University Merit Scholarships', "Research Scholarships for Master's & PhD"],
    livingCost: {
      monthly: '€1,100 – €2,500',
      items: [{ label: 'Accommodation', cost: '€600 – 1,500' }, { label: 'Food & Groceries', cost: '€200 – 400' }, { label: 'Transportation', cost: '€50 – 150' }, { label: 'Utilities', cost: '€80 – 150' }, { label: 'Internet & Mobile', cost: '€30 – 60' }],
    },
    intakes: ['September (Primary — Maximum Availability)', 'January (Selected Universities)'],
  },
  {
    slug: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop',
    tagline: 'Centuries of Academic Heritage, Affordable Tuition & World-Leading Design & Engineering Programs',
    description: "Italy is one of Europe's most prestigious and affordable study destinations, offering internationally recognized degrees, centuries of academic excellence, rich cultural heritage, and outstanding career opportunities. Home to some of the world's oldest universities, Italy has shaped modern science, engineering, architecture, business, and the arts.",
    tuition: '€1K–€6K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'EU Job Market Access',
    whyStudy: [
      {
        title: 'Academic Excellence',
        points: ["Home to some of the world's oldest universities", 'Globally recognized degrees and qualifications', 'Strong focus on research and innovation', 'Internationally respected engineering, architecture & design programs'],
      },
      {
        title: 'Affordable Education',
        points: ['Lower tuition than USA, UK, Canada, and Australia', 'Numerous government and university scholarships', 'Affordable student living costs', 'Excellent return on investment'],
      },
      {
        title: 'Career Opportunities',
        points: ['Strong industries in engineering, fashion, design, and automotive', 'Access to the European job market', 'Internship opportunities during studies', 'Post-study work opportunities in the EU'],
      },
      {
        title: 'Cultural Experience',
        points: ['Home of the Renaissance and ancient civilization', 'World-famous art, architecture, and history', 'Mediterranean lifestyle and cuisine', 'Vibrant international student communities'],
      },
    ],
    universities: ['Politecnico di Milano', 'Sapienza University of Rome', 'University of Bologna', 'Politecnico di Torino', 'University of Padua', 'University of Milan', 'University of Pisa', 'Bocconi University'],
    courses: [
      { field: 'Engineering & Technology', courses: ['Mechanical Engineering', 'Automotive Engineering', 'Artificial Intelligence', 'Data Science', 'Robotics'] },
      { field: 'Business & Management', courses: ['MBA', 'International Business', 'Finance', 'Marketing', 'Business Analytics'] },
      { field: 'Design & Fashion', courses: ['Fashion Design', 'Luxury Brand Management', 'Interior Design', 'Industrial Design'] },
      { field: 'Architecture', courses: ['Architecture', 'Urban Planning', 'Sustainable Design'] },
    ],
    tuitionTable: [
      { program: "Bachelor's Degree", fee: '€1,000 – €6,000/yr' },
      { program: "Master's Degree", fee: '€1,500 – €8,000/yr' },
      { program: 'MBA Programs', fee: '€8,000 – €35,000/yr' },
      { program: 'PhD Programs', fee: 'Often Funded' },
    ],
    scholarships: ['Italian Government Scholarships — International Students', 'Regional Scholarships (DSU) — Tuition Waivers & Living Allowances', 'University Merit Scholarships'],
    livingCost: {
      monthly: '€700 – €1,800',
      items: [{ label: 'Accommodation', cost: '€300 – 900' }, { label: 'Food & Groceries', cost: '€200 – 400' }, { label: 'Transportation', cost: '€30 – 70' }, { label: 'Utilities', cost: '€50 – 120' }, { label: 'Personal Expenses', cost: '€100 – 300' }],
    },
    intakes: ['September/October (Primary Intake)', 'February/March (Second Intake)'],
  },
  {
    slug: 'poland',
    name: 'Poland',
    flag: '🇵🇱',
    heroImage: 'https://images.unsplash.com/photo-1502103479002-2596f7bf72db?q=80&w=1600&auto=format&fit=crop',
    tagline: "Europe's Rising Education Destination with Affordable Tuition & Globally Recognized Degrees",
    description: "Poland has emerged as one of Europe's fastest-growing study destinations, offering affordable tuition fees, high-quality education, internationally recognized degrees, and strong career opportunities. With an increasing number of English-taught programs and access to the European job market, Poland is an excellent choice for quality education at competitive costs.",
    tuition: '€2K–€6K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'EU Job Market Access',
    whyStudy: [
      {
        title: 'Affordable Education',
        points: ['Competitive tuition fees vs. Western Europe', "Low living costs — one of Europe's most affordable", 'Excellent return on investment', 'Increasing English-taught programs'],
      },
      {
        title: 'European Opportunities',
        points: ['EU-recognized degrees accepted worldwide', 'Access to the European job market', 'Growing economy with strong job prospects', 'Erasmus+ and EU scholarship opportunities'],
      },
      {
        title: 'Strong Programs',
        points: ['Renowned for engineering and IT programs', 'Excellent medical and health science faculties', 'Strong business and management schools', 'Globally recognized technical universities'],
      },
      {
        title: 'Safe Environment',
        points: ['Safe and welcoming country', 'Rich history and cultural heritage', 'Vibrant student cities', 'Friendly international student community'],
      },
    ],
    universities: ['University of Warsaw', 'Jagiellonian University', 'Warsaw University of Technology', 'AGH University of Science and Technology', 'Wroclaw University of Science and Technology'],
    courses: [
      { field: 'Computer Science & IT', courses: ['Computer Science', 'Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Software Engineering'] },
      { field: 'Engineering', courses: ['Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Chemical Engineering'] },
      { field: 'Business & Finance', courses: ['Business Management', 'Finance', 'Marketing', 'International Business'] },
      { field: 'Medical & Health', courses: ['Medicine', 'Pharmacy', 'Dentistry', 'Public Health'] },
    ],
    tuitionTable: [
      { program: "Bachelor's Degree", fee: '€2,000 – €6,000/yr' },
      { program: "Master's Degree", fee: '€2,500 – €8,000/yr' },
      { program: 'Medical Programs', fee: '€10,000 – €15,000/yr' },
    ],
    scholarships: ['Polish Government Scholarships', 'University Merit Scholarships', 'Erasmus+ European Scholarship'],
    livingCost: {
      monthly: '€500 – €1,200',
      items: [{ label: 'Accommodation', cost: '€200 – 600' }, { label: 'Food & Groceries', cost: '€150 – 300' }, { label: 'Transportation', cost: '€20 – 50' }, { label: 'Utilities', cost: '€50 – 100' }, { label: 'Personal Expenses', cost: '€80 – 200' }],
    },
    intakes: ['October (Primary Intake)', 'February/March (Second Intake)'],
  },
  {
    slug: 'denmark',
    name: 'Denmark',
    flag: '🇩🇰',
    heroImage: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1600&auto=format&fit=crop',
    tagline: "Innovation, Sustainability & World-Class Education in One of the World's Happiest Countries",
    description: "Denmark consistently ranks among the happiest countries in the world and offers a world-renowned education system focused on innovation, sustainability, research, and practical learning. Known for its strong research ecosystem, high quality of life, and focus on technology and sustainability, Denmark is an ideal destination for ambitious international students.",
    tuition: '€6K–€16K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'Job Seeker Permit – 6 Months',
    whyStudy: [
      {
        title: 'Innovation Leadership',
        points: ['Global leader in sustainability and green technology', 'Focus on innovation and practical learning', 'Strong research ecosystem', 'Industry-integrated education'],
      },
      {
        title: 'Quality of Life',
        points: ["Ranked among the world's happiest countries", 'Excellent work-life balance', 'Safe and student-friendly environment', 'High living standards and excellent healthcare'],
      },
      {
        title: 'Academic Excellence',
        points: ['Globally recognized universities', 'Innovative teaching methods', 'Wide range of English-taught programs', 'Strong faculty and academic resources'],
      },
      {
        title: 'Career Opportunities',
        points: ['Strong job market across technology and business', '6-month job seeker permit after graduation', 'Access to the European job market', 'High demand for skilled professionals'],
      },
    ],
    universities: ['University of Copenhagen', 'Technical University of Denmark (DTU)', 'Aarhus University', 'Aalborg University', 'Copenhagen Business School'],
    courses: [
      { field: 'Technology & Innovation', courses: ['Artificial Intelligence', 'Data Science', 'Renewable Energy', 'Robotics', 'Computer Science'] },
      { field: 'Business & Management', courses: ['Business Analytics', 'MBA', 'Finance', 'Marketing', 'International Business'] },
      { field: 'Science & Research', courses: ['Biotechnology', 'Environmental Science', 'Engineering', 'Mathematics'] },
    ],
    tuitionTable: [
      { program: "Bachelor's Degree", fee: '€6,000 – €16,000/yr' },
      { program: "Master's Degree", fee: '€8,000 – €20,000/yr' },
    ],
    scholarships: ['Danish Government Scholarships', 'University Merit Scholarships', 'Erasmus+ European Scholarship'],
    livingCost: {
      monthly: '€900 – €1,800',
      items: [{ label: 'Accommodation', cost: '€400 – 900' }, { label: 'Food & Groceries', cost: '€200 – 400' }, { label: 'Transportation', cost: '€50 – 100' }, { label: 'Utilities', cost: '€80 – 150' }, { label: 'Personal Expenses', cost: '€150 – 300' }],
    },
    intakes: ['September (Primary Intake)', 'February (Second Intake)'],
  },
  {
    slug: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    heroImage: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1600&auto=format&fit=crop',
    tagline: 'World-Class Universities, Global Corporations & an Unmatched Quality of Life in the Heart of Europe',
    description: "Switzerland is one of the world's most prestigious study destinations, known for its exceptional education system, innovation-driven economy, outstanding quality of life, and strong global reputation. Home to world-leading universities, multinational corporations, and international organizations including the United Nations, Switzerland offers students a truly world-class educational experience.",
    tuition: 'CHF 1K–8K/yr',
    workRights: '15 hrs/week',
    postStudyVisa: 'Job Seeker Permit – 6 Months',
    whyStudy: [
      {
        title: 'World-Class Education',
        points: ['Globally ranked universities led by ETH Zurich and EPFL', 'Research-intensive learning environment', 'Internationally recognized degrees', 'Cutting-edge laboratories and facilities'],
      },
      {
        title: 'Global Career Hub',
        points: ['Home to Nestlé, Novartis, Roche, UBS, and Credit Suisse', 'United Nations Office at Geneva', 'Strong international employer presence', 'Excellent networking with global organizations'],
      },
      {
        title: 'Innovation Ecosystem',
        points: ['Consistently ranked most innovative country in the world', 'World-leading engineering and hospitality programs', 'Strong precision engineering and pharma sectors', 'Excellent R&D opportunities'],
      },
      {
        title: 'Quality of Life',
        points: ['One of the safest countries in the world', 'Excellent healthcare system', 'Efficient public transport', 'Multicultural environment with high living standards'],
      },
    ],
    universities: ['ETH Zurich', 'EPFL (École Polytechnique Fédérale de Lausanne)', 'University of Zurich', 'University of Geneva', 'University of Basel', 'IMD Business School'],
    courses: [
      { field: 'Engineering & Technology', courses: ['Artificial Intelligence', 'Robotics', 'Data Science', 'Computer Science', 'Mechanical Engineering'] },
      { field: 'Business & Finance', courses: ['Banking & Finance', 'MBA', 'International Business', 'Wealth Management'] },
      { field: 'Hospitality & Tourism', courses: ['Hotel Management', 'Luxury Brand Management', 'Tourism Management'] },
    ],
    tuitionTable: [
      { program: "Bachelor's Degree", fee: 'CHF 1,000 – 8,000/yr' },
      { program: "Master's Degree", fee: 'CHF 1,500 – 10,000/yr' },
      { program: 'MBA Programs', fee: 'CHF 20,000 – 80,000+/yr' },
    ],
    scholarships: ['Swiss Government Excellence Scholarships', 'ETH Zurich Excellence Scholarships', 'University-Specific Scholarships'],
    livingCost: {
      monthly: 'CHF 1,500 – 3,500',
      items: [{ label: 'Accommodation', cost: 'CHF 700 – 2,000' }, { label: 'Food', cost: 'CHF 300 – 700' }, { label: 'Transportation', cost: 'CHF 50 – 150' }, { label: 'Health Insurance', cost: 'CHF 200 – 400' }, { label: 'Personal Expenses', cost: 'CHF 200 – 500' }],
    },
    intakes: ['September (Primary Intake)', 'February (Second Intake)'],
  },
  {
    slug: 'hungary',
    name: 'Hungary',
    flag: '🇭🇺',
    heroImage: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1600&auto=format&fit=crop',
    tagline: 'Affordable European Education, Vibrant Student Life & Home to the Stipendium Hungaricum Scholarship',
    description: "Hungary has become one of Europe's fastest-growing study destinations due to its affordable tuition fees, internationally recognized degrees, and vibrant student life. Home to one of Europe's most popular fully funded scholarship programs — the Stipendium Hungaricum — Hungary is an excellent choice for quality European education at an affordable cost.",
    tuition: '€2.5K–€8K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'EU Job Market Access',
    whyStudy: [
      {
        title: 'Affordable Education',
        points: ['Competitive tuition fees well below Western European rates', "One of Europe's most affordable living destinations", 'Excellent quality-to-cost ratio', 'EU-recognized degrees'],
      },
      {
        title: 'Stipendium Hungaricum',
        points: ["One of Europe's most popular fully funded scholarship programs", 'Covers tuition, accommodation, and living allowance', 'Available for students from many countries', 'Prestigious government-backed scholarship'],
      },
      {
        title: 'Program Excellence',
        points: ['Excellent medical and health science programs', 'Renowned engineering and technology faculties', 'Strong business management schools', 'English-taught programs widely available'],
      },
      {
        title: 'European Access',
        points: ['EU member state with recognized qualifications', 'Access to European job market', 'Budapest is a vibrant, student-friendly city', 'Rich history and cultural heritage'],
      },
    ],
    universities: ['University of Debrecen', 'Eötvös Loránd University (ELTE)', 'University of Szeged', 'Budapest University of Technology and Economics', 'Semmelweis University'],
    courses: [
      { field: 'Medical & Health Sciences', courses: ['Medicine', 'Dentistry', 'Pharmacy', 'Physiotherapy', 'Public Health'] },
      { field: 'Engineering & Technology', courses: ['Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Computer Science'] },
      { field: 'Business & Management', courses: ['Business Management', 'Finance', 'MBA', 'International Business'] },
    ],
    tuitionTable: [
      { program: "Bachelor's Degree", fee: '€2,500 – €8,000/yr' },
      { program: "Master's Degree", fee: '€3,000 – €10,000/yr' },
      { program: 'Medicine', fee: '€12,000 – €20,000/yr' },
    ],
    scholarships: ['Stipendium Hungaricum — Fully Funded (Tuition + Accommodation + Allowance)', 'University Merit Scholarships', 'Hungarian Government Scholarships'],
    livingCost: {
      monthly: '€500 – €1,000',
      items: [{ label: 'Accommodation', cost: '€200 – 500' }, { label: 'Food & Groceries', cost: '€150 – 300' }, { label: 'Transportation', cost: '€20 – 50' }, { label: 'Utilities', cost: '€50 – 100' }, { label: 'Personal Expenses', cost: '€80 – 200' }],
    },
    intakes: ['September (Primary Intake)', 'February (Second Intake)'],
  },
  {
    slug: 'malta',
    name: 'Malta',
    flag: '🇲🇹',
    heroImage: 'https://images.unsplash.com/photo-1580687774429-97ec2261764b?q=80&w=1600&auto=format&fit=crop',
    tagline: 'An English-Speaking European Gem with Affordable Education & Mediterranean Lifestyle',
    description: 'Malta is a rapidly growing study destination known for its English-speaking environment, affordable education, beautiful climate, and European Union membership. Located in the heart of the Mediterranean, Malta offers students a unique combination of high-quality education, EU-recognized qualifications, and an exceptional island lifestyle.',
    tuition: '€5K–€12K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'EU Job Market Access',
    whyStudy: [
      {
        title: 'English-Speaking EU',
        points: ['Official English-speaking EU country', 'No language barrier for international students', 'EU-recognized degrees accepted worldwide', 'Easy transition for English-speaking students'],
      },
      {
        title: 'Affordable Education',
        points: ['Lower tuition fees than mainland Europe', 'Affordable cost of living', 'EU qualifications at reduced costs', 'Excellent return on investment'],
      },
      {
        title: 'Mediterranean Lifestyle',
        points: ['Beautiful island with excellent weather year-round', 'Safe and welcoming environment', 'Rich history and cultural heritage', 'Vibrant international student community'],
      },
      {
        title: 'Career Opportunities',
        points: ['Growing economy with tech, gaming, and finance sectors', 'Access to European job market', 'Excellent for English language and business programs', 'Growing demand for skilled graduates'],
      },
    ],
    universities: ['University of Malta', 'Global College Malta', 'MCAST (Malta College of Arts, Science & Technology)'],
    courses: [
      { field: 'Business & Management', courses: ['Business Management', 'Marketing', 'Finance', 'International Business'] },
      { field: 'IT & Technology', courses: ['Information Technology', 'Gaming & Digital Media', 'Cybersecurity'] },
      { field: 'Hospitality & Tourism', courses: ['Hospitality Management', 'Tourism Management', 'Event Management'] },
    ],
    tuitionTable: [
      { program: "Bachelor's Degree", fee: '€5,000 – €12,000/yr' },
      { program: "Master's Degree", fee: '€6,000 – €15,000/yr' },
    ],
    scholarships: ['University of Malta Scholarships', 'EU Funding Programs', 'Government Merit Scholarships'],
    livingCost: {
      monthly: '€700 – €1,500',
      items: [{ label: 'Accommodation', cost: '€300 – 800' }, { label: 'Food & Groceries', cost: '€150 – 300' }, { label: 'Transportation', cost: '€20 – 50' }, { label: 'Utilities', cost: '€50 – 100' }, { label: 'Personal Expenses', cost: '€100 – 250' }],
    },
    intakes: ['October (Primary Intake)', 'March/April (Second Intake)'],
  },
  {
    slug: 'latvia',
    name: 'Latvia',
    flag: '🇱🇻',
    heroImage: 'https://images.unsplash.com/photo-1583573636152-f91bfa13eca1?q=80&w=1600&auto=format&fit=crop',
    tagline: 'Affordable European Education with Internationally Recognized Degrees in the Baltic Region',
    description: "Latvia is one of Europe's emerging education destinations, offering affordable tuition fees, internationally recognized degrees, and a high-quality European education system. Located in the Baltic region, Latvia provides students with access to European opportunities at significantly lower costs than many Western European countries.",
    tuition: '€2K–€6K/yr',
    workRights: '20 hrs/week',
    postStudyVisa: 'EU Job Market Access',
    whyStudy: [
      {
        title: 'Affordable Education',
        points: ['Competitive tuition fees — much lower than Western Europe', 'Very low cost of living', 'Excellent value for EU-recognized qualifications', 'English-taught programs widely available'],
      },
      {
        title: 'EU Recognition',
        points: ['EU member state with globally recognized degrees', 'Access to the European job market', 'Internationally accredited universities', 'Qualify for EU scholarships and funding'],
      },
      {
        title: 'Student-Friendly',
        points: ['Safe and welcoming society', 'Modern infrastructure and campus facilities', 'Growing international student community', 'Supportive student services'],
      },
      {
        title: 'Career Prospects',
        points: ['Growing economy in the Baltic region', 'Access to EU and Baltic job markets', 'Strong demand in tech, engineering, and medicine', 'Excellent networking opportunities'],
      },
    ],
    universities: ['University of Latvia', 'Riga Technical University', 'Riga Stradins University', 'Transport and Telecommunication Institute'],
    courses: [
      { field: 'Computer Science & IT', courses: ['Computer Science', 'Data Science', 'Artificial Intelligence', 'Software Engineering'] },
      { field: 'Engineering', courses: ['Engineering', 'Transport & Logistics', 'Electronics'] },
      { field: 'Medical & Health', courses: ['Medicine', 'Pharmacy', 'Dentistry', 'Nursing'] },
      { field: 'Business & Management', courses: ['Business Administration', 'Finance', 'International Business'] },
    ],
    tuitionTable: [
      { program: "Bachelor's Degree", fee: '€2,000 – €6,000/yr' },
      { program: "Master's Degree", fee: '€3,000 – €8,000/yr' },
      { program: 'Medical Programs', fee: '€8,000 – €15,000/yr' },
    ],
    scholarships: ['Latvian Government Scholarships', 'University Merit Scholarships', 'EU Erasmus+ Scholarship'],
    livingCost: {
      monthly: '€500 – €1,200',
      items: [{ label: 'Accommodation', cost: '€200 – 600' }, { label: 'Food', cost: '€150 – 300' }, { label: 'Transportation', cost: '€20 – 50' }, { label: 'Personal Expenses', cost: '€100 – 250' }],
    },
    intakes: ['September (Primary Intake)', 'February (Second Intake)'],
  },
];
