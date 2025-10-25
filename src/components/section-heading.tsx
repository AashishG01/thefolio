import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold capitalize mb-3">
            {children}
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
    </div>
  );
}
