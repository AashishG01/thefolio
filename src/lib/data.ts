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
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl || '',
    sourceUrl: 'https://github.com/aashish-g-21/Synapse-Medicare-v2.0',
    liveUrl: '#',
    category: 'Data Science & AI',
  },
  {
    title: 'CineSuggest — Full-Stack MERN Movie App',
    description: 'A full-stack MERN app with JWT authentication, watchlists, and dynamic browsing. Features a Python microservice with FastAPI and FAISS for content-based movie recommendations.',
    tags: ['React', 'Node.js', 'FastAPI', 'FAISS', 'Redux'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl || '',
    sourceUrl: 'https://github.com/aashish-g-21/CineSuggest_MERN',
    liveUrl: '#',
    category: 'Software & Web Development',
  },
  {
    title: 'Plant Disease Detection Using Deep Learning',
    description: 'Developed a deep learning pipeline for plant disease detection and segmentation using CNNs (MobileNetV2) and U-Net, achieving an F1-Score of 0.97.',
    tags: ['Deep Learning', 'PyTorch', 'CNN', 'U-Net', 'OpenCV'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl || '',
    sourceUrl: 'https://github.com/aashish-g-21/Plant-Disease-Detection-and-Segmentation',
    liveUrl: '#',
    category: 'Data Science & AI',
  },
  {
    title: 'Background Removal using U-Net',
    description: 'Implemented a U-Net with a ResNet34 encoder in PyTorch for background removal. Built an end-to-end training pipeline and achieved an IoU of 0.71 on the DUTS test set.',
    tags: ['PyTorch', 'U-Net', 'ResNet34', 'Computer Vision'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-4')?.imageUrl || '',
    sourceUrl: 'https://github.com/aashish-g-21/Background-Removal-using-UNet-in-PyTorch',
    liveUrl: '#',
    category: 'Data Science & AI',
  },
];


export const skillsData: Skill[] = [
  { name: 'TypeScript', use: 'Used in all modern full-stack projects for type safety.', proofUrl: 'https://github.com/aashish-g-21' },
  { name: 'React & Next.js', use: 'Primary tools for building responsive frontends.', proofUrl: 'https://github.com/aashish-g-21/CineSuggest_MERN' },
  { name: 'Node.js & Express', use: 'Built robust REST APIs for backend services.', proofUrl: 'https://github.com/aashish-g-21/CineSuggest_MERN' },
  { name: 'Python & FastAPI', use: 'Developed high-performance microservices for AI models.', proofUrl: 'https://github.com/aashish-g-21/CineSuggest_MERN' },
  { name: 'PyTorch', use: 'Implemented computer vision models for detection and segmentation.', proofUrl: 'https://github.com/aashish-g-21/Plant-Disease-Detection-and-Segmentation' },
  { name: 'MongoDB & PostgreSQL', use: 'Managed data storage for various applications.', proofUrl: 'https://github.com/aashish-g-21' },
  { name: 'Docker', use: 'Containerized applications for consistent deployment.', proofUrl: 'https://github.com/aashish-g-21' },
  { name: 'LangChain', use: 'Built AI-driven assistance and consultation features.', proofUrl: 'https://github.com/aashish-g-21/Synapse-Medicare-v2.0' },
  { name: 'Git & GitHub', use: 'Version control and collaboration on all projects.', proofUrl: 'https://github.com/aashish-g-21' },
];
