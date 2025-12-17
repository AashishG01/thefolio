import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card';

export default function ProjectCard({ title, description, tags, imageUrl, sourceUrl, liveUrl }: Project) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full bg-secondary/50 border-2 border-border/50 hover:border-accent/80 transition-all duration-300">
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={338}
          className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl font-bold text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground !mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal bg-primary/10 text-primary/80">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {sourceUrl && (
          <Link href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost">
              <Github className="mr-2 h-4 w-4" /> Source
            </Button>
          </Link>
        )}
        {liveUrl && liveUrl !== '#' && (
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
              Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
