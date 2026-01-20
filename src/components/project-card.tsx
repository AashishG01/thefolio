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
    <Card className="group glass-card overflow-hidden flex flex-col h-full border-0 rounded-xl relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={338}
          className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
      </div>

      <CardHeader className="relative z-10">
        <CardTitle className="font-headline text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        <CardDescription className="text-muted-foreground !mt-2 line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow relative z-10">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal bg-white/5 text-white/80 hover:bg-white/10 hover:text-white border border-white/5">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-2 relative z-10 mt-auto">
        {sourceUrl && (
          <Link href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white hover:bg-white/10">
              <Github className="mr-2 h-4 w-4" /> Source
            </Button>
          </Link>
        )}
        {liveUrl && liveUrl !== '#' && (
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20">
              Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
