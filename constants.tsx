
import React from 'react';
import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Auverse',
    description: 'A full-stack web application focused on dynamic data handling and scalable architecture. Built with modularity and clean code principles.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    image: 'https://picsum.photos/seed/auverse/800/600',
    repo: 'https://github.com/gokuldas439/Auverse'
  },
  {
    id: '2',
    title: 'Nexus Tool',
    description: 'A robust utility designed to streamline developer workflows with a heavy focus on performance and intuitive usability.',
    tech: ['Angular', 'TypeScript', 'Node.js', 'RxJS'],
    image: 'https://picsum.photos/seed/nexus/800/600',
    repo: 'https://github.com/gokuldas439/Nexus_Tool'
  },
  {
    id: '3',
    title: 'Sales Intelligence Platform',
    description: 'Internal platform for sales and account-based marketing teams to analyze clients, teams, and campaign performance in real-time.',
    tech: ['Angular', 'TypeScript', 'NestJS', 'AWS', 'MongoDB'],
    image: 'https://picsum.photos/seed/sales/800/600',
    isProfessional: true
  },
  {
    id: '4',
    title: 'UI/UX Experiments',
    description: 'A collection of high-fidelity animation experiments focusing on parallax, 3D transforms, and immersive motion design.',
    tech: ['HTML', 'CSS', 'Framer Motion', 'GSAP'],
    image: 'https://picsum.photos/seed/ui/800/600'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Software Engineer',
    company: 'Recotap ABM',
    period: 'December 2022 – Present',
    location: 'Bengaluru, India',
    description: [
      'Building scalable full-stack systems and sophisticated ABM platforms.',
      'Designing complex dashboards and reusable frontend component libraries.',
      'Optimizing application performance and ensuring high-quality user experiences.'
    ]
  },
  {
    id: 'exp2',
    role: 'Web Developer Intern',
    company: 'Brototype',
    period: 'June 2022 – December 2022',
    location: 'Kochi, India',
    description: [
      'Developed web applications using React, Node.js, and MongoDB.',
      'Implemented SSR and SEO improvements for enhanced discoverability.',
      'Collaborated on full-stack workflows from design to deployment.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'SCSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'Nx Monorepo', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'DynamoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'Vercel', category: 'Cloud' },
  { name: 'Firebase', category: 'Cloud' },
  { name: 'Git', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'Framer Motion', category: 'Tools' }
];
