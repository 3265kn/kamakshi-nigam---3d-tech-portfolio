
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  imageUrl: string;
  role: string;
  keyFeatures: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
