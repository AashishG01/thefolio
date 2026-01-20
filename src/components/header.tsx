'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

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
    // If not on home page, strictly set active section based on path
    if (pathname !== '/') {
      if (pathname.includes('/projects')) setActiveSection('Projects');
      else {
        const currentLink = navLinks.find(link => link.hash === pathname);
        if (currentLink) setActiveSection(currentLink.name);
      }
      return;
    }

    // On home page, use Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Special handling for Home section which has hash '/' but ID 'home'
            let match = navLinks.find((link) => {
              if (link.hash === '/' && entry.target.id === 'home') return true;
              return link.hash === `#${entry.target.id}`;
            });

            if (match) {
              setActiveSection(match.name);
            }
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setIsOpen(false);

    // Allow default behavior for non-anchor links (like /projects)
    if (!hash.startsWith('#')) return;

    if (pathname === '/') {
      e.preventDefault();
      const targetId = hash === '/' ? 'home' : hash.substring(1);
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      // Update active state immediately for better UX
      const navLink = navLinks.find(link => link.hash === hash);
      if (navLink) setActiveSection(navLink.name);
    }
  };

  return (
    <header className={cn(
      "sticky top-4 z-50 w-full transition-all duration-300 px-4",
    )}>
      <div className={cn(
        "container mx-auto flex h-16 items-center justify-between px-6 rounded-full transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-lg border border-white/10 shadow-lg" : "bg-transparent"
      )}>
        <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-2 font-headline text-2xl font-bold tracking-tight">
          <span className="text-white">Aashish Gupta</span>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full',
                    activeSection === link.name ? 'text-white' : 'text-muted-foreground hover:text-white'
                  )}
                >
                  {activeSection === link.name && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/20 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 p-4 rounded-2xl glass bg-background/90 border border-white/10 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                onClick={(e) => handleNavClick(e, link.hash)}
                className={cn(
                  'text-lg font-medium w-full text-center py-2 rounded-lg transition-colors',
                  activeSection === link.name ? 'bg-primary/20 text-white' : 'text-muted-foreground hover:bg-white/5 hover:text-white'
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
