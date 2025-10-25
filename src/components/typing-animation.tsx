"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const roles = ["Full-Stack Developer", "React Enthusiast", "Node.js Expert", "UI/UX Advocate"];

export default function TypingAnimation() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className={cn('text-accent font-headline font-semibold tracking-wide')}>
      {text}
      <span className="animate-ping">|</span>
    </span>
  );
}
