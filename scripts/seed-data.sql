-- Insert sample users
INSERT INTO users (id, email, name, role) VALUES
    ('550e8400-e29b-41d4-a716-446655440001', 'employer1@example.com', 'Tech Corp HR', 'EMPLOYER'),
    ('550e8400-e29b-41d4-a716-446655440002', 'employer2@example.com', 'Design Studio HR', 'EMPLOYER'),
    ('550e8400-e29b-41d4-a716-446655440003', 'jobseeker1@example.com', 'John Doe', 'JOB_SEEKER'),
    ('550e8400-e29b-41d4-a716-446655440004', 'jobseeker2@example.com', 'Jane Smith', 'JOB_SEEKER');

-- Insert sample jobs with Indian companies and locations
INSERT INTO jobs (
    title, company, location, description, requirements, 
    salary_min, salary_max, job_type, experience_level, 
    category, is_featured, employer_id
) VALUES
    (
        'Senior Software Engineer',
        'Tata Consultancy Services',
        'Bangalore, Karnataka',
        'Join TCS as a Senior Software Engineer and work on cutting-edge technology solutions for global clients. You will be responsible for developing scalable applications using modern technologies.',
        ARRAY['Java', 'Spring Boot', 'Microservices', '5+ years experience'],
        1200000, 1800000, 'FULL_TIME', 'SENIOR',
        'IT & Software Development', true,
        '550e8400-e29b-41d4-a716-446655440001'
    ),
    (
        'UI/UX Designer',
        'Flipkart',
        'Bangalore, Karnataka',
        'Design intuitive and engaging user experiences for millions of Flipkart customers. Work with cross-functional teams to create world-class e-commerce experiences.',
        ARRAY['Figma', 'Adobe Creative Suite', 'User Research', '3+ years experience'],
        800000, 1400000, 'FULL_TIME', 'MID',
        'IT & Software Development', true,
        '550e8400-e29b-41d4-a716-446655440002'
    ),
    (
        'Digital Marketing Manager',
        'Zomato',
        'Gurugram, Haryana',
        'Lead digital marketing initiatives for Zomato across multiple channels. Drive customer acquisition and engagement through innovative marketing campaigns.',
        ARRAY['Digital Marketing', 'SEO/SEM', 'Analytics', 'Social Media', '4+ years experience'],
        900000, 1500000, 'FULL_TIME', 'MID',
        'Marketing & Digital', false,
        '550e8400-e29b-41d4-a716-446655440001'
    ),
    (
        'Data Scientist',
        'Paytm',
        'Noida, Uttar Pradesh',
        'Join Paytm\'s data science team to build ML models that power our fintech products. Work with large-scale data to drive business insights and product improvements.',
        ARRAY['Python', 'Machine Learning', 'SQL', 'Statistics', '3+ years experience'],
        1100000, 1700000, 'FULL_TIME', 'MID',
        'IT & Software Development', false,
        '550e8400-e29b-41d4-a716-446655440002'
    ),
    (
        'Product Manager',
        'Infosys',
        'Pune, Maharashtra',
        'Lead product strategy and development for enterprise software solutions. Work with engineering teams to deliver innovative products for global clients.',
        ARRAY['Product Management', 'Agile', 'Stakeholder Management', '5+ years experience'],
        1500000, 2200000, 'FULL_TIME', 'SENIOR',
        'Business & Consulting', false,
        '550e8400-e29b-41d4-a716-446655440001'
    ),
    (
        'DevOps Engineer',
        'HCL Technologies',
        'Chennai, Tamil Nadu',
        'Build and maintain cloud infrastructure for enterprise applications. Implement CI/CD pipelines and ensure high availability of critical systems.',
        ARRAY['AWS', 'Docker', 'Kubernetes', 'Jenkins', '4+ years experience'],
        1000000, 1600000, 'FULL_TIME', 'SENIOR',
        'IT & Software Development', true,
        '550e8400-e29b-41d4-a716-446655440002'
    );
