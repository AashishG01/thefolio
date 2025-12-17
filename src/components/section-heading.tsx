import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
        <h2 className="font-headline text-4xl sm:text-5xl font-bold capitalize mb-4 text-primary">
            {children}
        </h2>
        <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
    </div>
  );
}
