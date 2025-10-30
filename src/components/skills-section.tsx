import React from 'react';
import { skillsData } from '@/lib/data';
import SectionHeading from './section-heading';
import { Badge } from './ui/badge';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 sm:py-32">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading>My Skills</SectionHeading>
        <div className="flex flex-wrap justify-center gap-3">
          {skillsData.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-lg font-medium px-4 py-2 rounded-lg">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
