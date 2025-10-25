import React from 'react';
import { projectsData } from '@/lib/data';
import SectionHeading from './section-heading';
import ProjectCard from './project-card';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 sm:py-32">
        <div className="container mx-auto">
            <SectionHeading>My Projects</SectionHeading>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    </section>
  );
}
