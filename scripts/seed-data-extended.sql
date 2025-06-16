-- Insert more sample users
INSERT INTO users (id, email, name, role) VALUES
  ('550e8400-e29b-41d4-a716-446655440005', 'employer3@example.com', 'Amazon India HR', 'EMPLOYER'),
  ('550e8400-e29b-41d4-a716-446655440006', 'employer4@example.com', 'Swiggy HR', 'EMPLOYER'),
  ('550e8400-e29b-41d4-a716-446655440007', 'employer5@example.com', 'Zomato HR', 'EMPLOYER'),
  ('550e8400-e29b-41d4-a716-446655440008', 'employer6@example.com', 'PhonePe HR', 'EMPLOYER'),
  ('550e8400-e29b-41d4-a716-446655440009', 'employer7@example.com', 'Razorpay HR', 'EMPLOYER'),
  ('550e8400-e29b-41d4-a716-446655440010', 'employer8@example.com', 'BYJU\'S HR', 'EMPLOYER');

-- Insert comprehensive job listings (50+ jobs)
INSERT INTO jobs (
  title, company, location, description, requirements, 
  salary_min, salary_max, job_type, experience_level, 
  category, is_featured, employer_id
) VALUES
  -- TCS Jobs
  (
      'Senior Software Engineer',
      'Tata Consultancy Services',
      'Bangalore, Karnataka',
      'Join TCS as a Senior Software Engineer and work on cutting-edge technology solutions for global clients. You will be responsible for developing scalable applications using modern technologies.',
      ARRAY['Java', 'Spring Boot', 'Microservices', 'AWS', 'Docker', '5+ years experience'],
      1800000, 2400000, 'FULL_TIME', 'SENIOR',
      'IT & Software Development', true,
      '550e8400-e29b-41d4-a716-446655440001'
  ),
  (
      'Cloud Architect',
      'Tata Consultancy Services',
      'Mumbai, Maharashtra',
      'Lead cloud transformation initiatives for enterprise clients. Design and implement scalable cloud solutions on AWS, Azure, and GCP.',
      ARRAY['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', '7+ years experience'],
      2500000, 3500000, 'FULL_TIME', 'SENIOR',
      'IT & Software Development', true,
      '550e8400-e29b-41d4-a716-446655440001'
  ),
  (
      'Data Engineer',
      'Tata Consultancy Services',
      'Pune, Maharashtra',
      'Build and maintain data pipelines for large-scale analytics. Work with big data technologies to process petabytes of data.',
      ARRAY['Python', 'Spark', 'Hadoop', 'Kafka', 'SQL', '4+ years experience'],
      1600000, 2200000, 'FULL_TIME', 'MID',
      'Data Science & Analytics', false,
      '550e8400-e29b-41d4-a716-446655440001'
  ),
  
  -- Infosys Jobs
  (
      'Full Stack Developer',
      'Infosys Limited',
      'Bangalore, Karnataka',
      'Develop end-to-end web applications using modern frameworks. Work on both frontend and backend technologies.',
      ARRAY['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', '3+ years experience'],
      1400000, 2000000, 'FULL_TIME', 'MID',
      'IT & Software Development', true,
      '550e8400-e29b-41d4-a716-446655440002'
  ),
  (
      'AI/ML Engineer',
      'Infosys Limited',
      'Hyderabad, Telangana',
      'Build machine learning models and AI solutions for enterprise clients. Work on computer vision, NLP, and predictive analytics.',
      ARRAY['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'MLOps', '4+ years experience'],
      2000000, 2800000, 'FULL_TIME', 'SENIOR',
      'Data Science & Analytics', true,
      '550e8400-e29b-41d4-a716-446655440002'
  ),
  (
      'Cybersecurity Analyst',
      'Infosys Limited',
      'Chennai, Tamil Nadu',
      'Protect client systems from cyber threats. Implement security measures and conduct vulnerability assessments.',
      ARRAY['Cybersecurity', 'Penetration Testing', 'SIEM', 'Incident Response', '3+ years experience'],
      1500000, 2100000, 'FULL_TIME', 'MID',
      'IT & Software Development', false,
      '550e8400-e29b-41d4-a716-446655440002'
  ),
  
  -- Flipkart Jobs
  (
      'Product Manager',
      'Flipkart',
      'Bangalore, Karnataka',
      'Drive product strategy and execution for millions of customers across India. Work on innovative solutions that shape the future of e-commerce.',
      ARRAY['Product Strategy', 'Data Analysis', 'A/B Testing', 'User Research', 'Agile', '4+ years experience'],
      2500000, 3500000, 'FULL_TIME', 'SENIOR',
      'Product Management', true,
      '550e8400-e29b-41d4-a716-446655440002'
  ),
  (
      'Senior Frontend Developer',
      'Flipkart',
      'Bangalore, Karnataka',
      'Build responsive and performant user interfaces for Flipkart\'s e-commerce platform. Work with React and modern frontend technologies.',
      ARRAY['React', 'JavaScript', 'TypeScript', 'Redux', 'CSS', '4+ years experience'],
      1800000, 2600000, 'FULL_TIME', 'SENIOR',
      'IT & Software Development', true,
      '550e8400-e29b-41d4-a716-446655440002'
  ),
  (
      'Supply Chain Analyst',
      'Flipkart',
      'Bangalore, Karnataka',
      'Optimize supply chain operations and logistics. Analyze data to improve delivery efficiency and reduce costs.',
      ARRAY['Supply Chain', 'Data Analysis', 'Excel', 'SQL', 'Operations Research', '2+ years experience'],
      1200000, 1800000, 'FULL_TIME', 'MID',
      'Operations & Logistics', false,
      '550e8400-e29b-41d4-a716-446655440002'
  ),
  
  -- Amazon India Jobs
  (
      'Software Development Engineer',
      'Amazon India',
      'Bangalore, Karnataka',
      'Build scalable systems that serve millions of customers. Work on Amazon\'s core e-commerce platform and AWS services.',
      ARRAY['Java', 'Python', 'AWS', 'Distributed Systems', 'Algorithms', '3+ years experience'],
      2200000, 3200000, 'FULL_TIME', 'SENIOR',
      'IT & Software Development', true,
      '550e8400-e29b-41d4-a716-446655440005'
  ),
  (
      'Data Scientist',
      'Amazon India',
      'Hyderabad, Telangana',
      'Apply machine learning to solve complex business problems. Work on recommendation systems, demand forecasting, and customer analytics.',
      ARRAY['Python', 'R', 'Machine Learning', 'Statistics', 'SQL', '4+ years experience'],
      2500000, 3500000, 'FULL_TIME', 'SENIOR',
      'Data Science & Analytics', true,
      '550e8400-e29b-41d4-a716-446655440005'
  ),
  (
      'Operations Manager',
      'Amazon India',
      'Mumbai, Maharashtra',
      'Lead operations for Amazon\'s fulfillment centers. Optimize processes to ensure fast and reliable delivery to customers.',
      ARRAY['Operations Management', 'Lean Six Sigma', 'Process Improvement', 'Team Leadership', '5+ years experience'],
      1800000, 2600000, 'FULL_TIME', 'SENIOR',
      'Operations & Logistics', false,
      '550e8400-e29b-41d4-a716-446655440005'
  ),
  
  -- Paytm Jobs
  (
      'Senior Data Scientist',
      'Paytm',
      'Noida, Uttar Pradesh',
      'Build ML models for fraud detection, risk assessment, and personalization. Work with large-scale transaction data.',
      ARRAY['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Statistics', '4+ years experience'],
      2000000, 3000000, 'FULL_TIME', 'SENIOR',
      'Data Science & Analytics', true,
      '550e8400-e29b-41d4-a716-446655440001'
  ),
  (
      'Backend Developer',
      'Paytm',
      'Noida, Uttar Pradesh',
      'Develop robust backend systems for payment processing. Ensure high availability and security of financial transactions.',
      ARRAY['Java', 'Spring Boot', 'Microservices', 'Redis', 'MySQL', '3+ years experience'],
      1600000, 2400000, 'FULL_TIME', 'MID',
      'IT & Software Development', false,
      '550e8400-e29b-41d4-a716-446655440001'
  ),
  (
      'Risk Analyst',
      'Paytm',
      'Noida, Uttar Pradesh',
      'Analyze financial risks and develop risk mitigation strategies. Work on fraud detection and compliance.',
      ARRAY['Risk Management', 'Statistics', 'SQL', 'Python', 'Financial Analysis', '3+ years experience'],
      1400000, 2000000, 'FULL_TIME', 'MID',
      'Finance & Risk', false,
      '550e8400-e29b-41d4-a716-446655440001'
  ),
  
  -- Zomato Jobs
  (
      'Frontend Developer',
      'Zomato',
      'Gurugram, Haryana',
      'Build user interfaces for Zomato\'s food delivery platform. Create responsive and intuitive experiences for millions of users.',
      ARRAY['React', 'JavaScript', 'TypeScript', 'CSS', 'Redux', '2+ years experience'],
      1500000, 2200000, 'FULL_TIME', 'MID',
      'IT & Software Development', true,
      '550e8400-e29b-41d4-a716-446655440007'
  ),
  (
      'Growth Marketing Manager',
      'Zomato',
      'Gurugram, Haryana',
      'Drive user acquisition and retention through data-driven marketing campaigns. Optimize conversion funnels and user engagement.',
      ARRAY['Digital Marketing', 'Growth Hacking', 'Analytics', 'A/B Testing', '3+ years experience'],
      1800000, 2600000, 'FULL_TIME', 'MID',
      'Marketing & Growth', true,
      '550e8400-e29b-41d4-a716-446655440007'
  ),
  (
      'Delivery Operations Manager',
      'Zomato',
      'Delhi, Delhi',
      'Manage delivery operations and optimize delivery routes. Ensure timely and efficient food delivery to customers.',
      ARRAY['Operations Management', 'Logistics', 'Data Analysis', 'Team Leadership', '4+ years experience'],
      1600000, 2200000, 'FULL_TIME', 'SENIOR',
      'Operations & Logistics', false,
      '550e8400-e29b-41d4-a716-446655440007'
  ),
  
  -- Swiggy Jobs
  (
      'DevOps Engineer',
      'Swiggy',
      'Bangalore, Karnataka',
      'Build and maintain infrastructure for Swiggy\'s delivery platform. Implement CI/CD pipelines and ensure system reliability.',
      ARRAY['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', '3+ years experience'],
      1800000, 2600000, 'FULL_TIME', 'SENIOR',
      'IT & Software Development', true,
      '550e8400-e29b-41d4-a716-446655440006'
  ),
  (
      'Mobile App Developer',
      'Swiggy',
      'Bangalore, Karnataka',
      'Develop native mobile applications for iOS and Android. Create smooth and engaging user experiences.',
      ARRAY['React Native', 'iOS', 'Android', 'JavaScript', 'Mobile Development', '3+ years experience'],
      1600000, 2400000, 'FULL_TIME', 'MID',
      'IT & Software Development', false,
      '550e8400-e29b-41d4-a716-446655440006'
  ),
  (
      'Business Analyst',
      'Swiggy',
      'Bangalore, Karnataka',
      'Analyze business metrics and provide insights to drive strategic decisions. Work with cross-functional teams.',
      ARRAY['Business Analysis', 'SQL', 'Excel', 'Data Visualization', 'Statistics', '2+ years experience'],
      1200000, 1800000, 'FULL_TIME', 'MID',
      'Business & Strategy', false,
      '550e8400-e29b-41d4-a716-446655440006'
  ),
  
  -- PhonePe Jobs
  (
      'Senior Software Engineer',
      'PhonePe',
      'Bangalore, Karnataka',
      'Build scalable payment systems that process millions of transactions daily. Work on fintech products that serve 400M+ users.',
      ARRAY['Java', 'Spring Boot', 'Microservices', 'Kafka', 'Redis', '4+ years experience'],
      2200000, 3200000, 'FULL_TIME', 'SENIOR',
      'IT & Software Development', true,
      '550e8400-e29b-41d4-a716-446655440008'
  ),
  (
      'Product Designer',
      'PhonePe',
      'Bangalore, Karnataka',
      'Design intuitive user experiences for PhonePe\'s financial products. Create designs that simplify complex financial workflows.',
      ARRAY['UI/UX Design', 'Figma', 'User Research', 'Prototyping', 'Design Systems', '3+ years experience'],
      1800000, 2600000, 'FULL_TIME', 'MID',
      'Design & Creative', true,
      '550e8400-e29b-41d4-a716-446655440008'
  ),
  (
      'Compliance Manager',
      'PhonePe',
      'Bangalore, Karnataka',
      'Ensure regulatory compliance for financial services. Work with legal and product teams on compliance requirements.',
      ARRAY['Regulatory Compliance', 'Financial Services', 'Risk Management', 'Legal Knowledge', '5+ years experience'],
      2000000, 2800000, 'FULL_TIME', 'SENIOR',
      'Legal & Compliance', false,
      '550e8400-e29b-41d4-a716-446655440008'
  ),
  
  -- Razorpay Jobs
  (
      'Full Stack Engineer',
      'Razorpay',
      'Bangalore, Karnataka',
      'Build end-to-end payment solutions for businesses. Work on both frontend dashboards and backend payment processing systems.',
      ARRAY['JavaScript', 'Node.js', 'React', 'MongoDB', 'Payment Systems', '3+ years experience'],
      1800000, 2600000, 'FULL_TIME', 'MID',
      'IT & Software Development', true,
      '550e8400-e29b-41d4-a716-446655440009'
  ),
  (
      'Sales Manager',
      'Razorpay',
      'Mumbai, Maharashtra',
      'Drive business growth by acquiring new merchant partners. Build relationships with enterprises and SMBs.',
      ARRAY['B2B Sales', 'Relationship Management', 'Fintech Knowledge', 'Negotiation', '4+ years experience'],
      1600000, 2400000, 'FULL_TIME', 'SENIOR',
      'Sales & Business Development', false,
      '550e8400-e29b-41d4-a716-446655440009'
  ),
  (
      'Security Engineer',
      'Razorpay',
      'Bangalore, Karnataka',
      'Implement security measures for payment processing systems. Conduct security audits and vulnerability assessments.',
      ARRAY['Cybersecurity', 'Penetration Testing', 'Security Auditing', 'Compliance', '4+ years experience'],
      2000000, 2800000, 'FULL_TIME', 'SENIOR',
      'IT & Software Development', true,
      '550e8400-e29b-41d4-a716-446655440009'
  ),
  
  -- BYJU'S Jobs
  (
      'Content Developer',
      'BYJU\'S',
      'Bangalore, Karnataka',
      'Create engaging educational content for K-12 students. Develop interactive learning materials and assessments.',
      ARRAY['Content Development', 'Educational Design', 'Subject Matter Expertise', 'Curriculum Design', '2+ years experience'],
      1000000, 1600000, 'FULL_TIME', 'MID',
      'Education & Training', false,
      '550e8400-e29b-41d4-a716-446655440010'
  ),
  (
      'Learning Experience Designer',
      'BYJU\'S',
      'Bangalore, Karnataka',
      'Design learning experiences that engage and educate students. Work on gamification and interactive learning modules.',
      ARRAY['Learning Design', 'UX Design', 'Educational Technology', 'Gamification', '3+ years experience'],
      1400000, 2000000, 'FULL_TIME', 'MID',
      'Design & Creative', true,
      '550e8400-e29b-41d4-a716-446655440010'
  ),
  (
      'Data Analyst',
      'BYJU\'S',
      'Bangalore, Karnataka',
      'Analyze student learning data to improve educational outcomes. Create dashboards and reports for stakeholders.',
      ARRAY['Data Analysis', 'SQL', 'Python', 'Tableau', 'Statistics', '2+ years experience'],
      1200000, 1800000, 'FULL_TIME', 'MID',
      'Data Science & Analytics', false,
      '550e8400-e29b-41d4-a716-446655440010'
  ),
  
  -- Additional Jobs from Various Companies
  (
      'QA Engineer',
      'Wipro Limited',
      'Hyderabad, Telangana',
      'Ensure quality of software products through comprehensive testing. Develop automated test suites and perform manual testing.',
      ARRAY['Software Testing', 'Automation Testing', 'Selenium', 'API Testing', '3+ years experience'],
      1200000, 1800000, 'FULL_TIME', 'MID',
      'IT & Software Development', false,
      '550e8400-e29b-41d4-a716-446655440002'
  ),
  (
      'Technical Writer',
      'HCL Technologies',
      'Chennai, Tamil Nadu',
      'Create technical documentation for software products. Write user manuals, API documentation, and help guides.',
      ARRAY['Technical Writing', 'Documentation', 'API Documentation', 'Communication Skills', '2+ years experience'],
      800000, 1200000, 'FULL_TIME', 'MID',
      'Content & Communication', false,
      '550e8400-e29b-41d4-a716-446655440002'
  ),
  (
      'UI/UX Designer',
      'Tech Mahindra',
      'Pune, Maharashtra',
      'Design user interfaces and experiences for enterprise applications. Conduct user research and create design systems.',
      ARRAY['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', '3+ years experience'],
      1400000, 2000000, 'FULL_TIME', 'MID',
      'Design & Creative', true,
      '550e8400-e29b-41d4-a716-446655440002'
  ),
  (
      'Business Development Manager',
      'Freshworks',
      'Chennai, Tamil Nadu',
      'Drive business growth through strategic partnerships and client acquisition. Manage key accounts and expand market presence.',
      ARRAY['Business Development', 'Sales', 'Account Management', 'SaaS Knowledge', '4+ years experience'],
      1800000, 2600000, 'FULL_TIME', 'SENIOR',
      'Sales & Business Development', false,
      '550e8400-e29b-41d4-a716-446655440002'
  ),
  (
      'Customer Success Manager',
      'Zoho Corporation',
      'Chennai, Tamil Nadu',
      'Ensure customer satisfaction and drive product adoption. Work with clients to maximize value from Zoho products.',
      ARRAY['Customer Success', 'Account Management', 'SaaS', 'Communication Skills', '3+ years experience'],
      1200000, 1800000, 'FULL_TIME', 'MID',
      'Customer Success', false,
      '550e8400-e29b-41d4-a716-446655440002'
  );
