import React from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import SectionHeading from './section-heading';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const workProcess = [
  {
    icon: Search,
    title: 'Understand the Problem',
    description: 'I start by deeply analyzing the user needs and business goals to ensure the right problem is being solved.'
  },
  {
    icon: PenTool,
    title: 'Design the System',
    description: 'I architect a robust and scalable system, outlining components, data flows, and technology choices.'
  },
  {
    icon: Code,
    title: 'Build Incrementally',
    description: 'I develop the system in manageable, iterative steps, focusing on clean code and continuous feedback.'
  },
  {
    icon: Rocket,
    title: 'Ship & Iterate',
    description: 'I deploy the solution, monitor its performance, and use data-driven insights to guide future improvements.'
  }
];

export default function HowIWorkSection() {
  return (
    <section id="how-i-work" className="w-full py-24 sm:py-32">
      <div className="container mx-auto">
        <SectionHeading>How I Work</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workProcess.map((item, index) => (
            <Card key={index} className="text-center border-2 border-transparent hover:border-accent/50 transition-all">
              <CardHeader className="items-center">
                <div className="p-3 bg-secondary rounded-full mb-2">
                   <item.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
