import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50 bg-background">
      <div className="container mx-auto py-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {currentYear} MERN Folio. All rights reserved.
        </p>
        <p>
          Built by{' '}
          <Link href="https://github.com" target="_blank" className="font-medium text-primary hover:underline underline-offset-4">
            Your Name
          </Link>
        </p>
      </div>
    </footer>
  );
}
