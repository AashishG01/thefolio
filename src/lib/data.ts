import type { Project, NavLink, SocialLink, Skill } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { Github, Linkedin } from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', hash: '/' },
  { name: 'Projects', hash: '/projects' },
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
    imageUrl: '/synapsemedicare.png',
    sourceUrl: 'https://github.com/AashishG01/Synapse-Medicare',
    liveUrl: '#',
    category: 'Data Science & AI',
  },
  {
    title: 'CineSuggest — Full-Stack MERN Movie App',
    description: 'A full-stack MERN app with JWT authentication, watchlists, and dynamic browsing. Features a Python microservice with FastAPI and FAISS for content-based movie recommendations.',
    tags: ['React', 'Node.js', 'FastAPI', 'FAISS', 'Redux'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl || '',
    sourceUrl: 'https://github.com/AashishG01/CineSuggest',
    liveUrl: 'https://cine-suggest-eight.vercel.app/',
    category: 'Software & Web Development',
  },
  {
    title: 'Plant Disease Detection Using Deep Learning',
    description: 'Developed a deep learning pipeline for plant disease detection and segmentation using CNNs (MobileNetV2) and U-Net, achieving an F1-Score of 0.97.',
    tags: ['Deep Learning', 'PyTorch', 'CNN', 'U-Net', 'OpenCV'],
    imageUrl: '/plantdiseasesdetected.png',
    sourceUrl: 'https://github.com/AashishG01/Plant_diseases_dection',
    liveUrl: 'https://plant-diseases-dection.onrender.com/',
    category: 'Data Science & AI',
  },
  {
    title: 'Background Removal using U-Net',
    description: 'Implemented a U-Net with a ResNet34 encoder in PyTorch for background removal. Built an end-to-end training pipeline and achieved an IoU of 0.71 on the DUTS test set.',
    tags: ['PyTorch', 'U-Net', 'ResNet34', 'Computer Vision'],
    imageUrl: '/background_image_removal.png',
    sourceUrl: 'https://github.com/AashishG01/Bg_removal',
    liveUrl: '#',
    category: 'Data Science & AI',
  },
];


export const skillsData: Skill[] = [
  { name: 'TypeScript', use: 'Type Safety', proofUrl: '#', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'React', use: 'Frontend', proofUrl: '#', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', use: 'Fullstack Framework', proofUrl: '#', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'Node.js', use: 'Backend', proofUrl: '#', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Python', use: 'AI & Scripting', proofUrl: '#', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'FastAPI', use: 'Microservices', proofUrl: '#', icon: 'https://cdn.simpleicons.org/fastapi/009688' },
  { name: 'PyTorch', use: 'Deep Learning', proofUrl: '#', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
  { name: 'MongoDB', use: 'NoSQL DB', proofUrl: '#', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'PostgreSQL', use: 'SQL DB', proofUrl: '#', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Docker', use: 'Containerization', proofUrl: '#', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'LangChain', use: 'LLM Framework', proofUrl: '#', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'Git', use: 'Version Control', proofUrl: '#', icon: 'https://cdn.simpleicons.org/git/F05032' },
];
