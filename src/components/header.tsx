'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Menu, X, Code } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const navLink = navLinks.find(
              (link) => `#${entry.target.id}` === link.hash
            );
            if (navLink) {
              setActiveSection(navLink.name);
            }
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (pathname.startsWith('/projects')) {
      setActiveSection('Projects');
    } else if (pathname === '/') {
      // The intersection observer will handle setting the active section
    } else {
      const currentLink = navLinks.find((link) => link.hash === pathname);
      if (currentLink) {
        setActiveSection(currentLink.name);
      }
    }
  }, [pathname]);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (hash.startsWith('#') && pathname === '/') {
      e.preventDefault();
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      const navLink = navLinks.find(link => link.hash === hash);
      if (navLink) setActiveSection(navLink.name);
      setIsOpen(false);
    } else {
      const navLink = navLinks.find(link => link.hash === hash);
      if (navLink) setActiveSection(navLink.name);
      setIsOpen(false);
    }
  };

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled || pathname !== '/' ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-2 font-headline text-2xl font-bold">
          <Code className="h-8 w-8 text-primary" />
          <span>Aashish Gupta</span>
        </Link>
        
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-primary',
                    activeSection === link.name ? 'text-primary' : 'text-foreground/70'
                  )}
                >
                  {link.name}
                  {activeSection === link.name && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-accent rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                onClick={(e) => handleNavClick(e, link.hash)}
                className={cn(
                  'text-lg font-medium',
                  activeSection === link.name ? 'text-primary' : 'text-foreground/70'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
