import React from 'react';
import { skillsData } from '@/lib/data';
import SectionHeading from './section-heading';
import { Card, CardContent } from './ui/card';
import { Github } from 'lucide-react';
import Link from 'next/link';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading>Evidence-Based Skills</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <Card key={index} className="p-4 border-2 border-transparent hover:border-accent/50 transition-all">
              <CardContent className="p-0">
                <h3 className="font-headline text-lg font-semibold text-primary">{skill.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">{skill.use}</p>
                {skill.proofUrl && (
                  <Link href={skill.proofUrl} target="_blank" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    View Proof on GitHub
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
