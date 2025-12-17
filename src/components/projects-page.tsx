'use client';
import React from 'react';
import { projectsData } from '@/lib/data';
import ProjectCard from './project-card';
import SectionHeading from './section-heading';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
    const categories = Array.from(new Set(projectsData.map(p => p.category)));
    categories.unshift("All");

  return (
    <section className="w-full py-24 sm:py-32">
      <div className="container mx-auto">
        <SectionHeading>My Projects</SectionHeading>
        <Tabs defaultValue="All" className="w-full">
          <TabsList className={cn("grid w-full max-w-md mx-auto mb-8", `grid-cols-${categories.length}`)}>
            {categories.map(category => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="All">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>

          {categories.filter(c => c !== "All").map(category => (
            <TabsContent key={category} value={category}>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.filter(p => p.category === category).map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </TabsContent>
          ))}

        </Tabs>
      </div>
    </section>
  );
}
