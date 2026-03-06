export const resumeData = {
  personal: {
    fullName: 'Timothy Kelly',
    title: 'Senior Software Engineer',
    location: 'Amsterdam, NY',
    phone: '570-468-7476',
    email: 'tkelly1996@yahoo.com',
    linkedin: 'linkedin.com/in/timothy-kelly-82b228170',
  },
  summary:
    'Senior Software Engineer with experience building secure, scalable backend and distributed systems in financial services and defense environments. Strong background in .NET, cloud infrastructure, and CI/CD automation. Proven ability to drive successful delivery of mission-critical software while improving team alignment, efficiency, and knowledge sharing.',

  experience: [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Mastercard SessionM',
      location: 'Amsterdam, NY',
      startDate: 'Aug 2022',
      endDate: 'Present',
      responsibilities: [
        'Designed, implemented, and maintained C# .NET backend APIs and services powering high-volume transaction workflows and enterprise-wide incentive programs',
        'Migrated high-volume workloads from SQL Server to DynamoDB, improving system scalability, reducing load, and lowering infrastructure costs',
        'Maintained and optimized extremely large AWS RDS databases, performing resizing and enabling encryption to ensure security, performance, and compliance',
        'Refactored and extended codebases with a focus on maintainability, applying SOLID principles and conducting code reviews',
        'Developed unit and integration tests, striving for near-complete code coverage on all new and modified code to ensure reliability and prevent production issues',
        'Facilitated team alignment and knowledge sharing by hosting regular .NET Guild sessions, encouraging cross-team discussion and collaboration',
        'Participated in Agile/Scrum for day-to-day new code development',
        'Provided on-call production support, assisting with critical incident mitigation via hotfixes, configuration changes, and collaboration with other engineers during their rotations',
        'Leveraged AI-assisted development tools to increase engineering throughput, accelerate testing, and improve code quality while maintaining full architectural ownership',
      ],
      technologies: [
        'C#',
        '.NET',
        'AWS',
        'SQS',
        'Lambda',
        'Kinesis',
        'RDS SQL Server',
        'DynamoDB',
        'Azure',
        'REST APIs',
        'Docker',
      ],
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Naval Nuclear Laboratory',
      location: 'West Mifflin, PA',
      startDate: 'Nov 2018',
      endDate: 'Aug 2022',
      responsibilities: [
        'Built and maintained mission-critical simulation software supporting U.S. Navy training systems',
        'Designed distributed Windows applications and backend services using C#',
        'Managed Azure DevOps CI/CD pipelines and secure deployment workflows',
        'Ensured compliance with strict security and operational standards',
      ],
      technologies: [
        'C#',
        '.NET',
        'WPF',
        'REST APIs',
        'Windows Services',
        'Azure DevOps',
        'SQL Server',
      ],
    },
  ],

  education: [
    {
      degree: 'B.S. Computer Science & Computer Security',
      school: 'East Stroudsburg University of Pennsylvania',
      graduationYear: 2018,
    },
  ],

  technicalSkills: {
    languages: ['C#', 'Python', 'Java', 'C++', 'JavaScript', 'TypeScript'],
    applicationDevelopment: [
      '.NET',
      'ASP.NET',
      'WPF',
      'MAUI',
      'React',
      'Angular',
      'REST APIs',
      'Windows Services',
    ],
    cloudDevOps: [
      'AWS (Lambda, SQS, Kinesis, RDS)',
      'Azure',
      'Docker',
      'CI/CD',
      'Azure DevOps',
      'Git',
    ],
    databases: ['SQL Server', 'SQLite', 'DynamoDB'],
    architecture: [
      'Distributed Systems',
      'Event-Driven Architecture',
      'MVVM',
      'MVC',
    ],
  },

  certifications: [],
};

export default resumeData;
