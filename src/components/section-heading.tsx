import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16 relative">
      <h2 className="font-headline text-4xl sm:text-5xl font-bold capitalize mb-4 text-white tracking-tight">
        {children}
      </h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]"></div>
    </div>
  );
}
