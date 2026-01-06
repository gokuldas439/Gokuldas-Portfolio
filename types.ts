
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  repo?: string;
  link?: string;
  isProfessional?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Tools';
}
