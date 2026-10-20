
import React from 'react';
import { Layout, Code2, Database, Layers, Smartphone, Cpu, Globe, Rocket } from 'lucide-react';
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
  id: '01',
  title: 'Loan Recovery Admin Panel',
  role: 'Frontend Developer Intern',
  description: 'An internal admin dashboard for managing loan recovery operations and agent activities.',
  fullDescription: 'Worked on building and maintaining a responsive admin interface used to manage recovery cases, agents, targets, and incentives. Focused on implementing dynamic UI components, integrating APIs, handling role-based views, and improving usability across multiple modules.',
  keyFeatures: [
    'Admin dashboards for managing agents, cases, and recovery status.',
    'Search, pagination, and filtering for large datasets.',
    'Role-based UI access for admin, operator, and master users.',
    'Form validation and controlled inputs for accurate data handling.'
  ],
  tech: ['React.js', 'JavaScript', 'Redux Toolkit', 'Bootstrap', 'REST APIs'],
  imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
}
,
  {
    id: '02',
    title: 'Edvice Consulting ERP',
    role: 'Senior Frontend Engineer',
    description: 'Comprehensive Student Management and Consulting platform for educational enterprises.',
    fullDescription: 'Developed an ERP system tailored for educational consultancies. This project involved complex form architectures and heavy integration with third-party APIs for student tracking and documentation.',
    keyFeatures: [
      'Sophisticated multi-step forms with Zod validation.',
      'API caching with React Query for snappy navigation.',
      'Role-based access control (RBAC) for different administrative levels.',
      'Dynamic document generation and storage integration.'
    ],
    tech: ['Next.js', 'TypeScript', 'React Query', 'Zod', 'Prisma'],
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '03',
    title: 'IndiBaba B2B Marketplace',
    role: 'Frontend Architect',
    description: 'Large-scale B2B E-commerce platform connecting suppliers and retailers globally.',
    fullDescription: 'Architected the frontend for a massive B2B marketplace. Focused on performance optimization for heavy product listings and seamless inventory synchronization across multiple warehouses.',
    keyFeatures: [
      'Real-time inventory tracking and stock alerts.',
      'Advanced product cataloging with multi-category search.',
      'Integrated B2B payment gateways and credit management.',
      'Cross-browser optimization for global accessibility.'
    ],
    tech: ['MERN', 'Bootstrap', 'MUI', 'React Query'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '04',
    title: 'Intellix360 School System',
    role: 'Frontend Developer',
    description: 'All-in-one School Management System for K-12 institutions.',
    fullDescription: 'Built a modular school management system that handles everything from student admissions to teacher scheduling and grade reporting.',
    keyFeatures: [
      'Interactive teacher-student portals.',
      'Automated attendance and grading systems.',
      'Parent notification engine for school events.',
      'Secure payment portal for tuition fees.'
    ],
    tech: ['React.js', 'Node.js', 'Bootstrap', 'REST APIs'],
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000',
  }
  ,
  {
  id: '05',
  title: 'BrainBucks – Competitive Exams Platform',
  role: 'Frontend Developer',
  description: 'An online platform for managing competitive exams and related administrative tasks.',
  fullDescription: 'Contributed to the frontend development of both the admin panel and web interface. Focused on creating structured UI layouts, handling dynamic data rendering, and improving overall usability.',
  keyFeatures: [
    'Admin panel UI for exam and content management.',
    'Dynamic rendering of exam-related data.',
    'Responsive layouts using UI libraries.',
    'Clean and consistent interface design.'
  ],
  tech: ['React.js', 'JavaScript', 'Bootstrap', 'MUI'],
  imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
},
{
  id: '09',
  title: 'Edvice – Student Consulting Website',
  role: 'Frontend Developer',
  description: 'A public-facing website for a student consulting platform focused on guidance and user engagement.',
  fullDescription: 'Worked on developing the public website for Edvice, focusing on clean UI design, responsive layouts, and smooth user interactions. Implemented reusable components, integrated APIs for dynamic content, and ensured performance and accessibility across devices.',
  keyFeatures: [
    'Modern, responsive UI for public-facing pages.',
    'Reusable and scalable component structure.',
    'API integration for dynamic content rendering.',
    'Form handling with proper validation and user feedback.'
  ],
  tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zod'],
imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
}


];

export const SKILLS: Skill[] = [
  { name: 'React.js', level: 95, icon: <Layout className="w-5 h-5" /> },
  { name: 'Next.js', level: 92, icon: <Rocket className="w-5 h-5" /> },
  { name: 'TypeScript', level: 90, icon: <Code2 className="w-5 h-5" /> },
  { name: 'JavaScript', level: 95, icon: <Globe className="w-5 h-5" /> },
  { name: 'Tailwind CSS', level: 98, icon: <Layers className="w-5 h-5" /> },
  { name: 'Bootstrap', level: 95, icon: <Layers className="w-5 h-5" /> },
  { name: 'Redux Toolkit', level: 88, icon: <Cpu className="w-5 h-5" /> },
  { name: 'React Query', level: 90, icon: <Database className="w-5 h-5" /> },
  { name: 'UI/UX Focus', level: 85, icon: <Smartphone className="w-5 h-5" /> },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'WE RNS IT Solutions Pvt. Ltd.',
    role: 'Frontend Developer',
    period: 'August 2022 - 2025',
    description: [
      'Created responsive and attractive web designs using Bootstrap, Tailwind CSS, and MUI.',
      'dedication were recognized with the Best Intern of the Year (2024) award',
      'Managed application state using Redux Toolkit and Context API.',
      'Implemented type-safe forms using Zod and React-Form hook.',
      'Optimized performance for large-scale Next.js applications.'
    ]
  }
];
