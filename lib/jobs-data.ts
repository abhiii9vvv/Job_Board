import { getCompanyLogo } from "./image-utils"

export interface JobData {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  posted: string
  description: string
  skills: string[]
  experience: string
  category: string
  logo?: string
  companySize?: string
  companyDescription?: string
  companyWebsite?: string
}

const jobsData: JobData[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Tata Consultancy Services",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "₹15-25 LPA",
    posted: "2 days ago",
    description: `
      <p>We are looking for a Senior Software Engineer to join our dynamic team. You will be responsible for designing, developing, and maintaining high-quality software solutions.</p>
      <h3>Key Responsibilities:</h3>
      <ul>
        <li>Design and develop scalable web applications</li>
        <li>Collaborate with cross-functional teams</li>
        <li>Mentor junior developers</li>
        <li>Participate in code reviews and technical discussions</li>
      </ul>
      <h3>Requirements:</h3>
      <ul>
        <li>5+ years of experience in software development</li>
        <li>Strong knowledge of JavaScript, React, and Node.js</li>
        <li>Experience with cloud platforms (AWS/Azure)</li>
        <li>Excellent problem-solving skills</li>
      </ul>
    `,
    skills: ["JavaScript", "React", "Node.js", "AWS", "MongoDB"],
    experience: "5+ years",
    category: "IT & Software Development",
    logo: getCompanyLogo("Tata Consultancy Services"),
    companySize: "500,000+ employees",
    companyDescription: "TCS is a global leader in IT services, consulting and business solutions.",
    companyWebsite: "https://www.tcs.com",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "Flipkart",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "₹12-18 LPA",
    posted: "1 day ago",
    description: `
      <p>Join our design team to create exceptional user experiences for millions of customers. You'll work on innovative projects that shape the future of e-commerce.</p>
      <h3>What You'll Do:</h3>
      <ul>
        <li>Design user interfaces for web and mobile applications</li>
        <li>Conduct user research and usability testing</li>
        <li>Create wireframes, prototypes, and design systems</li>
        <li>Collaborate with product managers and developers</li>
      </ul>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of UI/UX design experience</li>
        <li>Proficiency in Figma, Sketch, and Adobe Creative Suite</li>
        <li>Strong portfolio demonstrating design thinking</li>
        <li>Understanding of front-end development principles</li>
      </ul>
    `,
    skills: ["Figma", "Sketch", "Adobe XD", "User Research", "Prototyping"],
    experience: "3+ years",
    category: "Design & Creative",
    logo: getCompanyLogo("Flipkart"),
    companySize: "50,000+ employees",
    companyDescription: "India's leading e-commerce marketplace with a wide range of products.",
    companyWebsite: "https://www.flipkart.com",
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "Paytm",
    location: "Noida, India",
    type: "Full-time",
    salary: "₹20-30 LPA",
    posted: "3 days ago",
    description: `
      <p>We're seeking a talented Data Scientist to join our analytics team and drive data-driven decision making across our fintech platform.</p>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Develop machine learning models for fraud detection</li>
        <li>Analyze user behavior and transaction patterns</li>
        <li>Create predictive models for business growth</li>
        <li>Present insights to stakeholders</li>
      </ul>
      <h3>Requirements:</h3>
      <ul>
        <li>Master's degree in Data Science, Statistics, or related field</li>
        <li>4+ years of experience in data science</li>
        <li>Proficiency in Python, R, and SQL</li>
        <li>Experience with machine learning frameworks</li>
      </ul>
    `,
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Statistics"],
    experience: "4+ years",
    category: "Data Science & Analytics",
    logo: getCompanyLogo("Paytm"),
    companySize: "10,000+ employees",
    companyDescription: "India's leading digital payments and financial services company.",
    companyWebsite: "https://paytm.com",
  },
  {
    id: "4",
    title: "Frontend Developer",
    company: "Zomato",
    logo: getCompanyLogo("Zomato"),
    location: "Gurugram, Haryana",
    type: "Full-time",
    salary: "₹15-22 LPA",
    experience: "2-4 years",
    posted: "1 day ago",
    category: "IT & Software Development",
    skills: ["React", "JavaScript", "TypeScript", "CSS", "Redux"],
    companySize: "5,000+ employees",
    companyWebsite: "https://www.zomato.com",
    description: `
      <p>Join Zomato, India's largest food delivery platform, as a Frontend Developer. You'll build user interfaces that millions of food lovers use daily to discover and order their favorite meals.</p>
      
      <h3>Key Responsibilities:</h3>
      <ul>
        <li>Develop responsive web applications using React and modern JavaScript</li>
        <li>Collaborate with designers to implement pixel-perfect UI components</li>
        <li>Optimize application performance and ensure cross-browser compatibility</li>
        <li>Write clean, maintainable, and testable code</li>
        <li>Participate in code reviews and maintain coding standards</li>
        <li>Work with backend teams to integrate APIs and services</li>
        <li>Implement A/B tests and track user interactions</li>
      </ul>
      
      <h3>Required Skills & Experience:</h3>
      <ul>
        <li>2-4 years of experience in frontend development</li>
        <li>Strong proficiency in React, JavaScript (ES6+), and TypeScript</li>
        <li>Experience with state management libraries (Redux, Context API)</li>
        <li>Knowledge of CSS preprocessors and modern CSS techniques</li>
        <li>Familiarity with build tools (Webpack, Vite) and version control (Git)</li>
        <li>Understanding of responsive design and mobile-first development</li>
        <li>Experience with testing frameworks (Jest, React Testing Library)</li>
      </ul>
      
      <h3>What We Offer:</h3>
      <ul>
        <li>Competitive salary and annual performance bonuses</li>
        <li>Comprehensive health insurance and wellness benefits</li>
        <li>Flexible work arrangements and modern office facilities</li>
        <li>Free meals and Zomato credits</li>
        <li>Learning and development opportunities</li>
        <li>Employee stock options</li>
        <li>Vibrant work culture with regular team events</li>
      </ul>
    `,
    companyDescription:
      "Zomato is India's largest food delivery platform, connecting millions of customers with restaurants across 1000+ cities. Founded in 2008, Zomato has revolutionized the food industry through technology innovation, offering services like food delivery, dining out, and restaurant discovery. The company is committed to better food for more people.",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "Swiggy",
    logo: getCompanyLogo("Swiggy"),
    location: "Bangalore, Karnataka",
    type: "Full-time",
    salary: "₹18-26 LPA",
    experience: "3-5 years",
    posted: "2 days ago",
    category: "IT & Software Development",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins"],
    companySize: "5,000+ employees",
    companyWebsite: "https://www.swiggy.com",
    description: `
      <p>Join Swiggy, India's leading on-demand delivery platform, as a DevOps Engineer. You'll build and maintain the infrastructure that powers millions of food deliveries across India every day.</p>
      
      <h3>Key Responsibilities:</h3>
      <ul>
        <li>Design and maintain scalable cloud infrastructure on AWS</li>
        <li>Implement and manage Kubernetes clusters for containerized applications</li>
        <li>Build and optimize CI/CD pipelines for rapid deployment</li>
        <li>Monitor system performance and implement automated alerting</li>
        <li>Ensure high availability and disaster recovery procedures</li>
        <li>Collaborate with development teams to improve deployment processes</li>
        <li>Implement security best practices and compliance requirements</li>
      </ul>
      
      <h3>Required Skills & Experience:</h3>
      <ul>
        <li>3-5 years of experience in DevOps or Site Reliability Engineering</li>
        <li>Strong experience with AWS services (EC2, EKS, RDS, Lambda)</li>
        <li>Proficiency in containerization technologies (Docker, Kubernetes)</li>
        <li>Experience with Infrastructure as Code tools (Terraform, CloudFormation)</li>
        <li>Knowledge of CI/CD tools (Jenkins, GitLab CI, GitHub Actions)</li>
        <li>Scripting skills in Python, Bash, or similar languages</li>
        <li>Experience with monitoring tools (Prometheus, Grafana, ELK stack)</li>
      </ul>
      
      <h3>What We Offer:</h3>
      <ul>
        <li>Competitive compensation with equity participation</li>
        <li>Comprehensive health and wellness benefits</li>
        <li>Flexible working hours and remote work options</li>
        <li>Free meals and Swiggy credits</li>
        <li>Professional development and certification support</li>
        <li>Modern office spaces with recreational facilities</li>
        <li>Opportunity to work on high-scale distributed systems</li>
      </ul>
    `,
    companyDescription:
      "Swiggy is India's leading on-demand delivery platform, delivering food, groceries, and essentials to millions of customers across 500+ cities. Founded in 2014, Swiggy has built India's largest and most efficient delivery network, powered by technology and data science. The company is expanding into new categories and international markets.",
  },
  {
    id: "6",
    title: "Full Stack Developer",
    company: "Infosys Limited",
    logo: getCompanyLogo("Infosys Limited"),
    location: "Bangalore, Karnataka",
    type: "Full-time",
    salary: "₹14-20 LPA",
    experience: "3+ years",
    posted: "1 day ago",
    category: "IT & Software Development",
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    companySize: "300,000+ employees",
    companyWebsite: "https://www.infosys.com",
    description: `
      <p>Join Infosys as a Full Stack Developer and work on innovative digital solutions for global clients. You'll be part of a team that transforms businesses through technology.</p>
      
      <h3>Key Responsibilities:</h3>
      <ul>
        <li>Develop end-to-end web applications using modern frameworks</li>
        <li>Work on both frontend and backend technologies</li>
        <li>Collaborate with cross-functional teams to deliver solutions</li>
        <li>Participate in code reviews and maintain coding standards</li>
        <li>Optimize applications for maximum speed and scalability</li>
        <li>Troubleshoot and debug applications</li>
        <li>Stay updated with emerging technologies and best practices</li>
      </ul>
      
      <h3>Required Skills & Experience:</h3>
      <ul>
        <li>3+ years of experience in full stack development</li>
        <li>Proficiency in React, Node.js, and JavaScript</li>
        <li>Experience with databases (MongoDB, MySQL)</li>
        <li>Knowledge of RESTful APIs and web services</li>
        <li>Understanding of version control systems (Git)</li>
        <li>Experience with cloud platforms is a plus</li>
        <li>Strong problem-solving and communication skills</li>
      </ul>
      
      <h3>What We Offer:</h3>
      <ul>
        <li>Competitive salary and benefits package</li>
        <li>Global career opportunities</li>
        <li>Continuous learning and development programs</li>
        <li>Health insurance and wellness programs</li>
        <li>Flexible working arrangements</li>
        <li>Employee recognition programs</li>
      </ul>
    `,
    companyDescription:
      "Infosys Limited is a global leader in next-generation digital services and consulting. With over 300,000 employees worldwide, Infosys helps clients navigate their digital transformation journey.",
  },
  {
    id: "7",
    title: "Software Development Engineer",
    company: "Amazon India",
    logo: getCompanyLogo("Amazon India"),
    location: "Hyderabad, Telangana",
    type: "Full-time",
    salary: "₹22-32 LPA",
    experience: "3+ years",
    posted: "2 days ago",
    category: "IT & Software Development",
    skills: ["Java", "Python", "AWS", "Distributed Systems", "Algorithms"],
    companySize: "100,000+ employees",
    companyWebsite: "https://www.amazon.in",
    description: `
      <p>Join Amazon India as a Software Development Engineer and build scalable systems that serve millions of customers. Work on cutting-edge technology that powers the world's largest e-commerce platform.</p>
      
      <h3>Key Responsibilities:</h3>
      <ul>
        <li>Design and develop scalable distributed systems</li>
        <li>Write high-quality, maintainable code</li>
        <li>Collaborate with cross-functional teams</li>
        <li>Participate in system design and architecture decisions</li>
        <li>Optimize system performance and reliability</li>
        <li>Mentor junior developers</li>
        <li>Stay current with industry trends and technologies</li>
      </ul>
      
      <h3>Required Skills & Experience:</h3>
      <ul>
        <li>3+ years of software development experience</li>
        <li>Strong programming skills in Java, Python, or C++</li>
        <li>Experience with distributed systems and cloud technologies</li>
        <li>Knowledge of data structures and algorithms</li>
        <li>Experience with AWS services</li>
        <li>Bachelor's degree in Computer Science or related field</li>
        <li>Strong problem-solving and analytical skills</li>
      </ul>
      
      <h3>What We Offer:</h3>
      <ul>
        <li>Competitive compensation with stock options</li>
        <li>Comprehensive benefits package</li>
        <li>Career development opportunities</li>
        <li>Flexible work arrangements</li>
        <li>Health and wellness programs</li>
        <li>Employee discounts and perks</li>
      </ul>
    `,
    companyDescription:
      "Amazon India is the Indian subsidiary of the global e-commerce giant Amazon. With operations across multiple cities, Amazon India serves millions of customers with a wide range of products and services.",
  },
  {
    id: "8",
    title: "UI/UX Designer",
    company: "PhonePe",
    logo: getCompanyLogo("PhonePe"),
    location: "Bangalore, Karnataka",
    type: "Full-time",
    salary: "₹18-26 LPA",
    experience: "3+ years",
    posted: "3 days ago",
    category: "Design & Creative",
    skills: ["UI/UX Design", "Figma", "User Research", "Prototyping", "Design Systems"],
    companySize: "10,000+ employees",
    companyWebsite: "https://www.phonepe.com",
    description: `
      <p>Join PhonePe as a UI/UX Designer and create intuitive experiences for India's leading digital payments platform. Design for millions of users across diverse backgrounds and use cases.</p>
      
      <h3>Key Responsibilities:</h3>
      <ul>
        <li>Design user interfaces for mobile and web applications</li>
        <li>Conduct user research and usability testing</li>
        <li>Create wireframes, prototypes, and design specifications</li>
        <li>Collaborate with product managers and developers</li>
        <li>Maintain and evolve design systems</li>
        <li>Present design concepts to stakeholders</li>
        <li>Stay updated with design trends and best practices</li>
      </ul>
      
      <h3>Required Skills & Experience:</h3>
      <ul>
        <li>3+ years of UI/UX design experience</li>
        <li>Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)</li>
        <li>Strong understanding of user-centered design principles</li>
        <li>Experience with mobile app design</li>
        <li>Knowledge of design systems and component libraries</li>
        <li>Portfolio demonstrating design process and outcomes</li>
        <li>Excellent communication and presentation skills</li>
      </ul>
      
      <h3>What We Offer:</h3>
      <ul>
        <li>Competitive salary and equity participation</li>
        <li>Health insurance and wellness benefits</li>
        <li>Flexible working hours</li>
        <li>Learning and development opportunities</li>
        <li>Modern office facilities</li>
        <li>Employee engagement programs</li>
      </ul>
    `,
    companyDescription:
      "PhonePe is India's leading digital payments platform, serving over 400 million users. The company offers a wide range of financial services including payments, insurance, and wealth management.",
  },
]

export function getAllJobs(): JobData[] {
  return jobsData
}

export function getJobById(id: string): JobData | null {
  return jobsData.find((job) => job.id === id) || null
}

export function getSimilarJobs(currentJob: JobData, limit = 3): JobData[] {
  return jobsData
    .filter((job) => job.id !== currentJob.id)
    .filter(
      (job) => job.category === currentJob.category || job.skills.some((skill) => currentJob.skills.includes(skill)),
    )
    .sort((a, b) => {
      const aMatches = a.skills.filter((skill) => currentJob.skills.includes(skill)).length
      const bMatches = b.skills.filter((skill) => currentJob.skills.includes(skill)).length
      return bMatches - aMatches
    })
    .slice(0, limit)
}

export function getJobsByCategory(category: string): JobData[] {
  return jobsData.filter((job) => job.category === category)
}

export function searchJobs(query: string): JobData[] {
  const searchTerm = query.toLowerCase()
  return jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm)) ||
      job.location.toLowerCase().includes(searchTerm),
  )
}
