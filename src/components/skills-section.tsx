import React from 'react';
import { skillsData } from '@/lib/data';
import SectionHeading from './section-heading';
import { Card, CardContent } from './ui/card';
import { Github } from 'lucide-react';
import Link from 'next/link';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10 px-4">
        <SectionHeading>Tech Stack</SectionHeading>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer"
            >
              <div className="relative w-16 h-16 flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/5 shadow-lg group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.4)] transition-all duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
