import { Github, Linkedin, Twitter, Briefcase, GraduationCap, Code } from 'lucide-react';
import type { Project, Experience, NavLink, SocialLink } from './types';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks: NavLink[] = [
  { name: 'Home', hash: '#home' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Contact', hash: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
];

export const projectsData: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, user authentication, and a payment gateway integration.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl || '',
    sourceUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates using WebSockets, drag-and-drop functionality, and notification system.',
    tags: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl || '',
    sourceUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js to showcase my projects and skills, featuring a modern design and animations.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl || '',
    sourceUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Blogging Platform',
    description: 'A simple blogging platform where users can create, edit, and delete their own articles. Includes a rich text editor.',
    tags: ['React', 'Firebase', 'Material-UI'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-4')?.imageUrl || '',
    sourceUrl: 'https://github.com',
    liveUrl: '#',
  },
];

export const experienceData: Experience[] = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Solutions Inc.',
    description: 'Led a team of developers in building and maintaining web applications using the MERN stack. Improved application performance by 30% and mentored junior developers.',
    date: 'Jan 2021 - Present',
    icon: Briefcase,
  },
  {
    title: 'Software Engineer',
    company: 'Innovate Co.',
    description: 'Developed and shipped scalable features for a SaaS product. Worked closely with product managers and designers to deliver high-quality software.',
    date: 'Jun 2018 - Dec 2020',
    icon: Briefcase,
  },
  {
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    description: 'Graduated with honors. Specialized in web development and software engineering. Actively participated in coding clubs and hackathons.',
    date: 'Sep 2014 - May 2018',
    icon: GraduationCap,
  },
];

export const skillsData: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'GraphQL',
  'Apollo',
  'Redux',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Git',
  'Docker',
  'AWS',
];
