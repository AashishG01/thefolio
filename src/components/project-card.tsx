import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

export default function ProjectCard({ title, description, tags, imageUrl, sourceUrl, liveUrl }: Project) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full bg-background/50 glassmorphism border-primary/20 hover:border-accent transition-all duration-300">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={224}
          className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {sourceUrl && (
          <Link href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">
              <Github className="mr-2 h-4 w-4" /> Source
            </Button>
          </Link>
        )}
        {liveUrl && liveUrl !== '#' && (
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm">
              Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
