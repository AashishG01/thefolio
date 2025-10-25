import React from 'react';
import { experienceData } from '@/lib/data';
import SectionHeading from './section-heading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-24 sm:py-32">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading>My Experience</SectionHeading>
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-border -z-10"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="mb-10 pl-12 relative">
              <div className="absolute left-0 top-1">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
              </div>
              <Card className="bg-background/50 glassmorphism border-primary/20">
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
