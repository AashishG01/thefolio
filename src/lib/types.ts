import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  name: string;
  hash: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  sourceUrl: string;
  liveUrl: string;
};

export type Experience = {
  title: string;
  company: string;
  description: string;
  date: string;
  icon: LucideIcon;
};
