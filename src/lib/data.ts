import { Github, Linkedin, Briefcase, GraduationCap } from 'lucide-react';
import type { Project, Experience, NavLink, SocialLink } from './types';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks: NavLink[] = [
  { name: 'Home', hash: '#home' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Skills', hash: '#skills' },
  { name: 'Contact', hash: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/aashish-g-21', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aashish-g-21/', icon: Linkedin },
];

export const projectsData: Project[] = [
  {
    title: 'Synapse-Medicare — AI Healthcare Platform',
    description: 'AI-powered platform to streamline patient–hospital interactions by integrating symptom analysis, hospital dashboards, and appointment scheduling systems. Deployed ML models for disease prediction and chatbot consultation.',
    tags: ['AI/ML', 'LangChain', 'React', 'Node.js', 'MongoDB'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl || '',
    sourceUrl: 'https://github.com/aashish-g-21/Synapse-Medicare-v2.0',
    liveUrl: '#',
  },
  {
    title: 'CineSuggest — Full-Stack MERN Movie App',
    description: 'A full-stack MERN app with JWT authentication, watchlists, and dynamic browsing. Features a Python microservice with FastAPI and FAISS for content-based movie recommendations.',
    tags: ['React', 'Node.js', 'FastAPI', 'FAISS', 'Redux'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl || '',
    sourceUrl: 'https://github.com/aashish-g-21/CineSuggest_MERN',
    liveUrl: '#',
  },
  {
    title: 'Plant Disease Detection Using Deep Learning',
    description: 'Developed a deep learning pipeline for plant disease detection and segmentation using CNNs (MobileNetV2) and U-Net, achieving an F1-Score of 0.97.',
    tags: ['Deep Learning', 'PyTorch', 'CNN', 'U-Net', 'OpenCV'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl || '',
    sourceUrl: 'https://github.com/aashish-g-21/Plant-Disease-Detection-and-Segmentation',
    liveUrl: '#',
  },
  {
    title: 'Background Removal using U-Net',
    description: 'Implemented a U-Net with a ResNet34 encoder in PyTorch for background removal. Built an end-to-end training pipeline and achieved an IoU of 0.71 on the DUTS test set.',
    tags: ['PyTorch', 'U-Net', 'ResNet34', 'Computer Vision'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-4')?.imageUrl || '',
    sourceUrl: 'https://github.com/aashish-g-21/Background-Removal-using-UNet-in-PyTorch',
    liveUrl: '#',
  },
];

export const experienceData: Experience[] = [
    {
    title: 'Freelancer & Open Source Contributor',
    company: 'Remote',
    description: 'Actively seeking freelance opportunities and contributing to open-source projects. Focused on developing full-stack applications and exploring AI/ML solutions.',
    date: '2024 - Present',
    icon: Briefcase,
  },
  {
    title: 'Robotics Software Developer, Robocon 2024',
    company: 'Drishti, NIT Surat',
    description: 'Developed autonomous robot using YOLO, OpenCV, and sensor fusion on Jetson Nano. Built a semi-autonomous holonomic robot controlled via PS4, Arduino, and ESP32. Ranked 13th nationally.',
    date: 'Nov 2023 – Jul 2024',
    icon: Briefcase,
  },
  {
    title: 'B.Tech in Electronics and Communication',
    company: 'SVNIT, Surat',
    description: 'CGPA: 6.92. Gained a strong foundation in electronics, communication systems, and computer science principles.',
    date: '2022 - Present',
    icon: GraduationCap,
  },
    {
    title: 'Senior Secondary (Class XII)',
    company: 'Modi School, Rajkot',
    description: 'Percentage: 94.2%',
    date: '2022',
    icon: GraduationCap,
  },
];

export const skillsData: string[] = [
  'JavaScript',
  'TypeScript',
  'Python',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'FastAPI',
  'PyTorch',
  'TensorFlow',
  'LangChain',
  'OpenCV',
  'Git',
  'Docker',
  'Tailwind CSS',
  'Redux',
  'AI',
  'Machine Learning',
  'Data Analytics',
  'Deep Learning',
  'Computer Vision',
];
