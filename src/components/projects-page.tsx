'use client';
import React from 'react';
import { projectsData } from '@/lib/data';
import ProjectCard from './project-card';
import SectionHeading from './section-heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
  const categories = Array.from(new Set(projectsData.map(p => p.category)));
  categories.unshift("All");

  return (
    <section className="w-full py-24 sm:py-32 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeading>My Projects</SectionHeading>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="flex flex-wrap justify-center w-full max-w-4xl mx-auto mb-12 p-1 gap-2 bg-transparent">
            {categories.map(category => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-full px-6 py-2 text-sm md:text-base font-medium text-muted-foreground border border-white/5 glass data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/50 transition-all duration-300 min-w-[100px]"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="All" className="animate-in fade-in-0 zoom-in-95 duration-500">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>

          {categories.filter(c => c !== "All").map(category => (
            <TabsContent key={category} value={category} className="animate-in fade-in-0 zoom-in-95 duration-500">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
