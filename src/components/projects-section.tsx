import React from 'react';
import Link from 'next/link';
import { projectsData } from '@/lib/data';
import SectionHeading from './section-heading';
import ProjectCard from './project-card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

type ProjectsSectionProps = {
  featured?: boolean;
};

export default function ProjectsSection({ featured = false }: ProjectsSectionProps) {
  const displayedProjects = featured ? projectsData.slice(0, 2) : projectsData;

  return (
    <section id="projects" className="w-full py-24 sm:py-32">
        <div className="container mx-auto">
            <SectionHeading>{featured ? "Featured Projects" : "My Projects"}</SectionHeading>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                {displayedProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
                ))}
            </div>
            {featured && (
                <div className="text-center mt-12">
                    <Link href="/projects" passHref>
                        <Button size="lg">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    </section>
  );
}
