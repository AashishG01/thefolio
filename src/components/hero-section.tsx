import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="w-full min-h-[calc(80vh)] flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-primary">
          I design and build <br /> reliable web systems.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          From frontend to backend and everything in between, I transform complex problems into elegant, scalable solutions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#projects" passHref>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              View Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#contact" passHref>
            <Button size="lg" variant="outline">
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
