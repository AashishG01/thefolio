import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="w-full min-h-[calc(90vh)] flex items-center justify-center text-center relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-tight text-foreground mb-6">
          I build <span className="text-gradient">digital experiences</span> <br /> that matter.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
          Transforming complex problems into elegant, scalable web systems. <br />
          Full-stack developer with a passion for perfection.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="#projects" passHref>
            <Button size="lg" className="h-12 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-105">
              View Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#contact" passHref>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full border-white/10 glass hover:bg-white/5 transition-all hover:scale-105">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
