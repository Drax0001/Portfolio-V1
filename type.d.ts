import { ReactNode } from "react";

export type ProjectType = {
  title: string;
  slug: string;
  description: string;
  detailedDescription?: string;
  image: any;
  images?: any[];
  technologies: string[];
  features: string[];
  demoLink: string;
  githubLink: string;
};

export type SkillType = {
  name: string;
  icon?: ReactNode;
  proficiency: number;
};

export type SkillCategoryType = {
  name: string;
  skills: SkillType[];
};

export type ContactFormType = {
  name: string;
  email: string;
  message: string;
};
