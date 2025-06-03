export interface Job {
  id: number
  title: string
  company: string
  location: string
  type: "Full-time" | "Part-time" | "Remote" | "Contract"
  salary: string
  salaryMin: number
  salaryMax: number
  description: string
  postedDate: string
  logo: string
  companyImage: string
  featured: boolean
  skills: string[]
  experience: string
  experienceLevel: "Entry" | "Mid" | "Senior" | "Executive"
  industry: string
  companySize: "Startup" | "Small" | "Medium" | "Large" | "Enterprise"
  urgent: boolean
  benefits: string[]
  applicationCount: number
  companyRating: number
  remoteOk: boolean
}

export interface Company {
  id: number
  name: string
  logo: string
  rating: number
  reviewCount: number
  size: string
  industry: string
  description: string
  website: string
  founded: number
  headquarters: string
}

export interface JobAlert {
  id: string
  title: string
  location: string
  type: string
  salaryMin: number
  salaryMax: number
  keywords: string[]
  email: string
  active: boolean
  createdAt: string
}

export interface Application {
  id: string
  jobId: number
  status: "Applied" | "Reviewing" | "Interview" | "Rejected" | "Offer"
  appliedDate: string
  lastUpdate: string
}

export const jobsData: Job[] = [
  // Indian Tech Hub Jobs
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechMahindra",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "₹25L - ₹35L",
    salaryMin: 2500000,
    salaryMax: 3500000,
    description:
      "Join India's Silicon Valley! Work from our state-of-the-art Bangalore campus with world-class facilities. Build next-generation applications using React, Node.js, and cloud technologies. Enjoy flexible work arrangements, comprehensive health benefits, and be part of India's thriving tech ecosystem.",
    postedDate: "2024-01-15",
    logo: "/images/logos/techmahindra-logo.png",
    companyImage: "/images/companies/bangalore-office.jpg",
    featured: true,
    skills: ["React", "Node.js", "MongoDB", "AWS", "TypeScript", "Docker"],
    experience: "5+ years",
    experienceLevel: "Senior",
    industry: "Technology",
    companySize: "Enterprise",
    urgent: false,
    benefits: ["Health Insurance", "Provident Fund", "Festival Bonuses", "Free Meals", "Gym Access", "Learning Budget"],
    applicationCount: 234,
    companyRating: 4.6,
    remoteOk: true,
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Flipkart",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "₹18L - ₹28L",
    salaryMin: 1800000,
    salaryMax: 2800000,
    description:
      "Design for millions of Indian users! Work from our modern Mumbai office overlooking the Arabian Sea. Create user experiences that serve diverse Indian markets. Enjoy the vibrant Mumbai culture, street food allowances, and work with India's leading e-commerce platform.",
    postedDate: "2024-01-14",
    logo: "/images/logos/flipkart-logo.png",
    companyImage: "/images/companies/mumbai-office.jpg",
    featured: true,
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Mobile Design"],
    experience: "3+ years",
    experienceLevel: "Mid",
    industry: "E-commerce",
    companySize: "Large",
    urgent: false,
    benefits: ["Health Insurance", "Stock Options", "Festival Celebrations", "Food Allowance", "Cab Facility"],
    applicationCount: 189,
    companyRating: 4.4,
    remoteOk: false,
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Zomato",
    location: "Gurgaon, India",
    type: "Full-time",
    salary: "₹22L - ₹32L",
    salaryMin: 2200000,
    salaryMax: 3200000,
    description:
      "Scale food delivery for 200+ cities! Work from our modern Gurgaon office in the Millennium City. Build infrastructure that serves millions of food lovers across India. Enjoy unlimited food credits, flexible hours, and be part of India's foodtech revolution.",
    postedDate: "2024-01-13",
    logo: "/images/logos/zomato-logo.png",
    companyImage: "/images/companies/gurgaon-office.jpg",
    featured: false,
    skills: ["Kubernetes", "AWS", "Docker", "Jenkins", "Python", "Monitoring"],
    experience: "4+ years",
    experienceLevel: "Senior",
    industry: "Food Tech",
    companySize: "Large",
    urgent: true,
    benefits: ["Food Credits", "Health Insurance", "Stock Options", "Flexible Hours", "Team Outings"],
    applicationCount: 156,
    companyRating: 4.3,
    remoteOk: true,
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Paytm",
    location: "Noida, India",
    type: "Full-time",
    salary: "₹20L - ₹30L",
    salaryMin: 2000000,
    salaryMax: 3000000,
    description:
      "Analyze financial data for India's digital payments leader! Work from our spacious Noida campus with modern amenities. Build ML models that power digital payments for millions. Enjoy comprehensive benefits, festival bonuses, and career growth in fintech.",
    postedDate: "2024-01-12",
    logo: "/images/logos/paytm-logo.png",
    companyImage: "/images/companies/noida-office.jpg",
    featured: true,
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Statistics", "Big Data"],
    experience: "3+ years",
    experienceLevel: "Mid",
    industry: "Fintech",
    companySize: "Large",
    urgent: false,
    benefits: ["Health Insurance", "Performance Bonuses", "Festival Gifts", "Learning Budget", "Cab Facility"],
    applicationCount: 198,
    companyRating: 4.2,
    remoteOk: true,
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "Swiggy",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹15L - ₹25L",
    salaryMin: 1500000,
    salaryMax: 2500000,
    description:
      "Build food delivery experiences in the City of Pearls! Work from our beautiful Hyderabad office with traditional and modern architecture. Create apps used by millions of hungry Indians. Enjoy biryani Fridays, flexible work culture, and rapid career growth.",
    postedDate: "2024-01-11",
    logo: "/images/logos/swiggy-logo.png",
    companyImage: "/images/companies/hyderabad-office.jpg",
    featured: false,
    skills: ["React", "JavaScript", "CSS", "Redux", "Mobile Development"],
    experience: "2+ years",
    experienceLevel: "Mid",
    industry: "Food Tech",
    companySize: "Large",
    urgent: false,
    benefits: ["Food Allowance", "Health Insurance", "Flexible Hours", "Festival Bonuses", "Team Events"],
    applicationCount: 267,
    companyRating: 4.5,
    remoteOk: true,
  },
  {
    id: 6,
    title: "Backend Developer",
    company: "BYJU'S",
    location: "Pune, India",
    type: "Full-time",
    salary: "₹18L - ₹26L",
    salaryMin: 1800000,
    salaryMax: 2600000,
    description:
      "Transform education technology in the Oxford of the East! Work from our modern Pune campus with excellent infrastructure. Build scalable systems that educate millions of Indian students. Enjoy the pleasant Pune weather, cultural diversity, and make education accessible.",
    postedDate: "2024-01-10",
    logo: "/images/logos/byjus-logo.png",
    companyImage: "/images/companies/pune-office.jpg",
    featured: false,
    skills: ["Java", "Spring Boot", "Microservices", "AWS", "MongoDB", "Redis"],
    experience: "3+ years",
    experienceLevel: "Mid",
    industry: "EdTech",
    companySize: "Large",
    urgent: false,
    benefits: ["Health Insurance", "Learning Budget", "Flexible Hours", "Festival Celebrations", "Gym Access"],
    applicationCount: 145,
    companyRating: 4.1,
    remoteOk: false,
  },
  {
    id: 7,
    title: "Mobile App Developer",
    company: "Ola",
    location: "Chennai, India",
    type: "Full-time",
    salary: "₹16L - ₹24L",
    salaryMin: 1600000,
    salaryMax: 2400000,
    description:
      "Build mobility solutions in the Detroit of India! Work from our Chennai office with traditional South Indian culture and modern tech facilities. Develop apps that connect millions of riders and drivers. Enjoy authentic South Indian cuisine, cultural festivals, and innovative projects.",
    postedDate: "2024-01-09",
    logo: "/images/logos/ola-logo.png",
    companyImage: "/images/companies/chennai-office.jpg",
    featured: false,
    skills: ["React Native", "iOS", "Android", "Flutter", "Firebase"],
    experience: "2+ years",
    experienceLevel: "Mid",
    industry: "Transportation",
    companySize: "Large",
    urgent: true,
    benefits: ["Health Insurance", "Cab Credits", "Festival Bonuses", "Food Allowance", "Team Outings"],
    applicationCount: 178,
    companyRating: 4.0,
    remoteOk: false,
  },
  {
    id: 8,
    title: "Cloud Engineer",
    company: "Infosys",
    location: "Mysore, India",
    type: "Full-time",
    salary: "₹12L - ₹20L",
    salaryMin: 1200000,
    salaryMax: 2000000,
    description:
      "Work in the City of Palaces with global tech giant! Join our beautiful Mysore campus surrounded by gardens and heritage architecture. Build cloud solutions for international clients. Experience the rich cultural heritage, palace visits, and world-class training programs.",
    postedDate: "2024-01-08",
    logo: "/images/logos/infosys-logo.png",
    companyImage: "/images/companies/mysore-office.jpg",
    featured: false,
    skills: ["AWS", "Azure", "Kubernetes", "DevOps", "Python", "Terraform"],
    experience: "1+ years",
    experienceLevel: "Entry",
    industry: "Technology",
    companySize: "Enterprise",
    urgent: false,
    benefits: ["Health Insurance", "Training Programs", "Campus Facilities", "Festival Celebrations", "Transport"],
    applicationCount: 312,
    companyRating: 4.3,
    remoteOk: true,
  },
  {
    id: 9,
    title: "AI/ML Engineer",
    company: "Razorpay",
    location: "Bangalore, India",
    type: "Remote",
    salary: "₹28L - ₹40L",
    salaryMin: 2800000,
    salaryMax: 4000000,
    description:
      "Build AI for India's payment infrastructure! Work remotely or from our Bangalore office in the heart of India's startup ecosystem. Develop machine learning models for fraud detection and payment optimization. Enjoy startup culture, equity options, and cutting-edge technology.",
    postedDate: "2024-01-07",
    logo: "/images/logos/razorpay-logo.png",
    companyImage: "/images/companies/razorpay-office.jpg",
    featured: true,
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "AWS"],
    experience: "4+ years",
    experienceLevel: "Senior",
    industry: "Fintech",
    companySize: "Medium",
    urgent: false,
    benefits: ["Equity", "Health Insurance", "Remote Work", "Learning Budget", "Festival Bonuses"],
    applicationCount: 89,
    companyRating: 4.7,
    remoteOk: true,
  },
  {
    id: 10,
    title: "QA Engineer",
    company: "Freshworks",
    location: "Chennai, India",
    type: "Full-time",
    salary: "₹10L - ₹18L",
    salaryMin: 1000000,
    salaryMax: 1800000,
    description:
      "Ensure quality for global SaaS products! Work from our Chennai office with modern facilities and traditional Tamil culture. Test software used by businesses worldwide. Enjoy the coastal city vibes, authentic cuisine, and be part of India's SaaS success story.",
    postedDate: "2024-01-06",
    logo: "/images/logos/freshworks-logo.png",
    companyImage: "/images/companies/freshworks-office.jpg",
    featured: false,
    skills: ["Automation Testing", "Selenium", "API Testing", "Performance Testing", "Agile"],
    experience: "2+ years",
    experienceLevel: "Mid",
    industry: "SaaS",
    companySize: "Large",
    urgent: false,
    benefits: ["Health Insurance", "Flexible Hours", "Learning Budget", "Festival Celebrations", "Snacks"],
    applicationCount: 156,
    companyRating: 4.4,
    remoteOk: true,
  },
  {
    id: 11,
    title: "Digital Marketing Manager",
    company: "Nykaa",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "₹12L - ₹20L",
    salaryMin: 1200000,
    salaryMax: 2000000,
    description:
      "Market beauty products in the fashion capital of India! Work from our stylish Mumbai office in the heart of the commercial district. Create campaigns for India's leading beauty e-commerce platform. Enjoy product samples, fashion events, and vibrant city life.",
    postedDate: "2024-01-05",
    logo: "/images/logos/nykaa-logo.png",
    companyImage: "/images/companies/nykaa-office.jpg",
    featured: false,
    skills: ["Digital Marketing", "Social Media", "Content Marketing", "Analytics", "SEO", "Influencer Marketing"],
    experience: "3+ years",
    experienceLevel: "Mid",
    industry: "E-commerce",
    companySize: "Medium",
    urgent: false,
    benefits: ["Product Samples", "Health Insurance", "Festival Bonuses", "Team Events", "Flexible Hours"],
    applicationCount: 203,
    companyRating: 4.2,
    remoteOk: false,
  },
  {
    id: 12,
    title: "Blockchain Developer",
    company: "CoinDCX",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "₹25L - ₹35L",
    salaryMin: 2500000,
    salaryMax: 3500000,
    description:
      "Build the future of cryptocurrency in India! Work from our Mumbai office with cutting-edge technology and modern amenities. Develop blockchain solutions for India's leading crypto exchange. Enjoy crypto bonuses, tech talks, and be part of the digital currency revolution.",
    postedDate: "2024-01-04",
    logo: "/images/logos/coindcx-logo.png",
    companyImage: "/images/companies/coindcx-office.jpg",
    featured: true,
    skills: ["Blockchain", "Solidity", "Web3", "Ethereum", "Smart Contracts", "Node.js"],
    experience: "3+ years",
    experienceLevel: "Senior",
    industry: "Cryptocurrency",
    companySize: "Medium",
    urgent: true,
    benefits: ["Crypto Bonuses", "Health Insurance", "Learning Budget", "Tech Conferences", "Flexible Hours"],
    applicationCount: 67,
    companyRating: 4.5,
    remoteOk: true,
  },
  // US Jobs (keeping some for diversity)
  {
    id: 13,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$140k - $180k",
    salaryMin: 140000,
    salaryMax: 180000,
    description:
      "Join our innovative team at TechCorp's beautiful downtown San Francisco office! We're looking for a senior frontend developer to build cutting-edge web applications using React, TypeScript, and modern technologies. You'll work in our state-of-the-art office with stunning city views and collaborate with world-class engineers.",
    postedDate: "2024-01-15",
    logo: "/images/logos/techcorp-logo.png",
    companyImage: "/images/companies/techcorp-office.jpg",
    featured: true,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    experience: "5+ years",
    experienceLevel: "Senior",
    industry: "Technology",
    companySize: "Large",
    urgent: false,
    benefits: ["Health Insurance", "401k", "Stock Options", "Unlimited PTO", "Free Lunch"],
    applicationCount: 127,
    companyRating: 4.8,
    remoteOk: true,
  },
  {
    id: 14,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Remote",
    type: "Remote",
    salary: "$125k - $155k",
    salaryMin: 125000,
    salaryMax: 155000,
    description:
      "Analyze complex datasets and build ML models from anywhere! Analytics Pro has a beautiful office in downtown Chicago for those who want to come in, but we're fully remote-friendly. Work with Fortune 500 clients and cutting-edge AI technologies.",
    postedDate: "2024-01-09",
    logo: "/images/logos/techcorp-logo.png",
    companyImage: "/images/companies/techcorp-office.jpg",
    featured: true,
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Pandas", "Jupyter"],
    experience: "3+ years",
    experienceLevel: "Mid",
    industry: "Technology",
    companySize: "Medium",
    urgent: false,
    benefits: ["Remote Work", "Health Insurance", "Learning Budget", "Conference Attendance"],
    applicationCount: 167,
    companyRating: 4.5,
    remoteOk: true,
  },
]

export const companiesData: Company[] = [
  {
    id: 1,
    name: "TechMahindra",
    logo: "/images/logos/techmahindra-logo.png",
    rating: 4.6,
    reviewCount: 2847,
    size: "100,000+ employees",
    industry: "Technology",
    description:
      "Leading Indian multinational technology company providing digital transformation, consulting and business re-engineering services.",
    website: "https://techmahindra.com",
    founded: 1986,
    headquarters: "Pune, India",
  },
  {
    id: 2,
    name: "Flipkart",
    logo: "/images/logos/flipkart-logo.png",
    rating: 4.4,
    reviewCount: 1567,
    size: "50,000+ employees",
    industry: "E-commerce",
    description: "India's leading e-commerce marketplace offering a wide range of products and services.",
    website: "https://flipkart.com",
    founded: 2007,
    headquarters: "Bangalore, India",
  },
  {
    id: 3,
    name: "Zomato",
    logo: "/images/logos/zomato-logo.png",
    rating: 4.3,
    reviewCount: 892,
    size: "5,000+ employees",
    industry: "Food Tech",
    description: "India's largest food delivery and restaurant discovery platform serving 200+ cities.",
    website: "https://zomato.com",
    founded: 2008,
    headquarters: "Gurgaon, India",
  },
  {
    id: 4,
    name: "Paytm",
    logo: "/images/logos/paytm-logo.png",
    rating: 4.2,
    reviewCount: 1234,
    size: "10,000+ employees",
    industry: "Fintech",
    description: "India's leading digital payments and financial services company.",
    website: "https://paytm.com",
    founded: 2010,
    headquarters: "Noida, India",
  },
  {
    id: 5,
    name: "Razorpay",
    logo: "/images/logos/razorpay-logo.png",
    rating: 4.7,
    reviewCount: 456,
    size: "2,000+ employees",
    industry: "Fintech",
    description: "India's leading payment gateway and financial technology company.",
    website: "https://razorpay.com",
    founded: 2014,
    headquarters: "Bangalore, India",
  },
]
