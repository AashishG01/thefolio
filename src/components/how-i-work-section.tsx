import React from 'react';
import Image from 'next/image';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import SectionHeading from './section-heading';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const workProcess = [
  {
    icon: Search,
    title: '1. Understand & Define',
    description: 'I start by deeply analyzing the user needs and business goals to ensure the right problem is being solved.',
  },
  {
    icon: PenTool,
    title: '2. Design & Architect',
    description: 'I architect a robust and scalable system, outlining components, data flows, and technology choices.',
  },
  {
    icon: Code,
    title: '3. Build & Test',
    description: 'I develop the system in manageable, iterative steps, focusing on clean code and continuous feedback.',
  },
  {
    icon: Rocket,
    title: '4. Ship & Iterate',
    description: 'I deploy the solution, monitor its performance, and use data-driven insights to guide future improvements.',
  },
];

export default function HowIWorkSection() {
  return (
    <section id="how-i-work" className="w-full py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto">
        <SectionHeading>How I Approach Problems</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-72 h-72">
              <Image
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXJ8ZW58MHx8fHwxNzYxMzA4NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Aashish Gupta"
                fill
                className="rounded-full object-cover shadow-lg border-4 border-background"
                data-ai-hint="developer portrait"
              />
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {workProcess.map((item, index) => (
              <Card key={index} className="bg-background/70 border-2 border-transparent hover:border-accent/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary rounded-full">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                  </div>
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
      </div>
    </section>
  );
}
