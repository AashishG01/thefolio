import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/lib/data';
import { Button } from './ui/button';
import { ArrowDown, Mail, Phone } from 'lucide-react';
import TypingAnimation from './typing-animation';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section id="home" className="w-full min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
            Hi, I&apos;m Aashish Gupta
          </h1>
          <div className="mt-4 text-lg md:text-xl text-muted-foreground h-16">
            <TypingAnimation />
          </div>
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground">
            I specialize in building exceptional and accessible digital experiences. Currently, I&apos;m focused on creating responsive full-stack web applications and exploring AI/ML.
          </p>
           <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="#contact" passHref>
              <Button size="lg" className="w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4" />
                aashishg8160@gmail.com
              </Button>
            </Link>
             <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href="tel:+918160280943">
                  <Phone className="mr-2 h-4 w-4" />
                  +91-8160280943
                </a>
              </Button>
          </div>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            {socialLinks.map((link) => (
              <Link href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <Button variant="outline" size="icon">
                  <link.icon className="h-5 w-5" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
            {heroImage && (
                 <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="rounded-full object-cover shadow-2xl border-4 border-accent"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                 </div>
            )}
        </div>
      </div>
    </section>
  );
}
